import React from 'react';
import Header from '../components/Header.jsx';
import StatusBadge from '../components/StatusBadge.jsx';

function CaseStudies() {
  const caseStudies = [
    {
      id: 'CASE-001',
      title: 'Electrical Safety Testing',
      standard: 'IEC 60601-1',
      product: 'Fictional Patient Monitoring Device',
      challenge:
        'Organizing electrical safety test records and identifying items that require further verification.',
      approach: [
        'Review available product specifications and technical documentation.',
        'Organize test observations and supporting evidence.',
        'Track items requiring clarification or additional verification.',
        'Summarize test progress for technical review.'
      ],
      outcome:
        'Demonstrates a structured workflow for test documentation, issue tracking, and review.',
      status: 'Completed'
    },
    {
      id: 'CASE-002',
      title: 'Risk Management Documentation',
      standard: 'ISO 14971',
      product: 'Fictional Electric Hospital Bed',
      challenge:
        'Maintaining clear traceability between identified hazards, risk evaluations, and follow-up actions.',
      approach: [
        'Identify potential hazards associated with intended device use.',
        'Document example risk evaluations and control measures.',
        'Link identified risks to follow-up actions.',
        'Track review status and outstanding documentation.'
      ],
      outcome:
        'Demonstrates how risk records and review activities can be organized in a centralized system.',
      status: 'Completed'
    },
    {
      id: 'CASE-003',
      title: 'Testing Project Coordination',
      standard: 'Project Tracking Workflow',
      product: 'Fictional Digital Hearing Aid',
      challenge:
        'Keeping project status, outstanding information, and external testing coordination organized.',
      approach: [
        'Record project ownership and current status.',
        'Track outstanding technical information and follow-up items.',
        'Coordinate testing milestones and communication records.',
        'Review project progress and identify pending actions.'
      ],
      outcome:
        'Demonstrates project tracking and coordination across testing activities.',
      status: 'In Progress'
    }
  ];

  return (
    <div className="case-studies-page">
      <Header
        title="Case Studies"
        subtitle="Medical device compliance workflows and practical examples"
      />

      <section className="page-section">
        <div className="section-heading">
          <h2>Portfolio Case Studies</h2>
          <p>
            These fictionalized examples demonstrate compliance workflows
            and system design concepts. They do not represent actual client
            projects or certified test results.
          </p>
        </div>

        <div className="case-study-list">
          {caseStudies.map((study) => (
            <article className="case-study-card" key={study.id}>
              <div className="case-study-header">
                <div>
                  <p className="case-study-id">{study.id}</p>
                  <h3>{study.title}</h3>
                </div>

                <StatusBadge status={study.status} />
              </div>

              <div className="case-study-details">
                <p>
                  <strong>Standard / Workflow:</strong> {study.standard}
                </p>

                <p>
                  <strong>Example Product:</strong> {study.product}
                </p>
              </div>

              <div className="case-study-section">
                <h4>Challenge</h4>
                <p>{study.challenge}</p>
              </div>

              <div className="case-study-section">
                <h4>Approach</h4>
                <ul>
                  {study.approach.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ul>
              </div>

              <div className="case-study-section">
                <h4>Outcome</h4>
                <p>{study.outcome}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default CaseStudies;
