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
          description="Los síntomas de la migraña incluyen dolor de cabeza intenso, generalmente pulsante, que se localiza en un solo lado de la cabeza, aunque puede ser bilateral. A menudo va acompañado de náuseas y vómitos. Las personas con migraña también experimentan una mayor sensibilidad a la luz y al sonido, lo que les obliga a buscar un ambiente oscuro y tranquilo. En algunos casos, antes del dolor, se pueden presentar alteraciones visuales conocidas como auras, como destellos de luz o líneas en zigzag. Otros síntomas comunes son hormigueo o adormecimiento en una parte del cuerpo y mareos o vértigo, que pueden generar sensación de inestabilidad."
        />
      } />
      <Route path="/migrana/autocuidado" element={
        <SelfCare
          title="Autocuidado"
          description="Mantén horarios regulares de sueño y buena hidratación, identifica y evita tus desencadenantes (alimentación, estrés, falta de descanso) usando un breve diario, practica técnicas sencillas de relajación (respiración o meditación) y, al sentir el inicio de un ataque, busca un ambiente oscuro y tranquilo, aplica compresas según prefieras y sigue la medicación prescrita. Si ocurren más de 4 episodios al mes o empeora la intensidad, consulta al profesional."
          imageLeft="/autocuidado.png"
        />
      } />
      <Route path="/migrana/tratamiento" element={
        <Treatment
          title="Tratamiento"
          description="El tratamiento de la migraña se basa en aliviar el dolor y prevenir nuevos episodios. Se usan analgésicos, triptanes y, en casos recurrentes, medicamentos preventivos. Es clave mantener hábitos saludables: dormir bien, evitar el estrés, hidratarse y reconocer desencadenantes como ciertos alimentos o luces fuertes. También pueden ayudar terapias como acupuntura o fisioterapia, siempre bajo control médico."
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
          description="Tras un ACV es vital controlar factores de riesgo como hipertensión, glucemia y colesterol, cumplir estrictamente la medicación prescrita y apoyarse en recordatorios. La rehabilitación temprana con fisioterapia y terapia ocupacional, junto con ejercicio progresivo bajo supervisión y abordaje de disfagia, favorecen la recuperación de movilidad y autonomía. Adaptar el hogar para prevenir caídas, mantener una dieta saludable ajustada a las necesidades y prestar atención a la piel y funciones básicas completan el cuidado físico. "
    
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
          description="Tras el diagnóstico de Alzheimer, es esencial adaptar el hogar y las rutinas para mantener la seguridad y favorecer la autonomía en la medida de lo posible, por ejemplo etiquetando espacios, usando recordatorios y adaptando utensilios para prevenir caídas y confusiones. Estimular capacidades cognitivas con actividades significativas y sencillas según la etapa, como ejercicios de memoria, música o tareas de la vida diaria supervisadas, puede contribuir a retrasar el deterioro."

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
          description="La esclerosis múltiple presenta síntomas como fatiga extrema, visión borrosa o doble, dificultad para caminar, pérdida del equilibrio, hormigueo o entumecimiento en extremidades, debilidad muscular, problemas cognitivos y espasmos musculares. Estos síntomas pueden variar en intensidad según la persona."
        />
      } />
      <Route path="/esclerosis/autocuidado" element={
        <SelfCareEsclerosis
          title="Autocuidado"
          description="Después del diagnóstico de esclerosis múltiple es fundamental adherirse al tratamiento de modificación de la enfermedad y gestionar síntomas como fatiga y sensibilidad al calor con descansos graduados y ambientes frescos; mantener actividad física adaptada (ejercicios de bajo impacto, estiramientos y rehabilitación) para preservar fuerza, movilidad y bienestar emocional; cuidar la nutrición con dieta equilibrada rica en frutas, verduras y proteínas magras, evitando procesados excesivos."

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
