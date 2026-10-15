import React from 'react';
import { risks, products } from '../data/demoData.js';
import Header from '../components/Header.jsx';
import DataTable from '../components/DataTable.jsx';
import StatusBadge from '../components/StatusBadge.jsx';

function RiskManagement() {
  const columns = [
    { key: 'riskId', label: 'Risk ID' },
    { key: 'productId', label: 'Product ID' },
    { key: 'hazard', label: 'Hazard Description' },
    { key: 'severity', label: 'Severity' },
    { key: 'status', label: 'Status' }
  ];

  const highRisks = risks.filter(
    (risk) => risk.severity === 'High'
  ).length;

  const openRisks = risks.filter(
    (risk) => risk.status === 'Open' ||
      risk.status === 'Under Review'
  ).length;

  return (
    <div className="risk-management-page">
      <Header
        title="Risk Management"
        subtitle="Medical device hazard identification and risk tracking"
      />

      <section className="page-section">
        <h2>Risk Overview</h2>

        <div className="risk-summary">
          <article className="summary-card">
            <h3>Total Risks</h3>
            <p className="summary-number">{risks.length}</p>
          </article>

          <article className="summary-card">
            <h3>High Severity Risks</h3>
            <p className="summary-number">{highRisks}</p>
          </article>

          <article className="summary-card">
            <h3>Open / Under Review</h3>
            <p className="summary-number">{openRisks}</p>
          </article>
        </div>
      </section>

      <section className="page-section">
        <h2>Risk Register</h2>
        <p>
          Review identified hazards, severity levels, and current
          risk management status.
        </p>

        <DataTable columns={columns} data={risks} />
      </section>

      <section className="page-section">
        <h2>Risk Records by Product</h2>

        <div className="product-status-list">
          {products.map((product) => {
            const productRisks = risks.filter(
              (risk) => risk.productId === product.productId
            );

            return (
              <article className="product-status-item" key={product.id}>
                <div>
                  <h3>{product.productName}</h3>
                  <p>{product.productId}</p>
                  <p>Associated risks: {productRisks.length}</p>
                </div>

                <span>
                  {productRisks.length > 0
                    ? 'Risk records available'
                    : 'No risk records'}
                </span>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default RiskManagement;
