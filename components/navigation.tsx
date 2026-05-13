'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { products } from '@/lib/products-data';
import { ChevronDown, Menu, X, Sun, Moon } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProductsHovered, setIsProductsHovered] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Products', href: '/products' },
    { name: 'Technology', href: '/technology' },
    { name: 'Case Studies', href: '/case-studies' },
    // { name: 'Features', href: '/#features' },
    { name: 'Impact', href: '/#impact' },
    { name: 'Blog', href: '/blog' },
    { name: 'Partners', href: '/#partners' },
    { name: 'Contact', href: '/#contact' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Achievements', href: '/achievements' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background/95 backdrop-blur-md shadow-lg border-b`}
    >
      {/* Set a max-width for the content and center it */}
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        {/* Changed justify-evenly to justify-between */}
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2"
          >
            <img src='/images/logo-removebg-preview.png' alt="Logo" className="w-16 h-16" />
            <Link href={"/"} className={`text-3xl font-sans text-foreground`}>
              ClimMaTech
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative h-full flex items-center"
                onMouseEnter={() => item.name === 'Products' && setIsProductsHovered(true)}
                onMouseLeave={() => item.name === 'Products' && setIsProductsHovered(false)}
              >
                <Link
                  href={item.href}
                  className={`flex items-center space-x-1 transition-all font-medium font-sans text-foreground/80 hover:text-foreground py-2 px-1
                    ${item.name === 'Achievements' ? 'border-b-2 border-green-500 text-green-600 dark:text-green-400 hover:-translate-y-1' : ''}
                  `}
                >
                  <span>{item.name}</span>
                  {item.name === 'Products' && (
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isProductsHovered ? 'rotate-180' : ''}`} />
                  )}
                </Link>

                {item.name === 'Products' && (
                  <AnimatePresence>
                    {isProductsHovered && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-2"
                        style={{ fontFamily: 'sans-serif' }}
                      >
                        <div className="bg-background border border-border shadow-2xl rounded-3xl p-6 w-[600px] grid grid-cols-2 gap-4">
                          {products.map((product) => (
                            <Link
                              key={product.slug}
                              href={`/products/${product.slug}`}
                              className="group flex items-center space-x-4 p-3 rounded-2xl hover:bg-muted transition-all duration-300"
                            >
                              <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-muted flex-shrink-0 border border-border group-hover:border-blue-500/50 transition-colors">
                                <Image
                                  src={product.image}
                                  alt={product.name}
                                  fill
                                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                              </div>
                              <div className="flex-1">
                                <h3 className="font-bold text-sm text-foreground group-hover:text-blue-500 transition-colors">
                                  {product.name}
                                </h3>
                                <p className="text-[11px] text-muted-foreground leading-tight mt-0.5 line-clamp-2">
                                  {product.tagline}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 text-foreground"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            <Link
              href="/#contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
            >
              Request Demo
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 text-foreground"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2"
            >
              {isOpen ? (
                <X className="h-6 w-6 text-foreground" />
              ) : (
                <Menu className="h-6 w-6 text-foreground" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-t shadow-lg"
          >
            <div className="px-4 py-2 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-foreground/80 hover:text-foreground transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button
                className="w-full mt-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-full py-6 font-semibold shadow-md"
                onClick={() => {
                  setIsOpen(false);
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Request Demo
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}