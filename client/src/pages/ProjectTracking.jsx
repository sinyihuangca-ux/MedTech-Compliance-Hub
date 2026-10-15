import React from 'react';
import { projects, products } from '../data/demoData.js';
import Header from '../components/Header.jsx';
import DataTable from '../components/DataTable.jsx';
import StatusBadge from '../components/StatusBadge.jsx';

function ProjectTracking() {
  const columns = [
    { key: 'projectId', label: 'Project ID' },
    { key: 'projectName', label: 'Project Name' },
    { key: 'productId', label: 'Product ID' },
    { key: 'owner', label: 'Project Owner' },
    { key: 'status', label: 'Status' }
  ];

  const inProgressProjects = projects.filter(
    (project) => project.status === 'In Progress'
  ).length;

  const completedProjects = projects.filter(
    (project) => project.status === 'Completed'
  ).length;

  const pendingProjects = projects.filter(
    (project) => project.status === 'Pending'
  ).length;

  return (
    <div className="project-tracking-page">
      <Header
        title="Project Tracking"
        subtitle="Monitor medical device testing projects and progress"
      />

      <section className="page-section">
        <h2>Project Summary</h2>

        <div className="project-summary">
          <article className="summary-card">
            <h3>Total Projects</h3>
            <p className="summary-number">{projects.length}</p>
          </article>

          <article className="summary-card">
            <h3>In Progress</h3>
            <p className="summary-number">{inProgressProjects}</p>
          </article>

          <article className="summary-card">
            <h3>Completed</h3>
            <p className="summary-number">{completedProjects}</p>
          </article>

          <article className="summary-card">
            <h3>Pending</h3>
            <p className="summary-number">{pendingProjects}</p>
          </article>
        </div>
      </section>

      <section className="page-section">
        <h2>Project Register</h2>
        <DataTable columns={columns} data={projects} />
      </section>

      <section className="page-section">
        <h2>Project and Product Overview</h2>

        <div className="product-status-list">
          {projects.map((project) => {
            const relatedProduct = products.find(
              (product) => product.productId === project.productId
            );

            return (
              <article className="product-status-item" key={project.id}>
                <div>
                  <h3>{project.projectName}</h3>
                  <p>Project ID: {project.projectId}</p>
                  <p>
                    Product: {relatedProduct?.productName || 'Unknown Product'}
                  </p>
                  <p>Owner: {project.owner}</p>
                </div>

                <StatusBadge status={project.status} />
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default ProjectTracking;
