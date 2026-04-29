import React from 'react';
import { Server as ServerIcon, MoreVertical, RefreshCw, Terminal, Shield, HardDrive, Clock, Activity } from 'lucide-react';
import { SERVERS } from '../constants';
import { cn } from '../lib/utils';

interface ServerListProps {
  setActiveTab: (tab: string) => void;
}

export default function ServerList({ setActiveTab }: ServerListProps) {
  return (
    <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500 overflow-x-hidden">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">Inventario de Servidores</h2>
          <p className="text-xs md:text-sm text-gray-500 mt-1">Infraestructura física y virtual en la nube</p>
        </div>
        <div className="flex items-center gap-2 md:gap-3">
          <button className="flex-1 sm:flex-none px-3 py-2 bg-white border border-gray-200 rounded-xl text-xs md:text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
            <RefreshCw size={14} />
            <span className="hidden sm:inline">Refrescar</span>
          </button>
          <button className="flex-[2] sm:flex-none px-4 py-2 bg-blue-600 text-white rounded-xl text-xs md:text-sm font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-900/20">
            + Nuevo Nodo
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-6">
        {SERVERS.map((server) => (
          <div key={server.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all p-5 md:p-6 group">
            <div className="flex items-start justify-between gap-2">
              <div className="flex gap-3 md:gap-4 min-w-0">
                <div 
                  onClick={() => setActiveTab('monitoring')}
                  className={cn(
                    "w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center transition-colors cursor-pointer shrink-0",
                    server.status === 'online' ? "bg-green-50 text-green-600 hover:bg-green-100" :
                    server.status === 'warning' ? "bg-amber-50 text-amber-600 hover:bg-amber-100" : "bg-gray-50 text-gray-400"
                  )}
                >
                  <ServerIcon size={20} className="md:w-6 md:h-6" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-base md:text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors truncate">{server.name}</h3>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 mt-1">
                    <span className="text-[10px] md:text-xs font-mono text-gray-400">{server.ip}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300 hidden xs:block"></span>
                    <span className="text-[10px] md:text-xs text-gray-500 font-medium truncate">{server.location}</span>
                  </div>
                </div>
              </div>
              <button className="p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all shrink-0">
                <MoreVertical size={18} />
              </button>
            </div>

            <div className="grid grid-cols-3 gap-2 md:gap-4 mt-6 md:mt-8">
              <button 
                onClick={() => setActiveTab('monitoring')}
                className="space-y-1.5 md:space-y-2 text-left group/metric"
              >
                <div className="flex items-center justify-between text-[9px] md:text-[10px] uppercase tracking-wider font-bold text-gray-400 group-hover/metric:text-blue-500 transition-colors">
                  <span>CPU</span>
                  <span className="hidden xs:inline">{server.cpuUsage}%</span>
                </div>
                <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className={cn("h-full transition-all duration-500", server.cpuUsage > 80 ? "bg-red-500" : "bg-blue-500")} 
                    style={{ width: `${server.cpuUsage}%` }}
                  ></div>
                </div>
              </button>
              <button 
                onClick={() => setActiveTab('monitoring')}
                className="space-y-1.5 md:space-y-2 text-left group/metric"
              >
                <div className="flex items-center justify-between text-[9px] md:text-[10px] uppercase tracking-wider font-bold text-gray-400 group-hover/metric:text-purple-500 transition-colors">
                  <span>RAM</span>
                  <span className="hidden xs:inline">{server.ramUsage}%</span>
                </div>
                <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className={cn("h-full transition-all duration-500", server.ramUsage > 80 ? "bg-red-500" : "bg-purple-500")} 
                    style={{ width: `${server.ramUsage}%` }}
                  ></div>
                </div>
              </button>
              <button 
                onClick={() => setActiveTab('monitoring')}
                className="space-y-1.5 md:space-y-2 text-left group/metric"
              >
                <div className="flex items-center justify-between text-[9px] md:text-[10px] uppercase tracking-wider font-bold text-gray-400 group-hover/metric:text-emerald-500 transition-colors">
                  <span>Disco</span>
                  <span className="hidden xs:inline">{server.diskUsage}%</span>
                </div>
                <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className={cn("h-full transition-all duration-500", server.diskUsage > 80 ? "bg-red-500" : "bg-emerald-500")} 
                    style={{ width: `${server.diskUsage}%` }}
                  ></div>
                </div>
              </button>
            </div>

            <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-gray-50 flex flex-wrap items-center justify-between gap-4">
              <div className="flex gap-3 md:gap-4 flex-wrap">
                <div className="flex items-center gap-1.5 text-[10px] md:text-xs font-medium text-gray-500">
                  <Clock size={12} className="md:w-3.5 md:h-3.5" />
                  <span>{server.uptime}</span>
                </div>
                {server.status === 'warning' ? (
                  <button 
                    onClick={() => setActiveTab('alerts')}
                    className="flex items-center gap-1.5 text-[10px] md:text-xs font-bold text-amber-600 hover:underline"
                  >
                    <Activity size={12} className="md:w-3.5 md:h-3.5" />
                    <span>Ver Alerta</span>
                  </button>
                ) : (
                  <div className="flex items-center gap-1.5 text-[10px] md:text-xs font-medium text-gray-500">
                    <Shield size={12} className="md:w-3.5 md:h-3.5" />
                    <span>Protegido</span>
                  </div>
                )}
              </div>
              <div className="flex gap-2 ml-auto sm:ml-0">
                <button className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all" title="Consola">
                  <Terminal size={16} />
                </button>
                <button className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all" title="Almacenamiento">
                  <HardDrive size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
