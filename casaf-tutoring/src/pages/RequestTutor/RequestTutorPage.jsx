import { useState } from "react";

// Shared
import ProgressBar from "./ProgressBar.jsx";
import ContactDetails from "./ContactDetails.jsx";

// General tutoring flow
import Step1_Level from "./general/Step1_Level.jsx";
import Step2_HelpType from "./general/Step2_HelpType.jsx";
import Step3_SubjectCourse from "./general/Step3_SubjectCourse.jsx";
import Step4_Hours from "./general/Step4_Hours.jsx";
import Step5_AdditionalInfo from "./general/Step5_AdditionalInfo.jsx";
import GeneralSuccess from "./general/Step7_Success.jsx";

// University applications flow
import AppStep2_HelpType from "./applications/Step2_HelpType.jsx";
import AppStep3_SubjectUniversity from "./applications/Step3_SubjectUniversity.jsx";
import AppStep4_Grades from "./applications/Step4_Grades.jsx";
import AppStep5_Hours from "./applications/Step5_Hours.jsx";
import AppSuccess from "./applications/last-message.jsx";

export default function RequestTutorPage() {
  const [step, setStep] = useState(1);
  const [flow, setFlow] = useState(null); // "general" or "applications"
  const [formData, setFormData] = useState({});

  const update = (data) =>
    setFormData((prev) => ({
      ...prev,
      ...data,
    }));

  const next = () => setStep((s) => s + 1);
  const back = () => setStep((s) => s - 1);

  const isApplications = flow === "applications";

  return (
    <div className="min-h-screen bg-[#FAF8F4] flex justify-center px-4 py-8 md:py-12">
      <div className="w-full max-w-5xl">
        {/* Heading like TheProfs */}
        <h1 className="text-center text-3xl md:text-4xl font-bold text-[#252952] mb-3">
          Request a Tutor
        </h1>
        <p className="text-center text-sm md:text-base text-gray-600 mb-6 md:mb-8">
          Tell us what you need help with and we’ll match you with the best CASAF Tutor.
        </p>

        <ProgressBar step={step} flow={flow} />

        {/* STEP RENDERING */}
        {step === 1 && (
          <Step1_Level
            next={next}
            update={update}
            setFlow={setFlow}
          />
        )}

        {/* GENERAL TUTORING FLOW */}
        {!isApplications && flow === "general" && step === 2 && (
          <Step2_HelpType next={next} back={back} update={update} />
        )}
        {!isApplications && flow === "general" && step === 3 && (
          <Step3_SubjectCourse next={next} back={back} update={update} />
        )}
        {!isApplications && flow === "general" && step === 4 && (
          <Step4_Hours next={next} back={back} update={update} />
        )}
        {!isApplications && flow === "general" && step === 5 && (
          <Step5_AdditionalInfo next={next} back={back} update={update} />
        )}
        {!isApplications && flow === "general" && step === 6 && (
          <ContactDetails
            next={next}
            back={back}
            update={update}
            formData={formData}
          />
        )}
        {!isApplications && flow === "general" && step === 7 && (
          <GeneralSuccess />
        )}

        {/* UNIVERSITY APPLICATIONS FLOW */}
        {isApplications && step === 2 && (
          <AppStep2_HelpType next={next} back={back} update={update} />
        )}
        {isApplications && step === 3 && (
          <AppStep3_SubjectUniversity next={next} back={back} update={update} />
        )}
        {isApplications && step === 4 && (
          <AppStep4_Grades next={next} back={back} update={update} />
        )}
        {isApplications && step === 5 && (
          <AppStep5_Hours next={next} back={back} update={update} />
        )}
        {isApplications && step === 6 && (
          <ContactDetails
            next={next}
            back={back}
            update={update}
            formData={formData}
          />
        )}
        {isApplications && step === 7 && <AppSuccess />}
      </div>
    </div>
  );
}