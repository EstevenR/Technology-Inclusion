import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { Calendar } from 'lucide-react';
import { useForm as useFormspree } from '@formspree/react';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

interface ConsultationFormComponentProps {
  onSuccess: (message: string) => void;
  initialData?: any; // Optional initial data for pre-filling
}

export const ConsultationFormComponent: React.FC<ConsultationFormComponentProps> = ({ onSuccess, initialData }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '', // Re-added
    phone: '', // Re-added
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
  const [formspreeState, sendToFormspree] = useFormspree("mpwlbarn");

  useEffect(() => {
    if (initialData) {
      setFormData(prev => ({
        ...prev,
        sector: initialData.sector || '',
        other_sector: initialData.other_sector || '',
        business_description: initialData.value_proposition || '',
        num_employees: initialData.num_employees || '',
        operational_stages: initialData.key_areas || [],
        paper_excel_processes: initialData.manual_processes || [],
        dian_electronic_invoicing: initialData.dian_electronic_invoicing || '',
        admin_repetitive_hours: initialData.admin_repetitive_hours || '',
        errors_rework_percentage: initialData.error_frequency || '',
        current_digital_tools: initialData.current_digital_tools || '', // Assuming this is a string now
        priority_objective: initialData.biggest_obstacle || '',
        other_priority_objective: initialData.other_biggest_obstacle || '',
        mdi_score: initialData.mdi || 0,
        // Pre-fill email and phone if available
        email: initialData.contact_email || prev.email,
        phone: initialData.whatsapp_number || prev.phone,
      }));
    }
    // Removed the else block that loaded from localStorage
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  // handleSelectChange is removed as all selects now use handleChange

  const timeSlots = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM',
    '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM',
  ];

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
        const errorText = await response.text(); // Get error details
        console.error('handleSubmit: Backend error response:', errorText); // NEW LOG
        throw new Error(`HTTP error! status: ${response.status} - ${errorText}`);
      }

      const result = await response.json();
      const message = result.message || "¡Solicitud de consultoría recibida! Nos comunicaremos contigo pronto.";
      
      sendToFormspree(formData);
      onSuccess(message);
      localStorage.removeItem('diagnosisFormData'); // Clean up on success
    } catch (err) {
      console.error("handleSubmit: Error scheduling consultation:", err);
      setError("No pudimos agendar tu consultoría. Por favor, inténtalo de nuevo más tarde.");
    } finally {
      setIsLoading(false);
      
    }
  };

  return (
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
          {/* Removed email and phone JSX */}
          <div className="relative">
            <Label htmlFor="preferred_date">Fecha Preferida</Label>
            <Input id="preferred_date" type="date" value={formData.preferred_date} onChange={handleChange} required className="pr-10" />
            <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 mt-2 text-white pointer-events-none" size={20} aria-hidden="true" />
          </div>
          <div>
            <Label htmlFor="preferred_time">Hora Preferida</Label>
            <select
              id="preferred_time"
              name="preferred_time"
              required
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              value={formData.preferred_time}
              onChange={handleChange}
            >
              <option value="" disabled>Selecciona una hora</option>
              {timeSlots.map((time) => (
                <option key={time} value={time}>{time}</option>
              ))}
            </select>
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
          {/* Display other pre-filled info here if needed, but no input fields */}
        </div>
      </div>

      <div>
        <Button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" disabled={isLoading}>
          {isLoading ? "Agendando..." : "Confirmar Consultoría"}
        </Button>
      </div>
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
    </form>
  );
};