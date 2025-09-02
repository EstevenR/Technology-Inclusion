from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from typing import List, Optional
from fastapi.responses import FileResponse
from fpdf import FPDF

app = FastAPI()

# Configuración de CORS para permitir solicitudes desde tu frontend de React
# IMPORTANTE: Por seguridad, una vez que tu frontend esté desplegado, deberías cambiar "*"
# por la URL de tu frontend en Render (ej: "https://tu-frontend.onrender.com")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/health")
async def health_check():
    return {"status": "ok"}

class DiagnosisRequest(BaseModel):
    business_name: str
    sector: str
    other_sector: Optional[str] = None
    num_employees: str
    value_proposition: str
    key_areas: List[str]
    manual_processes: List[str]
    customer_acquisition_channel: str
    other_customer_acquisition_channel: Optional[str] = None
    customer_communication_methods: List[str]
    dian_electronic_invoicing: str
    admin_repetitive_hours: str
    error_frequency: str
    current_digital_tools: List[str]
    biggest_obstacle: str
    other_biggest_obstacle: Optional[str] = None
    investment_budget: str
    contact_email: str
    whatsapp_number: str

class ConsultationRequest(BaseModel):
    name: str
    email: str
    phone: str
    preferred_date: str
    preferred_time: str
    sector: str
    other_sector: Optional[str] = None
    business_description: str
    num_employees: str
    operational_stages: List[str]
    paper_excel_processes: List[str]
    dian_electronic_invoicing: str
    admin_repetitive_hours: str
    errors_rework_percentage: str
    current_digital_tools: List[str]
    priority_objective: str
    other_priority_objective: Optional[str] = None
    mdi_score: int

@app.post("/api/schedule-consultation")
async def schedule_consultation(request: ConsultationRequest):
    # Aquí puedes agregar la lógica para guardar la cita en tu base de datos
    # o enviarla a un sistema de calendario.
    print(f"Nueva consulta agendada para {request.name} el {request.preferred_date} a las {request.preferred_time}")
    return {"message": "¡Solicitud de consultoría recibida! Nos comunicaremos contigo pronto para confirmar la fecha y hora de tu sesión."}

@app.post("/api/diagnostico")
async def diagnose(request: DiagnosisRequest):
    mdi_score = 0
    quick_wins = []

    # --- Lógica de puntuación del MDI ---
    # Puntuación por número de empleados
    if request.num_employees == "1-5": mdi_score += 10
    elif request.num_employees == "6-10": mdi_score += 20
    elif request.num_employees == "11-20": mdi_score += 30
    elif request.num_employees == "21-50": mdi_score += 40
    elif request.num_employees == "+50": mdi_score += 50

    # Puntuación por facturación electrónica DIAN
    if request.dian_electronic_invoicing == "Sí": mdi_score += 15

    # Puntuación por horas administrativas repetitivas
    if request.admin_repetitive_hours == "0-5": mdi_score += 10
    elif request.admin_repetitive_hours == "6-10": mdi_score += 5

    # Puntuación por frecuencia de errores
    if request.error_frequency == "< 5 %": mdi_score += 10
    elif request.error_frequency == "5-10 %": mdi_score += 5

    # Puntuación por herramientas digitales actuales
    if "CRM" in request.current_digital_tools: mdi_score += 10
    if "Bots-Automatizaciones" in request.current_digital_tools: mdi_score += 15
    if "ERP" in request.current_digital_tools: mdi_score += 10
    if "Software contable" in request.current_digital_tools: mdi_score += 5
    if "Herramientas de Marketing Digital" in request.current_digital_tools: mdi_score += 5

    # Asegurar que el MDI esté en el rango 0-100
    mdi_score = max(0, min(100, mdi_score))

    # --- Lógica de generación de Quick Wins ---
    if request.dian_electronic_invoicing == "No":
        quick_wins.append("Implementar la facturación electrónica DIAN para optimizar procesos fiscales y cumplir con la normativa.")
    
    if request.manual_processes:
        quick_wins.append(f"Automatizar los procesos manuales como '{request.manual_processes[0]}' para mejorar la eficiencia y reducir errores.")

    if request.admin_repetitive_hours == ">10":
        quick_wins.append("Explorar soluciones de automatización para reducir las horas semanales dedicadas a tareas administrativas repetitivas.")

    if request.error_frequency == ">10 %":
        quick_wins.append("Implementar controles de calidad y herramientas de gestión para reducir la frecuencia de errores.")

    if "CRM" not in request.current_digital_tools:
        quick_wins.append("Considerar la implementación de un CRM para mejorar la gestión de clientes y el seguimiento de ventas.")

    if "Bots-Automatizaciones" not in request.current_digital_tools:
        quick_wins.append("Explorar la automatización de tareas repetitivas con bots o RPA para liberar tiempo del personal.")

    # Mensaje general basado en el MDI
    if mdi_score < 30:
        quick_wins.append(f"Tu empresa, {request.business_name}, tiene un gran potencial de crecimiento digital. Enfócate en las automatizaciones básicas.")
    elif mdi_score < 60:
        quick_wins.append(f"{request.business_name} está en un buen camino, pero aún hay áreas clave para digitalizar y optimizar.")
    else:
        quick_wins.append(f"¡Felicidades, {request.business_name}! Tu empresa muestra una alta madurez digital. Continúa explorando innovaciones.")

    # --- Integrations to be added here ---
    # 1. OpenAI API call for more sophisticated MDI and quick-wins
    # 2. Save lead and result to database (Supabase/PostgreSQL)
    # 3. Generate PDF (PDFMonkey/Make + Brevo) and send to prospect's email
    # 4. Create CRM task and follow-up sequence (HubSpot + Make)
    # -------------------------------------

    return {"mdi": mdi_score, "quickWins": quick_wins}
