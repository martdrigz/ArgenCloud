import React from 'react';
import { 
  LayoutDashboard, Server, MapPin, Bell, Settings, LogOut, Activity, 
  ChevronLeft, ChevronRight 
} from 'lucide-react';
import { cn } from '../lib/utils';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
}

export default function Sidebar({ activeTab, setActiveTab, isCollapsed, setIsCollapsed }: SidebarProps) {
  const menuItems = [
    { id: 'overview', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'servers', label: 'Servidores', icon: Server },
    { id: 'branches', label: 'Sucursales', icon: MapPin },
    { id: 'monitoring', label: 'Monitoreo', icon: Activity },
    { id: 'alerts', label: 'Alertas', icon: Bell },
  ];

  // Desktop collapse state is used for width and visibility
  const effectivelyCollapsed = isCollapsed;

  return (
    <aside className={cn(
      "bg-[#141414] text-white flex flex-col h-screen border-r border-white/10 transition-all duration-300 overflow-hidden shrink-0",
      effectivelyCollapsed ? "lg:w-20" : "lg:w-64",
      "w-64" // Mobile width always 64 when open
    )}>
      {/* Logo Section */}
      <div className={cn(
        "p-6 flex items-center gap-3 h-20 shrink-0",
        effectivelyCollapsed ? "lg:justify-center" : "justify-start"
      )}>
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shrink-0 shadow-lg shadow-blue-600/20">
          <Activity size={20} className="text-white" />
        </div>
        <h1 className={cn(
          "text-xl font-bold tracking-tight whitespace-nowrap animate-in fade-in duration-300",
          effectivelyCollapsed ? "lg:hidden" : "block"
        )}>
          ArgenCloud
        </h1>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 px-4 space-y-2 mt-4 overflow-y-auto scrollbar-hide">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            title={effectivelyCollapsed ? item.label : undefined}
            className={cn(
              "w-full flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 group relative",
              activeTab === item.id 
                ? "bg-blue-600 text-white shadow-lg shadow-blue-900/20" 
                : "text-gray-400 hover:bg-white/5 hover:text-white",
              effectivelyCollapsed && "lg:justify-center"
            )}
          >
            <item.icon size={20} className={cn(
              "shrink-0",
              activeTab === item.id ? "text-white" : "text-gray-500 group-hover:text-white"
            )} />
            <span className={cn(
              "font-medium whitespace-nowrap overflow-hidden animate-in fade-in duration-300",
              effectivelyCollapsed ? "lg:hidden" : "block"
            )}>
              {item.label}
            </span>
            {effectivelyCollapsed && activeTab === item.id && (
              <div className="absolute left-0 w-1 h-6 bg-white rounded-r-full hidden lg:block" />
            )}
          </button>
        ))}
      </nav>

      {/* Footer Section */}
      <div className="p-4 border-t border-white/10 shrink-0">
        <button 
          onClick={() => setActiveTab('settings')}
          title={effectivelyCollapsed ? "Configuración" : undefined}
          className={cn(
            "w-full flex items-center gap-3 px-3 py-3 rounded-xl transition-all",
            activeTab === 'settings' 
              ? "bg-blue-600 text-white shadow-lg shadow-blue-900/20" 
              : "text-gray-400 hover:bg-white/5 hover:text-white",
            effectivelyCollapsed ? "lg:justify-center" : ""
          )}
        >
          <Settings size={20} className="shrink-0" />
          <span className={cn(
            "font-medium whitespace-nowrap animate-in fade-in duration-300",
            effectivelyCollapsed ? "lg:hidden" : "block"
          )}>Configuración</span>
        </button>
        
        <button 
          title={effectivelyCollapsed ? "Cerrar Sesión" : undefined}
          className={cn(
            "w-full flex items-center gap-3 px-3 py-3 text-red-400 hover:bg-red-500/10 rounded-xl transition-all mt-1",
            effectivelyCollapsed ? "lg:justify-center" : ""
          )}
        >
          <LogOut size={20} className="shrink-0" />
          <span className={cn(
            "font-medium whitespace-nowrap animate-in fade-in duration-300",
            effectivelyCollapsed ? "lg:hidden" : "block"
          )}>Cerrar Sesión</span>
        </button>

        {/* Toggle Collapse Button (Desktop Only) */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="hidden xl:flex w-full items-center gap-3 px-3 py-3 mt-4 text-gray-500 hover:text-white transition-all bg-white/5 rounded-xl hover:bg-white/10"
        >
          <ChevronLeft 
            size={20} 
            className={cn("transition-transform duration-300", effectivelyCollapsed && "rotate-180 mx-auto")} 
          />
          {!effectivelyCollapsed && (
            <span className="text-xs font-semibold uppercase tracking-wider">Contraer</span>
          )}
        </button>

        {/* Version Badge */}
        <div className={cn(
          "mt-6 flex items-center px-4 text-[10px] font-bold text-gray-600 uppercase tracking-widest mb-2.5",
          effectivelyCollapsed ? "justify-center" : "justify-start"
        )}>
          <span className={cn(effectivelyCollapsed ? "px-0" : "px-0.5")}>V1.2.3</span>
        </div>
      </div>
    </aside>
  );
}
