import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface CompatibilityItem {
  name: string;
  logo: React.ReactNode;
  status?: 'supported' | 'coming-soon' | 'integrated';
}

interface CompatibilityGridProps {
  title: string;
  subtitle?: string;
  items: CompatibilityItem[];
}

const CompatibilityGrid: React.FC<CompatibilityGridProps> = ({
  title,
  subtitle,
  items
}) => {
  const getStatusColor = (status?: string) => {
    switch (status) {
      case 'supported':
        return 'bg-green-500/10 text-green-600 border-green-500/20';
      case 'coming-soon':
        return 'bg-yellow-500/10 text-yellow-600 border-yellow-500/20';
      case 'integrated':
        return 'bg-ti-orange/10 text-ti-orange border-ti-orange/20';
      default:
        return 'bg-ti-gray/10 text-ti-gray border-ti-gray/20';
    }
  };

  const getStatusText = (status?: string) => {
    switch (status) {
      case 'supported':
        return 'Soportado';
      case 'coming-soon':
        return 'Próximamente';
      case 'integrated':
        return 'Integrado';
      default:
        return '';
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        {subtitle && (
          <p className="text-muted-foreground">{subtitle}</p>
        )}
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item, index) => (
          <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border hover:border-ti-orange/50">
            <CardContent className="p-6 text-center">
              <div className="mb-4 flex justify-center">
                <div className="w-12 h-12 rounded-lg bg-ti-orange/10 flex items-center justify-center group-hover:bg-ti-orange/20 transition-colors">
                  {item.logo}
                </div>
              </div>
              
              <h4 className="font-semibold mb-2">{item.name}</h4>
              
              {item.status && (
                <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(item.status)}`}>
                  {getStatusText(item.status)}
                </div>
              )}
            </CardContent>
            
            {/* Hover glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-ti-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-lg" />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CompatibilityGrid;