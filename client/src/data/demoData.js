/*
  Demo data for MedTech Compliance Hub.
  All records are fictional and created for portfolio demonstration.
*/

export const products = [
  {
    id: 1,
    productId: 'MD-001',
    productName: 'Pulse Oximeter',
    category: 'Patient Monitoring',
    manufacturer: 'Northstar Medical',
    status: 'In Progress'
  },
  {
    id: 2,
    productId: 'MD-002',
    productName: 'Electric Hospital Bed',
    category: 'Medical Furniture',
    manufacturer: 'Everwell Devices',
    status: 'Pending'
  },
  {
    id: 3,
    productId: 'MD-003',
    productName: 'Digital Hearing Aid',
    category: 'Hearing Assistance',
    manufacturer: 'ClearSound Medical',
    status: 'Completed'
  }
];

export const safetyTests = [
  {
    id: 1,
    testId: 'TEST-001',
    productId: 'MD-001',
    testType: 'Electrical Safety',
    standard: 'IEC 60601-1',
    status: 'In Progress'
  },
  {
    id: 2,
    testId: 'TEST-002',
    productId: 'MD-002',
    testType: 'Mechanical Testing',
    standard: 'Internal Test Procedure',
    status: 'Pending'
  },
  {
    id: 3,
    testId: 'TEST-003',
    productId: 'MD-003',
    testType: 'Electrical Safety',
    standard: 'IEC 60601-1',
    status: 'Completed'
  }
];

export const risks = [
  {
    id: 1,
    riskId: 'RISK-001',
    productId: 'MD-001',
    hazard: 'Incorrect oxygen saturation reading',
    severity: 'High',
    status: 'Under Review'
  },
  {
    id: 2,
    riskId: 'RISK-002',
    productId: 'MD-002',
    hazard: 'Unexpected bed movement',
    severity: 'Medium',
    status: 'Open'
  },
  {
    id: 3,
    riskId: 'RISK-003',
    productId: 'MD-003',
    hazard: 'Device discomfort during use',
    severity: 'Low',
    status: 'Controlled'
  }
];

export const projects = [
  {
    id: 1,
    projectId: 'PROJ-001',
    projectName: 'Pulse Oximeter Verification',
    productId: 'MD-001',
    owner: 'Alex Chen',
    status: 'In Progress'
  },
  {
    id: 2,
    projectId: 'PROJ-002',
    projectName: 'Hospital Bed Safety Review',
    productId: 'MD-002',
    owner: 'Jamie Lee',
    status: 'Pending'
  },
  {
    id: 3,
    projectId: 'PROJ-003',
    projectName: 'Hearing Aid Test Review',
    productId: 'MD-003',
    owner: 'Morgan Taylor',
    status: 'Completed'
  }
];

export const productIssues = [
  {
    id: 1,
    issueId: 'ISSUE-001',
    productId: 'MD-001',
    description: 'Measurement result requires further verification',
    priority: 'High',
    status: 'Open'
  },
  {
    id: 2,
    issueId: 'ISSUE-002',
    productId: 'MD-002',
    description: 'Additional mechanical test evidence is needed',
    priority: 'Medium',
    status: 'In Progress'
  }
  {
    id: 4,
    productId: 'MD-004',
    productName: 'Transcranial Magnetic Stimulation (TMS) System',
    category: 'Non-invasive Brain Stimulation Therapy',
    manufacturer: 'V.R. Corp.',
    model: 'TMS-D01',
    description:
      'A computerized, electromechanical medical device that delivers non-invasive magnetic stimulation to targeted regions of the cerebral cortex.',
    status: 'Document Review Completed'
  }
];
