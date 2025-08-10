import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface ProcessStepProps {
  step: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  isActive?: boolean;
}

const ProcessStep: React.FC<ProcessStepProps> = ({
  step,
  title,
  description,
  icon,
  isActive = false
}) => {
  return (
    <div className="relative group">
      {/* Connection line */}
      <div className="absolute top-8 left-8 w-px h-full bg-gradient-to-b from-ti-orange/30 to-transparent group-last:hidden" />
      
      <Card className={`relative overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
        isActive 
          ? 'border-ti-orange bg-gradient-to-br from-background to-ti-orange/5 shadow-lg shadow-ti-orange/10' 
          : 'border-border group-hover:border-ti-orange group-hover:bg-gradient-to-br group-hover:from-background group-hover:to-ti-orange/5 group-hover:shadow-lg group-hover:shadow-ti-orange/10'
      }`}>
        <CardContent className="p-6">
          <div className="flex items-start space-x-4">
            {/* Step number with futuristic design */}
            <div className={`relative flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center transition-colors duration-300 ${
              isActive 
                ? 'bg-ti-orange text-white shadow-lg shadow-ti-orange/25' 
                : 'bg-ti-orange/10 text-ti-orange border border-ti-orange/20 group-hover:bg-ti-orange group-hover:text-white group-hover:shadow-lg group-hover:shadow-ti-orange/25'
            }`}>
              <span className="text-xl font-bold">{step}</span>
              {isActive && (
                <div className="absolute inset-0 bg-ti-orange rounded-xl animate-pulse opacity-20" />
              )}
            </div>
            
            <div className="flex-1">
              <h3 className={`text-lg font-semibold mb-2 transition-colors duration-300 ${isActive ? 'text-ti-orange' : 'group-hover:text-ti-orange'}`}>
                {title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {description}
              </p>
            </div>
            
            {/* Icon */}
            <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300 ${
              isActive 
                ? 'bg-ti-orange/10 text-ti-orange' 
                : 'bg-ti-gray/10 text-ti-gray group-hover:bg-ti-orange/10 group-hover:text-ti-orange'
            }`}>
              {icon}
            </div>
          </div>
        </CardContent>
        
        {/* Animated border for active and hover states */}
        {(isActive || !isActive) && (
          <div className={`absolute inset-0 rounded-lg pointer-events-none ${isActive ? '' : 'opacity-0 group-hover:opacity-100 transition-opacity duration-300'}`}>
            <div className="absolute inset-0 bg-gradient-to-r from-ti-orange/20 via-transparent to-ti-orange/20 rounded-lg animate-pulse" />
          </div>
        )}
      </Card>
    </div>
  );
};

export default ProcessStep;