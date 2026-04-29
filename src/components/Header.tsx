import React from 'react';
import { Search, Bell, User, Globe, Menu, Activity } from 'lucide-react';
import { cn } from '../lib/utils';

interface HeaderProps {
  toggleMobileMenu: () => void;
  setActiveTab: (tab: string) => void;
}

export default function Header({ toggleMobileMenu, setActiveTab }: HeaderProps) {
  const [isSearchExpanded, setIsSearchExpanded] = React.useState(false);

  return (
    <header className="h-16 border-b border-gray-200 bg-white flex items-center px-4 md:px-8 sticky top-0 z-30 shrink-0">
      {/* Left Section: Navigation (Mobile/Tablet) & Search (Desktop/Tablet Horizontal) */}
      <div className="flex items-center gap-3 md:gap-4 flex-1">
        <div className="flex items-center gap-3 xl:hidden">
          <button 
            onClick={toggleMobileMenu}
            className={cn(
              "p-2 text-gray-500 hover:bg-gray-100 rounded-xl transition-all shrink-0",
              isSearchExpanded ? "hidden sm:block" : "block"
            )}
          >
            <Menu size={20} />
          </button>

          {/* Brand Logo - Visible only in Header on Tablet/Mobile */}
          <div 
            className={cn(
              "flex items-center gap-2 mr-3 shrink-0 cursor-pointer",
              isSearchExpanded ? "hidden" : "flex"
            )} 
            onClick={() => setActiveTab('overview')}
          >
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shrink-0 shadow-lg shadow-blue-600/20">
              <Activity size={18} className="text-white" />
            </div>
            <span className="font-bold text-gray-900 tracking-tight text-sm">ArgenCloud</span>
          </div>
        </div>

        {/* Global Search - Visible Left Column on Desktop (xl) and Tablet Horizontal (lg) */}
        <div className="hidden lg:block w-full max-w-xl">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Buscar..." 
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm"
            />
          </div>
        </div>
      </div>

      {/* Right Section: Mobile Search Toggle & Global Tools */}
      <div className={cn(
        "flex items-center gap-2 sm:gap-4 md:gap-2 lg:gap-6 ml-auto md:ml-[10px]",
        isSearchExpanded ? "w-full sm:w-auto" : "flex"
      )}>
        <div className="relative flex items-center gap-2 lg:hidden">
          {/* Mobile/Tablet Vertical Search (Expandable) */}
          <div className="md:hidden relative flex items-center w-full justify-end">
            {!isSearchExpanded ? (
              <button 
                onClick={() => setIsSearchExpanded(true)}
                className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Search size={20} />
              </button>
            ) : (
              <div className="flex items-center w-full gap-2 animate-in slide-in-from-right-2 duration-200">
                <div className="relative flex-1 group">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors" size={16} />
                  <input 
                    autoFocus
                    onBlur={(e) => {
                      if (!e.relatedTarget) setIsSearchExpanded(false);
                    }}
                    type="text" 
                    placeholder="Buscar..." 
                    className="w-full pl-9 pr-4 py-1.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-sm"
                  />
                </div>
                <button 
                  onClick={() => setIsSearchExpanded(false)}
                  className="text-xs font-bold text-gray-400 hover:text-gray-900 p-2"
                >
                  Cerrar
                </button>
              </div>
            )}
          </div>

          <div className="relative w-72 hidden md:block transition-all">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Buscar..." 
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm"
            />
          </div>
        </div>

        <div className={cn(
          "flex items-center gap-2 sm:gap-4 md:gap-2 lg:gap-6",
          isSearchExpanded ? "hidden sm:flex" : "flex"
        )}>
          <div className="flex items-center gap-1.5 px-2 md:px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-[10px] md:text-xs font-semibold shrink-0">
            <Globe size={14} />
            <span className="hidden xl:inline">Región: Argentina</span>
            <span className="xl:hidden">AR</span>
          </div>
          
          <button className="relative text-gray-500 hover:text-gray-700 transition-colors p-1 md:p-0">
            <Bell size={20} />
            <span className="absolute top-0 right-0 md:-top-0.5 md:-right-0.5 w-3.5 h-3.5 bg-red-500 text-white text-[8px] flex items-center justify-center rounded-full border border-white">3</span>
          </button>

          <div className="h-8 w-px bg-gray-200 mx-1 md:mx-2 hidden xs:block"></div>

          <div 
            onClick={() => setActiveTab('users')}
            className="flex items-center gap-2 md:gap-3 cursor-pointer group shrink-0"
          >
            <div className="text-right hidden sm:block">
              <p className="text-sm font-semibold text-gray-900 leading-none group-hover:text-blue-600 transition-colors">Admin IT</p>
              <p className="text-[10px] text-gray-500 mt-1">Sede Central</p>
            </div>
            <div className="w-8 h-8 md:w-9 md:h-9 rounded-xl bg-gray-100 flex items-center justify-center border border-gray-200 group-hover:border-blue-500 transition-all overflow-hidden relative shadow-sm">
              <img 
                src="https://picsum.photos/seed/admin/100/100" 
                alt="User" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
