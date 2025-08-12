import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNavigate } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { useForm as useFormspree } from '@formspree/react';
import { AgendamientoModal } from './AgendamientoModal';
import Navigation from './Navigation'; // Import Navigation
import Footer from './Footer'; // Import Footer

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

const ConsultationForm: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferred_date: '',
    preferred_time: '',
    sector: '',
    other_sector: '',
    business_description: '',
    num_employees: '',
    operational_stages: [],
    paper_excel_processes: [],
    dian_electronic_invoicing: '',
    admin_repetitive_hours: '',
    errors_rework_percentage: '',
    current_digital_tools: [],
    priority_objective: '',
    other_priority_objective: '',
    mdi_score: 0,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [formspreeState, sendToFormspree] = useFormspree("mpwlbarn");

  useEffect(() => {
    const storedData = localStorage.getItem('diagnosisFormData');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setFormData(prev => ({
        ...prev,
        sector: parsedData.sector || '',
        other_sector: parsedData.other_sector || '',
        business_description: parsedData.value_proposition || '',
        num_employees: parsedData.num_employees || '',
        operational_stages: parsedData.key_areas || [],
        paper_excel_processes: parsedData.manual_processes || [],
        dian_electronic_invoicing: parsedData.dian_electronic_invoicing || '',
        admin_repetitive_hours: parsedData.admin_repetitive_hours || '',
        errors_rework_percentage: parsedData.error_frequency || '',
        current_digital_tools: parsedData.current_digital_tools || [],
        priority_objective: parsedData.biggest_obstacle || '',
        other_priority_objective: parsedData.other_biggest_obstacle || '',
        mdi_score: parsedData.mdi || 0,
      }));
      // Do not remove the item from localStorage so the user can refresh
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSelectChange = (id: string, value: string) => {
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    if (!formData.name || !formData.email || !formData.phone || !formData.preferred_date || !formData.preferred_time) {
      setError("Por favor, completa todos los campos obligatorios.");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch(`${API_URL}/api/schedule-consultation`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      setSuccessMessage(result.message || "¡Solicitud de consultoría recibida! Nos comunicaremos contigo pronto.");
      sendToFormspree(formData);
      setShowSuccessModal(true);
      localStorage.removeItem('diagnosisFormData'); // Clean up on success
    } catch (err) {
      console.error("Error scheduling consultation:", err);
      setError("No pudimos agendar tu consultoría. Por favor, inténtalo de nuevo más tarde.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-background flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl w-full space-y-8 bg-card p-10 rounded-xl shadow-lg">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-foreground">
              Agenda tu Consultoría Gratuita
            </h2>
            <p className="mt-2 text-center text-sm text-muted-foreground">
              Completa tus datos para agendar una sesión personalizada y discutir tu diagnóstico.
            </p>
          </div>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm -space-y-px">
              <h3 className="text-xl font-bold mb-4 text-foreground border-b pb-2">Información de Contacto</h3>
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
                  <Select onValueChange={(value) => handleSelectChange("preferred_time", value)} value={formData.preferred_time} required>
                    <SelectTrigger id="preferred_time"><SelectValue placeholder="Selecciona una hora" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="09:00">09:00 AM</SelectItem>
                      <SelectItem value="10:00">10:00 AM</SelectItem>
                      <SelectItem value="11:00">11:00 AM</SelectItem>
                      <SelectItem value="14:00">02:00 PM</SelectItem>
                      <SelectItem value="15:00">03:00 PM</SelectItem>
                      <SelectItem value="16:00">04:00 PM</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div className="rounded-md shadow-sm -space-y-px">
              <h3 className="text-xl font-bold mb-4 text-foreground border-b pb-2">Tu Diagnóstico (Información pre-llenada)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4 bg-muted/10 p-4 rounded-md">
                <div>
                  <Label>Sector:</Label>
                  <p className="text-muted-foreground">{formData.sector === "Otro" ? formData.other_sector : formData.sector}</p>
                </div>
                <div>
                  <Label>Empleados:</Label>
                  <p className="text-muted-foreground">{formData.num_employees}</p>
                </div>
                <div>
                  <Label>Descripción del Negocio:</Label>
                  <p className="text-muted-foreground text-sm">{formData.business_description}</p>
                </div>
                <div>
                  <Label>Objetivo Prioritario:</Label>
                  <p className="text-muted-foreground">{formData.priority_objective === "Otro" ? formData.other_priority_objective : formData.priority_objective}</p>
                </div>
              </div>
            </div>

            <div>
              <Button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" disabled={isLoading}>
                {isLoading ? "Agendando..." : "Confirmar Consultoría"}
              </Button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
      <AgendamientoModal
        isOpen={showSuccessModal}
        onClose={() => {
          setShowSuccessModal(false);
          navigate('/'); // Navigate to home on close
        }}
        successMessage={successMessage || ""}
      />
    </>
  );
};

export default ConsultationForm;
