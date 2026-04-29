export interface Server {
  id: string;
  name: string;
  location: string;
  status: 'online' | 'offline' | 'maintenance' | 'warning';
  ip: string;
  cpuUsage: number;
  ramUsage: number;
  diskUsage: number;
  uptime: string;
  type: 'Physical' | 'Virtual' | 'Cloud';
}

export interface Branch {
  id: string;
  name: string;
  city: string;
  province: string;
  serverCount: number;
  status: 'active' | 'issue';
}

export interface Alert {
  id: string;
  severity: 'critical' | 'warning' | 'info';
  message: string;
  timestamp: string;
  serverId?: string;
}

export interface ResourceData {
  time: string;
  cpu: number;
  ram: number;
}
