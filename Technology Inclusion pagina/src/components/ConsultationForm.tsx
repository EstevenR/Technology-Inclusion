import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNavigate } from 'react-router-dom';
import { Calendar } from 'lucide-react'; // Import Calendar icon

interface ConsultationFormData {
  sector: string;
  other_sector?: string;
  business_description: string;
  num_employees: string;
  operational_stages: string[];
  paper_excel_processes: string[];
  dian_electronic_invoicing: string;
  admin_repetitive_hours: string;
  errors_rework_percentage: string;
  current_digital_tools: string[];
  priority_objective: string;
  other_priority_objective?: string;
  mdi_score: number;
}

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

const ConsultationForm: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferred_date: '',
    preferred_time: '',
    // Fields from DiagnosisForm to be pre-filled
    sector: '',
    other_sector: '',
    business_description: '',
    num_employees: 0,
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
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    const storedData = localStorage.getItem('diagnosisFormData');
    if (storedData) {
      const parsedData: ConsultationFormData = JSON.parse(storedData);
      setFormData(prev => ({
        ...prev,
        ...parsedData,
        // Ensure num_employees is a number
                num_employees: parsedData.num_employees || '',
        mdi_score: parsedData.mdi_score || 0,
      }));
      localStorage.removeItem('diagnosisFormData'); // Clean up storage
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSelectChange = (id: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setIsLoading(true);

    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.preferred_date || !formData.preferred_time) {
      setError("Por favor, completa todos los campos obligatorios.");
      setIsLoading(false);
      return;
    }

    try {
      // Send data to backend (you'll need a new endpoint for this)
      const response = await fetch(`${API_URL}/api/schedule-consultation`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      setSuccess(result.message || "¡Solicitud de consultoría recibida! Nos comunicaremos contigo pronto para confirmar la fecha y hora de tu sesión.");
      // Optionally clear form or redirect
      // setFormData(initialState);
    } catch (err) {
      console.error("Error scheduling consultation:", err);
      setError("No pudimos agendar tu consultoría. Por favor, inténtalo de nuevo más tarde.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/20 p-4">
      <div className="bg-card text-card-foreground p-8 rounded-lg shadow-lg max-w-2xl w-full overflow-y-auto max-h-[90vh]">
        <h2 className="text-3xl font-bold mb-6 text-center text-gradient">Agenda tu Consultoría Gratuita</h2>
        <p className="mb-6 text-center text-muted-foreground">
          Completa tus datos para agendar una sesión personalizada y discutir tu diagnóstico.
        </p>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        {success ? (
          <div className="text-center">
            <p className="text-green-500 text-lg mb-4">{success}</p>
            <Button onClick={() => navigate('/')}>Volver a la página principal</Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
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
                  <SelectTrigger id="preferred_time">
                    <SelectValue placeholder="Selecciona una hora" />
                  </SelectTrigger>
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

            <h3 className="text-xl font-bold mb-4">Tu Diagnóstico (Información pre-llenada)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 bg-muted/10 p-4 rounded-md">
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
              {/* Add more pre-filled fields as needed, e.g., operational_stages, paper_excel_processes, etc. */}
            </div>

            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground btn-modern" disabled={isLoading}>
              {isLoading ? "Agendando..." : "Confirmar Consultoría"}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ConsultationForm;
