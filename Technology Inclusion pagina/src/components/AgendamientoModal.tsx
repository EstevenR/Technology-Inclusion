
import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar as CalendarIcon, CheckCircle } from 'lucide-react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

interface AgendamientoModalProps {
  isOpen: boolean;
  onClose: () => void;
  formspreeId: string;
}

export const AgendamientoModal = ({ isOpen, onClose, formspreeId }: AgendamientoModalProps) => {
  const [state, handleSubmit] = useForm(formspreeId);
  const [preferredDate, setPreferredDate] = useState<Date | undefined>(new Date());

  if (state.succeeded) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-center text-2xl">¡Gracias!</DialogTitle>
          </DialogHeader>
          <div className="py-6 text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <p className="text-lg text-muted-foreground">
              Hemos recibido tu solicitud. Nos pondremos en contacto contigo a la brevedad para confirmar la fecha y hora de tu diagnóstico.
            </p>
          </div>
          <DialogFooter>
            <Button onClick={onClose}>Cerrar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Agendar Diagnóstico Gratuito</DialogTitle>
          <DialogDescription>
            Completa tus datos y elige una fecha. Te contactaremos para confirmar la hora.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target as HTMLFormElement);
          formData.append('preferredDate', preferredDate ? format(preferredDate, 'yyyy-MM-dd') : '');
          handleSubmit(formData);
        }}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="fullName" className="text-right">
                Nombre
              </Label>
              <Input id="fullName" name="fullName" required className="col-span-3" />
              <ValidationError prefix="FullName" field="fullName" errors={state.errors} className="col-span-4 text-red-500 text-sm text-right" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <Input id="email" name="email" type="email" required className="col-span-3" />
              <ValidationError prefix="Email" field="email" errors={state.errors} className="col-span-4 text-red-500 text-sm text-right" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="whatsapp" className="text-right">
                WhatsApp
              </Label>
              <Input id="whatsapp" name="whatsapp" required className="col-span-3" />
              <ValidationError prefix="WhatsApp" field="whatsapp" errors={state.errors} className="col-span-4 text-red-500 text-sm text-right" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="preferredDate" className="text-right">
                Fecha
              </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className="col-span-3 justify-start text-left font-normal"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {preferredDate ? format(preferredDate, "PPP", { locale: es }) : <span>Elige una fecha</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={preferredDate}
                    onSelect={setPreferredDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="ghost" onClick={onClose}>Cancelar</Button>
            <Button type="submit" disabled={state.submitting}>
              {state.submitting ? 'Enviando...' : 'Solicitar Agendamiento'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
