import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

interface VideoPlayerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRequestDemo: () => void;
  videoUrl: string;
}

export const VideoPlayerModal = ({ isOpen, onClose, onRequestDemo, videoUrl }: VideoPlayerModalProps) => {
  const [isVideoFinished, setIsVideoFinished] = useState(false);

  const handleVideoEnd = () => {
    setIsVideoFinished(true);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => { if (!open) onClose(); }}>
      <DialogContent className="max-w-4xl p-0">
        <VisuallyHidden>
          <DialogTitle>Reproductor de video</DialogTitle>
          <DialogDescription>Reproductor de video en una ventana emergente.</DialogDescription>
        </VisuallyHidden>
        <div className="aspect-video">
          <video 
            src={videoUrl} 
            className="w-full h-full"
            controls 
            autoPlay
            onEnded={handleVideoEnd}
          />
        </div>
        {isVideoFinished && (
          <div className="p-6 pt-4 text-center bg-background">
            <DialogTitle className="text-xl font-semibold mb-2">¿Listo para el siguiente paso?</DialogTitle>
            <DialogDescription className="text-muted-foreground mb-4">Solicita una demostración personalizada y descubre cómo podemos transformar tu negocio.</DialogDescription>
            <Button size="lg" onClick={onRequestDemo}>
              Solicitar mi demostración <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
