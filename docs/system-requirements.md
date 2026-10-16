
# MedTech Compliance Hub
## System Requirements Specification

### 1. Project Overview

MedTech Compliance Hub is a web-based Medical Device Compliance Management System designed to organize and track medical device products, safety testing, risk management, compliance projects, and product issues.

The system is developed as a portfolio project to demonstrate skills in frontend development, database design, backend API development, and medical device compliance workflows.

All companies, products, personnel, and records used in this project are fictional.

### 2. Project Objectives

The objectives of this project are to:

- Maintain a centralized registry of medical device products.
- Track medical device safety testing activities and results.
- Record identified hazards and risk management activities.
- Monitor compliance project schedules and progress.
- Track product issues, corrective actions, and resolution status.
- Demonstrate the integration of a React frontend, Express backend, and SQL database.

### 3. Target Users

The system is designed for the following fictional user roles:

- Compliance Engineer: Reviews testing records and compliance documentation.
- Test Engineer: Maintains safety testing records and test results.
- Project Coordinator: Monitors project schedules and progress.
- Risk Management Reviewer: Reviews identified hazards and risk records.

These roles describe intended users. User authentication and role-based access control are not included in the initial version.

### 4. Functional Requirements

#### 4.1 Product Management

The system shall:

- Display registered medical device products.
- Store product identification, name, category, manufacturer, and model.
- Display the current status of each product.
- Associate products with related testing, risk, project, and issue records.

#### 4.2 Safety Testing Management

The system shall:

- Maintain safety testing records.
- Record test type, applicable standard, testing dates, and results.
- Track testing status.
- Associate each testing record with a registered product.

#### 4.3 Risk Management

The system shall:

- Maintain records of identified hazards.
- Record risk severity, occurrence information, and risk control measures.
- Track the review status of each risk.
- Associate each risk record with a registered product.

#### 4.4 Project Tracking

The system shall:

- Maintain compliance project records.
- Record project name, assigned personnel, and project dates.
- Track project status and completion.
- Associate each project with a registered product.

#### 4.5 Product Issue Management

The system shall:

- Record product issues identified during testing or documentation review.
- Record issue descriptions, priority, responsible personnel, and corrective actions.
- Track issue status, target resolution dates, and closure dates.
- Associate each issue with a registered product.

#### 4.6 Dashboard

The system shall:

- Display the total number of registered products.
- Summarize safety testing activities.
- Display selected risk indicators.
- Summarize project status.
- Provide an overview of product issues as the application develops.

### 5. Non-Functional Requirements

#### 5.1 Usability

The interface shall use consistent navigation, readable tables, and clear status labels.

#### 5.2 Maintainability

The application shall organize frontend components, page components, backend routes, and database files into separate modules.

#### 5.3 Data Integrity

The database shall use primary keys, foreign keys, and appropriate constraints to maintain relationships between records.

#### 5.4 Privacy and Confidentiality

All demonstration data shall be fictional. No confidential manufacturer records or identifiable customer information shall be included.

#### 5.5 Error Handling

The backend shall return appropriate HTTP status codes and error messages when requests fail.

### 6. Technology Stack

- Frontend: React and JavaScript
- Frontend Development Server: Vite
- Backend: Node.js and Express
- Database: SQLite
- Query Language: SQL
- API Communication: HTTP and JSON
- Documentation: Markdown

### 7. Database Entities

The initial database shall contain the following entities:

- Products
- SafetyTests
- Risks
- Projects
- ProductIssues

Each testing, risk, project, and issue record shall reference an existing product through a foreign key.

### 8. API Scope

The backend API shall provide endpoints for:

- Retrieving safety testing records
- Retrieving risk records
- Retrieving project records
- Retrieving product issue records

Additional create, update, and delete operations may be implemented in later development stages.

### 9. Project Limitations

The initial version is a demonstration system and is not intended for actual regulatory submissions, clinical decision-making, or production medical device quality management.

The initial version does not include user authentication, electronic signatures, audit trails, automated regulatory approval, or validated electronic records.

### 10. Future Enhancements

Potential future enhancements include:

- Product creation and editing
- Advanced filtering and search
- Risk assessment review workflows
- Corrective and preventive action tracking
- File attachment management
- User authentication and role-based permissions
- Audit logging
- Dashboard reporting and data visualization
