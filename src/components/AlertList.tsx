import React from 'react';
import { AlertTriangle, Info, Bell, Filter, MoreHorizontal, Clock, Hash } from 'lucide-react';
import { ALERTS } from '../constants';
import { cn } from '../lib/utils';

export default function AlertList() {
  return (
    <div className="space-y-6 md:space-y-8 animate-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">Historial de Alertas</h2>
          <p className="text-xs md:text-sm text-gray-500 mt-1">Eventos y notificaciones del sistema</p>
        </div>
        <div className="flex items-center gap-2 md:gap-3">
          <button className="flex-1 sm:flex-none px-3 py-2 bg-white border border-gray-200 rounded-xl text-xs md:text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
            <Filter size={14} className="md:w-4 md:h-4" />
            <span>Filtrar</span>
          </button>
          <button className="flex-1 sm:flex-none px-3 py-2 bg-white border border-gray-200 rounded-xl text-xs md:text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-all flex items-center justify-center">
            Marcar leídas
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        {/* Desktop Table View */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50/50 text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-wider">
                <th className="px-6 py-4">Severidad</th>
                <th className="px-6 py-4">Mensaje</th>
                <th className="px-6 py-4">Servidor</th>
                <th className="px-6 py-4">Fecha y Hora</th>
                <th className="px-6 py-4">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {ALERTS.map((alert) => (
                <tr key={alert.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className={cn(
                      "flex items-center gap-2 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider w-fit",
                      alert.severity === 'critical' ? "bg-red-50 text-red-600" : 
                      alert.severity === 'warning' ? "bg-amber-50 text-amber-600" : "bg-blue-50 text-blue-600"
                    )}>
                      {alert.severity === 'critical' ? <AlertTriangle size={12} /> : <Info size={12} />}
                      {alert.severity}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{alert.message}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-[10px] md:text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-lg w-fit">
                      <Hash size={12} />
                      {alert.serverId}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-900 font-medium">
                        {new Date(alert.timestamp).toLocaleDateString('es-AR')}
                      </span>
                      <span className="text-[10px] text-gray-500 flex items-center gap-1 mt-0.5">
                        <Clock size={10} />
                        {new Date(alert.timestamp).toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <button className="p-2 text-gray-400 hover:text-gray-900 hover:bg-white rounded-lg transition-all">
                      <MoreHorizontal size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile List View */}
        <div className="md:hidden divide-y divide-gray-100">
          {ALERTS.map((alert) => (
            <div key={alert.id} className="p-4 space-y-3">
              <div className="flex items-center justify-between">
                <div className={cn(
                  "flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider w-fit",
                  alert.severity === 'critical' ? "bg-red-50 text-red-600" : 
                  alert.severity === 'warning' ? "bg-amber-50 text-amber-600" : "bg-blue-50 text-blue-600"
                )}>
                  {alert.severity === 'critical' ? <AlertTriangle size={10} /> : <Info size={10} />}
                  {alert.severity}
                </div>
                <div className="flex items-center gap-1 text-[10px] text-gray-500">
                  <Clock size={10} />
                  <span>{new Date(alert.timestamp).toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' })}</span>
                </div>
              </div>
              <p className="text-sm font-semibold text-gray-900 leading-tight">{alert.message}</p>
              <div className="flex items-center justify-between text-[10px]">
                <div className="flex items-center gap-1.5 text-blue-600 bg-blue-50 px-2 py-0.5 rounded-lg font-bold">
                  <Hash size={10} />
                  {alert.serverId}
                </div>
                <span className="text-gray-400">
                  {new Date(alert.timestamp).toLocaleDateString('es-AR')}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-5 md:p-6 bg-amber-50 rounded-2xl border border-amber-100">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="w-10 h-10 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center shrink-0">
            <Bell size={20} />
          </div>
          <div className="text-center sm:text-left">
            <h4 className="text-sm font-bold text-amber-900 leading-tight">Canales de Notificaciones</h4>
            <p className="text-[10px] md:text-xs text-amber-700 mt-1">Alertas críticas configuradas vía Email y Slack.</p>
          </div>
          <button className="w-full sm:w-fit sm:ml-auto px-4 py-2 bg-amber-600 text-white text-[10px] md:text-xs font-bold rounded-lg hover:bg-amber-700 transition-all">
            Ajustar Canales
          </button>
        </div>
      </div>
    </div>
  );
}
