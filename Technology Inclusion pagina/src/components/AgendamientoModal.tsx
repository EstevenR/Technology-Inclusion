import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { CheckCircle } from 'lucide-react';

interface AgendamientoModalProps {
  isOpen: boolean;
  onClose: () => void;
  successMessage?: string;
}

export const AgendamientoModal = ({ isOpen, onClose, successMessage }: AgendamientoModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <div className="py-6 text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <DialogTitle className="text-center text-2xl">¡Gracias!</DialogTitle>
          <DialogDescription className="text-lg text-muted-foreground">
            {successMessage || "Tu solicitud ha sido recibida. Nos pondremos en contacto contigo pronto."}
          </DialogDescription>
          <DialogFooter className="mt-6">
            <Button onClick={onClose}>Cerrar</Button>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
};