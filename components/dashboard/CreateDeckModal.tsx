"use client";

import React, { useState } from "react";
import { apiService } from "@/services/apiService";

interface CreateDeckModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Question {
  questionText: string;
  options: string[];
  correctAnswerIndex: number;
}

export default function CreateDeckModal({
  isOpen,
  onClose,
}: CreateDeckModalProps) {
  // Estados para el flujo del modal
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Estado para la información básica del mazo
  const [deckData, setDeckData] = useState({
    name: "",
    description: "",
    category: "Medication",
    resourceType: "Examen",
    coverImage: "",
  });

  // Estado para la pregunta actual que se está escribiendo
  const [currentQuestion, setCurrentQuestion] = useState<Question>({
    questionText: "",
    options: [""], // Inicia con un campo de opción vacío
    correctAnswerIndex: 0,
  });

  // Lista de todas las preguntas registradas
  const [questionsList, setQuestionsList] = useState<Question[]>([]);

  if (!isOpen) return null;

  // --- Funciones de Lógica ---

  const handleAddOption = () => {
    if (currentQuestion.options.length < 6) {
      setCurrentQuestion({
        ...currentQuestion,
        options: [...currentQuestion.options, ""],
      });
    }
  };

  const handleOptionChange = (index: number, value: string) => {
    const newOptions = [...currentQuestion.options];
    newOptions[index] = value;
    setCurrentQuestion({ ...currentQuestion, options: newOptions });
  };

  const handleNextQuestion = () => {
    // Validar que tenga texto y al menos 2 opciones
    if (!currentQuestion.questionText || currentQuestion.options.length < 2)
      return;

    setQuestionsList([...questionsList, currentQuestion]);
    // Limpiar para la siguiente pregunta
    setCurrentQuestion({
      questionText: "",
      options: [""],
      correctAnswerIndex: 0,
    });
  };

  const handleFinalize = async () => {
    setIsSubmitting(true);
    // Guardamos la última pregunta si tiene contenido
    const finalQuestions = currentQuestion.questionText
      ? [...questionsList, currentQuestion]
      : questionsList;

    const fullData = { ...deckData, questions: finalQuestions };

    try {
      // Aquí llamas a tu apiService
      // await apiService.createDeck(fullData);
      console.log("Enviando a API:", fullData);
      setStep(3); // Ir a pantalla de éxito
    } catch (error) {
      console.error("Error al crear:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      <div className="bg-white w-full max-w-lg rounded-xl shadow-2xl border border-slate-200 overflow-hidden transform transition-all animate-in fade-in zoom-in duration-300">
        {/* Header del Modal */}
        <div className="px-8 py-6 border-b border-slate-100 flex justify-between items-center bg-white">
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-900">
            {step === 1 && "Crear Nuevo Mazo"}
            {step === 2 && "Ingresar Preguntas"}
            {step === 3 && "¡Completado!"}
          </h2>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-900 transition-colors"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="p-8">
          {/* PASO 1: INFORMACIÓN BÁSICA */}
          {step === 1 && (
            <div className="space-y-5 animate-in slide-in-from-right duration-300">
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                  Nombre del Mazo *
                </label>
                <input
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2.5 px-4 text-sm focus:ring-2 focus:ring-black outline-none transition-all"
                  placeholder="p. ej. Microsoft AZ-900"
                  value={deckData.name}
                  onChange={(e) =>
                    setDeckData({ ...deckData, name: e.target.value })
                  }
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                  Descripción
                </label>
                <textarea
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2.5 px-4 text-sm min-h-[80px] resize-none outline-none focus:ring-2 focus:ring-black"
                  placeholder="Simulacro de examen oficial de Azure..."
                  value={deckData.description}
                  onChange={(e) =>
                    setDeckData({ ...deckData, description: e.target.value })
                  }
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                    Categoría
                  </label>
                  <select
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2.5 px-4 text-sm outline-none focus:ring-2 focus:ring-black"
                    value={deckData.category}
                    onChange={(e) =>
                      setDeckData({ ...deckData, category: e.target.value })
                    }
                  >
                    <option>Medication</option>
                    <option>Language</option>
                    <option>Science</option>
                    <option>Neurology</option>
                    <option>Cloud Computing</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                    Tipo
                  </label>
                  <div className="flex items-center gap-4 py-2.5">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="type"
                        checked={deckData.resourceType === "Examen"}
                        onChange={() =>
                          setDeckData({ ...deckData, resourceType: "Examen" })
                        }
                        className="text-black focus:ring-black"
                      />
                      <span className="text-sm font-medium">Examen</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="type"
                        checked={deckData.resourceType === "Flashcards"}
                        onChange={() =>
                          setDeckData({
                            ...deckData,
                            resourceType: "Flashcards",
                          })
                        }
                        className="text-black focus:ring-black"
                      />
                      <span className="text-sm font-medium">Flashcards</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="pt-6 flex justify-end gap-4">
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 text-sm font-bold text-slate-500 hover:text-black uppercase tracking-wider"
                >
                  Cancelar
                </button>
                <button
                  onClick={() => setStep(2)}
                  disabled={!deckData.name}
                  className="px-8 py-2.5 bg-black text-white text-sm font-bold rounded-lg hover:bg-slate-800 disabled:opacity-50 uppercase tracking-wider shadow-md"
                >
                  Ingresar Preguntas
                </button>
              </div>
            </div>
          )}

          {/* PASO 2: INGRESAR PREGUNTAS */}
          {step === 2 && (
            <div className="space-y-5 animate-in slide-in-from-right duration-300">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">
                  Pregunta #{questionsList.length + 1}
                </span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  {questionsList.length} registradas
                </span>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                  Pregunta
                </label>
                <textarea
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2.5 px-4 text-sm min-h-[60px] resize-none outline-none focus:ring-2 focus:ring-black"
                  placeholder="p. ej. ¿Qué es el cloud computing?"
                  value={currentQuestion.questionText}
                  onChange={(e) =>
                    setCurrentQuestion({
                      ...currentQuestion,
                      questionText: e.target.value,
                    })
                  }
                />
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 flex justify-between">
                  Opciones de respuesta
                  <span>Correcta</span>
                </label>

                <div className="max-h-[200px] overflow-y-auto pr-2 custom-scrollbar space-y-2">
                  {currentQuestion.options.map((option, idx) => (
                    <div
                      key={idx}
                      className="flex gap-2 items-center animate-in fade-in slide-in-from-top-1"
                    >
                      <input
                        className="flex-1 bg-slate-50 border border-slate-200 rounded-lg py-2 px-3 text-sm outline-none focus:ring-1 focus:ring-black"
                        placeholder={`Opción ${String.fromCharCode(97 + idx)})`}
                        value={option}
                        onChange={(e) =>
                          handleOptionChange(idx, e.target.value)
                        }
                      />
                      <input
                        type="radio"
                        name="correct"
                        checked={currentQuestion.correctAnswerIndex === idx}
                        onChange={() =>
                          setCurrentQuestion({
                            ...currentQuestion,
                            correctAnswerIndex: idx,
                          })
                        }
                        className="w-5 h-5 text-green-600 focus:ring-green-500 border-slate-300"
                      />
                    </div>
                  ))}
                </div>

                <button
                  onClick={handleAddOption}
                  className="flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors pt-2"
                >
                  <span className="material-symbols-outlined text-sm">
                    add_circle
                  </span>
                  Añadir Opción
                </button>
              </div>

              <div className="pt-6 flex flex-col gap-3">
                <div className="flex justify-between gap-4">
                  <button
                    onClick={() => setStep(1)}
                    className="px-4 py-2 text-sm font-bold text-slate-500"
                  >
                    Atrás
                  </button>
                  <button
                    onClick={handleNextQuestion}
                    className="flex-1 px-6 py-2.5 bg-slate-100 text-black text-sm font-bold rounded-lg hover:bg-slate-200 uppercase tracking-wider"
                  >
                    Ingresar Siguiente Pregunta
                  </button>
                </div>
                <button
                  onClick={handleFinalize}
                  disabled={
                    isSubmitting ||
                    (!currentQuestion.questionText &&
                      questionsList.length === 0)
                  }
                  className="w-full py-3 bg-black text-white text-sm font-bold rounded-lg hover:opacity-90 uppercase tracking-wider shadow-lg flex items-center justify-center gap-2"
                >
                  {isSubmitting ? "Guardando..." : "Finalizar y Crear Tarjeta"}
                  <span className="material-symbols-outlined text-sm">
                    check_circle
                  </span>
                </button>
              </div>
            </div>
          )}

          {/* PASO 3: ÉXITO */}
          {step === 3 && (
            <div className="py-10 text-center space-y-4 animate-in zoom-in duration-300">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span
                  className="material-symbols-outlined text-5xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  check_circle
                </span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                ¡Creada con éxito!
              </h3>
              <p className="text-slate-500">
                Tu tarjeta de estudio para <b>{deckData.name}</b> ya está
                disponible en tu dashboard.
              </p>
              <button
                onClick={onClose}
                className="mt-8 px-10 py-3 bg-black text-white font-bold rounded-xl hover:scale-105 transition-all uppercase text-sm tracking-widest"
              >
                Ir al Dashboard
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
