  import React from 'react';
  import Header from '@/components/Header';
  import DashboardSideBar from '@/components/DashboardSidebar';

  const Dashboard: React.FC = () => {
    return (
      <div className="flex flex-col min-h-screen w-full">
        <Header />
        <div className="flex flex-1 w-full">
          <DashboardSideBar />
          <main className="flex-1 p-6 bg-gray-100">
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
            <p>Welcome to your dashboard. Select an option from the sidebar to get started.</p>
          </main>
        </div>
      </div>
    );
  };

  export default Dashboard;