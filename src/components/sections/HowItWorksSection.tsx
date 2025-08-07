import { Radar, Brain, Bell } from 'lucide-react';

export const HowItWorksSection = () => {
  const steps = [
    {
      icon: Radar,
      title: 'Data Collection',
      description: 'Advanced sensors continuously monitor environmental conditions including temperature, wind speed, snowpack stability, and seismic activity.',
      details: ['Weather stations', 'Seismic sensors', 'Snow depth monitors', 'Slope angle detectors']
    },
    {
      icon: Brain,
      title: 'AI Analysis',
      description: 'Our machine learning algorithms process thousands of data points in real-time, identifying patterns and predicting avalanche risk levels.',
      details: ['Pattern recognition', 'Risk modeling', 'Predictive analytics', 'Continuous learning']
    },
    {
      icon: Bell,
      title: 'Alert System',
      description: 'Automated alerts are instantly distributed to emergency services, ski patrols, and local communities when dangerous conditions are detected.',
      details: ['Instant notifications', 'Multi-channel alerts', 'Emergency response', 'Community warnings']
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              How
              <span className="text-primary"> AvalGuard Works</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our three-step process combines cutting-edge technology with intelligent analysis to provide the most accurate avalanche risk assessment available.
            </p>
          </div>

          <div className="relative">
            {/* Connection Lines */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-primary to-primary transform -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
              {steps.map((step, index) => (
                <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="relative mb-8">
                    <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto shadow-glow">
                      <step.icon className="h-10 w-10 text-primary-foreground" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center border-2 border-background">
                      <span className="text-sm font-bold text-secondary-foreground">{index + 1}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{step.description}</p>
                  
                  <div className="gradient-card rounded-lg p-6 shadow-soft">
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-sm text-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="gradient-card rounded-2xl p-8 md:p-12 shadow-medium inline-block">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Processing Power</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                  <div className="text-sm text-muted-foreground">Sensors Deployed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">50TB</div>
                  <div className="text-sm text-muted-foreground">Data Processed Daily</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">0.1s</div>
                  <div className="text-sm text-muted-foreground">Analysis Speed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};