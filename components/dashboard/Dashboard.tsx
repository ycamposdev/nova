"use client";
import { useEffect, useState } from "react";
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
      <section className="font-['Inter']">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h3 className="text-xl font-bold text-[#1a1c1c]">
              Tus Tarjetas de Estudio
            </h3>
            <span className="text-sm text-[#434656]">
              {decks.length} tarjetas
            </span>
          </div>
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
              Cargando tarjetas...
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
