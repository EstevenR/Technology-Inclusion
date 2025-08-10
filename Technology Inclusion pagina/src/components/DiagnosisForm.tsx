  // (Removed duplicate renderSelect function. The correct one is defined inside DiagnosisForm.)

import React, { useState } from 'react';
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Textarea } from "./ui/textarea";
import { Progress } from "./ui/progress";
import { Zap, Rocket, X } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { useForm as useFormspree } from '@formspree/react'; // Renamed to avoid conflict
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

// Definiciones de opciones para los Select y Checkbox
const SECTOR_OPTIONS = [
  { value: "Tienda minorista", label: "Tienda minorista" },
  { value: "Gastronomía", label: "Gastronomía" },
  { value: "Servicios profesionales", label: "Servicios profesionales" },
  { value: "Manufactura ligera", label: "Manufactura ligera" },
  { value: "Otro", label: "Otro" },
];

const USER_ROLE_OPTIONS = [
  { value: "Propietario/a", label: "Propietario/a" },
  { value: "Gerente", label: "Gerente" },
  { value: "Empleado/a", label: "Empleado/a" },
  { value: "Otro", label: "Otro" },
];

const EMPLOYEE_RANGE_OPTIONS = [
  { value: "1-5", label: "1-5" },
  { value: "6-10", label: "6-10" },
  { value: "11-20", label: "11-20" },
  { value: "21-50", label: "21-50" },
  { value: "+50", label: "+50" },
];

const KEY_AREAS_OPTIONS = [
  "Ventas y Marketing",
  "Operaciones y Producción",
  "Finanzas y Contabilidad",
  "Recursos Humanos",
  "Atención al Cliente",
  "Logística y Distribución",
];

const MANUAL_PROCESSES_OPTIONS = [
  "Facturación-Ventas",
  "Inventario",
  "Agenda-Reservas",
  "Servicio al cliente",
  "Contabilidad-Reportes",
];

const CUSTOMER_ACQUISITION_CHANNEL_OPTIONS = [
  { value: "Redes Sociales", label: "Redes Sociales" },
  { value: "Recomendaciones", label: "Recomendaciones" },
  { value: "Publicidad Online", label: "Publicidad Online" },
  { value: "Eventos/Ferias", label: "Eventos/Ferias" },
  { value: "Tienda Física", label: "Tienda Física" },
  { value: "Otro", label: "Otro" },
];

const CUSTOMER_COMMUNICATION_METHODS_OPTIONS = [
  "WhatsApp",
  "Email",
  "Llamadas telefónicas",
  "Redes Sociales",
  "Chat en sitio web",
  "Personalmente",
];

const DIAN_ELECTRONIC_INVOICING_OPTIONS = [
  { value: "Sí", label: "Sí" },
  { value: "No", label: "No" },
  { value: "En proceso", label: "En proceso" },
];

const ADMIN_REPETITIVE_HOURS_OPTIONS = [
  { value: "0-5", label: "0-5 horas" },
  { value: "6-10", label: "6-10 horas" },
  { value: "11-20", label: "11-20 horas" },
  { value: "+20", label: "+20 horas" },
];

const ERROR_FREQUENCY_OPTIONS = [
  { value: "< 5 %", label: "< 5 %" },
  { value: "5-10 %", label: "5-10 %" },
  { value: "> 10 %", label: "> 10 %" },
  { value: "No lo sé", label: "No lo sé" },
];

const CURRENT_DIGITAL_TOOLS_OPTIONS = [
  "Ninguna (solo Excel)",
  "Software contable",
  "CRM",
  "POS",
  "Dashboard BI",
  "Bots-Automatizaciones",
];

const BIGGEST_OBSTACLE_OPTIONS = [
  { value: "Falta de tiempo", label: "Falta de tiempo" },
  { value: "Falta de conocimiento", label: "Falta de conocimiento" },
  { value: "Costo de la tecnología", label: "Costo de la tecnología" },
  { value: "Resistencia al cambio del equipo", label: "Resistencia al cambio del equipo" },
  { value: "No saber por dónde empezar", label: "No saber por dónde empezar" },
  { value: "Otro", label: "Otro" },
];

const INVESTMENT_BUDGET_OPTIONS = [
  { value: "Menos de $1M COP", label: "Menos de $1M COP" },
  { value: "$1M - $5M COP", label: "$1M - $5M COP" },
  { value: "$5M - $10M COP", label: "$5M - $10M COP" },
  { value: "Más de $10M COP", label: "Más de $10M COP" },
];


const formSchema = z.object({
  // Step 1
  business_name: z.string().min(1, "El nombre del negocio es obligatorio."),
  sector: z.string().min(1, "El sector es obligatorio."),
  other_sector: z.string().optional(),
  num_employees: z.string().min(1, "El tamaño del equipo es obligatorio."),
  contact_email: z.string().email("Ingresa un correo electrónico válido."),
  whatsapp_number: z.string().min(10, "El número de WhatsApp es obligatorio y debe tener al menos 10 dígitos."),
  
  // Step 2
  value_proposition: z.string().min(1, "La propuesta de valor es obligatoria.").max(500, "Máximo 500 caracteres."),
  key_areas: z.array(z.string()).min(1, "Selecciona al menos un área clave."),
  manual_processes: z.array(z.string()).min(1, "Selecciona al menos un proceso manual.").max(2, "Elige máximo 2 procesos."),

  // Step 3
  customer_acquisition_channel: z.string().min(1, "Este campo es obligatorio."),
  other_customer_acquisition_channel: z.string().optional(),
  customer_communication_methods: z.array(z.string()).min(1, "Selecciona al menos un método."),

  // Step 4
  dian_electronic_invoicing: z.string().min(1, "Este campo es obligatorio."),
  admin_repetitive_hours: z.string().min(1, "Este campo es obligatorio."),
  error_frequency: z.string().min(1, "Este campo es obligatorio."),
  current_digital_tools: z.array(z.string()).min(1, "Selecciona al menos una herramienta."),

  // Step 5
  biggest_obstacle: z.string().min(1, "Este campo es obligatorio."),
  other_biggest_obstacle: z.string().optional(),
  investment_budget: z.string().min(1, "Este campo es obligatorio."),

}).refine((data) => {
  if (data.sector === "Otro" && (!data.other_sector || data.other_sector.trim() === '')) {
    return false;
  }
  if (data.customer_acquisition_channel === "Otro" && (!data.other_customer_acquisition_channel || data.other_customer_acquisition_channel.trim() === '')) {
    return false;
  }
  if (data.biggest_obstacle === "Otro" && (!data.other_biggest_obstacle || data.other_biggest_obstacle.trim() === '')) {
    return false;
  }
  return true;
}, {
  message: "Por favor, especifica la opción \"Otro\".",
  path: ["other_sector"],
});
type FormData = z.infer<typeof formSchema>;


interface DiagnosisFormProps {
  isOpen: boolean;
  onClose: () => void;
}

// Vite provides ImportMetaEnv automatically, no need for custom global declaration.

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

const DiagnosisForm: React.FC<DiagnosisFormProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [mdiScore, setMdiScore] = useState<number | null>(null);
  const [quickWins, setQuickWins] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formspreeState, sendToFormspree] = useFormspree("xanbllvb"); // Initialize Formspree hook

  const totalSteps = 5;

  // Initialize react-hook-form
  const {
    control,
    handleSubmit,
    watch,
    setValue,
    trigger,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      business_name: "",
      sector: "",
      other_sector: "",
      num_employees: "",
      contact_email: "",
      whatsapp_number: "",
      value_proposition: "",
      key_areas: [],
      manual_processes: [],
      customer_acquisition_channel: "",
      other_customer_acquisition_channel: "",
      customer_communication_methods: [],
      dian_electronic_invoicing: "",
      admin_repetitive_hours: "",
      error_frequency: "",
      current_digital_tools: [],
      biggest_obstacle: "",
      other_biggest_obstacle: "",
      investment_budget: "",
    }
  });

  const watchedSector = watch("sector");
  const watchedCustomerAcquisitionChannel = watch("customer_acquisition_channel");
  const watchedBiggestObstacle = watch("biggest_obstacle");

  const processSubmit = async (data: FormData) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_URL}/api/diagnostico`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }

      const result = await response.json();
      setMdiScore(result.mdi);
      setQuickWins(result.quickWins || []);
      localStorage.setItem('diagnosisFormData', JSON.stringify(data));

      // Send data to Formspree
      sendToFormspree(data);
      console.log("Formspree state after sending:", formspreeState);

      setCurrentStep(prev => prev + 1); // Advance to results screen
    } catch (err) {
      console.error("Error al llamar al backend:", err);
      setError("No pudimos obtener el diagnóstico. Por favor, asegúrate de que el backend esté corriendo y sea accesible.");
      setCurrentStep(prev => prev + 1); // Advance to show error message
    } finally {
      setIsLoading(false);
    }
  };

  const handleNext = async () => {
    let fieldsToValidate: (keyof FormData)[] = [];
    if (currentStep === 1) {
      if (watchedSector === "Otro") fieldsToValidate.push("other_sector");
    } else if (currentStep === 2) {
      fieldsToValidate = ["value_proposition", "key_areas", "manual_processes"];
    } else if (currentStep === 3) {
      fieldsToValidate = ["customer_acquisition_channel", "customer_communication_methods"];
      if (watchedCustomerAcquisitionChannel === "Otro") fieldsToValidate.push("other_customer_acquisition_channel");
    } else if (currentStep === 4) {
      fieldsToValidate = ["dian_electronic_invoicing", "admin_repetitive_hours", "error_frequency", "current_digital_tools"];
    } else if (currentStep === 5) {
      fieldsToValidate = ["biggest_obstacle", "investment_budget"];
      if (watchedBiggestObstacle === "Otro") fieldsToValidate.push("other_biggest_obstacle");
    }

    const isValid = await trigger(fieldsToValidate);
    if (!isValid) {
      setError("Por favor, completa todos los campos obligatorios.");
      return;
    }
    setError(null);
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    } else {
      // On the last step, the button triggers the final form submission
      handleSubmit(processSubmit)();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setError(null);
      setCurrentStep(prev => prev - 1);
    }
  };

  const renderSelect = (name: keyof FormData, label: string, options: {value: string, label: string}[], placeholder: string) => {
    return (
      <div className="mb-4">
        <Label htmlFor={name}>{label}</Label>
        <Controller name={name} control={control} render={({ field }) => (
            <Select onValueChange={(value) => { field.onChange(value); }} value={field.value as string}>
                <SelectTrigger id={name} className="w-full focus:outline-none focus:ring-0 focus:ring-offset-0 focus:shadow-[0_0_0_2px_rgba(251,146,60,0.5)_inset]"><SelectValue placeholder={placeholder} /></SelectTrigger>
                <SelectContent>
                    {options.map(opt => <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>)}
                </SelectContent>
            </Select>
        )} />
        {errors[name] && <p className="text-red-500 text-sm mt-1">{(errors[name] as any).message}</p>}
      </div>
    );
  };

  const renderCheckboxes = (
    fieldName: keyof FormData,
    options: string[],
    limit: number | null,
    limitMessage: string
  ) => (
    <Controller
      name={fieldName as any}
      control={control}
      render={({ field }) => (
        <div className="grid grid-cols-2 gap-2 mt-2">
          {options.map(option => (
            <div key={option} className="flex items-center space-x-2">
              <Checkbox
                id={`${fieldName}-${option}`}
                checked={field.value?.includes(option)}
                onCheckedChange={(checked) => {
                  const currentValue = field.value || [];
                  if (checked && limit !== null && currentValue.length >= limit) {
                    setError(limitMessage);
                    return;
                  }
                  setError(null);
                  const newValue = checked
                    ? [...currentValue, option]
                    : currentValue.filter((value: string) => value !== option);
                  field.onChange(newValue);
                }}
              />
              <Label htmlFor={`${fieldName}-${option}`}>{option}</Label>
            </div>
          ))}
        </div>
      )}
    />
  )

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="relative bg-card text-card-foreground p-8 rounded-lg shadow-lg max-w-2xl w-full flex flex-col max-h-[90vh]">
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4"
          onClick={onClose}
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </Button>
        <div className="mt-8 flex-grow overflow-y-auto pr-4">
          {currentStep <= totalSteps && (
            <div className="mb-8">
              <p className="text-center text-sm text-muted-foreground mb-2">Paso {currentStep} de {totalSteps}</p>
              <Progress value={(currentStep / totalSteps) * 100} className="w-full" />
            </div>
          )}

          {/* Paso 1: Perfil del Negocio */}
          <div className={currentStep === 1 ? '' : 'hidden'}>
            <div>
              <h2 className="text-2xl font-bold mb-4">Paso 1 · Perfil del Negocio</h2>
              <p className="mb-6 text-muted-foreground">Cuéntanos sobre tu empresa.</p>
              <div className="mb-4">
                <Label htmlFor="business_name">Nombre del negocio</Label>
                <Controller name="business_name" control={control} render={({ field }) => <Input id="business_name" type="text" placeholder="Tu Negocio S.A.S" {...field} className="w-full focus:outline-none focus:ring-0 focus:ring-offset-0 focus:shadow-[0_0_0_2px_rgba(251,146,60,0.5)_inset]" />} />
                {errors.business_name && <p className="text-red-500 text-sm mt-1">{(errors.business_name as any).message}</p>}
              </div>
              {renderSelect("sector", "Sector principal", SECTOR_OPTIONS, "Selecciona una opción")}
              {renderSelect("num_employees", "Número total de empleados", EMPLOYEE_RANGE_OPTIONS, "Selecciona el número de empleados")}
              <div className="mb-4">
                <Label htmlFor="contact_email">Correo Electrónico</Label>
                <Controller name="contact_email" control={control} render={({ field }) => <Input id="contact_email" type="email" placeholder="tu@ejemplo.com" {...field} className="w-full focus:outline-none focus:ring-0 focus:ring-offset-0 focus:shadow-[0_0_0_2px_rgba(251,146,60,0.5)_inset]" />} />
                {errors.contact_email && <p className="text-red-500 text-sm mt-1">{(errors.contact_email as any).message}</p>}
              </div>
              <div className="mb-4">
                <Label htmlFor="whatsapp_number">Número de WhatsApp</Label>
                <Controller name="whatsapp_number" control={control} render={({ field }) => <Input id="whatsapp_number" type="tel" placeholder="+57 3XX XXX XXXX" {...field} className="w-full focus:outline-none focus:ring-0 focus:ring-offset-0 focus:shadow-[0_0_0_2px_rgba(251,146,60,0.5)_inset]" />} />
                {errors.whatsapp_number && <p className="text-red-500 text-sm mt-1">{(errors.whatsapp_number as any).message}</p>}
              </div>
            </div>
          </div>

          {/* Paso 2: Operaciones Diarias */}
          <div className={currentStep === 2 ? '' : 'hidden'}>
            <div>
              <h2 className="text-2xl font-bold mb-4">Paso 2 · Operaciones Diarias</h2>
              <p className="mb-6 text-muted-foreground">Entendiendo tus flujos de trabajo.</p>
              <div className="mb-4">
                <Label htmlFor="value_proposition">Describe brevemente tu propuesta de valor (máx. 500 car.)</Label>
                <Controller name="value_proposition" control={control} render={({ field }) => <Textarea id="value_proposition" placeholder="Ej.: Ofrecemos productos artesanales de alta calidad..." {...field} maxLength={500} className="w-full focus:outline-none focus:ring-0 focus:ring-offset-0 focus:shadow-[0_0_0_2px_rgba(251,146,60,0.5)_inset]" />} />
                {errors.value_proposition && <p className="text-red-500 text-sm mt-1">{(errors.value_proposition as any).message}</p>}
              </div>
              <div className="mb-4">
                <Label>Áreas clave de tu negocio (selecciona una o más):</Label>
                {renderCheckboxes('key_areas', KEY_AREAS_OPTIONS, null, "")} {/* No limit */}
                {errors.key_areas && <p className="text-red-500 text-sm mt-1">{(errors.key_areas as any).message}</p>}
              </div>
              <div className="mb-4">
                <Label>Procesos que aún manejas manualmente (marque hasta 2):</Label>
                {renderCheckboxes('manual_processes', MANUAL_PROCESSES_OPTIONS, 2, "Solo puedes seleccionar hasta 2 procesos manuales.")}
                {errors.manual_processes && <p className="text-red-500 text-sm mt-1">{(errors.manual_processes as any).message}</p>}
              </div>
            </div>
          </div>

          {/* Paso 3: Estrategia de Crecimiento */}
          <div className={currentStep === 3 ? '' : 'hidden'}>
            <div>
              <h2 className="text-2xl font-bold mb-4">Paso 3 · Estrategia de Crecimiento</h2>
              <p className="mb-6 text-muted-foreground">Cómo llegas a tus clientes y te comunicas con ellos.</p>
              {renderSelect("customer_acquisition_channel", "Principal canal de adquisición de clientes", CUSTOMER_ACQUISITION_CHANNEL_OPTIONS, "Selecciona un canal")}
              <div className="mb-4">
                <Label>Métodos de comunicación con tus clientes (selecciona uno o más):</Label>
                {renderCheckboxes('customer_communication_methods', CUSTOMER_COMMUNICATION_METHODS_OPTIONS, null, "")} {/* No limit */}
                {errors.customer_communication_methods && <p className="text-red-500 text-sm mt-1">{(errors.customer_communication_methods as any).message}</p>}
              </div>
            </div>
          </div>

          {/* Paso 4: Situación Digital Actual */}
          <div className={currentStep === 4 ? '' : 'hidden'}>
            <div>
              <h2 className="text-2xl font-bold mb-4">Paso 4 · Situación Digital Actual</h2>
              <p className="mb-6 text-muted-foreground">Midiendo el punto de partida.</p>
              {renderSelect("dian_electronic_invoicing", "Estado de facturación electrónica DIAN", DIAN_ELECTRONIC_INVOICING_OPTIONS, "Selecciona una opción")}
              {renderSelect("admin_repetitive_hours", "Horas semanales en tareas administrativas repetitivas", ADMIN_REPETITIVE_HOURS_OPTIONS, "Selecciona una opción")}
              {renderSelect("error_frequency", "Frecuencia de errores o retrabajos", ERROR_FREQUENCY_OPTIONS, "Selecciona una opción")}
              <div className="mb-4">
                <Label>Herramientas digitales actuales (selecciona una o más):</Label>
                {renderCheckboxes('current_digital_tools', CURRENT_DIGITAL_TOOLS_OPTIONS, null, "")} {/* No limit */}
                {errors.current_digital_tools && <p className="text-red-500 text-sm mt-1">{(errors.current_digital_tools as any).message}</p>}
              </div>
            </div>
          </div>

          {/* Paso 5: Visión y Presupuesto */}
          <div className={currentStep === 5 ? '' : 'hidden'}>
            <div>
              <h2 className="text-2xl font-bold mb-4">Paso 5 · Visión y Presupuesto</h2>
              <p className="mb-6 text-muted-foreground">Hacia dónde quieres ir y cómo planeas llegar.</p>
              {renderSelect("biggest_obstacle", "Mayor obstáculo para implementar tecnología", BIGGEST_OBSTACLE_OPTIONS, "Selecciona una opción")}
              {renderSelect("investment_budget", "Presupuesto estimado para inversión tecnológica", INVESTMENT_BUDGET_OPTIONS, "Selecciona un rango")}
            </div>
          </div>
          
          {/* Pantalla de resultados */}
          <div className={currentStep > totalSteps ? '' : 'hidden'}>
            <div className="text-center">
              {isLoading && (
                <div className="flex flex-col items-center justify-center h-64">
                  <Zap className="w-16 h-16 text-primary animate-pulse mb-4" />
                  <p className="text-lg text-muted-foreground">Generando tu informe personalizado...</p>
                </div>
              )}
              {error && !isLoading && (
                <div className="text-red-500 text-lg">
                  <p>{error}</p>
                  <Button onClick={onClose} className="mt-4">Cerrar</Button>
                </div>
              )}
              {mdiScore !== null && !isLoading && !error && (
                <>
                  <div className="flex justify-center mb-6"><Rocket className="w-20 h-20 text-primary" /></div>
                  <h2 className="text-3xl font-bold mb-4">¡Listo! Tu Índice de Madurez Digital es {mdiScore} / 100</h2>
                  <p className="text-xl text-muted-foreground mb-6">
                    {mdiScore < 50 ? "Hay grandes oportunidades de automatización." : "Estás en buen camino, pero aún hay potencial."}
                  </p>
                  <div className="text-lg text-card-foreground mb-8 leading-relaxed">
                    <span className="font-bold">Mejoras inmediatas sugeridas:</span>
                    <ul className="list-disc list-inside mt-2">
                      {quickWins.map((win, index) => <li key={index}>{win}</li>)}
                    </ul>
                  </div>
                  <p className="text-md text-muted-foreground mb-8">En breve recibirás tu informe detallado por correo.</p>
                  <div className="flex flex-col gap-4 items-center">
                    <Button onClick={onClose}>Cerrar</Button>
                    <Button onClick={() => navigate('/consultoria')}>Agenda tu reunión de los resultados</Button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        
        {error && <p className="text-red-500 text-sm mt-4 text-center">{error}</p>}
        
        {currentStep <= totalSteps && (
          <div className="flex justify-between mt-8">
            <Button onClick={handlePrevious} disabled={currentStep === 1 || isLoading} variant="outline">Anterior</Button>
            <Button onClick={handleNext} disabled={isLoading}>
              {isLoading ? "Cargando..." : (currentStep === totalSteps ? "Generar Diagnóstico" : "Siguiente")}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DiagnosisForm;
