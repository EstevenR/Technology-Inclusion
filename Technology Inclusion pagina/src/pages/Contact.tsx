import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Clock, MessageSquare, Linkedin, Instagram, Send, CheckCircle, User, Mailbox } from "lucide-react";
import { FormspreeModal } from "@/components/FormspreeModal";
import { VideoPlayerModal } from '@/components/VideoPlayerModal';
import { DemoRequestModal } from '@/components/DemoRequestModal';

const Contact = () => {
  // State for submission status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  // State for various modals
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [consultationModalKey, setConsultationModalKey] = useState(0);
  
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteModalKey, setQuoteModalKey] = useState(0);

  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isDemoRequestModalOpen, setIsDemoRequestModalOpen] = useState(false);
  const [demoRequestModalKey, setDemoRequestModalKey] = useState(0);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(false);

    const formData = new FormData(e.target as HTMLFormElement);

    const response = await fetch("https://formspree.io/f/mgvzrawk", {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      setIsSubmitted(true);
    } else {
      setSubmitError(true);
    }

    setIsSubmitting(false);
  };

  // --- Modal Handlers ---
  const handleOpenConsultationModal = () => {
    setConsultationModalKey(prev => prev + 1);
    setIsConsultationModalOpen(true);
  };

  const handleOpenQuoteModal = () => {
    setQuoteModalKey(prev => prev + 1);
    setIsQuoteModalOpen(true);
  };

  const handleOpenVideoModal = () => {
    setIsVideoModalOpen(true);
  };

  const handleRequestDemo = () => {
    setIsVideoModalOpen(false);
    setDemoRequestModalKey(prevKey => prevKey + 1);
    setIsDemoRequestModalOpen(true);
  };

  const contactMethods = [
    { icon: Mail, title: "Email", value: "tecnologyinclusion@gmail.com", description: "Respuesta en menos de 4 horas", action: "mailto:tecnologyinclusion@gmail.com" },
    { icon: Phone, title: "WhatsApp / Teléfono", value: "+57 324 577 0680", description: "Lun - Vie, 8:00 AM - 6:00 PM", action: "tel:+573245770680" },
    { icon: MapPin, title: "Ubicación", value: "Medellín, Antioquia", description: "Servicio para Medellín", action: null },
    { icon: Clock, title: "Horarios de Atención", value: "Lunes a Viernes", description: "8:00 AM - 6:00 PM (GMT-5)", action: null }
  ];

  const socialLinks = [
    { icon: Linkedin, name: "LinkedIn", url: "https://www.linkedin.com/company/108065972/admin/dashboard/", description: "Síguenos para contenido empresarial" },
    { icon: Instagram, name: "Instagram", url: "#", description: "Casos de éxito y tips" }
  ];

  const quickActions = [
    { title: "Consultoría Gratuita", description: "45 minutos para analizar tu negocio", buttonText: "Agendar Ahora", onClick: handleOpenConsultationModal },
    { title: "Demo de Producto", description: "Ve una demostración en vivo", buttonText: "Solicitar Demo", onClick: handleOpenVideoModal },
    { title: "Cotización Express", description: "Precio estimado en 24 horas", buttonText: "Solicitar Cotización", onClick: handleOpenQuoteModal }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">Conversemos</h1>
          <p className="text-xl md:text-2xl font-light max-w-4xl mx-auto mb-8 text-muted-foreground">Estamos aquí para resolver tus dudas y ayudarte a transformar tu negocio</p>
          <p className="text-lg font-light max-w-3xl mx-auto text-muted-foreground">Múltiples formas de contactarnos. Elige la que te resulte más cómoda.</p>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ti-gray-dark mb-4 text-zinc-50">¿Qué necesitas?</h2>
            <p className="text-xl text-ti-gray">Acciones rápidas para los servicios más solicitados</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quickActions.map((action) => (
              <Card key={action.title} className="text-center hover:shadow-lg transition-shadow border-none">
                <CardHeader>
                  <CardTitle className="text-xl text-white">{action.title}</CardTitle>
                  <CardDescription className="text-base">{action.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" onClick={action.onClick}>{action.buttonText}</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24 bg-ti-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            
            {/* Contact Form Column */}
            <div className="space-y-8">
              {isSubmitted ? (
                <Card className="shadow-xl border-none text-center py-10">
                  <CardContent>
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold mb-2">¡Mensaje Enviado!</h2>
                    <p className="text-muted-foreground">Gracias por contactarnos. Te responderemos pronto.</p>
                  </CardContent>
                </Card>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8 flex flex-col">
                  <Card className="shadow-xl border-none">
                    <CardHeader>
                      <CardTitle className="text-2xl text-white flex items-center">
                        <User className="w-6 h-6 text-ti-orange mr-3" />
                        Tus Datos
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="fullName">Nombre Completo *</Label>
                          <Input id="fullName" name="fullName" type="text" required />
                        </div>
                        <div>
                          <Label htmlFor="email">Correo Electrónico *</Label>
                          <Input id="email" name="email" type="email" required />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="shadow-xl border-none flex-grow">
                    <CardHeader>
                      <CardTitle className="text-2xl text-white flex items-center">
                        <Mailbox className="w-6 h-6 text-ti-orange mr-3" />
                        Tu Mensaje
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <Label htmlFor="helpType">Tipo de Consulta *</Label>
                        <Select required name="helpType">
                          <SelectTrigger id="helpType">
                            <SelectValue placeholder="Selecciona un tipo..." />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Pregunta General">Pregunta General</SelectItem>
                            <SelectItem value="Soporte Técnico">Soporte Técnico</SelectItem>
                            <SelectItem value="Comentarios y Sugerencias">Comentarios y Sugerencias</SelectItem>
                            <SelectItem value="Otro">Otro</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label htmlFor="message">Mensaje *</Label>
                        <Textarea id="message" name="message" rows={5} required placeholder="Cuéntanos más sobre tu proyecto o necesidades específicas..." />
                      </div>
                      
                      <Button type="submit" className="w-full" disabled={isSubmitting}>
                        <Send className="w-4 h-4 mr-2" />
                        {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                      </Button>
                      
                      {submitError && (
                        <p className="text-sm text-red-500">
                          Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.
                        </p>
                      )}
                    </CardContent>
                  </Card>
                </form>
              )}
            </div>
            
            {/* Contact Information Column */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-ti-gray-dark mb-6">Otras Formas de Contactarnos</h2>
                <p className="text-ti-gray text-lg mb-8">Prefiere hablar directamente? Aquí tienes todas nuestras vías de comunicación.</p>
              </div>
              
              {/* Contact Methods */}
              <div className="space-y-6">
                {contactMethods.map((method) => <Card key={method.title} className="border-none shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-ti-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <method.icon className="w-6 h-6 text-ti-orange" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-white mb-1">{method.title}</h3>
                          {method.action ? <a href={method.action} className="text-ti-orange hover:text-ti-orange-dark font-medium block">{method.value}</a> : <p className="text-ti-orange font-medium">{method.value}</p>}
                          <p className="text-ti-gray text-sm">{method.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Modals */}
      <FormspreeModal 
        key={consultationModalKey}
        isOpen={isConsultationModalOpen} 
        onClose={() => setIsConsultationModalOpen(false)} 
        formspreeId="xpwljjea"
        title="Agenda tu Consultoría Gratuita"
        description="Déjanos tus datos y te contactaremos para coordinar una sesión de 45 minutos."
        initialMessage="Estoy interesado/a en agendar una consultoría gratuita."
      />

      <FormspreeModal 
        key={quoteModalKey}
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
        formspreeId="xpwljjea"
        title="Solicitar Cotización Express"
        description="Déjanos tus datos y te enviaremos una cotización estimada en menos de 24 horas."
        initialMessage="Me gustaría solicitar una cotización express."
      />

      <VideoPlayerModal 
        isOpen={isVideoModalOpen} 
        onClose={() => setIsVideoModalOpen(false)} 
        onRequestDemo={handleRequestDemo}
        videoUrl="/Ventas_WhatsApp_Manual_vs_Automatizado (1).mp4"
      />

      <DemoRequestModal 
        key={demoRequestModalKey}
        isOpen={isDemoRequestModalOpen}
        onClose={() => setIsDemoRequestModalOpen(false)}
        formspreeId="manbkkzr"
      />
    </div>
  );
};

export default Contact;
