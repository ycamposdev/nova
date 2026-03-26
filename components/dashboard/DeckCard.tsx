// interface DeckProps {
//   deck: {
//     id: string;
//     title: string;
//     description: string;
//     itemsCount?: number;
//   };
// }

// export default function DeckCard({ deck }: DeckProps) {
//   return (
//     <div className="bg-white p-6 rounded-xl border border-slate-200">
//       <h4 className="font-bold text-[#1a1c1c]">{deck.title}</h4>
//       <p className="text-sm text-[#434656]">{deck.description}</p>
//     </div>
//   );
// }
export default function DeckCard({ deck }: { deck: any }) {
  return (
    <div className="bg-[#ffffff] rounded-xl p-6 border border-[#c3c5d9]/15 hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] transition-all flex flex-col gap-4">
      <div className="flex justify-between items-start">
        <div className="w-12 h-12 rounded-lg bg-[#f3f3f3] flex items-center justify-center text-[#003ec7]">
          <span className="material-symbols-outlined">book</span>
        </div>
      </div>
      <div>
        {/* Usamos el nombre que venga de la API de libros (ej: titulo) o el de mazos (title) */}
        <h4 className="text-lg font-bold text-[#1a1c1c] mb-1">
          {deck.titulo || "Sin título"}
        </h4>
        <p className="text-[#434656] text-sm line-clamp-2">
          {deck.descripcion || "Sin descripción disponible"}
        </p>
      </div>
      <div className="mt-auto pt-4 border-t border-[#eeeeee]">
        <span className="text-xs text-[#434656]/60">ID: {deck.id}</span>
      </div>
    </div>
  );
}
