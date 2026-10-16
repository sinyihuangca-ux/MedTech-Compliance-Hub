
-- MedTech Compliance Hub
-- SQLite database schema
-- All records are fictional and for portfolio demonstration.

PRAGMA foreign_keys = ON;

-- 1. Products
CREATE TABLE IF NOT EXISTS Products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    product_code TEXT NOT NULL UNIQUE,
    product_name TEXT NOT NULL,
    category TEXT NOT NULL,
    manufacturer TEXT NOT NULL,
    model TEXT,
    description TEXT,
    status TEXT NOT NULL DEFAULT 'Pending'
);

-- 2. Safety Testing Records
CREATE TABLE IF NOT EXISTS SafetyTests (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    test_code TEXT NOT NULL UNIQUE,
    product_id INTEGER NOT NULL,
    test_type TEXT NOT NULL,
    standard TEXT,
    start_date TEXT,
    completion_date TEXT,
    result TEXT,
    status TEXT NOT NULL DEFAULT 'Pending',

    FOREIGN KEY (product_id)
        REFERENCES Products(id)
        ON UPDATE CASCADE
        ON DELETE RESTRICT
);

-- 3. Risk Management Records
CREATE TABLE IF NOT EXISTS Risks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    risk_code TEXT NOT NULL UNIQUE,
    product_id INTEGER NOT NULL,
    hazard TEXT NOT NULL,
    hazardous_situation TEXT,
    severity TEXT NOT NULL,
    occurrence_probability TEXT,
    risk_controls TEXT,
    residual_risk TEXT,
    status TEXT NOT NULL DEFAULT 'Under Review',

    FOREIGN KEY (product_id)
        REFERENCES Products(id)
        ON UPDATE CASCADE
        ON DELETE RESTRICT
);

-- 4. Compliance Projects
CREATE TABLE IF NOT EXISTS Projects (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    project_code TEXT NOT NULL UNIQUE,
    product_id INTEGER NOT NULL,
    project_name TEXT NOT NULL,
    owner TEXT,
    start_date TEXT,
    planned_completion_date TEXT,
    actual_completion_date TEXT,
    status TEXT NOT NULL DEFAULT 'Pending',
    notes TEXT,

    FOREIGN KEY (product_id)
        REFERENCES Products(id)
        ON UPDATE CASCADE
        ON DELETE RESTRICT
);

-- 5. Product Issues
CREATE TABLE IF NOT EXISTS ProductIssues (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    issue_code TEXT NOT NULL UNIQUE,
    product_id INTEGER NOT NULL,
    description TEXT NOT NULL,
    discovery_date TEXT,
    priority TEXT NOT NULL DEFAULT 'Medium',
    assigned_to TEXT,
    corrective_action TEXT,
    due_date TEXT,
    status TEXT NOT NULL DEFAULT 'Open',
    closure_date TEXT,

    FOREIGN KEY (product_id)
        REFERENCES Products(id)
        ON UPDATE CASCADE
        ON DELETE RESTRICT
);

-- Indexes for frequently used product relationships.
CREATE INDEX IF NOT EXISTS idx_safetytests_product_id
    ON SafetyTests(product_id);

CREATE INDEX IF NOT EXISTS idx_risks_product_id
    ON Risks(product_id);

CREATE INDEX IF NOT EXISTS idx_projects_product_id
    ON Projects(product_id);

CREATE INDEX IF NOT EXISTS idx_productissues_product_id
    ON ProductIssues(product_id);
