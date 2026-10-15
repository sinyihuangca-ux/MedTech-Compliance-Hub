import React from 'react';
import { productIssues, products } from '../data/demoData.js';
import Header from '../components/Header.jsx';
import DataTable from '../components/DataTable.jsx';
import StatusBadge from '../components/StatusBadge.jsx';

function ProductIssues() {
  const columns = [
    { key: 'issueId', label: 'Issue ID' },
    { key: 'productId', label: 'Product ID' },
    { key: 'description', label: 'Issue Description' },
    { key: 'priority', label: 'Priority' },
    { key: 'status', label: 'Status' }
  ];

  const openIssues = productIssues.filter(
    (issue) => issue.status === 'Open'
  ).length;

  const inProgressIssues = productIssues.filter(
    (issue) => issue.status === 'In Progress'
  ).length;

  const highPriorityIssues = productIssues.filter(
    (issue) => issue.priority === 'High'
  ).length;

  return (
    <div className="product-issues-page">
      <Header
        title="Product Issues"
        subtitle="Track product issues, priorities, and resolution progress"
      />

      <section className="page-section">
        <h2>Issue Summary</h2>

        <div className="issue-summary">
          <article className="summary-card">
            <h3>Total Issues</h3>
            <p className="summary-number">{productIssues.length}</p>
          </article>

          <article className="summary-card">
            <h3>Open Issues</h3>
            <p className="summary-number">{openIssues}</p>
          </article>

          <article className="summary-card">
            <h3>In Progress</h3>
            <p className="summary-number">{inProgressIssues}</p>
          </article>

          <article className="summary-card">
            <h3>High Priority</h3>
            <p className="summary-number">{highPriorityIssues}</p>
          </article>
        </div>
      </section>

      <section className="page-section">
        <h2>Issue Register</h2>
        <DataTable columns={columns} data={productIssues} />
      </section>

      <section className="page-section">
        <h2>Issues by Product</h2>

        <div className="product-status-list">
          {products.map((product) => {
            const relatedIssues = productIssues.filter(
              (issue) => issue.productId === product.productId
            );

            return (
              <article className="product-status-item" key={product.id}>
                <div>
                  <h3>{product.productName}</h3>
                  <p>Product ID: {product.productId}</p>
                  <p>Recorded issues: {relatedIssues.length}</p>

                  {relatedIssues.length > 0 && (
                    <ul>
                      {relatedIssues.map((issue) => (
                        <li key={issue.id}>
                          {issue.issueId}: {issue.description}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <StatusBadge
                  status={
                    relatedIssues.length > 0
                      ? 'Issues Recorded'
                      : 'No Issues Recorded'
                  }
                />
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default ProductIssues;
