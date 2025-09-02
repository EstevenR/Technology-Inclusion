import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';
import { AgendamientoModal } from './AgendamientoModal';
import { ConsultationFormComponent } from './ConsultationFormComponent'; // Import the new component

const ConsultationForm: React.FC = () => {
  const navigate = useNavigate();
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [initialFormData, setInitialFormData] = useState<any | undefined>(undefined);

  useEffect(() => {
    const storedData = localStorage.getItem('diagnosisFormData');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setInitialFormData({
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
      });
      // Do not remove the item from localStorage here, ConsultationFormComponent will do it on success
    }
  }, []);

  const handleFormSuccess = (message: string) => {
    setSuccessMessage(message);
    setShowSuccessModal(true);
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
          {/* Render the reusable form component */}
          <ConsultationFormComponent onSuccess={handleFormSuccess} initialData={initialFormData} />
        </div>
      </div>
      <Footer />
      <AgendamientoModal
        isOpen={showSuccessModal}
        onClose={() => {
          console.log("AgendamientoModal onClose called");
          setShowSuccessModal(false);
          setTimeout(() => {
            navigate('/'); // Navigate to home on close after a delay
          }, 1000);
        }}
        successMessage={successMessage || ""}
      />
    </>
  );
};

export default ConsultationForm;