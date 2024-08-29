import React from 'react';
import Sidebar from './Sidebar';

const DashboardSidebar: React.FC = () => {
  const dashboardItems = [
    { label: 'Início', link: '/dashboard' },
    { label: 'Digitalizar', link: '/dashboard/analytics' },
    { label: 'Perfil', link: '/dashboard/reports' },
    { label: 'Documentos', link: '/dashboard/settings' },
  ];

  return <Sidebar items={dashboardItems} />;
};

export default DashboardSidebar;