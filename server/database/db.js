import Database from 'better-sqlite3';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Get the current directory of this file.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define the database and schema paths.
const dbPath = path.join(__dirname, 'medtech.db');
const schemaPath = path.join(__dirname, 'schema.sql');

// Create or connect to the SQLite database.
const db = new Database(dbPath);

// Enable foreign key constraints.
db.pragma('foreign_keys = ON');

// Load the SQL schema and create tables if needed.
const schema = fs.readFileSync(schemaPath, 'utf8');
db.exec(schema);

// Export the database connection for the API routes.
export default db;
