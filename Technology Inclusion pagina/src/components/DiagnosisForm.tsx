import React, { useState, memo, useEffect } from 'react';
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";

import { Textarea } from "./ui/textarea";
import { Progress } from "./ui/progress";
import { Zap, Rocket, X } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { useForm as useFormspree } from '@formspree/react';
import { useForm, Controller, Control, FieldErrors, useController } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';


// --- Definiciones de Opciones ---
const SECTOR_OPTIONS = [
    { value: "Tienda minorista", label: "Tienda minorista" },
    { value: "Gastronomía", label: "Gastronomía" },
    { value: "Servicios profesionales", label: "Servicios profesionales" },
    { value: "Manufactura ligera", label: "Manufactura ligera" },
    { value: "Otro", label: "Otro" },
];

const EMPLOYEE_RANGE_OPTIONS = [
    { value: "1-5", label: "1-5" },
    { value: "6-10", label: "6-10" },
    { value: "11-20", label: "11-20" },
    { value: "21-50", label: "21-50" },
    { value: "+50", label: "+50" },
];

const KEY_AREAS_OPTIONS = ["Ventas y Marketing", "Operaciones y Producción", "Finanzas y Contabilidad", "Recursos Humanos", "Atención al Cliente", "Logística y Distribución"];
const MANUAL_PROCESSES_OPTIONS = ["Facturación-Ventas", "Inventario", "Agenda-Reservas", "Servicio al cliente", "Contabilidad-Reportes"];
const CUSTOMER_ACQUISITION_CHANNEL_OPTIONS = [{ value: "Redes Sociales", label: "Redes Sociales" }, { value: "Recomendaciones", label: "Recomendaciones" }, { value: "Publicidad Online", label: "Publicidad Online" }, { value: "Eventos/Ferias", label: "Eventos/Ferias" }, { value: "Tienda Física", label: "Tienda Física" }, { value: "Otro", label: "Otro" }];
const CUSTOMER_COMMUNICATION_METHODS_OPTIONS = ["WhatsApp", "Email", "Llamadas telefónicas", "Redes Sociales", "Chat en sitio web", "Personalmente"];
const DIAN_ELECTRONIC_INVOICING_OPTIONS = [{ value: "Sí", label: "Sí" }, { value: "No", label: "No" }, { value: "En proceso", label: "En proceso" }];
const ADMIN_REPETITIVE_HOURS_OPTIONS = [{ value: "0-5", label: "0-5 horas" }, { value: "6-10", label: "6-10 horas" }, { value: "11-20", label: "11-20 horas" }, { value: "+20", label: "+20 horas" }];
const ERROR_FREQUENCY_OPTIONS = [{ value: "< 5 %", label: "< 5 %" }, { value: "5-10 %", label: "5-10 %" }, { value: "> 10 %", label: "> 10 %" }, { value: "No lo sé", label: "No lo sé" }];
const CURRENT_DIGITAL_TOOLS_OPTIONS = ["Ninguna (solo Excel)", "Software contable", "CRM", "POS", "Dashboard BI", "Bots-Automatizaciones"];
const BIGGEST_OBSTACLE_OPTIONS = [{ value: "Falta de tiempo", label: "Falta de tiempo" }, { value: "Falta de conocimiento", label: "Falta de conocimiento" }, { value: "Costo de la tecnología", label: "Costo de la tecnología" }, { value: "Resistencia al cambio del equipo", label: "Resistencia al cambio del equipo" }, { value: "No saber por dónde empezar", label: "No saber por dónde empezar" }, { value: "Otro", label: "Otro" }];
const INVESTMENT_BUDGET_OPTIONS = [{ value: "Menos de $1M COP", label: "Menos de $1M COP" }, { value: "$1M - $5M COP", label: "$1M - $5M COP" }, { value: "$5M - $10M COP", label: "$5M - $10M COP" }, { value: "Más de $10M COP", label: "Más de $10M COP" }];

// --- Esquema de Validación Zod Corregido ---
const formSchema = z.object({
    business_name: z.string().min(1, "El nombre del negocio es obligatorio."),
    sector: z.string().min(1, "El sector es obligatorio."),
    other_sector: z.string().optional(),
    num_employees: z.string().min(1, "El tamaño del equipo es obligatorio."),
    contact_email: z.string().email("Ingresa un correo electrónico válido."),
    whatsapp_number: z.string().min(10, "El número de WhatsApp es obligatorio y debe tener al menos 10 dígitos."),
    value_proposition: z.string().min(1, "La propuesta de valor es obligatoria.").max(500, "Máximo 500 caracteres."),
    key_areas: z.array(z.string()).min(1, "Selecciona al menos un área clave."),
    manual_processes: z.array(z.string()).min(1, "Selecciona al menos un proceso manual.").max(2, "Elige máximo 2 procesos."),
    customer_acquisition_channel: z.string().min(1, "Este campo es obligatorio."),
    other_customer_acquisition_channel: z.string().optional(),
    customer_communication_methods: z.array(z.string()).min(1, "Selecciona al menos un método."),
    dian_electronic_invoicing: z.string().min(1, "Este campo es obligatorio."),
    admin_repetitive_hours: z.string().min(1, "Este campo es obligatorio."),
    error_frequency: z.string().min(1, "Este campo es obligatorio."),
    current_digital_tools: z.array(z.string()).min(1, "Selecciona al menos una herramienta."),
    biggest_obstacle: z.string().min(1, "Este campo es obligatorio."),
    other_biggest_obstacle: z.string().optional(),
    investment_budget: z.string().min(1, "Este campo es obligatorio."),
}).superRefine((data, ctx) => {
    if (data.sector === "Otro" && !data.other_sector?.trim()) {
        ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Por favor, especifica el sector.", path: ["other_sector"] });
    }
    if (data.customer_acquisition_channel === "Otro" && !data.other_customer_acquisition_channel?.trim()) {
        ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Por favor, especifica el canal.", path: ["other_customer_acquisition_channel"] });
    }
    if (data.biggest_obstacle === "Otro" && !data.other_biggest_obstacle?.trim()) {
        ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Por favor, especifica el obstáculo.", path: ["other_biggest_obstacle"] });
    }
});

type FormData = z.infer<typeof formSchema>;

// --- Definición de Pasos para Validación ---
const STEPS_FIELDS: (keyof FormData)[][] = [
    ["business_name", "sector", "num_employees", "contact_email", "whatsapp_number", "other_sector"],
    ["value_proposition", "key_areas", "manual_processes"],
    ["customer_acquisition_channel", "customer_communication_methods", "other_customer_acquisition_channel"],
    ["dian_electronic_invoicing", "admin_repetitive_hours", "error_frequency", "current_digital_tools"],
    ["biggest_obstacle", "investment_budget", "other_biggest_obstacle"],
];

interface DiagnosisFormProps {
    isOpen: boolean;
    onClose: () => void;
}

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

// --- Componentes Auxiliares Optimizados ---
interface RenderSelectProps {
    name: keyof FormData;
    label: string;
    options: { value: string; label: string }[];
    placeholder: string;
    control: Control<FormData>;
    errors: FieldErrors<FormData>;
}

const RenderSelect: React.FC<RenderSelectProps> = ({ name, label, options, placeholder, control, errors }) => {
    // Removed isOpen state and useEffect as they are not needed for native select

    return (
        <div className="mb-4">
            <Label htmlFor={name}>{label}</Label>
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <select
                        id={name}
                        {...field} // This spreads onChange, onBlur, value, and name
                        className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        required // Assuming all these selects are required based on Zod schema
                    >
                        <option value="" disabled>{placeholder}</option> {/* Placeholder option */}
                        {options.map(opt => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                    </select>
                )}
            />
            {errors[name] && <p className="text-red-500 text-sm mt-1">{errors[name]?.message}</p>}
        </div>
    );
};

interface RenderCheckboxesProps {
    fieldName: keyof FormData;
    options: string[];
    control: Control<FormData>;
}

const RenderCheckboxes: React.FC<RenderCheckboxesProps> = ({ fieldName, options, control }) => {
    const { field } = useController({ name: fieldName as "key_areas", control });
    const currentValue = Array.isArray(field.value) ? field.value : [];
    const limit = fieldName === 'manual_processes' ? 2 : null;
    const isLimitReached = limit !== null && currentValue.length >= limit;

    return (
        <div className="grid grid-cols-2 gap-2 mt-2">
            {options.map(option => {
                const isChecked = currentValue.includes(option);
                return (
                    <div key={option} className="flex items-center space-x-2">
                        <Checkbox
                            id={`${fieldName}-${option}`}
                            checked={isChecked}
                            disabled={isLimitReached && !isChecked}
                            onCheckedChange={(checked) => {
                                const newValue = checked
                                    ? [...currentValue, option]
                                    : currentValue.filter((value: string) => value !== option);
                                field.onChange(newValue);
                            }}
                        />
                        <Label htmlFor={`${fieldName}-${option}`} className={isLimitReached && !isChecked ? 'text-muted-foreground' : ''}>
                            {option}
                        </Label>
                    </div>
                );
            })}
        </div>
    );
};

// --- Componente Principal ---
const DiagnosisForm: React.FC<DiagnosisFormProps> = ({ isOpen, onClose }) => {
    console.log("DiagnosisForm: Component rendered. isOpen:", isOpen); // Add this
    const navigate = useNavigate();

    
    const [currentStep, setCurrentStep] = useState(1);
    const [mdiScore, setMdiScore] = useState<number | null>(null);
    const [quickWins, setQuickWins] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    

    const [formspreeState, sendToFormspree] = useFormspree("xanbllvb");

    const totalSteps = 5;

    const { control, handleSubmit, watch, trigger, register, reset, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            business_name: "", sector: "", other_sector: "", num_employees: "", contact_email: "",
            whatsapp_number: "", value_proposition: "", key_areas: [], manual_processes: [],
            customer_acquisition_channel: "", other_customer_acquisition_channel: "", customer_communication_methods: [],
            dian_electronic_invoicing: "", admin_repetitive_hours: "", error_frequency: "", current_digital_tools: [],
            biggest_obstacle: "", other_biggest_obstacle: "", investment_budget: ""
        }
    });

    useEffect(() => {
        if (isOpen) {
            console.log("DiagnosisForm: isOpen is true. Resetting form.");
            reset(); // Reset the form to its default values
            setCurrentStep(1); // Also reset the step to the first one
        }
    }, [isOpen, reset]); // Depend on isOpen and reset function

    if (!isOpen) return null;

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
            if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
            
            const result = await response.json();
            setMdiScore(result.mdi);
            setQuickWins(result.quickWins || []);

            // Combine original data with results for storage
            const dataWithResults = { ...data, mdi: result.mdi, quickWins: result.quickWins };

            localStorage.setItem('diagnosisFormData', JSON.stringify(dataWithResults));
            sendToFormspree(dataWithResults); // Send combined data to Formspree

            setCurrentStep(prev => prev + 1);
        } catch (err) {
            console.error("Error al llamar al backend:", err);
            setError("No pudimos obtener el diagnóstico. Por favor, asegúrate de que el backend esté corriendo y sea accesible.");
            setCurrentStep(prev => prev + 1);
        } finally {
            setIsLoading(false);
        }
    };

    const handleNext = async () => {
        const fieldsToValidate = STEPS_FIELDS[currentStep - 1];
        const isValid = await trigger(fieldsToValidate);
        
        if (isValid) {
            if (currentStep < totalSteps) {
                setCurrentStep(prev => prev + 1);
            } else {
                handleSubmit(processSubmit)();
            }
        }
    };

    const handlePrevious = () => {
        if (currentStep > 1) {
            setCurrentStep(prev => prev - 1);
        }
    };

    return (
        <>
            <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                <div className="relative bg-card text-card-foreground p-8 rounded-lg shadow-lg max-w-2xl w-full flex flex-col max-h-[90vh]">
                    <Button variant="ghost" size="icon" className="absolute top-4 right-4" onClick={() => {
                    console.log("DiagnosisForm: Close button clicked.");
                    onClose();
                }} aria-label="Close">
                        <X className="h-4 w-4" />
                    </Button>

                    <div className="mt-8 flex-grow overflow-y-auto pr-4">
                        {currentStep <= totalSteps && (
                            <div className="mb-8">
                                <p className="text-center text-sm text-muted-foreground mb-2">Paso {currentStep} de {totalSteps}</p>
                                <Progress value={(currentStep / totalSteps) * 100} className="w-full" />
                            </div>
                        )}

                        {currentStep === 1 && (
                            <div>
                                <h2 className="text-2xl font-bold mb-4">Paso 1 · Perfil del Negocio</h2>
                                <p className="mb-6 text-muted-foreground">Cuéntanos sobre tu empresa.</p>
                                <div className="mb-4">
                                    <Label htmlFor="business_name">Nombre del negocio</Label>
                                    <Input id="business_name" {...register("business_name")} className="w-full focus:outline-none focus:ring-0 focus:ring-offset-0 focus:shadow-[0_0_0_2px_rgba(251,146,60,0.5)_inset]" />
                                    {errors.business_name && <p className="text-red-500 text-sm mt-1">{errors.business_name.message}</p>}
                                </div>
                                <RenderSelect key={`sector-${currentStep}`} name="sector" label="Sector principal" options={SECTOR_OPTIONS} placeholder="Selecciona una opción" control={control} errors={errors} />
                                {watchedSector === 'Otro' && (
                                    <div className="mb-4">
                                        <Label htmlFor="other_sector">Especifica el sector</Label>
                                        <Input id="other_sector" {...register("other_sector")} className="w-full focus:outline-none focus:ring-0 focus:ring-offset-0 focus:shadow-[0_0_0_2px_rgba(251,146,60,0.5)_inset]" />
                                        {errors.other_sector && <p className="text-red-500 text-sm mt-1">{errors.other_sector.message}</p>}
                                    </div>
                                )}
                                <RenderSelect key={`num_employees-${currentStep}`} name="num_employees" label="Número total de empleados" options={EMPLOYEE_RANGE_OPTIONS} placeholder="Selecciona el número de empleados" control={control} errors={errors} />
                                <div className="mb-4">
                                    <Label htmlFor="contact_email">Correo Electrónico</Label>
                                    <Input id="contact_email" type="email" {...register("contact_email")} className="w-full focus:outline-none focus:ring-0 focus:ring-offset-0 focus:shadow-[0_0_0_2px_rgba(251,146,60,0.5)_inset]" />
                                    {errors.contact_email && <p className="text-red-500 text-sm mt-1">{errors.contact_email.message}</p>}
                                </div>
                                <div className="mb-4">
                                    <Label htmlFor="whatsapp_number">Número de WhatsApp</Label>
                                    <Input id="whatsapp_number" type="tel" {...register("whatsapp_number")} className="w-full focus:outline-none focus:ring-0 focus:ring-offset-0 focus:shadow-[0_0_0_2px_rgba(251,146,60,0.5)_inset]" />
                                    {errors.whatsapp_number && <p className="text-red-500 text-sm mt-1">{errors.whatsapp_number.message}</p>}
                                </div>
                            </div>
                        )}

                        {currentStep === 2 && (
                            <div>
                                <h2 className="text-2xl font-bold mb-4">Paso 2 · Operaciones Diarias</h2>
                                <p className="mb-6 text-muted-foreground">Entendiendo tus flujos de trabajo.</p>
                                <div className="mb-4">
                                    <Label htmlFor="value_proposition">Describe brevemente tu propuesta de valor (máx. 500 car.)</Label>
                                    <Textarea id="value_proposition" {...register("value_proposition")} maxLength={500} className="w-full focus:outline-none focus:ring-0 focus:ring-offset-0 focus:shadow-[0_0_0_2px_rgba(251,146,60,0.5)_inset]" />
                                    {errors.value_proposition && <p className="text-red-500 text-sm mt-1">{errors.value_proposition.message}</p>}
                                </div>
                                <div className="mb-4">
                                    <Label>Áreas clave de tu negocio (selecciona una o más):</Label>
                                    <RenderCheckboxes fieldName='key_areas' options={KEY_AREAS_OPTIONS} control={control} />
                                    {errors.key_areas && <p className="text-red-500 text-sm mt-1">{errors.key_areas.message}</p>}
                                </div>
                                <div className="mb-4">
                                    <Label>Procesos que aún manejas manualmente (marque hasta 2):</Label>
                                    <RenderCheckboxes fieldName='manual_processes' options={MANUAL_PROCESSES_OPTIONS} control={control} />
                                    {errors.manual_processes && <p className="text-red-500 text-sm mt-1">{errors.manual_processes.message}</p>}
                                </div>
                            </div>
                        )}

                        {currentStep === 3 && (
                            <div>
                                <h2 className="text-2xl font-bold mb-4">Paso 3 · Estrategia de Crecimiento</h2>
                                <p className="mb-6 text-muted-foreground">Cómo llegas a tus clientes y te comunicas con ellos.</p>
                                <RenderSelect key={`customer_acquisition_channel-${currentStep}`} name="customer_acquisition_channel" label="Principal canal de adquisición de clientes" options={CUSTOMER_ACQUISITION_CHANNEL_OPTIONS} placeholder="Selecciona un canal" control={control} errors={errors} />
                                {watchedCustomerAcquisitionChannel === 'Otro' && (
                                    <div className="mb-4">
                                        <Label htmlFor="other_customer_acquisition_channel">Especifica el canal</Label>
                                        <Input id="other_customer_acquisition_channel" {...register("other_customer_acquisition_channel")} className="w-full focus:outline-none focus:ring-0 focus:ring-offset-0 focus:shadow-[0_0_0_2px_rgba(251,146,60,0.5)_inset]" />
                                        {errors.other_customer_acquisition_channel && <p className="text-red-500 text-sm mt-1">{errors.other_customer_acquisition_channel.message}</p>}
                                    </div>
                                )}
                                <div className="mb-4">
                                    <Label>Métodos de comunicación con tus clientes (selecciona uno o más):</Label>
                                    <RenderCheckboxes fieldName='customer_communication_methods' options={CUSTOMER_COMMUNICATION_METHODS_OPTIONS} control={control} />
                                    {errors.customer_communication_methods && <p className="text-red-500 text-sm mt-1">{errors.customer_communication_methods.message}</p>}
                                </div>
                            </div>
                        )}

                        {currentStep === 4 && (
                            <div>
                                <h2 className="text-2xl font-bold mb-4">Paso 4 · Situación Digital Actual</h2>
                                <p className="mb-6 text-muted-foreground">Midiendo el punto de partida.</p>
                                <RenderSelect key={`dian_electronic_invoicing-${currentStep}`} name="dian_electronic_invoicing" label="Estado de facturación electrónica DIAN" options={DIAN_ELECTRONIC_INVOICING_OPTIONS} placeholder="Selecciona una opción" control={control} errors={errors} />
                                <RenderSelect key={`admin_repetitive_hours-${currentStep}`} name="admin_repetitive_hours" label="Horas semanales en tareas administrativas repetitivas" options={ADMIN_REPETITIVE_HOURS_OPTIONS} placeholder="Selecciona una opción" control={control} errors={errors} />
                                <RenderSelect key={`error_frequency-${currentStep}`} name="error_frequency" label="Frecuencia de errores o retrabajos" options={ERROR_FREQUENCY_OPTIONS} placeholder="Selecciona una opción" control={control} errors={errors} />
                                <div className="mb-4">
                                    <Label>Herramientas digitales actuales (selecciona una o más):</Label>
                                    <RenderCheckboxes fieldName='current_digital_tools' options={CURRENT_DIGITAL_TOOLS_OPTIONS} control={control} />
                                    {errors.current_digital_tools && <p className="text-red-500 text-sm mt-1">{errors.current_digital_tools.message}</p>}
                                </div>
                            </div>
                        )}

                        {currentStep === 5 && (
                            <div>
                                <h2 className="text-2xl font-bold mb-4">Paso 5 · Visión y Presupuesto</h2>
                                <p className="mb-6 text-muted-foreground">Hacia dónde quieres ir y cómo planeas llegar.</p>
                                <RenderSelect key={`biggest_obstacle-${currentStep}`} name="biggest_obstacle" label="Mayor obstáculo para implementar tecnología" options={BIGGEST_OBSTACLE_OPTIONS} placeholder="Selecciona una opción" control={control} errors={errors} />
                                {watchedBiggestObstacle === 'Otro' && (
                                    <div className="mb-4">
                                        <Label htmlFor="other_biggest_obstacle">Especifica el obstáculo</Label>
                                        <Input id="other_biggest_obstacle" {...register("other_biggest_obstacle")} className="w-full focus:outline-none focus:ring-0 focus:ring-offset-0 focus:shadow-[0_0_0_2px_rgba(251,146,60,0.5)_inset]" />
                                        {errors.other_biggest_obstacle && <p className="text-red-500 text-sm mt-1">{errors.other_biggest_obstacle.message}</p>}
                                    </div>
                                )}
                                <RenderSelect key={`investment_budget-${currentStep}`} name="investment_budget" label="Presupuesto estimado para inversión tecnológica" options={INVESTMENT_BUDGET_OPTIONS} placeholder="Selecciona un rango" control={control} errors={errors} />
                            </div>
                        )}

                        {currentStep > totalSteps && (
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
                        )}
                    </div>

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
            
        </>
    );
};

export default DiagnosisForm;