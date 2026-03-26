"use client";
import { useEffect, useState } from "react";
// Importamos el servicio y el componente atomizado
import { apiService } from "@/services/apiService";
import DeckCard from "@/components/dashboard/DeckCard";

export default function Dashboard() {
  const [decks, setDecks] = useState([]);
  const [loading, setLoading] = useState(true);

  const iconFilled = {
    fontVariationSettings: "'FILL' 1, 'wght' 300, 'GRAD' 0, 'opsz' 24",
  };
  const iconOutline = {
    fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24",
  };

  useEffect(() => {
    async function loadData() {
      try {
        // Llamada a la API (puedes pasar el ID del usuario si lo tienes)
        const data = await apiService.getCard("user_alex");
        setDecks(data);
      } catch (error) {
        console.error("Error cargando mazos:", error);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  return (
    <main className="pt-24 px-12 pb-12 min-h-screen bg-[#f9f9f9] w-full">
      {/* <section className="mb-12 flex justify-between items-end font-['Inter']">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight text-[#1a1c1c] mb-2">
            Good morning, Alex.
          </h1>
          <p className="text-[#434656] text-lg">
            You have{" "}
            <span className="text-[#003ec7] font-semibold">
              {decks.length * 4} cards
            </span>{" "}
            to review today en {decks.length} mazos.
          </p>
        </div>
        <div className="flex gap-3">
          <div className="bg-[#f3f3f3] p-4 rounded-xl border border-[#c3c5d9]/15 flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-[#003ec7]/10 flex items-center justify-center text-[#003ec7]">
              <span className="material-symbols-outlined" style={iconFilled}>
                bolt
              </span>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-widest font-bold text-[#434656]/60">
                Current Streak
              </div>
              <div className="text-xl font-bold font-['Geist_Mono'] text-[#1a1c1c]">
                14 Days
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-12 gap-6 mb-12 font-['Inter']">
        <div className="col-span-8 bg-[#ffffff] rounded-xl p-8 border border-[#c3c5d9]/15 shadow-[0_20px_40px_rgba(0,0,0,0.04)] flex flex-col justify-between overflow-hidden relative group cursor-pointer">
          <div className="relative z-10">
            <span className="px-3 py-1 bg-[#003ec7]/10 text-[#003ec7] text-[10px] font-bold rounded uppercase tracking-wider mb-6 inline-block">
              Recommended
            </span>
            <h2 className="text-3xl font-bold text-[#1a1c1c] max-w-md mb-4 leading-tight">
              Advanced Biochemistry & Molecular Structures
            </h2>
            <p className="text-[#434656] max-w-sm mb-8">
              Master the TCA cycle and metabolic pathways with our new
              interactive visualization cards.
            </p>
            <button className="flex items-center gap-2 text-[#003ec7] font-bold group/btn">
              Start Session{" "}
              <span className="material-symbols-outlined group-hover/btn:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </button>
          </div>
          <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-10 pointer-events-none">
            <img
              alt="Abstract Biology"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEB9X0qbvPnuZxQQB234QcU0WD1NmQqeFiXC1iVrFM_IvvS5-azq5oAAI3905ixNcufDY_cIQDGNF0vQYA-HouNUcAUEoK593rn7bPyj5uNxmICL7O8l2VXMhIxWQuHDhZF3LD8OJeKZ1POtpbRap_zS1M2RXtJCfB6VeRQ6TeWe8apdU5GXnVyRfmY0NRIFk7OkzaCulAwMCha1JTicBRCGYS2KbGaIqRv8tMV_MU91IK1grlvpmQJZZHZ4DAxLLywAilpboE49sw"
            />
          </div>
        </div>

        <div className="col-span-4 flex flex-col gap-6">
          <div className="bg-[#f3f3f3] rounded-xl p-6 flex-1 flex flex-col justify-center">
            <span className="text-sm text-[#434656] mb-1 font-medium">
              Retention Rate
            </span>
            <div className="text-4xl font-black font-['Geist_Mono'] text-[#003ec7]">
              94%
            </div>
            <div className="mt-4 w-full bg-[#e2e2e2] h-1 rounded-full overflow-hidden">
              <div className="bg-[#003ec7] h-full w-[94%]"></div>
            </div>
          </div>
          <div className="bg-[#4600c8] text-white rounded-xl p-6 flex-1 relative overflow-hidden">
            <div className="relative z-10">
              <span className="text-sm opacity-80 mb-1 font-medium">
                Practice Time
              </span>
              <div className="text-4xl font-black font-['Geist_Mono']">
                2.4h
              </div>
            </div>
            <span
              className="material-symbols-outlined absolute -right-4 -bottom-4 text-8xl opacity-10 rotate-12"
              style={{ fontSize: "96px" }}
            >
              schedule
            </span>
          </div>
        </div>
      </section> */}

      {/* 3. Your Study Decks Grid (DINÁMICO) */}
      <section className="font-['Inter']">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-xl font-bold text-[#1a1c1c]">Your Study Decks</h3>
          <div className="flex gap-2">
            <button className="p-2 bg-[#ffffff] rounded-lg border border-[#c3c5d9]/15">
              <span className="material-symbols-outlined" style={iconOutline}>
                grid_view
              </span>
            </button>
            <button className="p-2 text-[#434656]">
              <span className="material-symbols-outlined" style={iconOutline}>
                list
              </span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Mostramos un mensaje de carga si la API tarda */}
          {loading && (
            <p className="col-span-full text-center py-10">
              Loading your resources...
            </p>
          )}

          {/* MAPEAMOS LAS CARDS DESDE EL ESTADO DE LA API */}
          {!loading &&
            decks.map((deck: any) => <DeckCard key={deck.id} deck={deck} />)}

          {/* New Project Placeholder (Siempre visible al final) */}
          <div className="rounded-xl p-6 border-2 border-dashed border-[#e2e2e2] flex flex-col items-center justify-center text-[#434656] hover:border-[#003ec7]/40 hover:bg-[#003ec7]/5 transition-all group cursor-pointer min-h-[200px]">
            <div className="w-12 h-12 rounded-full bg-[#eeeeee] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-2xl">add</span>
            </div>
            <span className="font-bold text-sm">Create New Resource</span>
            <span className="text-[10px] uppercase tracking-widest mt-1 opacity-60">
              Deck or Exam
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
