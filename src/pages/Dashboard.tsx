import React from 'react';
import Layout from '../components/Layout/Layout';
import DashboardGrid from '../components/Dashboard/DashboardGrid';

const DashboardPage: React.FC = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-semibold text-gray-900 mb-6">Dashboard</h1>
      <DashboardGrid />
    </Layout>
  );
};

export default DashboardPage;