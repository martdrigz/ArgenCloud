import React from 'react';
import { Settings, Shield, Bell, User, Database, Globe, Save } from 'lucide-react';

export default function SettingsView() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 leading-tight">Configuración del Sistema</h2>
        <p className="text-sm text-gray-500 mt-1">Administra las preferencias de tu cuenta y del panel de control.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Sidebar Settings Navigation */}
        <div className="lg:col-span-1 space-y-2">
          <nav className="flex flex-col space-y-1">
            {[
              { id: 'profile', label: 'Perfil de Usuario', icon: User, active: true },
              { id: 'security', label: 'Seguridad y Accesos', icon: Shield },
              { id: 'notifications', label: 'Notificaciones', icon: Bell },
              { id: 'infrastructure', label: 'Infraestructura', icon: Database },
              { id: 'regional', label: 'Regional y Localización', icon: Globe },
            ].map((item) => (
              <button
                key={item.id}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  item.active ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/10' : 'text-gray-500 hover:bg-white hover:text-gray-900'
                }`}
              >
                <item.icon size={18} />
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Main Settings Form */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Nombre de Usuario</label>
                <input 
                  type="text" 
                  defaultValue="Admin IT ArgenCloud"
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-sm" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Correo Electrónico</label>
                <input 
                  type="email" 
                  defaultValue="admin@argencloud.com.ar"
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-sm" 
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Cargo / Rol</label>
                <input 
                  type="text" 
                  defaultValue="Administrador de Infraestructura Senior"
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-sm" 
                />
              </div>
            </div>

            <div className="pt-6 border-t border-gray-50">
              <h4 className="text-sm font-bold text-gray-900 mb-4">Preferencias de Interfaz</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-700">Modo Oscuro</p>
                    <p className="text-xs text-gray-500">Cambiar el tema del panel a colores oscuros.</p>
                  </div>
                  <div className="w-10 h-6 bg-gray-200 rounded-full relative cursor-pointer">
                    <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-all"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-700">Notificaciones en tiempo real</p>
                    <p className="text-xs text-gray-500">Recibir alertas críticas directamente en el navegador.</p>
                  </div>
                  <div className="w-10 h-6 bg-blue-600 rounded-full relative cursor-pointer">
                    <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full transition-all"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end pt-4">
              <button className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-900/10">
                <Save size={18} />
                Guardar Cambios
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
