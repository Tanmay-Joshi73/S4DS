import React from 'react';
import { useSpring, animated, config } from '@react-spring/web';
import { Brain, Database, Cpu } from 'lucide-react';

const AILoadingScreen = () => {
  // Fade in the entire container
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 }
  });

  // Neural network connection lines animation
  const linesAnimation = useSpring({
    from: { strokeDashoffset: 1000 },
    to: { strokeDashoffset: 0 },
    loop: true,
    config: { duration: 3000 }
  });

  // Floating animation for icons
  const floatAnimation = useSpring({
    from: { translateY: -20 },
    to: { translateY: 20 },
    loop: { reverse: true },
    config: { tension: 100, friction: 10 }
  });

  // Pulse animation for the brain
  const pulseAnimation = useSpring({
    from: { scale: 0.8 },
    to: { scale: 1.1 },
    loop: { reverse: true },
    config: { tension: 100, friction: 10 }
  });

  // Text typing animation
  const loadingText = useSpring({
    from: { width: '0%' },
    to: { width: '100%' },
    loop: true,
    config: { duration: 2000 }
  });

  return (
    <animated.div style={fadeIn} className="fixed inset-0 flex items-center justify-center bg-gray-900">
      <div className="relative w-64 h-64">
        {/* Background glow effect */}
        <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl animate-pulse" />
        
        {/* Neural network connections */}
        <svg className="absolute inset-0" viewBox="0 0 100 100">
          <animated.path
            style={linesAnimation}
            d="M20,50 L80,20 M20,50 L80,50 M20,50 L80,80"
            stroke="rgba(59, 130, 246, 0.5)"
            strokeWidth="0.5"
            fill="none"
            strokeDasharray="1000"
          />
        </svg>

        {/* Animated icons */}
        <div className="absolute inset-0 flex items-center justify-center">
          <animated.div style={pulseAnimation} className="text-blue-500">
            <Brain size={64} />
          </animated.div>
        </div>

        <animated.div style={floatAnimation} className="absolute top-0 left-0 text-blue-400">
          <Database size={32} />
        </animated.div>

        <animated.div style={floatAnimation} className="absolute bottom-0 right-0 text-blue-400">
          <Cpu size={32} />
        </animated.div>

        {/* Loading text */}
        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-48 overflow-hidden">
          <animated.div style={loadingText} className="text-blue-400 font-mono whitespace-nowrap">
            Initializing AI Systems...
          </animated.div>
        </div>
      </div>
    </animated.div>
  );
};

export default AILoadingScreen;