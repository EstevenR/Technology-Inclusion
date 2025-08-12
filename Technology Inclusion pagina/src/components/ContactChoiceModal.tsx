
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { MessageCircle, Mail } from 'lucide-react';
import { FormspreeModal } from './FormspreeModal';

interface ContactChoiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  whatsappNumber: string;
  formspreeId: string;
}

export const ContactChoiceModal = ({
  isOpen,
  onClose,
  whatsappNumber,
  formspreeId,
}: ContactChoiceModalProps) => {
  const [showFormModal, setShowFormModal] = useState(false);
  const [formModalKey, setFormModalKey] = useState(0); // Key to force FormspreeModal re-mount

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
    onClose(); // Close the choice modal after opening WhatsApp
  };

  const handleFormClick = () => {
    setShowFormModal(true);
  };

  const handleFormModalClose = () => {
    setShowFormModal(false);
    setFormModalKey(prevKey => prevKey + 1); // Increment key to reset form
    onClose(); // Close the choice modal as well
  };

  return (
    <>
      <Dialog open={isOpen && !showFormModal} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>¿Cómo prefieres contactarnos?</DialogTitle>
            <DialogDescription>
              Elige la opción que mejor se adapte a ti.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <Button 
              onClick={handleWhatsAppClick} 
              className="w-full bg-green-500 hover:bg-green-600 text-white"
            >
              <MessageCircle className="mr-2 h-5 w-5" /> Chatear por WhatsApp
            </Button>
            <Button 
              onClick={handleFormClick} 
              className="w-full bg-blue-500 hover:bg-blue-600 text-white"
            >
              <Mail className="mr-2 h-5 w-5" /> Enviar un Mensaje
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <FormspreeModal
        key={formModalKey}
        isOpen={showFormModal}
        onClose={handleFormModalClose}
        formspreeId={formspreeId}
        title="Envíanos un Mensaje"
        description="Completa el formulario y nos pondremos en contacto contigo."
      />
    </>
  );
};
