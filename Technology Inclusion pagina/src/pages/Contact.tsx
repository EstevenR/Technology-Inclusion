import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Clock, MessageSquare, Linkedin, Instagram, Send, CheckCircle } from "lucide-react";
import { FormspreeModal } from "@/components/FormspreeModal";
const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    helpType: "",
    message: ""
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalKey, setModalKey] = useState(0);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    // Show success message or redirect
  };
  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  const contactMethods = [{
    icon: Mail,
    title: "Email",
    value: "tecnologyinclusion@gmail.com",
    description: "Respuesta en menos de 4 horas",
    action: "tecnologyinclusion@gmail.com"
  }, {
    icon: Phone,
    title: "WhatsApp / Teléfono",
    value: "+57 (3245770680",
    description: "Lun - Vie, 8:00 AM - 6:00 PM",
    action: "tel:+573245770680"
  }, {
    icon: MapPin,
    title: "Ubicación",
    value: "Medellín, Antioquia",
    description: "Servicio para Medellin",
    action: null
  }, {
    icon: Clock,
    title: "Horarios de Atención",
    value: "Lunes a Viernes",
    description: "8:00 AM - 6:00 PM (GMT-5)",
    action: null
  }];
  const socialLinks = [{
    icon: Linkedin,
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/108065972/admin/dashboard/",
    description: "Síguenos para contenido empresarial"
  }, {
    icon: Instagram,
    name: "Instagram",
    url: "#",
    description: "Casos de éxito y tips"
  }];
  const quickActions = [{
    title: "Consultoría Gratuita",
    description: "45 minutos para analizar tu negocio",
    buttonText: "Agendar Ahora",
    variant: "hero" as const
  }, {
    title: "Demo de Producto",
    description: "Ve una demostración en vivo",
    buttonText: "Solicitar Demo",
    variant: "orange" as const
  }, {
    title: "Cotización Express",
    description: "Precio estimado en 24 horas",
    buttonText: "Solicitar Cotización",
    variant: "orange-outline" as const
  }];
  return <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
            Conversemos
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-4xl mx-auto mb-8 text-muted-foreground">
            Estamos aquí para resolver tus dudas y ayudarte a transformar tu negocio
          </p>
          <p className="text-lg font-light max-w-3xl mx-auto text-muted-foreground">
            Múltiples formas de contactarnos. Elige la que te resulte más cómoda.
          </p>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ti-gray-dark mb-4 text-zinc-50">
              ¿Qué necesitas?
            </h2>
            <p className="text-xl text-ti-gray">
              Acciones rápidas para los servicios más solicitados
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quickActions.map((action, index) => <Card key={index} className="text-center hover:shadow-lg transition-shadow border-none">
                <CardHeader>
                  <CardTitle className="text-xl text-white">{action.title}</CardTitle>
                  <CardDescription className="text-base">{action.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" onClick={() => setIsModalOpen(true)}>
                    {action.buttonText}
                  </Button>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24 bg-ti-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Contact Form */}
            <div>
              <Card className="shadow-xl border-none">
                <CardHeader>
                  <CardTitle className="text-2xl text-white flex items-center">
                    <MessageSquare className="w-6 h-6 text-ti-orange mr-3" />
                    Envíanos un Mensaje
                  </CardTitle>
                  <CardDescription className="text-lg">
                    Completa el formulario y te contactaremos en menos de 4 horas
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="fullName">Nombre Completo *</Label>
                        <Input id="fullName" type="text" required value={formData.fullName} onChange={e => handleInputChange("fullName", e.target.value)} className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="email">Correo Electrónico *</Label>
                        <Input id="email" type="email" required value={formData.email} onChange={e => handleInputChange("email", e.target.value)} className="mt-1" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Teléfono / WhatsApp</Label>
                        <Input id="phone" type="tel" value={formData.phone} onChange={e => handleInputChange("phone", e.target.value)} className="mt-1" placeholder="+57 300 123 4567" />
                      </div>
                      <div>
                        <Label htmlFor="company">Nombre de la Empresa *</Label>
                        <Input id="company" type="text" required value={formData.company} onChange={e => handleInputChange("company", e.target.value)} className="mt-1" />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="helpType">¿En qué podemos ayudarte? *</Label>
                      <Select onValueChange={value => handleInputChange("helpType", value)}>
                        <SelectTrigger id="helpType" aria-labelledby="helpType-label" className="mt-1">
                          <SelectValue placeholder="Selecciona una opción" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="consultoria">Quiero una consultoría gratuita</SelectItem>
                          <SelectItem value="cotizacion">Necesito una cotización</SelectItem>
                          <SelectItem value="demo">Me interesa ver una demo</SelectItem>
                          <SelectItem value="soporte">Tengo preguntas sobre servicios</SelectItem>
                          <SelectItem value="otro">Otro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Mensaje (Opcional)</Label>
                      <Textarea id="message" rows={4} value={formData.message} onChange={e => handleInputChange("message", e.target.value)} className="mt-1" placeholder="Cuéntanos más sobre tu proyecto o necesidades específicas..." />
                    </div>
                    
                    <Button type="submit" className="w-full">
                      <Send className="w-4 h-4 mr-2" />
                      Enviar Mensaje
                    </Button>
                    
                    <div className="flex items-center space-x-2 text-sm text-ti-gray">
                      <CheckCircle className="w-4 h-4 text-ti-orange" />
                      <span>Respuesta garantizada en menos de 4 horas</span>
                    </div>
                  </form>
                </CardContent>
              </Card>

              {/* Office Hours */}
              <Card className="bg-gradient-to-br from-ti-orange/10 to-ti-orange-light/10 border-none mt-12 shadow-md">
                <CardContent className="p-6">
                  <div className="text-center">
                    <Clock className="w-12 h-12 text-ti-orange mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">
                      ¿Necesitas atención urgente?
                    </h3>
                    <p className="text-ti-gray mb-4">
                      Para emergencias técnicas de clientes activos, contamos con soporte 24/7
                    </p>
                    <Button>
                      Contactar Soporte de Emergencia
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-ti-gray-dark mb-6">
                  Otras Formas de Contactarnos
                </h2>
                <p className="text-ti-gray text-lg mb-8">
                  Prefiere hablar directamente? Aquí tienes todas nuestras vías de comunicación.
                </p>
              </div>
              
              {/* Contact Methods */}
              <div className="space-y-6">
                {contactMethods.map((method, index) => <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-ti-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <method.icon className="w-6 h-6 text-ti-orange" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-white mb-1">{method.title}</h3>
                          {method.action ? <a href={method.action} className="text-ti-orange hover:text-ti-orange-dark font-medium block">
                              {method.value}
                            </a> : <p className="text-ti-orange font-medium">{method.value}</p>}
                          <p className="text-ti-gray text-sm">{method.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>)}
              </div>
              
              {/* Social Links */}
              <Card className="border-none shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl text-white">Síguenos en Redes Sociales</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {socialLinks.map((social, index) => <a key={index} href={social.url} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-ti-gray-light transition-colors">
                        <div className="w-10 h-10 bg-ti-orange/10 rounded-full flex items-center justify-center">
                          <social.icon className="w-5 h-5 text-ti-orange" />
                        </div>
                        <div>
                          <p className="font-medium text-white">{social.name}</p>
                          <p className="text-sm text-ti-gray">{social.description}</p>
                        </div>
                      </a>)}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-ti-gray-dark mb-4 text-zinc-50">
              Nuestra Ubicación
            </h2>
            <p className="text-ti-gray text-lg">
              Basados en Medellín, atendemos toda Colombia de forma remota
            </p>
          </div>
          
          <Card className="overflow-hidden shadow-xl border-none">
            <div className="h-64 bg-gradient-to-r from-ti-orange/20 to-ti-orange-light/20 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-ti-orange mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-ti-gray-dark mb-2 text-zinc-50">
                  Technology Inclusion
                </h3>
                <p className="text-ti-gray">
                  Medellín, Antioquia, Colombia
                </p>
                <p className="text-sm text-ti-gray mt-2">
                  Servicios disponibles en toda Colombia
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
      <FormspreeModal 
        key={modalKey}
        isOpen={isModalOpen} 
        onClose={() => {
          setIsModalOpen(false);
          setModalKey(prevKey => prevKey + 1);
        }} 
        formspreeId="xpwljjea"
        title="Agenda tu Consultoría Gratuita"
        description="Déjanos tus datos y te contactaremos para coordinar una sesión de 45 minutos."
      />
    </div>;
};
export default Contact;