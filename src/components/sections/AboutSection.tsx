import { Brain, Satellite, AlertTriangle, Users } from 'lucide-react';

export const AboutSection = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Analysis',
      description: 'Advanced machine learning algorithms analyze weather patterns, snowpack data, and environmental conditions in real-time.'
    },
    {
      icon: Satellite,
      title: 'Multi-Sensor Network',
      description: 'Comprehensive sensor deployment including seismic, weather, and snow depth monitoring for complete situational awareness.'
    },
    {
      icon: AlertTriangle,
      title: 'Early Warning System',
      description: 'Instant alerts and notifications to emergency services, ski resorts, and local communities before dangerous conditions develop.'
    },
    {
      icon: Users,
      title: 'Community Safety',
      description: 'Protecting mountain communities, ski resorts, and backcountry enthusiasts through proactive risk assessment.'
    }
  ];

  return (
    <section id="about" className="py-20 gradient-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Revolutionizing
              <span className="text-primary"> Avalanche Safety</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our cutting-edge technology combines artificial intelligence, advanced sensors, and real-time data processing to create the most comprehensive avalanche detection system ever built.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="gradient-card rounded-xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 animate-slide-up">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-medium">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                  Why Choose AvalGuard?
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Traditional avalanche prediction methods rely on historical data and human observation. 
                  AvalGuard takes this to the next level by processing thousands of data points in real-time, 
                  using machine learning to identify patterns invisible to the human eye.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">Real-time environmental monitoring</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">Predictive risk modeling</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">Automated alert distribution</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-6 h-64 flex items-center justify-center">
                <div className="text-center">
                  <Brain className="h-20 w-20 text-primary mx-auto mb-4" />
                  <p className="text-lg font-medium text-foreground">AI Brain Processing</p>
                  <p className="text-sm text-muted-foreground">10,000+ data points per second</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};