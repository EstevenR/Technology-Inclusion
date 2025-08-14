
import React from 'react';
import { useForm } from '@formspree/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { CheckCircle, Send } from 'lucide-react';

interface FormspreeModalProps {
  isOpen: boolean;
  onClose: () => void;
  formspreeId: string;
  title?: string;
  description?: string;
  initialMessage?: string;
}

export const FormspreeModal = ({ 
  isOpen, 
  onClose, 
  formspreeId,
  title = "Contacta con Nosotros",
  description = "Completa el formulario y nos pondremos en contacto contigo.",
  initialMessage = ""
}: FormspreeModalProps) => {
  const [state, handleSubmit, reset] = useForm(formspreeId);

  if (state.succeeded) {
    return (
      <Dialog open={isOpen} onOpenChange={(open) => { if (!open) onClose(); }}>
        <DialogContent className="sm:max-w-[425px]">
          <div className="py-6 text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <DialogTitle className="text-center text-2xl">¡Gracias!</DialogTitle>
            <p className="text-lg text-muted-foreground">
              Tu mensaje ha sido enviado. Nos pondremos en contacto contigo pronto.
            </p>
            <DialogFooter className="mt-6">
              <Button onClick={() => {
                reset();
                onClose();
              }}>Cerrar</Button>
            </DialogFooter>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => { if (!open) onClose(); }}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* This hidden input passes the solution name to Formspree */}
          <input type="hidden" name="solution" value={initialMessage} />
          <div>
            <Label htmlFor="name">Nombre Completo</Label>
            <Input id="name" name="name" type="text" required />
          </div>
          <div>
            <Label htmlFor="email">Correo Electrónico</Label>
            <Input id="email" name="email" type="email" required />
          </div>
          <div>
            <Label htmlFor="message">Mensaje</Label>
            <Textarea id="message" name="message" required defaultValue={initialMessage} />
          </div>
          {state.errors && state.errors.length > 0 && (
            <p className="text-sm text-red-500">
              Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.
            </p>
          )}
          <DialogFooter>
            <Button type="submit" disabled={state.submitting}>
              <Send className="w-4 h-4 mr-2" />
              {state.submitting ? 'Enviando...' : 'Enviar Mensaje'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
