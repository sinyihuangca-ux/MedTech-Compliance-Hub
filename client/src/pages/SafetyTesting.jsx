
import React from 'react';
import { safetyTests, products } from '../data/demoData.js';
import Header from '../components/Header.jsx';
import DataTable from '../components/DataTable.jsx';
import StatusBadge from '../components/StatusBadge.jsx';

function SafetyTesting() {
  const columns = [
    { key: 'testId', label: 'Test ID' },
    { key: 'productId', label: 'Product ID' },
    { key: 'testType', label: 'Test Type' },
    { key: 'standard', label: 'Standard / Procedure' },
    { key: 'status', label: 'Status' }
  ];

  const completedTests = safetyTests.filter(
    (test) => test.status === 'Completed'
  ).length;

  const pendingTests = safetyTests.filter(
    (test) => test.status === 'Pending'
  ).length;

  return (
    <div className="safety-testing-page">
      <Header
        title="Safety Testing"
        subtitle="Medical device safety test records and progress tracking"
      />

      <section className="page-section">
        <h2>Testing Summary</h2>

        <div className="testing-summary">
          <article className="summary-card">
            <h3>Total Tests</h3>
            <p className="summary-number">{safetyTests.length}</p>
          </article>

          <article className="summary-card">
            <h3>Completed Tests</h3>
            <p className="summary-number">{completedTests}</p>
          </article>

          <article className="summary-card">
            <h3>Pending Tests</h3>
            <p className="summary-number">{pendingTests}</p>
          </article>
        </div>
      </section>

      <section className="page-section">
        <h2>Safety Test Records</h2>
        <DataTable columns={columns} data={safetyTests} />
      </section>

      <section className="page-section">
        <h2>Related Products</h2>

        <div className="product-status-list">
          {products.map((product) => {
            const relatedTests = safetyTests.filter(
              (test) => test.productId === product.productId
            );

            return (
              <article className="product-status-item" key={product.id}>
                <div>
                  <h3>{product.productName}</h3>
                  <p>{product.productId}</p>
                  <p>Associated tests: {relatedTests.length}</p>
                </div>

                <StatusBadge status={product.status} />
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default SafetyTesting;
