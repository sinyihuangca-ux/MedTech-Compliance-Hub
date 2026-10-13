# MedTech Compliance Hub: Medical Device Compliance Management System


# 1. Overall System Architecture

**Proposed Name:** MedTech Compliance Hub

**Presentation Layer — Frontend Interface**

Dashboard · Forms · Tables · Case Details

**Application Layer — Business Logic**

Testing Workflow · Risk Tracking · Project Status · Product Issues

**Data Layer — Data Storage**

Products · Test Records · Risk Documents · Issues · Projects · Cases

Technology stack:

| Technology        | Purpose                               | Related Coursework                         |
| ----------------- | ------------------------------------- | ------------------------------------------ |
| HTML / CSS        | Basic webpage structure and styling   | Web Development                            |
| JavaScript        | Form interactions and status updates  | Programming                                |
| React             | Reusable user interface components    | UI / Software Development                  |
| Node.js + Express | APIs and business logic               | Systems Analysis / Application Development |
| SQLite            | Store product, testing, and risk data | Database Systems                           |
| Git + GitHub      | Version control                       | Software Development Workflow              |

## Module 1 — Safety Testing

**Medical Device Safety Testing Management**

Record product information, testing standards, test items, testing status, and results.

- Test ID, Product ID, Test Standard
- Test Type: Electrical Safety, Mechanical, EMC
- Status: Planned, In Progress, Completed, Failed
- Findings, Corrective Actions, Retest Status

**Important:** EMC can be included as a supported testing category, but each case must clearly distinguish between work you personally performed and demonstration data.

## Module 2 — Risk Management

**Risk Management Documentation System**

Manage risk documentation types, versions, review statuses, and associated issues.

- Hazard Analysis
- Risk Assessment
- FMEA
- Usability Engineering
- Risk Control, Residual Risk
- Document Version, Review Status

This module can demonstrate your experience reviewing documentation and guiding manufacturers through documentation processes, without storing confidential customer risk files.

## Module 3 — Project Tracking

**Testing Project Coordination and Progress Tracking**

Treat each testing project as a workflow with milestones and actionable tasks.

- Project Timeline / Milestones
- External Lab Scheduling
- Task Owner, Due Date, Status
- Open Issues, Blockers
- Completion Percentage

This module is particularly suitable for demonstrating concepts from your PMP certification, Systems Analysis, and database coursework.

## Module 4 — Product Structure & Issues

**Product Structure and Technical Issue Management**

Break products down into subsystems and components, then link them to testing records and risk-related issues.

- Product → Subsystem → Component
- Component ID, Function, Material
- Related Test / Risk / Issue
- Issue Description, Severity, Resolution
- Corrective Action Tracking

For example, a fictional ultrasound device could contain a Power Supply, Main PCB, Enclosure, Probe, and Cable. This would allow you to demonstrate the relationships between product structures, testing records, and technical issues.

## 3. VS Code Project Folder Structure


```
medtech-compliance-hub/
│
├── client/                       # React frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── Sidebar.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── StatusBadge.jsx
│   │   │   └── DataTable.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Products.jsx
│   │   │   ├── SafetyTesting.jsx
│   │   │   ├── RiskManagement.jsx
│   │   │   ├── ProjectTracking.jsx
│   │   │   ├── ProductIssues.jsx
│   │   │   └── CaseStudies.jsx
│   │   │
│   │   ├── data/
│   │   │   └── demoData.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── server/                       # Node.js + Express
│   ├── routes/
│   │   ├── products.js
│   │   ├── tests.js
│   │   ├── risks.js
│   │   ├── projects.js
│   │   └── issues.js
│   ├── database/
│   │   ├── schema.sql
│   │   └── db.js
│   ├── app.js
│   └── package.json
│
├── docs/
│   ├── system-requirements.md
│   ├── erd.md
│   └── case-study-notes.md
│
├── README.md
└── .gitignore
```


## 4. How Should the Database Be Designed?


| Table           | Purpose                                                     |
| --------------- | ----------------------------------------------------------- |
| `products`      | Store basic product information                             |
| `components`    | Store product subsystems and components                     |
| `projects`      | Manage testing projects                                     |
| `test_records`  | Store testing items and results                             |
| `risk_records`  | Store risk analysis and risk control records                |
| `documents`     | Track document types, versions, and review statuses         |
| `project_tasks` | Manage schedules, assigned tasks, and due dates             |
| `issues`        | Track test findings, product issues, and corrective actions |
| `case_studies`  | Store the six anonymized case studies you plan to showcase  |

The main relationships can be designed as follows:

- Products contain components and can be associated with projects.
- Projects include testing records and scheduled tasks.
- Testing records identify findings and may be linked to issues.
- Risk records document identified hazards and risk controls.
- Documents maintain the relevant versions and review statuses.
- Issues can be associated with products, components, testing records, and risk records.
- Case studies demonstrate selected examples of these workflows.


## 5. How Should the Six Real-World Case Studies Be Presented?

### Case 01 — Electrical Safety Testing

Experience related to IEC 60601-1 testing.

### Case 02 — Mechanical Safety Testing

Impact, drop, and related mechanical testing.

### Case 03 — Hazard Analysis & Risk Assessment

Assisting manufacturers with the preparation or review of risk documentation.

### Case 04 — FMEA & Risk Controls

Failure Mode and Effects Analysis (FMEA), risk controls, and documentation tracking.

### Case 05 — Usability Engineering

Usability-related risks and documentation.

### Case 06 — Testing Project Coordination

External laboratory scheduling, documentation, and issue tracking.

## 6.Three-Phase Development Plan

### Phase 1 — UI Prototype

Build the Dashboard, sidebar navigation, four functional modules, and case study list.

Use fictional data stored in `demoData.js`. No backend is required at this stage.

### Phase 2 — Database & CRUD

Add SQLite and an Express API. Implement Create, Read, Update, and Delete (CRUD) functionality for products, testing records, risk records, and issues.

### Phase 3 — Six Case Studies & Deployment

Add six anonymized case studies that have been reviewed for confidentiality and public disclosure.

Complete the README, Entity-Relationship Diagram (ERD), system flowcharts, and screenshots of the working application. Then deploy a public version for portfolio presentation.

