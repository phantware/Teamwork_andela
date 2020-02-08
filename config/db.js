import { Pool } from 'pg';

const connectionString = 'postgres://jamiu:jamiu@localhost:5432/jamiu';
const pool = new Pool({ connectionString });

export default pool;
