'use client';

import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Droplets, Thermometer, Wind, Eye, AlertTriangle } from 'lucide-react';

interface MonsoonData {
  name: string;
  lat: number;
  lon: number;
  rainfall: number;
  humidity: number;
  temperature: number;
  pressure?: number;
  windSpeed?: number;
  description?: string;
  icon?: string;
}

interface IndiaRainfallMapProps {
  deployments: any[];
  monsoonData: MonsoonData[] | null;
  onRegionSelect: (regionId: string | null) => void;
  selectedRegion: string | null;
  loading: boolean;
}

export default function IndiaRainfallMap({ 
  deployments, 
  monsoonData, 
  onRegionSelect, 
  selectedRegion,
  loading 
}: IndiaRainfallMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<any>(null);
  const [leaflet, setLeaflet] = useState<any>(null);
  const [clickedLocation, setClickedLocation] = useState<{lat: number, lon: number, rainfall: number} | null>(null);

  useEffect(() => {
    // Dynamically import Leaflet to avoid SSR issues
    const initializeMap = async () => {
      if (typeof window === 'undefined') return;

      try {
        const L = await import('leaflet');
        await import('leaflet/dist/leaflet.css');
        
        // Fix for default markers
        delete (L.Icon.Default.prototype as any)._getIconUrl;
        L.Icon.Default.mergeOptions({
          iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
          iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
          shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
        });

        setLeaflet(L);

        if (mapRef.current && !map) {
          // Initialize map centered on India
          const mapInstance = L.map(mapRef.current, {
            center: [20.5937, 78.9629], // Center of India
            zoom: 5,
            zoomControl: true,
            scrollWheelZoom: true,
            doubleClickZoom: true,
            dragging: true
          });

          // Add OpenStreetMap tiles
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors',
            maxZoom: 18,
          }).addTo(mapInstance);

          // Add satellite view option
          const satelliteLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
            attribution: 'Tiles © Esri',
            maxZoom: 18,
          });

          // Add rainfall overlay
          const rainfallLayer = L.tileLayer('https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=8c8e1aa8685f78db32a802fc40b09b39', {
            attribution: 'Weather data © OpenWeatherMap',
            opacity: 0.6,
            maxZoom: 18,
          });

          // Add layer control
          const baseMaps = {
            "Street Map": L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
              attribution: '© OpenStreetMap contributors'
            }),
            "Satellite": satelliteLayer
          };

          const overlayMaps = {
            "Rainfall": rainfallLayer
          };

          L.control.layers(baseMaps, overlayMaps).addTo(mapInstance);

          // Add rainfall layer by default
          rainfallLayer.addTo(mapInstance);

          // Add click event to get rainfall data for any location
          mapInstance.on('click', async (e: any) => {
            const { lat, lng } = e.latlng;
            
            try {
              // Fetch rainfall data for clicked location
              const API_KEY = '8c8e1aa8685f78db32a802fc40b09b39';
              const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
              );
              const data = await response.json();
              
              const rainfall = data.rain ? data.rain['1h'] || data.rain['3h'] || 0 : 0;
              const temperature = data.main.temp;
              const humidity = data.main.humidity;
              const pressure = data.main.pressure;
              const windSpeed = data.wind.speed;
              const description = data.weather[0].description;
              
              setClickedLocation({ lat, lon: lng, rainfall });
              
              // Create popup with rainfall data
              const popupContent = `
                <div class="p-4 min-w-[280px]">
                  <h3 class="text-lg font-bold text-gray-900 mb-3">📍 Location Weather Data</h3>
                  
                  <div class="grid grid-cols-2 gap-3 mb-4">
                    <div class="bg-blue-50 p-3 rounded-lg text-center">
                      <div class="text-2xl mb-1">🌧️</div>
                      <div class="text-lg font-bold text-blue-900">${rainfall.toFixed(1)}mm/hr</div>
                      <div class="text-xs text-blue-600">Rainfall</div>
                    </div>
                    
                    <div class="bg-red-50 p-3 rounded-lg text-center">
                      <div class="text-2xl mb-1">🌡️</div>
                      <div class="text-lg font-bold text-red-900">${temperature.toFixed(1)}°C</div>
                      <div class="text-xs text-red-600">Temperature</div>
                    </div>
                  </div>
                  
                  <div class="space-y-2 mb-4">
                    <div class="flex justify-between">
                      <span class="text-sm text-gray-600">Humidity:</span>
                      <span class="font-medium">${humidity}%</span>
                    </div>
                    <div class="flex justify-between">
                      <span class="text-sm text-gray-600">Wind Speed:</span>
                      <span class="font-medium">${windSpeed.toFixed(1)} m/s</span>
                    </div>
                    <div class="flex justify-between">
                      <span class="text-sm text-gray-600">Pressure:</span>
                      <span class="font-medium">${pressure} hPa</span>
                    </div>
                    <div class="flex justify-between">
                      <span class="text-sm text-gray-600">Conditions:</span>
                      <span class="font-medium capitalize">${description}</span>
                    </div>
                  </div>
                  
                  <div class="p-3 rounded-lg ${
                    rainfall > 100 ? 'bg-red-100 text-red-800' :
                    rainfall > 50 ? 'bg-orange-100 text-orange-800' :
                    rainfall > 25 ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }">
                    <div class="text-sm font-medium text-center">
                      Flood Risk: ${
                        rainfall > 100 ? 'CRITICAL ⚠️' :
                        rainfall > 50 ? 'HIGH 🔶' :
                        rainfall > 25 ? 'MEDIUM 🟡' :
                        'LOW 🟢'
                      }
                    </div>
                  </div>
                  
                  <div class="mt-3 text-xs text-gray-500 text-center">
                    Coordinates: ${lat.toFixed(4)}, ${lng.toFixed(4)}
                  </div>
                </div>
              `;

              L.popup()
                .setLatLng(e.latlng)
                .setContent(popupContent)
                .openOn(mapInstance);
                
            } catch (error) {
              console.error('Error fetching weather data:', error);
              
              // Fallback popup with coordinates
              const fallbackContent = `
                <div class="p-4">
                  <h3 class="text-lg font-bold text-gray-900 mb-2">📍 Location</h3>
                  <p class="text-sm text-gray-600">Coordinates: ${lat.toFixed(4)}, ${lng.toFixed(4)}</p>
                  <p class="text-xs text-red-500 mt-2">Unable to fetch weather data</p>
                </div>
              `;
              
              L.popup()
                .setLatLng(e.latlng)
                .setContent(fallbackContent)
                .openOn(mapInstance);
            }
          });

          setMap(mapInstance);
        }
      } catch (error) {
        console.error('Error initializing map:', error);
      }
    };

    initializeMap();

    return () => {
      if (map) {
        map.remove();
        setMap(null);
      }
    };
  }, []);

  // Add monsoon data rainfall circles only
  useEffect(() => {
    if (!map || !leaflet || !monsoonData) return;

    // Clear existing weather markers
    map.eachLayer((layer: any) => {
      if (layer.options && layer.options.isWeatherMarker) {
        map.removeLayer(layer);
      }
    });

    monsoonData.forEach((data) => {
      // Create rainfall intensity circle
      const rainfallIntensity = data.rainfall || 0;
      let color = '#10b981'; // green for light rain
      let radius = Math.max(rainfallIntensity * 1200, 8000); // minimum 8km radius, larger circles
      
      if (rainfallIntensity > 100) {
        color = '#dc2626'; // red for extreme
      } else if (rainfallIntensity > 50) {
        color = '#f59e0b'; // orange for heavy
      } else if (rainfallIntensity > 25) {
        color = '#eab308'; // yellow for moderate
      }

      const circle = leaflet.circle([data.lat, data.lon], {
        color: color,
        fillColor: color,
        fillOpacity: 0.3,
        opacity: 0.8,
        radius: radius,
        weight: 3,
        isWeatherMarker: true
      }).addTo(map);

      // Create weather info popup
      const weatherPopup = `
        <div class="p-4 min-w-[280px]">
          <h3 class="text-lg font-bold text-gray-900 mb-3">${data.name} Monsoon Data</h3>
          
          <div class="grid grid-cols-2 gap-3 mb-4">
            <div class="bg-blue-50 p-3 rounded-lg text-center">
              <div class="text-2xl mb-1">🌧️</div>
              <div class="text-lg font-bold text-blue-900">${rainfallIntensity.toFixed(1)}mm/hr</div>
              <div class="text-xs text-blue-600">Rainfall Intensity</div>
            </div>
            
            <div class="bg-red-50 p-3 rounded-lg text-center">
              <div class="text-2xl mb-1">🌡️</div>
              <div class="text-lg font-bold text-red-900">${data.temperature?.toFixed(1) || 'N/A'}°C</div>
              <div class="text-xs text-red-600">Temperature</div>
            </div>
          </div>
          
          <div class="space-y-2 mb-4">
            <div class="flex justify-between">
              <span class="text-sm text-gray-600">Humidity:</span>
              <span class="font-medium">${data.humidity || 'N/A'}%</span>
            </div>
            ${data.windSpeed ? `
              <div class="flex justify-between">
                <span class="text-sm text-gray-600">Wind Speed:</span>
                <span class="font-medium">${data.windSpeed.toFixed(1)} m/s</span>
              </div>
            ` : ''}
            ${data.pressure ? `
              <div class="flex justify-between">
                <span class="text-sm text-gray-600">Pressure:</span>
                <span class="font-medium">${data.pressure} hPa</span>
              </div>
            ` : ''}
            ${data.description ? `
              <div class="flex justify-between">
                <span class="text-sm text-gray-600">Conditions:</span>
                <span class="font-medium capitalize">${data.description}</span>
              </div>
            ` : ''}
          </div>
          
          <div class="p-3 rounded-lg ${
            rainfallIntensity > 100 ? 'bg-red-100 text-red-800' :
            rainfallIntensity > 50 ? 'bg-orange-100 text-orange-800' :
            rainfallIntensity > 25 ? 'bg-yellow-100 text-yellow-800' :
            'bg-green-100 text-green-800'
          }">
            <div class="text-sm font-medium text-center">
              Monsoon Alert Level: ${
                rainfallIntensity > 100 ? 'CRITICAL ⚠️' :
                rainfallIntensity > 50 ? 'HIGH 🔶' :
                rainfallIntensity > 25 ? 'MEDIUM 🟡' :
                'LOW 🟢'
              }
            </div>
          </div>
          
          <div class="mt-3 text-xs text-gray-500 text-center">
            Coverage Area: ~${(radius/1000).toFixed(1)} km radius
          </div>
        </div>
      `;

      circle.bindPopup(weatherPopup, {
        maxWidth: 320,
        className: 'weather-popup'
      });

      // Add pulsing animation for high rainfall areas
      if (rainfallIntensity > 50) {
        circle.on('add', () => {
          const element = circle.getElement();
          if (element) {
            element.style.animation = 'pulse 2s infinite';
          }
        });
      }
    });
  }, [map, leaflet, monsoonData]);

  if (loading) {
    return (
      <div className="w-full h-[600px] bg-gray-100 rounded-lg flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading monsoon data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <div 
        ref={mapRef} 
        className="w-full h-[600px] rounded-lg overflow-hidden border border-gray-200 cursor-crosshair"
        style={{ zIndex: 1 }}
      />
      
      {/* Map Instructions */}
      <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg" style={{ zIndex: 1000 }}>
        <div className="text-sm font-medium text-gray-900 mb-2">🗺️ Interactive Map</div>
        <div className="space-y-1 text-xs text-gray-600">
          <div>🔵 Click anywhere for rainfall data</div>
          <div>⭕ Circles show rainfall intensity</div>
          <div>🌧️ Larger circles = heavier rain</div>
          <div>🎯 Zoom in for detailed view</div>
        </div>
      </div>
      
      {/* Live Data Indicator */}
      <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg" style={{ zIndex: 1000 }}>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-gray-900">Live Monsoon Data</span>
        </div>
      </div>

      {/* Rainfall Legend */}
      <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg max-w-xs" style={{ zIndex: 1000 }}>
        <h4 className="font-semibold text-gray-900 mb-3">Rainfall Intensity Scale</h4>
        <div className="space-y-2">
          <div className="flex items-center space-x-3">
            <div className="w-4 h-4 bg-green-400 rounded-full"></div>
            <span className="text-sm">Light (0-25mm/hr)</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
            <span className="text-sm">Moderate (25-50mm/hr)</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-4 h-4 bg-orange-400 rounded-full"></div>
            <span className="text-sm">Heavy (50-100mm/hr)</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-4 h-4 bg-red-400 rounded-full animate-pulse"></div>
            <span className="text-sm">Extreme (100mm+/hr)</span>
          </div>
        </div>
        
        <div className="mt-3 pt-3 border-t border-gray-200 text-xs text-gray-600">
          💡 Click anywhere on the map to get real-time rainfall data for that location
        </div>
      </div>

      {/* Clicked Location Info */}
      {clickedLocation && (
        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg max-w-sm" style={{ zIndex: 1000 }}>
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-semibold text-gray-900">📍 Selected Location</h4>
            <button 
              onClick={() => setClickedLocation(null)}
              className="text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
          </div>
          <div className="text-sm text-gray-600 space-y-1">
            <div>Coordinates: {clickedLocation.lat.toFixed(4)}, {clickedLocation.lon.toFixed(4)}</div>
            <div>Rainfall: <span className="font-medium text-blue-600">{clickedLocation.rainfall.toFixed(1)} mm/hr</span></div>
            <div>Risk Level: <span className={`font-medium ${
              clickedLocation.rainfall > 100 ? 'text-red-600' :
              clickedLocation.rainfall > 50 ? 'text-orange-600' :
              clickedLocation.rainfall > 25 ? 'text-yellow-600' :
              'text-green-600'
            }`}>
              {clickedLocation.rainfall > 100 ? 'CRITICAL' :
               clickedLocation.rainfall > 50 ? 'HIGH' :
               clickedLocation.rainfall > 25 ? 'MEDIUM' : 'LOW'}
            </span></div>
          </div>
        </div>
      )}

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { 
            transform: scale(1); 
            opacity: 0.8; 
          }
          50% { 
            transform: scale(1.05); 
            opacity: 0.6; 
          }
        }
      `}</style>
    </div>
  );
}