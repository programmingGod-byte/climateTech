import requests
import time
import sys

# CONFIGURATION
BASE_URL = "http://localhost:3000"

# 1. STRICT ENDPOINTS (Limit: 5 per 60s)
STRICT_TARGETS = [
    "/api/contact",
    "/api/admin/login"
]

# 2. RELAXED ENDPOINTS (Limit: 50 per 60s)
# We will hit this 10 times to prove it DOESN'T block quickly like the strict ones.
RELAXED_TARGETS = [
    "/api/admin/contacts" 
]

# 3. PUBLIC ENDPOINTS (No Limit)
PUBLIC_TARGETS = [
    "/"
]

session = requests.Session()

def run_test(name, url, limit_threshold, is_strict=True):
    print(f"\n🔵 TESTING: {name}")
    print(f"   URL: {BASE_URL}{url}")
    print(f"   GOAL: {'Trigger Block (429)' if is_strict else 'Ensure NO Block (200/400)'}")
    
    blocked = False
    
    # We send slightly more requests than the limit to force a block
    count = limit_threshold + 2 if is_strict else 10

    for i in range(1, count + 1):
        try:
            # We send dummy data so POST requests don't fail with Method Not Allowed
            res = session.post(f"{BASE_URL}{url}", json={"test": "data"})
            
            # Check headers for limit info
            remaining = res.headers.get("X-RateLimit-Remaining", "N/A")
            
            if res.status_code == 429:
                print(f"   ⛔ Request {i}: BLOCKED (429) -> SUCCESS [Limit Hit]")
                blocked = True
                break # Stop once we confirmed it blocks
            elif res.status_code in [200, 201, 400, 401, 403, 404]:
                # All these codes mean the Middleware let it through
                print(f"   ✅ Request {i}: Passed ({res.status_code}) | Remaining: {remaining}")
            else:
                print(f"   ⚠️ Request {i}: Unexpected Status {res.status_code}")
                
        except Exception as e:
            print(f"   ❌ Connection Error: {e}")
            return

    if is_strict and not blocked:
        print(f"   ❌ FAILED: Strict route {url} was NOT blocked after {limit_threshold} requests.")
    elif not is_strict and blocked:
        print(f"   ❌ FAILED: Relaxed/Public route {url} WAS blocked (it shouldn't be).")
    else:
        print(f"   ✨ TEST PASSED for {name}")

print("========================================")
print("🚀 STARTING ROBUST RATE LIMIT TEST")
print("========================================")

# 1. Test Strict Routes
for url in STRICT_TARGETS:
    run_test("Strict API", url, 5, is_strict=True)

# 2. Test Relaxed Routes (Admin Data)
# We test 10 requests. It should allow ALL of them because limit is 50.
for url in RELAXED_TARGETS:
    run_test("Relaxed Admin API", url, 50, is_strict=False)

# 3. Test Public Routes
# These should never return headers or blocks
print(f"\n🔵 TESTING: Public Page")
print(f"   URL: {BASE_URL}/")
for i in range(1, 6):
    res = session.get(f"{BASE_URL}/")
    if res.status_code == 429:
         print(f"   ❌ FAILED: Homepage was blocked!")
    else:
         print(f"   ✅ Request {i}: Public Access OK ({res.status_code})")

print("\n========================================")
print("✅ SUITE COMPLETE")
print("========================================")