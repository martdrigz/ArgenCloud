/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardOverview from './components/DashboardOverview';
import ServerList from './components/ServerList';
import BranchList from './components/BranchList';
import Monitoring from './components/Monitoring';
import AlertList from './components/AlertList';
import SettingsView from './components/SettingsView';
import UserView from './components/UserView';
import { cn } from './lib/utils';

export default function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <DashboardOverview setActiveTab={setActiveTab} />;
      case 'servers':
        return <ServerList setActiveTab={setActiveTab} />;
      case 'branches':
        return <BranchList />;
      case 'monitoring':
        return <Monitoring />;
      case 'alerts':
        return <AlertList />;
      case 'settings':
        return <SettingsView />;
      case 'users':
        return <UserView />;
      default:
        return <DashboardOverview setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50 font-sans text-gray-900 overflow-hidden relative">
      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 xl:hidden transition-opacity"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <div className={cn(
        "fixed inset-y-0 left-0 z-50 xl:static xl:block transition-all duration-300 transform",
        isMobileMenuOpen ? "translate-x-0" : "-translate-x-full xl:translate-x-0",
        isSidebarCollapsed ? "xl:w-20" : "xl:w-64",
        "w-64 shadow-2xl xl:shadow-none"
      )}>
        <Sidebar 
          activeTab={activeTab} 
          setActiveTab={(tab) => {
            setActiveTab(tab);
            setIsMobileMenuOpen(false);
          }} 
          isCollapsed={isSidebarCollapsed}
          setIsCollapsed={setIsSidebarCollapsed}
        />
      </div>
      
      <div className="flex-1 flex flex-col overflow-hidden w-full">
        <Header 
          toggleMobileMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
          setActiveTab={setActiveTab}
        />
        
        <main className="flex-1 overflow-y-auto scroll-smooth bg-gray-50">
          <div className="max-w-[1600px] mx-auto p-5 md:p-10">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
}
