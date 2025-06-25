import http from 'http';
import app from './app.js';
import { connectDB } from './config/db.js';

const PORT = process.env.PORT || 4040;

// Start server only after DB is ready
connectDB(() => {
    const server = http.createServer(app);
    server.listen(PORT, () => {
        console.log(`✅ Server is running on port ${PORT}`);
    });
});
