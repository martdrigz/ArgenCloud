import React from 'react';
import { User, Mail, Shield, MoreVertical, Plus, Search } from 'lucide-react';

const ADMINS = [
  { id: 1, name: 'Martín Rodríguez', role: 'Super Admin', email: 'martin@argencloud.com', status: 'Activo', lastLogin: 'Hace 10m' },
  { id: 2, name: 'Laura Gómez', role: 'DevOps Senior', email: 'laura@argencloud.com', status: 'Activo', lastLogin: 'Hace 2h' },
  { id: 3, name: 'Carlos Pérez', role: 'Soporte Nivel 2', email: 'carlos@argencloud.com', status: 'Inactivo', lastLogin: 'Ayer' },
];

export default function UserView() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 leading-tight">Usuarios y Accesos</h2>
          <p className="text-sm text-gray-500 mt-1">Gestiona el equipo con acceso al panel de control.</p>
        </div>
        <button className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl text-sm font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-900/10 w-fit">
          <Plus size={18} />
          Nuevo Usuario
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-50 flex items-center gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <input 
              type="text" 
              placeholder="Buscar usuarios..."
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/10"
            />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50/50 text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-wider">
                <th className="px-6 py-4">Usuario</th>
                <th className="px-6 py-4">Rol / Permisos</th>
                <th className="px-6 py-4">Estado</th>
                <th className="px-6 py-4">Actividad</th>
                <th className="px-6 py-4 text-right hidden lg:table-cell">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {ADMINS.map((admin) => (
                <tr key={admin.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-4 md:px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold border border-blue-100 text-xs md:text-sm">
                        {admin.name.charAt(0)}
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-bold text-gray-900 truncate">{admin.name}</p>
                        <p className="text-[10px] md:text-xs text-gray-500 flex items-center gap-1 truncate">
                          <Mail size={10} />
                          {admin.email}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 md:px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Shield size={14} className="text-gray-400 shrink-0" />
                      <span className="text-xs md:text-sm text-gray-600 truncate">{admin.role}</span>
                    </div>
                  </td>
                  <td className="px-4 md:px-6 py-4">
                    <span className={`px-2 py-0.5 rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-wider ${
                      admin.status === 'Activo' ? 'bg-green-50 text-green-600' : 'bg-gray-50 text-gray-400'
                    }`}>
                      {admin.status}
                    </span>
                  </td>
                  <td className="px-4 md:px-6 py-4 text-[11px] md:text-sm text-gray-500 whitespace-nowrap">{admin.lastLogin}</td>
                  <td className="px-4 md:px-6 py-4 text-right hidden lg:table-cell">
                    <button className="text-gray-400 hover:text-gray-900 p-1">
                      <MoreVertical size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
