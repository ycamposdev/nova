"use client";

export default function Sidebar() {
  const iconStyle = {
    fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24",
    fontSize: "20px",
  };

  return (
    <aside className="fixed left-0 top-0 h-screen w-[240px] z-40 bg-[#f8fafc] border-r border-[#e2e8f0]/50 flex flex-col py-6 px-4 gap-8 font-['Inter'] antialiased text-sm tracking-tight">
      {/* User Profile */}
      <div className="flex items-center gap-3 px-2">
        <div className="w-10 h-10 rounded-full overflow-hidden bg-[#e2e2e2]">
          <img
            alt="Alex Rivers"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_9Dl5mEmXrVdJxocSgxSW-qUUpKPXcJyCnQMDVxqZoevEiHRRlwYSNwMbiDUk6YeLY_QEv3OubtgHYWwjV2WVEq3Ea53GoNjrcwhyZeMmYTwH8abZCt7o2QrkkN0cjL6_f3Kno-mTMGsGY_MOKAVgdO93S-FvBkeS_Ldcp9VAXtwPDSQGwGd6zolGaBodUCVnCYrUYQEA4ouX9Pl_bgPKQ-41kYpiAa2eJQTTFkkH-h_I7Dhc6MUvYH9j4A48U_gqMNBtY_B-sUsp"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-[#0f172a] font-bold">Alex Rivers</span>
          <span className="text-xs text-[#434656]">Premium Plan</span>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="flex flex-col gap-1">
        {/* Dashboard - Active State */}
        <a
          href="#"
          className="flex items-center gap-3 px-4 py-2 text-[#003ec7] font-semibold bg-[#dde1ff]/50 rounded-lg transition-all duration-200 ease-in-out active:scale-[0.98]"
        >
          <span className="material-symbols-outlined" style={iconStyle}>
            dashboard
          </span>
          Dashboard
        </a>

        {/* Recent */}
        <a
          href="#"
          className="flex items-center gap-3 px-4 py-2 text-[#475569] hover:text-[#0f172a] hover:bg-[#e2e8f0]/50 transition-colors rounded-lg transition-all duration-200 ease-in-out active:scale-[0.98]"
        >
          <span className="material-symbols-outlined" style={iconStyle}>
            history
          </span>
          Recent
        </a>

        {/* Favorites */}
        <a
          href="#"
          className="flex items-center gap-3 px-4 py-2 text-[#475569] hover:text-[#0f172a] hover:bg-[#e2e8f0]/50 transition-colors rounded-lg transition-all duration-200 ease-in-out active:scale-[0.98]"
        >
          <span className="material-symbols-outlined" style={iconStyle}>
            star
          </span>
          Favorites
        </a>

        {/* Settings */}
        <a
          href="#"
          className="flex items-center gap-3 px-4 py-2 text-[#475569] hover:text-[#0f172a] hover:bg-[#e2e8f0]/50 transition-colors rounded-lg transition-all duration-200 ease-in-out active:scale-[0.98]"
        >
          <span className="material-symbols-outlined" style={iconStyle}>
            settings
          </span>
          Settings
        </a>
      </nav>

      {/* CTA Section */}
      <div className="mt-4 px-2">
        <button className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-[#e2e2e2] text-[#1a1c1c] font-medium hover:bg-[#e8e8e8] transition-colors text-xs">
          <span
            className="material-symbols-outlined"
            style={{ ...iconStyle, fontSize: "18px" }}
          >
            create_new_folder
          </span>
          Create Folder
        </button>
      </div>

      {/* Footer Nav */}
      <div className="mt-auto flex flex-col gap-1 border-t border-[#e2e8f0]/50 pt-4">
        <a
          href="#"
          className="flex items-center gap-3 px-4 py-2 text-[#475569] hover:text-[#0f172a] transition-colors rounded-lg"
        >
          <span className="material-symbols-outlined" style={iconStyle}>
            help
          </span>
          Help Center
        </a>
        <a
          href="#"
          className="flex items-center gap-3 px-4 py-2 text-[#475569] hover:text-[#0f172a] transition-colors rounded-lg"
        >
          <span className="material-symbols-outlined" style={iconStyle}>
            logout
          </span>
          Log Out
        </a>
      </div>
    </aside>
  );
}
