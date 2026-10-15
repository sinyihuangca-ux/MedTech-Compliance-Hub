
import React from 'react';
import {
  products,
  safetyTests,
  risks,
  projects
} from '../data/demoData.js';

import Header from '../components/Header.jsx';
import StatusBadge from '../components/StatusBadge.jsx';
import DataTable from '../components/DataTable.jsx';

function Dashboard() {
  const completedTests = safetyTests.filter(
    (test) => test.status === 'Completed'
  ).length;

  const openRisks = risks.filter(
    (risk) => risk.status === 'Open' || risk.status === 'Under Review'
  ).length;

  const projectColumns = [
    { key: 'projectId', label: 'Project ID' },
    { key: 'projectName', label: 'Project Name' },
    { key: 'owner', label: 'Owner' },
    { key: 'status', label: 'Status' }
  ];

  return (
    <div className="dashboard-page">
      <Header
        title="Dashboard"
        subtitle="Overview of medical device compliance activities"
      />

      <section className="dashboard-summary">
        <article className="summary-card">
          <h3>Total Products</h3>
          <p className="summary-number">{products.length}</p>
        </article>

        <article className="summary-card">
          <h3>Total Safety Tests</h3>
          <p className="summary-number">{safetyTests.length}</p>
        </article>

        <article className="summary-card">
          <h3>Completed Tests</h3>
          <p className="summary-number">{completedTests}</p>
        </article>

        <article className="summary-card">
          <h3>Open or Under-Review Risks</h3>
          <p className="summary-number">{openRisks}</p>
        </article>
      </section>

      <section className="dashboard-section">
        <h2>Project Tracking</h2>
        <DataTable columns={projectColumns} data={projects} />
      </section>

      <section className="dashboard-section">
        <h2>Product Status Overview</h2>

        <div className="product-status-list">
          {products.map((product) => (
            <article className="product-status-item" key={product.id}>
              <div>
                <h3>{product.productName}</h3>
                <p>{product.productId}</p>
              </div>

              <StatusBadge status={product.status} />
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
