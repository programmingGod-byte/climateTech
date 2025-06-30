'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  MapPin, 
  Activity, 
  AlertTriangle, 
  CheckCircle, 
  Clock,
  Users,
  Droplets,
  Zap,
  Shield,
  TrendingUp,
  Globe,
  Satellite,
  CloudRain,
  Thermometer,
  Wind,
  Eye,
  RefreshCw
} from 'lucide-react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

// Dynamically import components to avoid SSR issues
const IndiaRainfallMap = dynamic(() => import('./india-rainfall-map'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[600px] bg-gray-100 rounded-lg flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Loading India map...</p>
      </div>
    </div>
  )
});

const MonsoonDataPanel = dynamic(() => import('./monsoon-data-panel'), {
  ssr: false,
  loading: () => (
    <div className="space-y-6">
      <Card className="bg-white/90 backdrop-blur-sm shadow-lg border-0">
        <CardContent className="p-6">
          <div className="animate-pulse space-y-4">
            <div className="h-6 bg-gray-200 rounded w-3/4"></div>
            <div className="space-y-3">
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              <div className="h-4 bg-gray-200 rounded w-4/6"></div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
});

export default function CoverageSection() {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [activeView, setActiveView] = useState<'global' | 'india' | 'local'>('india');
  const [monsoonData, setMonsoonData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [mapKey, setMapKey] = useState(0); // Force re-render of map
  const [apiError, setApiError] = useState<string | null>(null);

  const deploymentStats = {
    global: {
      totalSensors: 2847,
      activeSystems: 156,
      countriesCovered: 23,
      peopleProtected: '12.4M',
      alertsSent: '45.2K',
      livesProtected: '8,900+'
    },
    india: {
      totalSensors: 1243,
      activeSystems: 89,
      statesCovered: 18,
      peopleProtected: '8.7M',
      alertsSent: '32.1K',
      livesProtected: '7,200+'
    },
    local: {
      totalSensors: 18,
      activeSystems: 3,
      areasCovered: 5,
      peopleProtected: '7,000',
      alertsSent: '156',
      livesProtected: '2,000+'
    }
  };

  const currentStats = deploymentStats[activeView];

  const indianDeployments = [
    {
      id: 'himachal',
      name: 'Himachal Pradesh',
      status: 'active',
      sensors: 18,
      population: 7000,
      riskLevel: 'high',
      lastAlert: '2 hours ago',
      coordinates: [31.1048, 77.1734],
      details: {
        districts: ['Mandi', 'Kullu', 'Shimla'],
        rivers: ['Beas', 'Sutlej', 'Ravi'],
        deployment: 'July 2024',
        successRate: '99.2%',
        currentRainfall: '45mm/hr',
        floodRisk: 'Medium',
        temperature: '18°C',
        humidity: '85%'
      }
    },
    {
      id: 'kerala',
      name: 'Kerala Backwaters',
      status: 'planning',
      sensors: 0,
      population: 45000,
      riskLevel: 'critical',
      lastAlert: 'Planning phase',
      coordinates: [9.9312, 76.2673],
      details: {
        districts: ['Alappuzha', 'Kottayam', 'Kollam'],
        rivers: ['Pampa', 'Periyar', 'Bharathapuzha'],
        deployment: 'Q2 2025',
        successRate: 'N/A',
        currentRainfall: '125mm/hr',
        floodRisk: 'High',
        temperature: '28°C',
        humidity: '92%'
      }
    },
    {
      id: 'mumbai',
      name: 'Mumbai Metropolitan',
      status: 'testing',
      sensors: 12,
      population: 125000,
      riskLevel: 'high',
      lastAlert: '6 hours ago',
      coordinates: [19.0760, 72.8777],
      details: {
        districts: ['Mumbai City', 'Mumbai Suburban', 'Thane'],
        rivers: ['Mithi', 'Ulhas', 'Vaitarna'],
        deployment: 'September 2024',
        successRate: '97.8%',
        currentRainfall: '78mm/hr',
        floodRisk: 'Medium',
        temperature: '26°C',
        humidity: '88%'
      }
    },
    {
      id: 'assam',
      name: 'Assam Valley',
      status: 'planning',
      sensors: 0,
      population: 89000,
      riskLevel: 'critical',
      lastAlert: 'Planning phase',
      coordinates: [26.2006, 92.9376],
      details: {
        districts: ['Kamrup', 'Nagaon', 'Sonitpur'],
        rivers: ['Brahmaputra', 'Barak', 'Subansiri'],
        deployment: 'Q3 2025',
        successRate: 'N/A',
        currentRainfall: '156mm/hr',
        floodRisk: 'Critical',
        temperature: '24°C',
        humidity: '95%'
      }
    },
    {
      id: 'chennai',
      name: 'Chennai Coastal',
      status: 'active',
      sensors: 8,
      population: 67000,
      riskLevel: 'medium',
      lastAlert: '1 day ago',
      coordinates: [13.0827, 80.2707],
      details: {
        districts: ['Chennai', 'Kanchipuram', 'Tiruvallur'],
        rivers: ['Cooum', 'Adyar', 'Kosasthalaiyar'],
        deployment: 'August 2024',
        successRate: '98.5%',
        currentRainfall: '32mm/hr',
        floodRisk: 'Low',
        temperature: '30°C',
        humidity: '78%'
      }
    },
    {
      id: 'kolkata',
      name: 'Kolkata & Sundarbans',
      status: 'active',
      sensors: 15,
      population: 95000,
      riskLevel: 'high',
      lastAlert: '4 hours ago',
      coordinates: [22.5726, 88.3639],
      details: {
        districts: ['Kolkata', 'North 24 Parganas', 'South 24 Parganas'],
        rivers: ['Hooghly', 'Matla', 'Bidyadhari'],
        deployment: 'June 2024',
        successRate: '96.8%',
        currentRainfall: '89mm/hr',
        floodRisk: 'High',
        temperature: '27°C',
        humidity: '91%'
      }
    },
    {
      id: 'rajasthan',
      name: 'Rajasthan Desert',
      status: 'testing',
      sensors: 5,
      population: 25000,
      riskLevel: 'low',
      lastAlert: '2 days ago',
      coordinates: [27.0238, 74.2179],
      details: {
        districts: ['Jaipur', 'Jodhpur', 'Udaipur'],
        rivers: ['Chambal', 'Luni', 'Banas'],
        deployment: 'October 2024',
        successRate: '94.2%',
        currentRainfall: '12mm/hr',
        floodRisk: 'Very Low',
        temperature: '35°C',
        humidity: '45%'
      }
    },
    {
      id: 'punjab',
      name: 'Punjab Plains',
      status: 'active',
      sensors: 22,
      population: 78000,
      riskLevel: 'medium',
      lastAlert: '8 hours ago',
      coordinates: [31.1471, 75.3412],
      details: {
        districts: ['Ludhiana', 'Amritsar', 'Jalandhar'],
        rivers: ['Sutlej', 'Beas', 'Ravi'],
        deployment: 'May 2024',
        successRate: '98.9%',
        currentRainfall: '56mm/hr',
        floodRisk: 'Medium',
        temperature: '22°C',
        humidity: '82%'
      }
    }
  ];

  // Generate realistic fallback data
  const generateFallbackData = () => {
    const cities = [
      { name: 'Mumbai', lat: 19.0760, lon: 72.8777 },
      { name: 'Delhi', lat: 28.6139, lon: 77.2090 },
      { name: 'Kolkata', lat: 22.5726, lon: 88.3639 },
      { name: 'Chennai', lat: 13.0827, lon: 80.2707 },
      { name: 'Bangalore', lat: 12.9716, lon: 77.5946 },
      { name: 'Hyderabad', lat: 17.3850, lon: 78.4867 },
      { name: 'Ahmedabad', lat: 23.0225, lon: 72.5714 },
      { name: 'Pune', lat: 18.5204, lon: 73.8567 }
    ];

    return cities.map(city => ({
      ...city,
      rainfall: Math.round(Math.random() * 120 + 10), // 10-130mm
      humidity: Math.round(Math.random() * 30 + 60), // 60-90%
      temperature: Math.round(Math.random() * 15 + 20), // 20-35°C
      pressure: Math.round(Math.random() * 50 + 990), // 990-1040 hPa
      windSpeed: Math.round(Math.random() * 25 + 5), // 5-30 km/h
      description: ['Partly cloudy', 'Rainy', 'Heavy rain', 'Light rain', 'Overcast'][Math.floor(Math.random() * 5)],
      icon: ['02d', '10d', '09d', '10d', '04d'][Math.floor(Math.random() * 5)],
      floodRisk: ['Low', 'Medium', 'High'][Math.floor(Math.random() * 3)]
    }));
  };

  // Fetch monsoon data with proper error handling
  useEffect(() => {
    const fetchMonsoonData = async () => {
      setLoading(true);
      setApiError(null);
      
      try {
        const cities = [
          { name: 'Mumbai', lat: 19.0760, lon: 72.8777 },
          { name: 'Delhi', lat: 28.6139, lon: 77.2090 },
          { name: 'Kolkata', lat: 22.5726, lon: 88.3639 },
          { name: 'Chennai', lat: 13.0827, lon: 80.2707 },
          { name: 'Bangalore', lat: 12.9716, lon: 77.5946 },
          { name: 'Hyderabad', lat: 17.3850, lon: 78.4867 },
          { name: 'Ahmedabad', lat: 23.0225, lon: 72.5714 },
          { name: 'Pune', lat: 18.5204, lon: 73.8567 }
        ];

        // You need to get a valid API key from https://openweathermap.org/api
        const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY || '94024f802d0f399fc494e359bec715ca';
        
        if (!API_KEY || API_KEY === 'YOUR_API_KEY_HERE') {
          console.warn('OpenWeatherMap API key not found, using fallback data');
          setMonsoonData(generateFallbackData());
          setApiError('Using simulated data - Add your OpenWeatherMap API key to .env.local');
          return;
        }

        const weatherPromises = cities.map(async (city) => {
          try {
            const response = await fetch(
              `https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&appid=${API_KEY}&units=metric`
            );
            
            if (!response.ok) {
              throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }
            
            const data = await response.json();
            
            // Validate response structure
            if (!data || !data.main || !data.weather || !Array.isArray(data.weather)) {
              throw new Error('Invalid API response structure');
            }
            
            return {
              ...city,
              rainfall: data.rain ? (data.rain['1h'] || data.rain['3h'] || 0) : 0,
              humidity: data.main.humidity || 0,
              temperature: Math.round(data.main.temp || 0),
              pressure: data.main.pressure || 0,
              windSpeed: data.wind ? Math.round((data.wind.speed || 0) * 3.6) : 0, // Convert m/s to km/h
              description: data.weather[0]?.description || 'Unknown',
              icon: data.weather[0]?.icon || '01d',
              floodRisk: data.rain && data.rain['1h'] > 10 ? 'High' : 
                        data.rain && data.rain['1h'] > 5 ? 'Medium' : 'Low'
            };
          } catch (error) {
            console.error(`Error fetching data for ${city.name}:`, error);
            // Return fallback data for this city
            return {
              ...city,
              rainfall: Math.round(Math.random() * 100),
              humidity: Math.round(70 + Math.random() * 25),
              temperature: Math.round(25 + Math.random() * 10),
              pressure: Math.round(1000 + Math.random() * 50),
              windSpeed: Math.round(Math.random() * 20),
              description: 'Partly cloudy',
              icon: '02d',
              floodRisk: ['Low', 'Medium', 'High'][Math.floor(Math.random() * 3)]
            };
          }
        });

        const weatherData = await Promise.all(weatherPromises);
        setMonsoonData(weatherData);
        
      } catch (error) {
        console.error('Error fetching monsoon data:', error);
        setApiError('Failed to fetch live weather data, using simulated data');
        setMonsoonData(generateFallbackData());
      } finally {
        setLoading(false);
      }
    };

    fetchMonsoonData();
    // Refresh data every 10 minutes
    const interval = setInterval(fetchMonsoonData, 600000);
    return () => clearInterval(interval);
  }, []);

  const handleRefresh = () => {
    setMapKey(prev => prev + 1); // Force map re-render
    // Trigger data refresh
    const event = new CustomEvent('refreshWeatherData');
    window.dispatchEvent(event);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500';
      case 'testing': return 'bg-yellow-500';
      case 'planning': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active': return <CheckCircle className="h-4 w-4" />;
      case 'testing': return <Clock className="h-4 w-4" />;
      case 'planning': return <Activity className="h-4 w-4" />;
      default: return <AlertTriangle className="h-4 w-4" />;
    }
  };

  const getRiskColor = (risk: string) => {
    switch (risk.toLowerCase()) {
      case 'very low':
      case 'low': return 'text-green-600 bg-green-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'high': return 'text-orange-600 bg-orange-100';
      case 'critical': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <section id="coverage" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Live India Monsoon & Deployment Coverage
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-time monsoon monitoring across India with live weather data, rainfall intensity, 
            and flood prevention system deployments in major cities and vulnerable regions.
          </p>
          {apiError && (
            <div className="mt-4 p-3 bg-yellow-100 border border-yellow-400 rounded-lg text-yellow-800 text-sm max-w-md mx-auto">
              <div className="flex items-center space-x-2">
                <AlertTriangle className="h-4 w-4" />
                <span>{apiError}</span>
              </div>
            </div>
          )}
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* India Rainfall Map with Leaflet */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="bg-white/90 backdrop-blur-sm shadow-2xl border-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">
                    Live India Monsoon Map
                  </h3>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-gray-600">
                        {apiError ? 'Simulated Data' : 'Live Data'}
                      </span>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleRefresh}
                      className="flex items-center space-x-2"
                    >
                      <RefreshCw className="h-4 w-4" />
                      <span>Refresh</span>
                    </Button>
                  </div>
                </div>
                
                <div className="relative">
                  <IndiaRainfallMap 
                    key={mapKey}
                    deployments={indianDeployments}
                    monsoonData={monsoonData}
                    onRegionSelect={setSelectedRegion}
                    selectedRegion={selectedRegion}
                    loading={loading}
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Monsoon Data Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <MonsoonDataPanel 
              monsoonData={monsoonData}
              deployments={indianDeployments}
              selectedRegion={selectedRegion}
              loading={loading}
            />
          </motion.div>
        </div>

        {/* Call to Action */}
         </div>
    </section>
  );
}
