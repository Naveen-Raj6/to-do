import mysql from 'mysql';
import dotenv from 'dotenv';
dotenv.config();

let pool;

// Function to create the database if it doesn't exist
const createDatabaseIfNotExists = (cb) => {
    const connection = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS
    });
    connection.query(`CREATE DATABASE IF NOT EXISTS \`${process.env.DB_NAME}\`;`, (err, result) => {
        if (err) {
            console.error('❌ Error creating database:', err.message);
            cb(err);
        } else {
            console.log(`✅ Database '${process.env.DB_NAME}' is ready.`);
            cb(null);
        }
        connection.end();
    });
};

const connectDB = (cb) => {
    createDatabaseIfNotExists((err) => {
        if (!err) {
            pool = mysql.createPool({
                host: process.env.DB_HOST,
                user: process.env.DB_USER,
                password: process.env.DB_PASS,
                database: process.env.DB_NAME,
            });
            pool.getConnection((err, connection) => {
                if (err) {
                    console.error('❌ MySQL connection error:', err.message);
                } else {
                    console.log('✅ MySQL connected successfully!');
                    connection.release();
                }
                if (cb) cb();
            });
        } else {
            if (cb) cb(err);
        }
    });
};

const getPool = () => pool;

export { connectDB, getPool };
