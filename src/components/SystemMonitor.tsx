
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, AlertTriangle, Zap, Activity, Shield } from "lucide-react";

interface SystemEvent {
  id: number;
  type: 'fix' | 'detection' | 'deployment';
  message: string;
  timestamp: string;
  status: 'success' | 'warning' | 'processing';
}

export const SystemMonitor = () => {
  const [events, setEvents] = useState<SystemEvent[]>([
    {
      id: 1,
      type: 'fix',
      message: 'Memory leak in payment processor resolved',
      timestamp: '14:23:45',
      status: 'success'
    },
    {
      id: 2,
      type: 'detection',
      message: 'SQL injection vulnerability detected in user controller',
      timestamp: '14:22:12',
      status: 'warning'
    },
    {
      id: 3,
      type: 'deployment',
      message: 'Auto-patch deployed to production (v2.1.3)',
      timestamp: '14:21:55',
      status: 'success'
    }
  ]);

  const [metrics, setMetrics] = useState({
    bugsFixed: 1247,
    uptime: 99.97,
    responseTime: 0.12
  });

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate new events
      const eventTypes: SystemEvent['type'][] = ['fix', 'detection', 'deployment'];
      const messages = {
        fix: [
          'Race condition in cache layer resolved',
          'Database connection leak patched',
          'API timeout issue fixed automatically',
          'Memory optimization applied to user service'
        ],
        detection: [
          'Potential security vulnerability found in auth module',
          'Performance degradation detected in search API',
          'Unusual error rate spike in payment gateway'
        ],
        deployment: [
          'Security patch deployed to staging',
          'Performance optimization rolled out',
          'Bug fix deployed with zero downtime'
        ]
      };

      const randomType = eventTypes[Math.floor(Math.random() * eventTypes.length)];
      const randomMessage = messages[randomType][Math.floor(Math.random() * messages[randomType].length)];
      
      const newEvent: SystemEvent = {
        id: Date.now(),
        type: randomType,
        message: randomMessage,
        timestamp: new Date().toLocaleTimeString('en-US', { hour12: false }),
        status: randomType === 'detection' ? 'warning' : 'success'
      };

      setEvents(prev => [newEvent, ...prev.slice(0, 4)]);
      
      // Update metrics
      setMetrics(prev => ({
        bugsFixed: prev.bugsFixed + (randomType === 'fix' ? 1 : 0),
        uptime: 99.97 + (Math.random() - 0.5) * 0.02,
        responseTime: 0.12 + (Math.random() - 0.5) * 0.08
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getEventIcon = (type: SystemEvent['type']) => {
    switch (type) {
      case 'fix': return CheckCircle;
      case 'detection': return AlertTriangle;
      case 'deployment': return Zap;
      default: return Activity;
    }
  };

  const getEventColor = (status: SystemEvent['status']) => {
    switch (status) {
      case 'success': return 'text-toxic-green';
      case 'warning': return 'text-yellow-400';
      case 'processing': return 'text-glitch-blue';
      default: return 'text-gray-400';
    }
  };

  return (
    <Card className="bg-gradient-to-br from-purple-500 via-orange-400 to-emerald-500 border border-purple-500/30 p-[2] transition-all duration-300 hover:translate-y-[-5px] hover-float neon-glow-hover rounded-xl">
      <div className="space-y-4 rounded-xl p-5">
        <h3 className="text-xl font-orbitron font-bold text-center text-glow">
          SYSTEM MONITOR
        </h3>
        
        {/* Metrics */}
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-toxic-green">{metrics.bugsFixed.toLocaleString()}</div>
            <div className="text-xs text-gray-400">Bugs Fixed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-glitch-blue">{metrics.uptime.toFixed(2)}%</div>
            <div className="text-xs text-gray-400">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-cyber-pink">{metrics.responseTime.toFixed(2)}s</div>
            <div className="text-xs text-gray-400">Avg Response</div>
          </div>
        </div>
        
        {/* Real-time Events */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 mb-3">
            <Activity className="w-4 h-4 text-neon-purple animate-pulse" />
            <span className="text-sm font-semibold text-neon-purple">LIVE EVENTS</span>
          </div>
          
          <div className="bg-black rounded-lg p-4 space-y-2 h-[50%] overflow-y-auto">
            {events.map((event) => {
              const IconComponent = getEventIcon(event.type);
              return (
                <div key={event.id} className="flex items-start gap-3 text-sm animate-fade-in">
                  <IconComponent className={`w-4 h-4 mt-0.5 ${getEventColor(event.status)}`} />
                  <div className="flex-1 min-w-0">
                    <p className="text-gray-200 truncate">{event.message}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-gray-500">{event.timestamp}</span>
                      <Badge variant="outline" className={`text-xs ${
                        event.status === 'success' ? 'border-toxic-green/50 text-toxic-green' :
                        event.status === 'warning' ? 'border-yellow-400/50 text-yellow-400' :
                        'border-glitch-blue/50 text-glitch-blue'
                      }`}>
                        {event.type}
                      </Badge>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Card>
  );
};
