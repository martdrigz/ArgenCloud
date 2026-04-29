import { Server, Branch, Alert, ResourceData } from './types';

export const BRANCHES: Branch[] = [
  { id: 'b1', name: 'Sede Central Puerto Madero', city: 'CABA', province: 'Buenos Aires', serverCount: 12, status: 'active' },
  { id: 'b2', name: 'Sucursal Córdoba Centro', city: 'Córdoba', province: 'Córdoba', serverCount: 5, status: 'active' },
  { id: 'b3', name: 'Planta Industrial Rosario', city: 'Rosario', province: 'Santa Fe', serverCount: 8, status: 'issue' },
  { id: 'b4', name: 'Sucursal Mendoza', city: 'Mendoza', province: 'Mendoza', serverCount: 3, status: 'active' },
];

export const SERVERS: Server[] = [
  { id: 's1', name: 'PROD-DB-01', location: 'CABA', status: 'online', ip: '192.168.10.11', cpuUsage: 45, ramUsage: 72, diskUsage: 60, uptime: '45d 12h', type: 'Physical' },
  { id: 's2', name: 'PROD-WEB-01', location: 'CABA', status: 'online', ip: '192.168.10.12', cpuUsage: 22, ramUsage: 40, diskUsage: 35, uptime: '12d 04h', type: 'Virtual' },
  { id: 's3', name: 'BACKUP-SRV', location: 'Rosario', status: 'warning', ip: '192.168.20.50', cpuUsage: 88, ramUsage: 95, diskUsage: 92, uptime: '5d 22h', type: 'Physical' },
  { id: 's4', name: 'DEV-APP-01', location: 'Córdoba', status: 'maintenance', ip: '192.168.30.15', cpuUsage: 0, ramUsage: 10, diskUsage: 20, uptime: '0h 15m', type: 'Virtual' },
  { id: 's5', name: 'CLOUD-STORAGE-AR', location: 'AWS-SA-EAST-1', status: 'online', ip: '10.0.0.5', cpuUsage: 15, ramUsage: 25, diskUsage: 45, uptime: '120d 18h', type: 'Cloud' },
  { id: 's6', name: 'PROD-ERP-01', location: 'CABA', status: 'online', ip: '192.168.10.20', cpuUsage: 65, ramUsage: 80, diskUsage: 55, uptime: '30d 02h', type: 'Physical' },
];

export const ALERTS: Alert[] = [
  { id: 'a1', severity: 'critical', message: 'Uso de CPU crítico en BACKUP-SRV (88%)', timestamp: '2026-03-25T12:30:00Z', serverId: 's3' },
  { id: 'a2', severity: 'warning', message: 'Espacio en disco bajo en PROD-DB-01', timestamp: '2026-03-25T11:45:00Z', serverId: 's1' },
  { id: 'a3', severity: 'info', message: 'Mantenimiento programado para DEV-APP-01 iniciado', timestamp: '2026-03-25T10:00:00Z', serverId: 's4' },
];

export const RESOURCE_HISTORY: ResourceData[] = [
  { time: '08:00', cpu: 30, ram: 45 },
  { time: '09:00', cpu: 45, ram: 50 },
  { time: '10:00', cpu: 60, ram: 55 },
  { time: '11:00', cpu: 55, ram: 60 },
  { time: '12:00', cpu: 70, ram: 65 },
  { time: '13:00', cpu: 65, ram: 70 },
  { time: '14:00', cpu: 50, ram: 68 },
  { time: '15:00', cpu: 40, ram: 65 },
];
