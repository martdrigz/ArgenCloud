import React from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Cell
} from 'recharts';
import { Server, Activity, AlertTriangle, CheckCircle2, Clock, MapPin, Sun } from 'lucide-react';
import { SERVERS, ALERTS, RESOURCE_HISTORY, BRANCHES } from '../constants';
import { cn } from '../lib/utils';

interface DashboardOverviewProps {
  setActiveTab: (tab: string) => void;
}

export default function DashboardOverview({ setActiveTab }: DashboardOverviewProps) {
  const [currentTime, setCurrentTime] = React.useState(new Date());
  const [isMounted, setIsMounted] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    // Aumentamos el delay para asegurar que el layout esté 100% calculado
    const timerId = setTimeout(() => setIsMounted(true), 300);
    const dateTimer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => {
      clearTimeout(timerId);
      clearInterval(dateTimer);
    };
  }, []);

  const stats = [
    { id: 'servers', label: 'Servidores Activos', value: '24/26', icon: Server, color: 'text-blue-600', bg: 'bg-blue-50' },
    { id: 'monitoring', label: 'Uptime Global', value: '99.98%', icon: Clock, color: 'text-green-600', bg: 'bg-green-50' },
    { id: 'alerts', label: 'Alertas Críticas', value: '2', icon: AlertTriangle, color: 'text-red-600', bg: 'bg-red-50' },
    { id: 'branches', label: 'Sucursales Online', value: '4/4', icon: MapPin, color: 'text-purple-600', bg: 'bg-purple-50' },
  ];

  const formattedDate = currentTime.toLocaleDateString('es-AR', { 
    weekday: 'long', 
    day: 'numeric', 
    month: 'long' 
  }).toLowerCase();

  const formattedTime = currentTime.toLocaleTimeString('es-AR', { 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: false
  });

  return (
    <div className="space-y-6 md:space-y-8 animate-in fade-in duration-500">
      {/* Welcome Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
            Bienvenido, <span className="text-blue-600">Admin IT</span>
          </h2>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 text-sm text-gray-500 font-medium">
            <span className="capitalize">{formattedDate}</span>
            <span className="w-1 h-1 bg-gray-300 rounded-full hidden xs:block"></span>
            <span>{formattedTime} hs.</span>
            <span className="w-1 h-1 bg-gray-300 rounded-full hidden xs:block"></span>
            <div className="flex items-center gap-1 text-blue-500">
              <Sun size={14} className="shrink-0" />
              <span>Buenos Aires: 22°C, Soleado</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {stats.map((stat) => (
          <button 
            key={stat.id} 
            onClick={() => setActiveTab(stat.id)}
            className="bg-white p-5 md:p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all text-left group"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs md:text-sm font-medium text-gray-500 group-hover:text-gray-700 transition-colors uppercase tracking-wider">{stat.label}</p>
                <p className="text-xl md:text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
              </div>
              <div className={cn("p-2.5 md:p-3 rounded-xl transition-colors shrink-0", stat.bg)}>
                <stat.icon className={cn(stat.color, "md:w-6 md:h-6")} size={20} />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2 text-[10px] md:text-xs text-green-600 font-medium pb-1 border-b border-transparent group-hover:border-green-100 transition-all">
              <Activity size={14} />
              <span>+2.4% vs mes anterior</span>
            </div>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 md:gap-8">
        {/* Main Chart */}
        <div className="xl:col-span-2 bg-white p-5 md:p-6 rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
            <div>
              <h3 className="text-base md:text-lg font-bold text-gray-900">Uso de Recursos Global</h3>
              <p className="text-xs md:text-sm text-gray-500">Promedio de todas las sucursales</p>
            </div>
            <select className="bg-gray-50 border border-gray-200 text-xs md:text-sm rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500/20 w-fit">
              <option>Últimas 24 horas</option>
              <option>Última semana</option>
            </select>
          </div>
          <div className="h-[250px] md:h-[300px] w-full relative" ref={containerRef}>
            {isMounted && (
              <ResponsiveContainer width="99%" height="99%">
                <AreaChart data={RESOURCE_HISTORY} margin={{ left: -20, right: 10 }}>
                <defs>
                  <linearGradient id="colorCpu" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorRam" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#94a3b8'}} />
                <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#94a3b8'}} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#fff', borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Area type="monotone" dataKey="cpu" stroke="#3b82f6" strokeWidth={2} fillOpacity={1} fill="url(#colorCpu)" name="CPU %" />
                <Area type="monotone" dataKey="ram" stroke="#8b5cf6" strokeWidth={2} fillOpacity={1} fill="url(#colorRam)" name="RAM %" />
              </AreaChart>
            </ResponsiveContainer>
            )}
          </div>
        </div>

        {/* Alerts Panel */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-gray-900">Alertas Recientes</h3>
            <button 
              onClick={() => setActiveTab('alerts')}
              className="text-blue-600 text-xs font-semibold hover:underline"
            >
              Ver todas
            </button>
          </div>
          <div className="space-y-4 flex-1 overflow-y-auto max-h-[400px] xl:max-h-none">
            {ALERTS.map((alert) => (
              <button 
                key={alert.id} 
                onClick={() => setActiveTab('alerts')}
                className="w-full flex gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100 text-left group"
              >
                <div className={cn(
                  "w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-transform group-hover:scale-110",
                  alert.severity === 'critical' ? "bg-red-50 text-red-600" : 
                  alert.severity === 'warning' ? "bg-amber-50 text-amber-600" : "bg-blue-50 text-blue-600"
                )}>
                  {alert.severity === 'critical' ? <AlertTriangle size={20} /> : <Activity size={20} />}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 leading-tight group-hover:text-blue-700 transition-colors">{alert.message}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    {new Date(alert.timestamp).toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' })} • Server ID: {alert.serverId}
                  </p>
                </div>
              </button>
            ))}
          </div>
          <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-100">
            <div className="flex items-center gap-2 text-blue-700 font-semibold text-sm">
              <CheckCircle2 size={16} />
              <span>Sistemas Estables</span>
            </div>
            <p className="text-xs text-blue-600 mt-1">No se detectaron caídas en los últimos 45 minutos.</p>
          </div>
        </div>
      </div>

      {/* Secondary Row */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Branches Status */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-gray-900">Estado por Sucursal</h3>
            <button 
              onClick={() => setActiveTab('branches')}
              className="text-blue-600 text-xs font-semibold hover:underline"
            >
              Ver mapa
            </button>
          </div>
          <div className="space-y-6">
            {BRANCHES.map((branch) => (
              <button 
                key={branch.id} 
                onClick={() => setActiveTab('branches')}
                className="w-full flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <div className="text-left">
                    <p className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{branch.name}</p>
                    <p className="text-xs text-gray-500">{branch.city}, {branch.province}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-gray-900">{branch.serverCount} SRV</p>
                  <p className="text-[10px] text-gray-400 uppercase tracking-wider font-bold">Capacidad 85%</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Server Health Table */}
        <div className="xl:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden min-h-0">
          <div className="p-6 border-b border-gray-100 flex items-center justify-between">
            <h3 className="text-lg font-bold text-gray-900">Servidores Críticos</h3>
            <button className="text-sm text-gray-500 hover:text-gray-900">Filtrar por carga</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left min-w-[600px]">
              <thead>
                <tr className="bg-gray-50/50 text-xs font-bold text-gray-400 uppercase tracking-wider">
                  <th className="px-6 py-4">Servidor</th>
                  <th className="px-6 py-4">Estado</th>
                  <th className="px-6 py-4">CPU</th>
                  <th className="px-6 py-4">RAM</th>
                  <th className="px-6 py-4">IP</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {SERVERS.slice(0, 4).map((server) => (
                  <tr 
                    key={server.id} 
                    onClick={() => setActiveTab('servers')}
                    className="hover:bg-gray-50/50 transition-colors group cursor-pointer"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                          <Server size={16} />
                        </div>
                        <span className="text-sm font-semibold text-gray-900 group-hover:text-blue-700">{server.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={cn(
                        "px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider",
                        server.status === 'online' ? "bg-green-50 text-green-600" :
                        server.status === 'warning' ? "bg-amber-50 text-amber-600" : "bg-gray-50 text-gray-600"
                      )}>
                        {server.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                          <div 
                            className={cn("h-full rounded-full", server.cpuUsage > 80 ? "bg-red-500" : "bg-blue-500")} 
                            style={{ width: `${server.cpuUsage}%` }}
                          ></div>
                        </div>
                        <span className="text-xs font-medium text-gray-600">{server.cpuUsage}%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                          <div 
                            className={cn("h-full rounded-full", server.ramUsage > 80 ? "bg-red-500" : "bg-blue-500")} 
                            style={{ width: `${server.ramUsage}%` }}
                          ></div>
                        </div>
                        <span className="text-xs font-medium text-gray-600">{server.ramUsage}%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-xs font-mono text-gray-400">{server.ip}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
