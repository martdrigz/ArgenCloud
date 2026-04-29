import React from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line, BarChart, Bar, Legend
} from 'recharts';
import { Activity, Cpu, Database, Network, Zap, Shield } from 'lucide-react';
import { RESOURCE_HISTORY } from '../constants';
import { cn } from '../lib/utils';

export default function Monitoring() {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    const timerId = setTimeout(() => setIsMounted(true), 150);
    return () => clearTimeout(timerId);
  }, []);

  const metrics = [
    { label: 'Uso de CPU', value: '42%', icon: Cpu, color: 'text-blue-500', trend: '-2%' },
    { label: 'Memoria RAM', value: '68%', icon: Activity, color: 'text-purple-500', trend: '+5%' },
    { label: 'Almacenamiento', value: '1.2TB', icon: Database, color: 'text-emerald-500', trend: '+12GB' },
    { label: 'Latencia Red', value: '12ms', icon: Network, color: 'text-amber-500', trend: 'Estable' },
  ];

  return (
    <div className="space-y-6 md:space-y-8 animate-in fade-in duration-500">
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">Monitoreo en Tiempo Real</h2>
        <p className="text-xs md:text-sm text-gray-500 mt-1">Métricas de infraestructura ArgenCloud</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {metrics.map((metric, idx) => (
          <div key={idx} className="bg-white p-5 md:p-6 rounded-2xl border border-gray-100 shadow-sm transition-all hover:shadow-md">
            <div className="flex items-center justify-between mb-4">
              <div className={cn("p-2 rounded-lg bg-gray-50 shrink-0", metric.color)}>
                <metric.icon size={18} className="md:w-5 md:h-5" />
              </div>
              <span className={cn(
                "text-[10px] md:text-xs font-bold px-2 py-0.5 rounded-full shrink-0",
                metric.trend.startsWith('+') ? "bg-red-50 text-red-600" : 
                metric.trend.startsWith('-') ? "bg-green-50 text-green-600" : "bg-blue-50 text-blue-600"
              )}>
                {metric.trend}
              </span>
            </div>
            <p className="text-xs md:text-sm text-gray-500 font-medium truncate">{metric.label}</p>
            <p className="text-xl md:text-2xl font-bold text-gray-900 mt-1">{metric.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        <div className="bg-white p-5 md:p-6 rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2 md:gap-3">
              <Zap className="text-amber-500 shrink-0 md:w-5 md:h-5" size={18} />
              <h3 className="font-bold text-gray-900 text-sm md:text-base">Rendimiento (24h)</h3>
            </div>
          </div>
          <div className="h-[250px] md:h-[350px] -ml-4 relative">
            {isMounted && (
              <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
                <AreaChart data={RESOURCE_HISTORY} margin={{ left: -10, right: 10 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{fontSize: 10}} />
                <YAxis axisLine={false} tickLine={false} tick={{fontSize: 10}} />
                <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', fontSize: '12px' }} />
                <Area type="monotone" dataKey="cpu" stackId="1" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.1} />
                <Area type="monotone" dataKey="ram" stackId="1" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.1} />
              </AreaChart>
            </ResponsiveContainer>
            )}
          </div>
        </div>

        <div className="bg-white p-5 md:p-6 rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2 md:gap-3">
              <Shield className="text-blue-500 shrink-0 md:w-5 md:h-5" size={18} />
              <h3 className="font-bold text-gray-900 text-sm md:text-base">Seguridad</h3>
            </div>
          </div>
          <div className="h-[250px] md:h-[350px] -ml-4 relative">
            {isMounted && (
              <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
                <BarChart data={RESOURCE_HISTORY} margin={{ left: -10, right: 10 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{fontSize: 10}} />
                <YAxis axisLine={false} tickLine={false} tick={{fontSize: 10}} />
                <Tooltip cursor={{fill: '#f8fafc'}} contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', fontSize: '12px' }} />
                <Bar dataKey="cpu" fill="#3b82f6" radius={[4, 4, 0, 0]} name="Eventos" />
              </BarChart>
            </ResponsiveContainer>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
