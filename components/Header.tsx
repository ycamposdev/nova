// "use client";

// export default function Header() {
//   const iconStyle = {
//     fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24",
//     fontSize: "20px",
//   };

//   return (
//     <header className="fixed top-0 right-0 w-[calc(100%-240px)] z-30 bg-white/80 backdrop-blur-md border-b border-[#eeeeee]/50 flex justify-between items-center h-16 px-8 ml-[240px] font-['Inter'] antialiased">
//       {/* Search and Brand Area */}
//       <div className="flex items-center gap-8 flex-1">
//         <span className="hidden md:block text-xl font-black tracking-tighter text-[#1a1c1c]">
//           Flashflow
//         </span>

//         <div className="relative w-full max-w-md group font-['Inter']">
//           <span
//             className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#434656]/50"
//             style={iconStyle}
//           >
//             search
//           </span>
//           <input
//             className="w-full bg-[#f3f3f3] border-none rounded-lg py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-[#0052ff]/20 transition-all outline-none text-[#1a1c1c] placeholder-[#434656]/60"
//             placeholder="Search resources, decks, or exams..."
//             type="text"
//           />
//         </div>
//       </div>

//       {/* Actions Area */}
//       <div className="flex items-center gap-4">
//         <button className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-[#1a1c1c] hover:bg-[#f3f3f3] transition-colors rounded-lg">
//           Exam Mode
//         </button>

//         <button
//           className="text-white px-5 py-2 rounded-lg text-sm font-semibold shadow-sm hover:brightness-105 transition-all active:scale-[0.98]"
//           style={{
//             background: "linear-gradient(135deg, #003ec7 0%, #0052ff 100%)",
//           }}
//         >
//           New Deck
//         </button>

//         <div className="h-6 w-px bg-[#eeeeee] mx-2"></div>

//         <button className="p-2 text-[#434656] hover:bg-[#f3f3f3] rounded-lg transition-colors flex items-center justify-center">
//           <span className="material-symbols-outlined" style={iconStyle}>
//             notifications
//           </span>
//         </button>

//         <button className="p-2 text-[#434656] hover:bg-[#f3f3f3] rounded-lg transition-colors flex items-center justify-center">
//           <span className="material-symbols-outlined" style={iconStyle}>
//             apps
//           </span>
//         </button>
//       </div>
//     </header>
//   );
// }
"use client";

export default function Header() {
  const iconStyle = {
    fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24",
    fontSize: "20px",
  };

  return (
    <header className="fixed top-0 right-0 w-[calc(100%-240px)] z-30 bg-[#ffffff] border-b border-[#e2e8f0] flex justify-between items-center h-16 px-8 ml-[240px] font-['Inter'] antialiased">
      {/* Search and Brand Area */}
      <div className="flex items-center gap-8 flex-1">
        <span className="hidden md:block text-xl font-black tracking-tighter text-[#1a1c1c] uppercase">
          nova
        </span>

        <div className="relative w-full max-w-md group">
          <span
            className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#434656]/50"
            style={iconStyle}
          >
            search
          </span>
          {/* El input DEBE ser gris (#f3f3f3) para resaltar sobre el fondo blanco del header */}
          <input
            className="w-full bg-[#f3f3f3] border-none rounded-lg py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-[#0052ff]/10 transition-all outline-none text-[#1a1c1c] placeholder-[#434656]/60"
            placeholder="Search resources, decks, or exams..."
            type="text"
          />
        </div>
      </div>

      {/* Actions Area */}
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-[#1a1c1c] hover:bg-[#f3f3f3] transition-colors rounded-lg">
          Exam Mode
        </button>

        <button
          className="text-white px-5 py-2 rounded-lg text-sm font-semibold shadow-sm hover:brightness-105 transition-all active:scale-[0.98]"
          style={{
            background: "linear-gradient(135deg, #003ec7 0%, #0052ff 100%)",
          }}
        >
          New Deck
        </button>

        <div className="h-6 w-px bg-[#e2e8f0] mx-2"></div>

        <button className="p-2 text-[#434656] hover:bg-[#f3f3f3] rounded-lg transition-colors flex items-center justify-center">
          <span className="material-symbols-outlined" style={iconStyle}>
            notifications
          </span>
        </button>

        <button className="p-2 text-[#434656] hover:bg-[#f3f3f3] rounded-lg transition-colors flex items-center justify-center">
          <span className="material-symbols-outlined" style={iconStyle}>
            apps
          </span>
        </button>
      </div>
    </header>
  );
}
