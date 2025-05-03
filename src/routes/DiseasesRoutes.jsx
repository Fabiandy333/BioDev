import { Routes, Route } from "react-router-dom";
import DiseasesLayout from "../pages/diseases/DiseasesLayout";

// MIGRAÑA
import Symptoms from "../pages/diseases/illness1/Symptoms";
import Prevention from "../pages/diseases/illness1/Prevention";
import SelfCare from "../pages/diseases/illness1/SelfCare";
import Treatment from "../pages/diseases/illness1/Treatment";

// ACV
import SymptomsACV from "../pages/diseases/illness1/SymptomsACV";
import PreventionACV from "../pages/diseases/illness1/PreventionACV";
import SelfCareACV from "../pages/diseases/illness1/SelfCareACV";
import TreatmentACV from "../pages/diseases/illness1/TreatmentACV";

// ALZHEIMER
import SymptomsAlzheimer from "../pages/diseases/illness1/SymptomsAlzheimer";
import PreventionAlzheimer from "../pages/diseases/illness1/PreventionAlzheimer";
import SelfCareAlzheimer from "../pages/diseases/illness1/SelfCareAlzheimer";
import TreatmentAlzheimer from "../pages/diseases/illness1/TreatmentAlzheimer";

// ESCLEROSIS
import SymptomsEsclerosis from "../pages/diseases/illness1/SymptomsEsclerosis";
import PreventionEsclerosis from "../pages/diseases/illness1/PreventionEsclerosis";
import SelfCareEsclerosis from "../pages/diseases/illness1/SelfCareEsclerosis";
import TreatmentEsclerosis from "../pages/diseases/illness1/TreatmentEsclerosis";

const DiseasesRoutes = () => {
  return (
    <Routes>
      {/* Página principal */}
      <Route path="/" element={<DiseasesLayout />} />

      {/* MIGRAÑA */}
      <Route path="/migrana" element={
        <Symptoms
          title="Migraña"
          description="La migraña es un trastorno neurológico que se caracteriza por dolores de cabeza intensos y recurrentes, usualmente acompañados de náuseas, vómitos y sensibilidad a la luz o al sonido."
          imageRight="/migrana1.png"
        />
      } />
      <Route path="/migrana/prevencion" element={
        <Prevention
          title="Prevención"
          description="Algunas formas comunes de prevenir la migraña incluyen una dieta saludable, dormir bien, evitar el estrés, mantener una rutina estable y evitar factores desencadenantes como luces brillantes o ciertos alimentos."
          imageLeft="/prevencion.png"
          imageRight="/dieta.png"
        />
      } />
      <Route path="/migrana/autocuidado" element={
        <SelfCare
          title="Autocuidado"
          description="El autocuidado en personas con migraña implica mantener hábitos saludables como dormir bien, evitar el estrés prolongado, hidratarse, registrar los factores que desencadenan las crisis y seguir las recomendaciones médicas."
          imageLeft="/autocuidado.png"
          imageRight="/sleep.png"
        />
      } />
      <Route path="/migrana/tratamiento" element={
        <Treatment
          title="Tratamiento"
          description="El tratamiento de la migraña puede incluir analgésicos, medicamentos preventivos, cambios en el estilo de vida y terapias alternativas como acupuntura o fisioterapia. Es fundamental seguir las indicaciones médicas personalizadas."
          imageLeft="/tratamiento.png"
          imageRight="/analgesico.png"
        />
      } />

      {/* ACV */}
      <Route path="/acv" element={<SymptomsACV />} />
      <Route path="/acv/prevencion" element={
        <PreventionACV
          title="Prevención del ACV"
          description="Incluye control de la presión arterial, evitar el tabaquismo, y llevar una dieta saludable. El monitoreo regular y la actividad física reducen significativamente el riesgo."
          imageLeft="/acv-prev1.png"
          imageRight="/acv-prev2.png"
        />
      } />
      <Route path="/acv/autocuidado" element={
        <SelfCareACV
          title="Autocuidado en ACV"
          description="Rehabilitación continua, fisioterapia, seguimiento médico, una alimentación equilibrada y la participación en grupos de apoyo son fundamentales en la recuperación tras un ACV."
          imageLeft="/acv-auto1.png"
          imageRight="/acv-auto2.png"
        />
      } />
      <Route path="/acv/tratamiento" element={
        <TreatmentACV
          title="Tratamiento del ACV"
          description="El tratamiento inmediato puede incluir medicamentos trombolíticos, cirugía y cuidados intensivos. Posteriormente, es clave la rehabilitación neurológica y física personalizada."
          imageLeft="/acv-trat1.png"
          imageRight="/acv-trat2.png"
        />
      } />

      {/* ALZHEIMER */}
      <Route path="/alzheimer" element={<SymptomsAlzheimer />} />
      <Route path="/alzheimer/prevencion" element={
        <PreventionAlzheimer
          title="Prevención del Alzheimer"
          description="Adoptar una dieta saludable para el cerebro, mantener la mente activa con ejercicios cognitivos, y controlar la presión y el colesterol son estrategias útiles para reducir el riesgo de Alzheimer."
          imageLeft="/alz-prev1.png"
          imageRight="/alz-prev2.png"
        />
      } />
      <Route path="/alzheimer/autocuidado" element={
        <SelfCareAlzheimer
          title="Autocuidado en Alzheimer"
          description="El autocuidado incluye crear rutinas simples, asegurar entornos familiares y seguros, promover la socialización, y mantener actividades que estimulen la memoria y la atención."
          imageLeft="/alz-auto1.png"
          imageRight="/alz-auto2.png"
        />
      } />
      <Route path="/alzheimer/tratamiento" element={
        <TreatmentAlzheimer
          title="Tratamiento del Alzheimer"
          description="Aunque no existe cura, los tratamientos incluyen medicamentos para ralentizar la progresión, apoyo psicológico, intervenciones cognitivas y terapias no farmacológicas como la musicoterapia."
          imageLeft="/alz-trat1.png"
          imageRight="/alz-trat2.png"
        />
      } />

      {/* ESCLEROSIS MÚLTIPLE */}
      <Route path="/esclerosis" element={<SymptomsEsclerosis />} />
      <Route path="/esclerosis/prevencion" element={
        <PreventionEsclerosis
          title="Prevención de la Esclerosis Múltiple"
          description="Aunque no existe una forma definitiva de prevenir la esclerosis múltiple, mantener una buena salud inmunológica, hacer ejercicio regularmente y evitar el tabaquismo pueden ayudar a reducir el riesgo."
          imageLeft="/esclerosis-prev1.png"
          imageRight="/esclerosis-prev2.png"
        />
      } />
      <Route path="/esclerosis/autocuidado" element={
        <SelfCareEsclerosis
          title="Autocuidado en Esclerosis Múltiple"
          description="El autocuidado incluye seguir las indicaciones médicas, realizar fisioterapia, mantener una dieta balanceada y adaptar el entorno para facilitar la movilidad y la seguridad."
          imageLeft="/esclerosis-auto1.png"
          imageRight="/esclerosis-auto2.png"
        />
      } />
      <Route path="/esclerosis/tratamiento" element={
        <TreatmentEsclerosis
          title="Tratamiento de la Esclerosis Múltiple"
          description="Los tratamientos incluyen medicamentos inmunomoduladores, terapia física y ocupacional, y manejo de síntomas para mejorar la calidad de vida del paciente."
          imageLeft="/esclerosis-trat1.png"
          imageRight="/esclerosis-trat2.png"
        />
      } />
    </Routes>
  );
};

export default DiseasesRoutes;
