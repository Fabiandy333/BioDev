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
          description="La migraña es un tipo de dolor de cabeza intenso y recurrente, generalmente de un solo lado de la cabeza. Se caracteriza por un dolor pulsátil o punzante que puede durar desde unas pocas horas hasta varios días. Además del dolor, las personas con migraña pueden experimentar síntomas como náuseas, vómitos, sensibilidad a la luz (fotofobia), al sonido (fonofobia) y a los olores. A menudo, las migrañas pueden ser debilitantes y afectar las actividades diarias de quienes las padecen. Aunque la causa exacta no se conoce completamente, se cree que está relacionada con cambios en la actividad cerebral y factores genéticos."
        />
      } />
      <Route path="/migrana/sintomas" element={
        <Prevention
          title="Sintomas"
          description="Prevenir la migraña implica adoptar hábitos saludables y evitar ciertos factores que pueden desencadenarla. 
          Una de las primeras recomendaciones es identificar qué situaciones, alimentos o estímulos suelen provocar los episodios. Entre los desencadenantes más comunes se encuentran el consumo de chocolate, quesos curados, embutidos, alcohol (especialmente vino tinto), exceso de cafeína, el estrés, los cambios hormonales, la falta o exceso de sueño, los olores fuertes y la exposición a luces intensas o intermitentes. Llevar un diario de migrañas puede ayudarte a detectar patrones y evitarlos.
          También es importante mantener una rutina estable en tu vida diaria. Dormir y despertar a la misma hora, comer en horarios regulares, evitar saltarse comidas y mantener una buena hidratación son medidas fundamentales."
        />
      } />
      <Route path="/migrana/autocuidado" element={
        <SelfCare
          title="Autocuidado"
          description="El autocuidado en personas con migraña implica mantener hábitos saludables como dormir bien, evitar el estrés prolongado, hidratarse, registrar los factores que desencadenan las crisis y seguir las recomendaciones médicas."
          imageLeft="/autocuidado.png"
        />
      } />
      <Route path="/migrana/tratamiento" element={
        <Treatment
          title="Tratamiento"
          description="El tratamiento de la migraña puede incluir analgésicos, medicamentos preventivos, cambios en el estilo de vida y terapias alternativas como acupuntura o fisioterapia. Es fundamental seguir las indicaciones médicas personalizadas."
          imageLeft="/tratamiento.png"
        />
      } />

      {/* ACV */}
      <Route path="/acv" element={<SymptomsACV />} />
      <Route path="/acv/sintomas" element={
        <PreventionACV
          title="Sintomas"
          description="El accidente cerebrovascular (ACV) se caracteriza por debilidad repentina en un lado del cuerpo, dificultad para hablar o entender, pérdida de equilibrio o coordinación, problemas de visión, dolor de cabeza severo, confusión y pérdida de conciencia. En caso de detectar estos síntomas, busca atención médica inmediata, ya que el tratamiento temprano puede reducir el daño cerebral."
     
        />
      } />
      <Route path="/acv/autocuidado" element={
        <SelfCareACV
          title="Autocuidado"
          description="Rehabilitación continua, fisioterapia, seguimiento médico, una alimentación equilibrada y la participación en grupos de apoyo son fundamentales en la recuperación tras un ACV."
    
        />
      } />
      <Route path="/acv/tratamiento" element={
        <TreatmentACV
          title="Tratamiento"
          description="El tratamiento inmediato puede incluir medicamentos trombolíticos, cirugía y cuidados intensivos. Posteriormente, es clave la rehabilitación neurológica y física personalizada."
    
        />
      } />

      {/* ALZHEIMER */}
      <Route path="/alzheimer" element={<SymptomsAlzheimer />} />
      <Route path="/alzheimer/sintomas" element={
        <PreventionAlzheimer
          title="Sintomas"
          description="Los síntomas iniciales incluyen olvidos leves que progresan con el tiempo. Otros síntomas comunes incluyen dificultad para recordar conversaciones recientes, confusión con el tiempo y el lugar, problemas para reconocer personas familiares, y cambios en el comportamiento y personalidad. A medida que avanza, las personas pueden perder la capacidad de realizar tareas cotidianas y experimentar alteraciones graves en el juicio."

        />
      } />
      <Route path="/alzheimer/autocuidado" element={
        <SelfCareAlzheimer
          title="Autocuidado"
          description="El autocuidado incluye crear rutinas simples, asegurar entornos familiares y seguros, promover la socialización, y mantener actividades que estimulen la memoria y la atención."

        />
      } />
      <Route path="/alzheimer/tratamiento" element={
        <TreatmentAlzheimer
          title="Tratamiento"
          description="Aunque no existe cura, los tratamientos incluyen medicamentos para ralentizar la progresión, apoyo psicológico, intervenciones cognitivas y terapias no farmacológicas como la musicoterapia."
        />
      } />

      {/* ESCLEROSIS MÚLTIPLE */}
      <Route path="/esclerosis" element={<SymptomsEsclerosis />} />
      <Route path="/esclerosis/sintomas" element={
        <PreventionEsclerosis
          title="Sintomas"
          description="Aunque no existe una forma definitiva de prevenir la esclerosis múltiple, mantener una buena salud inmunológica, hacer ejercicio regularmente y evitar el tabaquismo pueden ayudar a reducir el riesgo."
        />
      } />
      <Route path="/esclerosis/autocuidado" element={
        <SelfCareEsclerosis
          title="Autocuidado"
          description="El autocuidado incluye seguir las indicaciones médicas, realizar fisioterapia, mantener una dieta balanceada y adaptar el entorno para facilitar la movilidad y la seguridad."

        />
      } />
      <Route path="/esclerosis/tratamiento" element={
        <TreatmentEsclerosis
          title="Tratamiento"
          description="Los tratamientos incluyen medicamentos inmunomoduladores, terapia física y ocupacional, y manejo de síntomas para mejorar la calidad de vida del paciente."
        />
      } />
    </Routes>
  );
};

export default DiseasesRoutes;
