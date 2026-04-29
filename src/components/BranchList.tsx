import React from 'react';
import { MapPin, Server, Activity, ArrowRight, ShieldCheck, AlertCircle } from 'lucide-react';
import { BRANCHES, SERVERS } from '../constants';
import { cn } from '../lib/utils';

export default function BranchList() {
  return (
    <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500 overflow-x-hidden">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">Sucursales y Nodos</h2>
          <p className="text-xs md:text-sm text-gray-500 mt-1">Infraestructura distribuida en Argentina</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-xl text-xs md:text-sm font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-900/20 w-fit">
          + Nueva Sucursal
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        {BRANCHES.map((branch) => {
          const branchServers = SERVERS.filter(s => s.location === branch.city || branch.name.includes(s.location));
          
          return (
            <div key={branch.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden group flex flex-col h-full">
              <div className="p-5 md:p-6 flex-1">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex gap-3 md:gap-4 min-w-0">
                    <div className={cn(
                      "w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center shrink-0",
                      branch.status === 'active' ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"
                    )}>
                      <MapPin size={20} className="md:w-6 md:h-6" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-base md:text-lg font-bold text-gray-900 truncate">{branch.name}</h3>
                      <p className="text-xs md:text-sm text-gray-500 truncate">{branch.city}, {branch.province}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end shrink-0">
                    <span className={cn(
                      "px-2 py-0.5 rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-wider",
                      branch.status === 'active' ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"
                    )}>
                      {branch.status === 'active' ? 'Operativo' : 'Problema'}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 md:gap-4 mt-6 md:mt-8">
                  <div className="bg-gray-50 p-3 md:p-4 rounded-xl">
                    <div className="flex items-center gap-1.5 md:gap-2 text-gray-500 mb-1">
                      <Server size={12} className="md:w-3.5 md:h-3.5" />
                      <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-wider">Nodos</span>
                    </div>
                    <p className="text-base md:text-xl font-bold text-gray-900">{branch.serverCount}</p>
                  </div>
                  <div className="bg-gray-50 p-3 md:p-4 rounded-xl">
                    <div className="flex items-center gap-1.5 md:gap-2 text-gray-500 mb-1">
                      <Activity size={12} className="md:w-3.5 md:h-3.5" />
                      <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-wider">Tráfico</span>
                    </div>
                    <p className="text-base md:text-xl font-bold text-gray-900 truncate">1.2G</p>
                  </div>
                  <div className="bg-gray-50 p-3 md:p-4 rounded-xl">
                    <div className="flex items-center gap-1.5 md:gap-2 text-gray-500 mb-1">
                      <ShieldCheck size={12} className="md:w-3.5 md:h-3.5" />
                      <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-wider">Nivel</span>
                    </div>
                    <p className="text-base md:text-xl font-bold text-green-600">Max</p>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Infraestructura local</p>
                  <div className="space-y-1.5 md:space-y-2">
                    {branchServers.length > 0 ? branchServers.map(server => (
                      <div key={server.id} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors border border-transparent hover:border-gray-100">
                        <div className="flex items-center gap-2 md:gap-3 min-w-0">
                          <div className={cn(
                            "w-1.5 h-1.5 md:w-2 md:h-2 rounded-full shrink-0",
                            server.status === 'online' ? "bg-green-500" : "bg-amber-500"
                          )}></div>
                          <span className="text-xs md:text-sm font-medium text-gray-700 truncate">{server.name}</span>
                        </div>
                        <span className="text-[10px] md:text-xs font-mono text-gray-400 shrink-0 ml-2">{server.ip}</span>
                      </div>
                    )) : (
                      <p className="text-[10px] md:text-xs text-gray-400 italic">Sin nodos específicos en esta ubicación.</p>
                    )}
                  </div>
                </div>
              </div>
              <button className="w-full py-3 bg-gray-50 border-t border-gray-100 text-xs md:text-sm font-semibold text-gray-600 hover:bg-blue-600 hover:text-white transition-all flex items-center justify-center gap-2 group-hover:bg-gray-100">
                Detalles de Red
                <ArrowRight size={14} className="md:w-4 md:h-4" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
