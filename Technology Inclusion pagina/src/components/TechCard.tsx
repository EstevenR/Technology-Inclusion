import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Zap } from "lucide-react";

interface TechCardProps {
  title: string;
  description: string;
  features: string[];
  price?: string;
  badge?: string;
  ctaText: string;
  onCtaClick?: () => void;
  variant?: 'default' | 'featured' | 'premium';
  icon?: React.ReactNode;
}

const TechCard: React.FC<TechCardProps> = ({
  title,
  description,
  features,
  price,
  badge,
  ctaText,
  onCtaClick,
  variant = 'default',
  icon
}) => {
  const getCardStyles = () => {
    switch (variant) {
      case 'featured':
        return "border-ti-orange bg-gradient-to-br from-background to-ti-orange/5 shadow-lg shadow-ti-orange/10 hover:shadow-ti-orange/20";
      case 'premium':
        return "border-ti-orange-dark bg-gradient-to-br from-ti-gray-dark/5 to-ti-orange-dark/10 shadow-xl hover:shadow-ti-orange-dark/20";
      default:
        return "border-border hover:border-ti-orange/50 hover:shadow-lg";
    }
  };

  const getIconStyles = () => {
    switch (variant) {
      case 'featured':
        return "bg-ti-orange/10 text-ti-orange border border-ti-orange/20";
      case 'premium':
        return "bg-ti-orange-dark/10 text-ti-orange-dark border border-ti-orange-dark/20";
      default:
        return "bg-ti-gray/10 text-ti-gray border border-ti-gray/20";
    }
  };

  return (
    <Card className={`group relative flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 ${getCardStyles()}`}>
      {badge && (
        <div className="absolute top-4 right-4">
          <Badge variant={variant === 'featured' ? 'default' : 'secondary'} className="bg-ti-orange text-white">
            {badge}
          </Badge>
        </div>
      )}
      
      <CardHeader className="pb-4">
        {icon && (
          <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${getIconStyles()}`}>
            {icon}
          </div>
        )}
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        {price && (
          <div className="text-2xl font-bold text-ti-orange">
            {price}
            <span className="text-sm font-normal text-muted-foreground ml-1">/ mes</span>
          </div>
        )}
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      
      <CardContent className="flex flex-col flex-grow space-y-4">
        <ul className="space-y-3 flex-grow">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-3">
              <Check className="w-5 h-5 text-ti-orange mt-0.5 flex-shrink-0" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Button 
          onClick={onCtaClick}
          variant={variant === 'featured' ? 'hero' : 'outline'}
          className="w-full mt-6 group-hover:bg-ti-orange group-hover:text-white transition-colors duration-300"
          size="lg"
        >
          {variant === 'featured' && <Zap className="w-4 h-4 mr-2" />}
          {ctaText}
        </Button>
      </CardContent>
      
      {/* Futuristic glow effect - now more prominent */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-ti-orange/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </Card>
  );
};

export default TechCard;