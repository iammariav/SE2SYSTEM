const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Import routes
const patientRoutes = require('./routes/patientRoutes');
const doctorRoutes = require('./routes/doctorRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(bodyParser.json());

// Route grouping
app.use('/api', patientRoutes);
app.use('/api', doctorRoutes);
app.use('/api', appointmentRoutes);

// Test route
app.get('/', (req, res) => res.send('Clinic API is running...'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

