'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  CloudRain, 
  Thermometer, 
  Wind, 
  Droplets, 
  AlertTriangle, 
  TrendingUp,
  Activity,
  Eye,
  MapPin,
  Clock
} from 'lucide-react';
import { motion } from 'framer-motion';

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

interface Deployment {
  id: string;
  name: string;
  status: 'active' | 'testing' | 'planning';
  sensors: number;
  population: number;
  riskLevel: string;
  coordinates: [number, number];
  details: {
    districts: string[];
    rivers: string[];
    deployment: string;
    successRate: string;
    currentRainfall: string;
    floodRisk: string;
    temperature: string;
    humidity: string;
  };
}

interface MonsoonDataPanelProps {
  monsoonData: MonsoonData[] | null;
  deployments: Deployment[];
  selectedRegion: string | null;
  loading: boolean;
}

export default function MonsoonDataPanel({ 
  monsoonData, 
  deployments, 
  selectedRegion, 
  loading 
}: MonsoonDataPanelProps) {
  const selectedDeployment = selectedRegion ? deployments.find(d => d.id === selectedRegion) : null;

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

  const getRainfallIntensity = (rainfall: number) => {
    if (rainfall > 100) return { level: 'Extreme', color: 'text-red-600 bg-red-100' };
    if (rainfall > 50) return { level: 'Heavy', color: 'text-orange-600 bg-orange-100' };
    if (rainfall > 25) return { level: 'Moderate', color: 'text-yellow-600 bg-yellow-100' };
    return { level: 'Light', color: 'text-green-600 bg-green-100' };
  };

  if (loading) {
    return (
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
    );
  }

  return (
    <div className="space-y-6">
      {/* Selected Region Details */}
      {selectedDeployment && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="bg-white/90 backdrop-blur-sm shadow-lg border-0 border-l-4 border-l-blue-500">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">
                  {selectedDeployment.name}
                </h3>
                <Badge className={`${
                  selectedDeployment.status === 'active' ? 'bg-green-100 text-green-800' :
                  selectedDeployment.status === 'testing' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-blue-100 text-blue-800'
                }`}>
                  {selectedDeployment.status.toUpperCase()}
                </Badge>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <div className="flex items-center space-x-2 mb-1">
                    <CloudRain className="h-4 w-4 text-blue-600" />
                    <span className="text-sm font-medium text-blue-800">Rainfall</span>
                  </div>
                  <div className="text-lg font-bold text-blue-900">
                    {selectedDeployment.details.currentRainfall}
                  </div>
                </div>
                
                <div className="bg-red-50 p-3 rounded-lg">
                  <div className="flex items-center space-x-2 mb-1">
                    <AlertTriangle className="h-4 w-4 text-red-600" />
                    <span className="text-sm font-medium text-red-800">Flood Risk</span>
                  </div>
                  <div className="text-lg font-bold text-red-900">
                    {selectedDeployment.details.floodRisk}
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Temperature:</span>
                  <span className="font-medium">{selectedDeployment.details.temperature}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Humidity:</span>
                  <span className="font-medium">{selectedDeployment.details.humidity}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Active Sensors:</span>
                  <span className="font-medium">{selectedDeployment.sensors}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Success Rate:</span>
                  <span className="font-medium text-green-600">{selectedDeployment.details.successRate}</span>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="text-sm text-gray-600 mb-2">
                  <strong>Districts:</strong> {selectedDeployment.details.districts.join(', ')}
                </div>
                <div className="text-sm text-gray-600">
                  <strong>Major Rivers:</strong> {selectedDeployment.details.rivers.join(', ')}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {/* Live Weather Data */}
      <Card className="bg-white/90 backdrop-blur-sm shadow-lg border-0">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-gray-900">Live Weather Data</h3>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-600">Updated 5 min ago</span>
            </div>
          </div>
          
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {monsoonData?.map((data, index) => {
              const intensity = getRainfallIntensity(data.rainfall || 0);
              
              return (
                <motion.div
                  key={data.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-semibold text-gray-900">{data.name}</h4>
                      <div className="flex items-center space-x-1 text-sm text-gray-500">
                        <MapPin className="h-3 w-3" />
                        <span>{data.lat.toFixed(2)}, {data.lon.toFixed(2)}</span>
                      </div>
                    </div>
                    <Badge className={intensity.color}>
                      {intensity.level}
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center space-x-2">
                      <CloudRain className="h-4 w-4 text-blue-500" />
                      <div>
                        <div className="text-sm font-medium">{(data.rainfall || 0).toFixed(1)} mm/hr</div>
                        <div className="text-xs text-gray-500">Rainfall</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Thermometer className="h-4 w-4 text-red-500" />
                      <div>
                        <div className="text-sm font-medium">{data.temperature?.toFixed(1) || 'N/A'}°C</div>
                        <div className="text-xs text-gray-500">Temperature</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Droplets className="h-4 w-4 text-cyan-500" />
                      <div>
                        <div className="text-sm font-medium">{data.humidity || 'N/A'}%</div>
                        <div className="text-xs text-gray-500">Humidity</div>
                      </div>
                    </div>
                    
                    {data.windSpeed && (
                      <div className="flex items-center space-x-2">
                        <Wind className="h-4 w-4 text-gray-500" />
                        <div>
                          <div className="text-sm font-medium">{data.windSpeed.toFixed(1)} m/s</div>
                          <div className="text-xs text-gray-500">Wind Speed</div>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {data.description && (
                    <div className="mt-3 pt-3 border-t border-gray-200">
                      <div className="text-sm text-gray-600 capitalize">{data.description}</div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Monsoon Alerts */}
      <Card className="bg-white/90 backdrop-blur-sm shadow-lg border-0">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-gray-900">Active Monsoon Alerts</h3>
            <Badge className="bg-red-100 text-red-800">
              {monsoonData?.filter(d => (d.rainfall || 0) > 50).length || 0} High Risk
            </Badge>
          </div>
          
          <div className="space-y-3">
            {monsoonData?.filter(d => (d.rainfall || 0) > 25).map((data, index) => {
              const rainfall = data.rainfall || 0;
              const alertLevel = rainfall > 100 ? 'CRITICAL' : rainfall > 50 ? 'HIGH' : 'MEDIUM';
              const alertColor = rainfall > 100 ? 'text-red-600 bg-red-100' : 
                                rainfall > 50 ? 'text-orange-600 bg-orange-100' : 
                                'text-yellow-600 bg-yellow-100';
              
              return (
                <motion.div
                  key={`alert-${data.name}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center space-x-3">
                    <AlertTriangle className={`h-5 w-5 ${
                      rainfall > 100 ? 'text-red-500' : 
                      rainfall > 50 ? 'text-orange-500' : 
                      'text-yellow-500'
                    }`} />
                    <div>
                      <div className="font-medium text-gray-900">{data.name}</div>
                      <div className="text-sm text-gray-600">{rainfall.toFixed(1)} mm/hr rainfall</div>
                    </div>
                  </div>
                  <Badge className={alertColor}>
                    {alertLevel}
                  </Badge>
                </motion.div>
              );
            }) || (
              <div className="text-center py-8 text-gray-500">
                <Eye className="h-8 w-8 mx-auto mb-2 opacity-50" />
                <p>No active high-risk alerts</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <Card className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg border-0">
        <CardContent className="p-6">
          <h3 className="text-lg font-bold mb-4">India Monsoon Summary</h3>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold">
                {monsoonData?.filter(d => (d.rainfall || 0) > 25).length || 0}
              </div>
              <div className="text-sm opacity-90">Cities with Heavy Rain</div>
            </div>
            
            <div className="text-center">
              <div className="text-2xl font-bold">
                {monsoonData ? Math.round(monsoonData.reduce((acc, d) => acc + (d.rainfall || 0), 0) / monsoonData.length) : 0}
              </div>
              <div className="text-sm opacity-90">Avg Rainfall (mm/hr)</div>
            </div>
            
            <div className="text-center">
              <div className="text-2xl font-bold">
                {deployments.filter(d => d.status === 'active').length}
              </div>
              <div className="text-sm opacity-90">Active Systems</div>
            </div>
            
            <div className="text-center">
              <div className="text-2xl font-bold">
                {deployments.reduce((acc, d) => acc + d.population, 0).toLocaleString()}
              </div>
              <div className="text-sm opacity-90">People Protected</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}