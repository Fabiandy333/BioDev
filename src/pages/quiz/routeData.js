// src/components/quiz/routeData.js

export const ENTRY_NODES = [
  "acv_start",
  "alz_start",
  "escl_start",
  "mig_start"
];

const routeTree = {
  // ----------- ACV -------------------
  acv_start: {
    id: "acv_start",
    isProgress: true,
    text: "Un hombre de 62 años llega a urgencias. Hace 30 minutos comenzó a hablar raro y tiene debilidad en el brazo derecho. ¿Qué haces primero?",
    options: [
      { label: "Llamar código ACV y priorizar atención médica", next: "acv_eval", correct: true },
      { label: "Pedirle que espere en sala", next: "acv_riesgo", correct: false }
    ]
  },
  acv_riesgo: {
    id: "acv_riesgo",
    text: "El retraso agrava el daño cerebral. El paciente empeora. ¿Quieres reiniciar el caso?",
    options: [{ label: "Reiniciar caso ACV", next: "acv_start" }]
  },
  acv_eval: {
    id: "acv_eval",
    isProgress: true,
    text: "Al examinarlo, tiene desviación de la boca y dificultad para sostener el brazo. ¿Qué escala aplicas?",
    options: [
      { label: "Escala de Glasgow ", next: "acv_glascow", correct: false },
      { label: "FAST o NIHSS para ACV", next: "acv_diagnosis", correct: true }
    ]
  },
  acv_glascow: {
    id: "acv_glascow",
    text: "Glasgow evalúa nivel de conciencia, pero para ACV es mejor FAST/NIHSS. ¿Volver a intentarlo?",
    options: [{ label: "Volver a evaluación", next: "acv_eval" }]
  },
  acv_diagnosis: {
    id: "acv_diagnosis",
    isProgress: true,
    text: "La escala indica posible ACV. El médico ordena TAC urgente. ¿Qué buscas descartar?",
    options: [
      { label: "Fractura ósea", next: "acv_mistake", correct: false },
      { label: "Hemorragia cerebral", next: "acv_treatment", correct: true }
    ]
  },
  acv_mistake: {
    id: "acv_mistake",
    text: "La prioridad es descartar sangrado, no fractura. ¿Regresar?",
    options: [{ label: "Volver a diagnóstico", next: "acv_diagnosis" }]
  },
  acv_treatment: {
    id: "acv_treatment",
    isProgress: true,
    text: "El TAC no muestra sangrado. Es un ACV isquémico y lleva 45 min de evolución. ¿Qué opción es mejor?",
    options: [
      { label: "Esperar a ver si mejora", next: "acv_mistake2", correct: false },
      { label: "Iniciar trombólisis si no hay contraindicaciones", next: "acv_rehab", correct: true }
    ]
  },
  acv_mistake2: {
    id: "acv_mistake2",
    text: "El tiempo es cerebro. No esperar. ¿Volver a tratamiento?",
    options: [{ label: "Intentar de nuevo", next: "acv_treatment" }]
  },
  acv_rehab: {
    id: "acv_rehab",
    isProgress: true,
    text: "Se estabiliza y mejora. ¿Cuál es la prioridad en rehabilitación temprana?",
    options: [
      { label: "Prevenir caídas y recuperar autonomía", next: "acv_prevent", correct: true },
      { label: "Enseñar a cocinar platos nuevos", next: "acv_mistake3", correct: false }
    ]
  },
  acv_mistake3: {
    id: "acv_mistake3",
    text: "Lo prioritario es la autonomía y evitar caídas. ¿Volver a elegir?",
    options: [{ label: "Volver a rehabilitación", next: "acv_rehab" }]
  },
  acv_prevent: {
    id: "acv_prevent",
    isProgress: true,
    text: "El paciente pregunta cómo evitar otro ACV. ¿Qué recomiendas?",
    options: [
      { label: "Controlar presión, dieta y adherir medicación", next: "end", correct: true },
      { label: "No hacer nada especial", next: "end", correct: false }
    ]
  },

  // ----------- ALZHEIMER -------------------
  alz_start: {
    id: "alz_start",
    isProgress: true,
    text: "María, de 75 años, es traída por su hija porque olvida dónde deja las cosas y se desorienta en casa. ¿Qué acción priorizas?",
    options: [
      { label: "Dejarla sola para que intente recordar", next: "alz_err1", correct: false },
      { label: "Etiquetar espacios y usar recordatorios visuales", next: "alz_trat", correct: true }
    ]
  },
  alz_err1: {
    id: "alz_err1",
    text: "Eso puede aumentar su confusión y ansiedad. ¿Intentar de nuevo?",
    options: [{ label: "Volver a inicio Alzheimer", next: "alz_start" }]
  },
  alz_trat: {
    id: "alz_trat",
    isProgress: true,
    text: "El médico confirma Alzheimer leve. ¿Qué tratamiento ayuda a retrasar el deterioro cognitivo?",
    options: [
      { label: "No hacer nada", next: "alz_err2", correct: false },
      { label: "Ejercicios de memoria, terapias y apoyo", next: "alz_casa", correct: true }
    ]
  },
  alz_err2: {
    id: "alz_err2",
    text: "La inactividad acelera el deterioro. Prueba de nuevo.",
    options: [{ label: "Volver al tratamiento", next: "alz_trat" }]
  },
  alz_casa: {
    id: "alz_casa",
    isProgress: true,
    text: "María olvida cerrar el gas. ¿Qué cambio es importante en casa?",
    options: [
      { label: "Adaptar utensilios y prevenir caídas", next: "alz_apoyo", correct: true },
      { label: "Poner obstáculos para ejercitarla", next: "alz_err3", correct: false }
    ]
  },
  alz_err3: {
    id: "alz_err3",
    text: "Poner obstáculos puede causar accidentes. ¿Intentar de nuevo?",
    options: [{ label: "Volver al hogar", next: "alz_casa" }]
  },
  alz_apoyo: {
    id: "alz_apoyo",
    isProgress: true,
    text: "Su hija nota que ya no reconoce a los nietos. ¿Qué debe priorizar la familia?",
    options: [
      { label: "Forzarla a recordar sin ayuda", next: "alz_err4", correct: false },
      { label: "Supervisar actividades diarias y brindar apoyo", next: "alz_ocio", correct: true }
    ]
  },
  alz_err4: {
    id: "alz_err4",
    text: "Forzar puede aumentar la frustración y el estrés. ¿Volver a la decisión anterior?",
    options: [{ label: "Volver al apoyo", next: "alz_apoyo" }]
  },
  alz_ocio: {
    id: "alz_ocio",
    isProgress: true,
    text: "¿Qué actividad de ocio es útil en Alzheimer?",
    options: [
      { label: "Cambiar la rutina cada día", next: "alz_err5", correct: false },
      { label: "Musicoterapia y tareas supervisadas", next: "alz_cierre", correct: true }
    ]
  },
  alz_err5: {
    id: "alz_err5",
    text: "Los cambios constantes generan más confusión. ¿Volver a ocio?",
    options: [{ label: "Intentar de nuevo", next: "alz_ocio" }]
  },
  alz_cierre: {
    id: "alz_cierre",
    isProgress: true,
    text: "Con la intervención, María mejora su seguridad y calidad de vida. ¿Cómo evalúas el resultado?",
    options: [
      { label: "Positivo, retrasaste el deterioro", next: "end", correct: true },
      { label: "Negativo, todo fue malo", next: "end", correct: false }
    ]
  },

  // ----------- ESCLEROSIS MÚLTIPLE -------------------
  escl_start: {
    id: "escl_start",
    isProgress: true,
    text: "Pedro, 29 años, consulta por fatiga, visión borrosa y debilidad en piernas. ¿Qué sospechas?",
    options: [
      { label: "Resfriado común", next: "escl_err1", correct: false },
      { label: "Esclerosis múltiple", next: "escl_dx", correct: true }
    ]
  },
  escl_err1: {
    id: "escl_err1",
    text: "Un resfriado no explica todos los síntomas neurológicos. ¿Intentar de nuevo?",
    options: [{ label: "Reintentar caso", next: "escl_start" }]
  },
  escl_dx: {
    id: "escl_dx",
    isProgress: true,
    text: "El neurólogo realiza estudios y confirma el diagnóstico. ¿Qué tratamiento inicias?",
    options: [
      { label: "Solo reposo absoluto", next: "escl_err2", correct: false },
      { label: "Medicamentos inmunomoduladores y terapia física", next: "escl_sint", correct: true }
    ]
  },
  escl_err2: {
    id: "escl_err2",
    text: "El reposo no controla la enfermedad ni mejora la calidad de vida. ¿Intentar de nuevo?",
    options: [{ label: "Volver al tratamiento", next: "escl_dx" }]
  },
  escl_sint: {
    id: "escl_sint",
    isProgress: true,
    text: "Pedro presenta sensibilidad al calor y fatiga. ¿Qué recomendaciones le das?",
    options: [
      { label: "Descansos graduados y ambientes frescos", next: "escl_actividad", correct: true },
      { label: "Hacer ejercicio intenso bajo el sol", next: "escl_err3", correct: false }
    ]
  },
  escl_err3: {
    id: "escl_err3",
    text: "El calor y el sobreesfuerzo pueden empeorar los síntomas. ¿Volver a recomendaciones?",
    options: [{ label: "Reintentar", next: "escl_sint" }]
  },
  escl_actividad: {
    id: "escl_actividad",
    isProgress: true,
    text: "Pedro quiere mantener movilidad. ¿Qué actividad es mejor?",
    options: [
      { label: "Ejercicio de bajo impacto y estiramientos", next: "escl_urgencia", correct: true },
      { label: "Evitar toda actividad física", next: "escl_err4", correct: false }
    ]
  },
  escl_err4: {
    id: "escl_err4",
    text: "La inactividad acelera la pérdida funcional. ¿Intentar de nuevo?",
    options: [{ label: "Volver a actividad", next: "escl_actividad" }]
  },
  escl_urgencia: {
    id: "escl_urgencia",
    isProgress: true,
    text: "Presenta pérdida súbita de visión. ¿Qué haces?",
    options: [
      { label: "Consulta médica urgente", next: "escl_terapia", correct: true },
      { label: "Esperar a que pase solo", next: "escl_err5", correct: false }
    ]
  },
  escl_err5: {
    id: "escl_err5",
    text: "Retrasar la consulta puede empeorar el pronóstico. ¿Intentar de nuevo?",
    options: [{ label: "Reintentar", next: "escl_urgencia" }]
  },
  escl_terapia: {
    id: "escl_terapia",
    isProgress: true,
    text: "El paciente pregunta para qué sirve la terapia ocupacional.",
    options: [
      { label: "Favorecer autonomía y calidad de vida", next: "end", correct: true },
      { label: "Eliminar toda actividad", next: "end", correct: false }
    ]
  },

  // ----------- MIGRAÑA -------------------
  mig_start: {
    id: "mig_start",
    isProgress: true,
    text: "Laura, 21 años, consulta por dolor de cabeza pulsátil, náuseas y destellos de luz. ¿Qué padece probablemente?",
    options: [
      { label: "Migraña", next: "mig_ambiente", correct: true },
      { label: "Alzheimer", next: "mig_err1", correct: false }
    ]
  },
  mig_err1: {
    id: "mig_err1",
    text: "La migraña es la causa más probable. Alzheimer no produce dolor agudo así. ¿Intentar de nuevo?",
    options: [{ label: "Reintentar caso Migraña", next: "mig_start" }]
  },
  mig_ambiente: {
    id: "mig_ambiente",
    isProgress: true,
    text: "Durante el ataque, ¿qué ambiente recomiendas?",
    options: [
      { label: "Lugar oscuro y tranquilo", next: "mig_disparadores", correct: true },
      { label: "Ambiente ruidoso y luminoso", next: "mig_err2", correct: false }
    ]
  },
  mig_err2: {
    id: "mig_err2",
    text: "El ruido y la luz agravan los síntomas. ¿Intentar de nuevo?",
    options: [{ label: "Volver al ambiente", next: "mig_ambiente" }]
  },
  mig_disparadores: {
    id: "mig_disparadores",
    isProgress: true,
    text: "Laura pregunta qué puede desencadenar migrañas. ¿Qué le aconsejas evitar?",
    options: [
      { label: "Comer dulces y trasnochar", next: "mig_err3", correct: false },
      { label: "Estrés, ciertos alimentos, falta de sueño", next: "mig_tratamiento", correct: true }
    ]
  },
  mig_err3: {
    id: "mig_err3",
    text: "Dulces y trasnocho pueden ser disparadores. ¿Intentar de nuevo?",
    options: [{ label: "Reintentar", next: "mig_disparadores" }]
  },
  mig_tratamiento: {
    id: "mig_tratamiento",
    isProgress: true,
    text: "¿Cuál es el tratamiento principal de la migraña?",
    options: [
      { label: "Analgésicos, triptanes y prevención", next: "mig_cuidado", correct: true },
      { label: "No hacer nada y esperar", next: "mig_err4", correct: false }
    ]
  },
  mig_err4: {
    id: "mig_err4",
    text: "El tratamiento adecuado previene episodios severos. ¿Intentar de nuevo?",
    options: [{ label: "Volver a tratamiento", next: "mig_tratamiento" }]
  },
  mig_cuidado: {
    id: "mig_cuidado",
    isProgress: true,
    text: "Laura quiere saber qué hacer en el autocuidado diario.",
    options: [
      { label: "Ver pantallas con brillo alto", next: "mig_err5", correct: false },
      { label: "Dormir bien, hidratarse, identificar desencadenantes", next: "mig_cierre", correct: true }
    ]
  },
  mig_err5: {
    id: "mig_err5",
    text: "Las pantallas brillantes empeoran el dolor. ¿Intentar de nuevo?",
    options: [{ label: "Volver a autocuidado", next: "mig_cuidado" }]
  },
  mig_cierre: {
    id: "mig_cierre",
    isProgress: true,
    text: "Gracias al manejo correcto, Laura reduce sus crisis y mejora su vida.",
    options: [
      { label: "Abandonar todo tratamiento", next: "end", correct: false },
      { label: "Finalizar ruta migraña", next: "end", correct: true }
    ]
  },

  // ----------- FIN DEL QUIZ -------------------
  end: {
    id: "end",
    text: "¡Ruta clínica finalizada! Has completado el caso.",
    options: [{ label: "Ver mi puntaje y podio", next: null }],
    end: true
  }
};

export function randomEntryNode() {
  return ENTRY_NODES[Math.floor(Math.random() * ENTRY_NODES.length)];
}

export function getProgressNodesForEntry(entryId, routeTree) {
  let current = entryId;
  let progressNodes = [];
  while (current && routeTree[current] && !routeTree[current].end) {
    if (routeTree[current].isProgress) progressNodes.push(current);
    const mainOption = routeTree[current].options.find(opt => opt.correct);
    if (!mainOption) break;
    current = mainOption.next;
  }
  return progressNodes;
}

export default routeTree;
