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

interface DemoRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  formspreeId: string;
}

export const DemoRequestModal = ({ 
  isOpen, 
  onClose, 
  formspreeId,
}: DemoRequestModalProps) => {
  const [state, handleSubmit, reset] = useForm(formspreeId);
  const [objetivo, setObjetivo] = React.useState("");

  React.useEffect(() => {
    if (!isOpen) {
      // Reset form when modal is closed
      reset();
    }
  }, [isOpen, reset]);

  return (
    <Dialog open={isOpen} onOpenChange={(open) => { if (!open) onClose(); }}>
      <DialogContent className="sm:max-w-md">
        {state.succeeded ? (
          <div className="py-6 text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <DialogTitle className="text-center text-2xl">¡Solicitud Recibida!</DialogTitle>
            <DialogDescription className="text-lg text-muted-foreground">
              Gracias por tu interés. Nos pondremos en contacto contigo pronto para agendar el demo.
            </DialogDescription>
            <DialogFooter className="mt-6">
              <Button onClick={onClose}>Cerrar</Button>
            </DialogFooter>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>Solicita tu Demo Personalizado</DialogTitle>
              <DialogDescription>Completa estos datos para preparar un demo enfocado en tus necesidades.</DialogDescription>
            </DialogHeader>
            <div className="max-h-[70vh] overflow-y-auto p-4">
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Hidden field for form type */}
                <input type="hidden" name="form_type" value="Solicitud de Demo Personalizado" />

                {/* Form Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="full_name">Nombre Completo</Label>
                    <Input id="full_name" name="full_name" type="text" required />
                  </div>
                  <div>
                    <Label htmlFor="company_name">Nombre de la Empresa</Label>
                    <Input id="company_name" name="company_name" type="text" required />
                  </div>
                  <div>
                    <Label htmlFor="email">Email de Contacto</Label>
                    <Input id="email" name="email" type="email" required />
                  </div>
                  <div>
                    <Label htmlFor="whatsapp">Número de WhatsApp</Label>
                    <Input id="whatsapp" name="whatsapp" type="tel" required />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="sector">Sector o Industria</Label>
                  <Input id="sector" name="sector" type="text" placeholder="Ej: Retail, Servicios, Salud..." required />
                </div>

                <div>
                  <Label htmlFor="process_to_improve">Proceso a Mejorar</Label>
                  <Textarea id="process_to_improve" name="process_to_improve" required rows={4} placeholder="Describe el proceso que más te duele o quieres mejorar." />
                </div>

                <div>
                  <Label htmlFor="current_tools">Herramientas Actuales</Label>
                  <Input id="current_tools" name="current_tools" type="text" placeholder="Ej: Excel, Papel, WhatsApp, etc." required />
                </div>

                <div>
                  <Label htmlFor="main_objective">¿Cuál es tu Objetivo Principal?</Label>
                  <select
                    id="main_objective"
                    name="main_objective"
                    value={objetivo}
                    onChange={(e) => setObjetivo(e.target.value)}
                    required
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  >
                    <option value="" disabled>Selecciona un objetivo...</option>
                    <option value="Reducir tiempo manual">Reducir tiempo manual</option>
                    <option value="Disminuir errores">Disminuir errores</option>
                    <option value="Mejorar comunicacion con clientes">Mejorar la comunicación con clientes</option>
                    <option value="Aumentar ventas">Aumentar ventas</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>

                {state.errors && state.errors.length > 0 && (
                  <p className="text-sm text-red-500">
                    Hubo un error. Por favor, revisa los campos e inténtalo de nuevo.
                  </p>
                )}

                <DialogFooter>
                  <Button type="submit" disabled={state.submitting} className="w-full">
                    <Send className="w-4 h-4 mr-2" />
                    {state.submitting ? 'Enviando...' : 'Solicitar Demo'}
                  </Button>
                </DialogFooter>
              </form>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};