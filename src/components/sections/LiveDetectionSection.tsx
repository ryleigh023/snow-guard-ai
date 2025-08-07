import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Play, Pause, Camera, Activity, AlertCircle, CheckCircle } from 'lucide-react';

export const LiveDetectionSection = () => {
  const [isSimulating, setIsSimulating] = useState(false);
  const [riskLevel, setRiskLevel] = useState('Low');
  const [confidence, setConfidence] = useState(94);

  const toggleSimulation = () => {
    setIsSimulating(!isSimulating);
    if (!isSimulating) {
      // Simulate changing risk levels
      const risks = ['Low', 'Moderate', 'High', 'Extreme'];
      const confidences = [94, 87, 92, 89];
      let index = 0;
      
      const interval = setInterval(() => {
        index = (index + 1) % risks.length;
        setRiskLevel(risks[index]);
        setConfidence(confidences[index]);
      }, 3000);
      
      setTimeout(() => {
        clearInterval(interval);
        setIsSimulating(false);
        setRiskLevel('Low');
        setConfidence(94);
      }, 12000);
    }
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'Low': return 'text-green-500';
      case 'Moderate': return 'text-yellow-500';
      case 'High': return 'text-orange-500';
      case 'Extreme': return 'text-red-500';
      default: return 'text-primary';
    }
  };

  const getRiskIcon = (risk: string) => {
    if (risk === 'Low') return CheckCircle;
    return AlertCircle;
  };

  const RiskIcon = getRiskIcon(riskLevel);

  return (
    <section id="live-detection" className="py-20 gradient-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Live
              <span className="text-primary"> Detection System</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Experience our real-time avalanche detection system in action. Our AI continuously monitors conditions and provides instant risk assessments.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Camera Feed Simulation */}
            <div className="gradient-card rounded-xl p-6 shadow-medium">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-foreground">Mountain Camera Feed</h3>
                <div className="flex items-center space-x-2">
                  <div className={`w-3 h-3 rounded-full ${isSimulating ? 'bg-red-500 animate-pulse' : 'bg-green-500'}`}></div>
                  <span className="text-sm text-muted-foreground">
                    {isSimulating ? 'Recording' : 'Live'}
                  </span>
                </div>
              </div>
              
              <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg flex items-center justify-center mb-4 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>
                <Camera className="h-16 w-16 text-slate-400" />
                <div className="absolute bottom-4 left-4 text-white text-sm">
                  Slope Sector A-7 • 2,847m elevation
                </div>
                {isSimulating && (
                  <div className="absolute top-4 right-4">
                    <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                  </div>
                )}
              </div>
              
              <Button 
                onClick={toggleSimulation}
                variant={isSimulating ? "destructive" : "hero"}
                className="w-full"
              >
                {isSimulating ? (
                  <>
                    <Pause className="mr-2 h-4 w-4" />
                    Stop Simulation
                  </>
                ) : (
                  <>
                    <Play className="mr-2 h-4 w-4" />
                    Start Demo
                  </>
                )}
              </Button>
            </div>

            {/* Risk Assessment Panel */}
            <div className="space-y-6">
              <div className="gradient-card rounded-xl p-6 shadow-medium">
                <h3 className="text-xl font-semibold text-foreground mb-4">Current Risk Assessment</h3>
                
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`p-3 rounded-full bg-background ${getRiskColor(riskLevel)}`}>
                    <RiskIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <div className={`text-2xl font-bold ${getRiskColor(riskLevel)}`}>
                      {riskLevel} Risk
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Confidence: {confidence}%
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-foreground">Temperature</span>
                      <span className="text-muted-foreground">-8°C</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full w-3/4"></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-foreground">Wind Speed</span>
                      <span className="text-muted-foreground">15 km/h</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full w-1/2"></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-foreground">Snow Depth</span>
                      <span className="text-muted-foreground">180 cm</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full w-4/5"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="gradient-card rounded-xl p-6 shadow-medium">
                <h3 className="text-xl font-semibold text-foreground mb-4">System Status</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-foreground">Sensors Active</span>
                    <div className="flex items-center space-x-2">
                      <Activity className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-green-500">127/127</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-foreground">AI Model</span>
                    <div className="flex items-center space-x-2">
                      <Activity className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-green-500">Online</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-foreground">Alert System</span>
                    <div className="flex items-center space-x-2">
                      <Activity className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-green-500">Ready</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};