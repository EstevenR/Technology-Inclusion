
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Crown, CheckCircle, Zap } from 'lucide-react';
import { useForm as useFormspree } from '@formspree/react'; // Import Formspree hook

interface FounderClientModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FounderClientModal: React.FC<FounderClientModalProps> = ({ isOpen, onClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formspreeState, sendToFormspree] = useFormspree("mgvzrawk"); // Initialize Formspree hook

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    await sendToFormspree(formData);
    // setIsSubmitted(true); // Formspree state will handle this
  };

  useEffect(() => {
    if (formspreeState.succeeded) {
      setIsSubmitted(true);
    }
  }, [formspreeState.succeeded]);

  const handleClose = () => {
    onClose();
    // Resetea el estado del formulario después de un breve retraso para la animación de cierre
    setTimeout(() => {
      setIsSubmitted(false);
    }, 300);
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="bg-card/80 backdrop-blur-xl border-ti-orange/30 text-white p-0 rounded-2xl overflow-hidden max-w-md">
        {/* Animated Glowing Border */}
        <div className="absolute inset-0 rounded-2xl border-2 border-ti-orange/50 animate-pulse pointer-events-none" />
        
        <div className="relative p-8">
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Crown, CheckCircle, Zap } from 'lucide-react';

interface FounderClientModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FounderClientModal: React.FC<FounderClientModalProps> = ({ isOpen, onClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí se podría añadir la lógica de envío de datos a un backend
    setIsSubmitted(true);
  };

  const handleClose = () => {
    onClose();
    // Resetea el estado del formulario después de un breve retraso para la animación de cierre
    setTimeout(() => {
      setIsSubmitted(false);
    }, 300);
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="bg-card/80 backdrop-blur-xl border-ti-orange/30 text-white p-0 rounded-2xl overflow-hidden max-w-md">
        {/* Animated Glowing Border */}
        <div className="absolute inset-0 rounded-2xl border-2 border-ti-orange/50 animate-pulse pointer-events-none" />
        
        <div className="relative p-8">
          {!isSubmitted ? (
            <>
              <DialogHeader className="text-center mb-6">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-ti-orange/10 rounded-full flex items-center justify-center border-2 border-ti-orange/20">
                    <Crown className="w-8 h-8 text-ti-orange" />
                  </div>
                </div>
                <DialogTitle className="text-2xl font-bold text-white">
                  Únete al Círculo de Fundadores
                </DialogTitle>
                <DialogDescription className="text-white/70">
                  Asegura tu acceso prioritario y beneficios exclusivos. Completa tus datos para ser parte del futuro.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white/80">Nombre Completo</Label>
                  <Input id="name" placeholder="Ej: Ada Lovelace" className="bg-ti-gray-dark/50 border-ti-orange/20 focus:border-ti-orange" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white/80">Email de la Empresa</Label>
                  <Input id="email" type="email" placeholder="tu@empresa.com" className="bg-ti-gray-dark/50 border-ti-orange/20 focus:border-ti-orange" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-white/80">Nombre de la Empresa</Label>
                  <Input id="company" placeholder="Ej: Babbage Inc." className="bg-ti-gray-dark/50 border-ti-orange/20 focus:border-ti-orange" required />
                </div>
                <Button type="submit" className="w-full bg-ti-orange hover:bg-ti-orange-dark text-white font-bold text-lg py-6 hover-glow">
                  <Zap className="w-5 h-5 mr-2" />
                  Asegurar mi Lugar Exclusivo
                </Button>
              </form>
            </>
          ) : (
            <div className="text-center flex flex-col items-center justify-center h-full py-12">
              <CheckCircle className="w-20 h-20 text-green-400 mb-6 animate-pulse" />
              <h2 className="text-2xl font-bold text-white mb-2">¡Bienvenido!</h2>
              <p className="text-white/70 mb-8">
                Tu lugar está reservado. Nuestro equipo te contactará en breve.
              </p>
              <Button onClick={handleClose} className="bg-ti-orange hover:bg-ti-orange-dark text-white font-bold">
                Cerrar
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FounderClientModal;
