import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Calendar, CheckCircle, Send } from 'lucide-react';
import { useForm as useFormspree } from '@formspree/react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferred_date: '',
    preferred_time: '',
    area_to_improve: '',
  });
  const [formspreeState, sendToFormspree, resetFormspree] = useFormspree("mpwlbarn");

  // Reset form data after successful submission
  React.useEffect(() => {
    if (formspreeState.succeeded) {
      setFormData({
        name: '',
        email: '',
        phone: '',
        preferred_date: '',
        preferred_time: '',
        area_to_improve: '',
      });
    }
  }, [formspreeState.succeeded]);

  // Reset formspree state when modal is closed
  React.useEffect(() => {
    if (!isOpen) {
      resetFormspree();
    }
  }, [isOpen, resetFormspree]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendToFormspree(formData);
  };

  if (formspreeState.succeeded) {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent>
                <div className="py-6 text-center">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <DialogTitle className="text-center text-2xl">¡Gracias!</DialogTitle>
                    <DialogDescription className="text-lg text-muted-foreground">
                        Tu solicitud ha sido enviada. Nos pondremos en contacto contigo pronto.
                    </DialogDescription>
                    <DialogFooter className="mt-6">
                        <Button onClick={onClose}>Cerrar</Button>
                    </DialogFooter>
                </div>
            </DialogContent>
        </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-lg">
            <DialogHeader>
                <DialogTitle>Agenda tu Consultoría Gratuita</DialogTitle>
                <DialogDescription>
                    Completa tus datos para agendar una sesión personalizada.
                </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
                    <div>
                        <Label htmlFor="name">Nombre Completo</Label>
                        <Input id="name" type="text" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div>
                        <Label htmlFor="email">Correo Electrónico</Label>
                        <Input id="email" type="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div>
                        <Label htmlFor="phone">Número de Teléfono</Label>
                        <Input id="phone" type="tel" value={formData.phone} onChange={handleChange} required />
                    </div>
                    <div className="relative">
                        <Label htmlFor="preferred_date">Fecha Preferida</Label>
                        <Input id="preferred_date" type="date" value={formData.preferred_date} onChange={handleChange} required className="pr-10" />
                        <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 mt-2 text-white pointer-events-none" size={20} aria-hidden="true" />
                    </div>
                    <div>
                        <Label htmlFor="preferred_time">Hora Preferida</Label>
                        <select
                          id="preferred_time"
                          required
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                          value={formData.preferred_time}
                          onChange={handleChange}
                        >
                          <option value="" disabled>Selecciona una hora</option>
                          <option value="09:00">09:00 AM</option>
                          <option value="10:00">10:00 AM</option>
                          <option value="11:00">11:00 AM</option>
                          <option value="12:00">12:00 PM</option>
                          <option value="14:00">02:00 PM</option>
                          <option value="15:00">03:00 PM</option>
                          <option value="16:00">04:00 PM</option>
                          <option value="17:00">05:00 PM</option>
                        </select>
                    </div>
                </div>
                <div>
                    <Label htmlFor="area_to_improve">Describa brevemente el área que desea mejorar</Label>
                    <Textarea id="area_to_improve" value={formData.area_to_improve} onChange={handleChange} />
                </div>
                <DialogFooter>
                    <Button type="submit" className="w-full" disabled={formspreeState.submitting}>
                        <Send className="w-4 h-4 mr-2" />
                        {formspreeState.submitting ? "Agendando..." : "Confirmar Consultoría"}
                    </Button>
                </DialogFooter>
            </form>
        </DialogContent>
    </Dialog>
  );
};