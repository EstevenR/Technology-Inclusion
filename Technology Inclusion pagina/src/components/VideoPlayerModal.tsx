import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

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
            <h3 className="text-xl font-semibold mb-2">¿Listo para el siguiente paso?</h3>
            <p className="text-muted-foreground mb-4">Solicita un demo personalizado y descubre cómo podemos transformar tu negocio.</p>
            <Button size="lg" onClick={onRequestDemo}>
              Solicitar mi Demo <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
