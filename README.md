#  Backend API Project (Clinic Appointment System API)

# Project Overview

## The Clinic Appointment Management API streamlines clinic operations by providing:

Doctor Management – store and update doctor information

Patient Records – maintain patient details and history

Appointment Scheduling – create, update, and manage appointments

## Architecture:

Follows MVC pattern for clean separation of concerns

Database hosted on MongoDB Atlas.

# 🌐 API Endpoints

## Patient Routes

| Method | Endpoint | Description |
|--------|-----------|-------------|
| GET | `/api/patients` | Retrieve all patients |
| GET | `/api/patients/:id` | Retrieve a patient by ID |
| POST | `/api/patients` | Add a new patient |
| PUT | `/api/patients/:id` | Update patient details |
| DELETE | `/api/patients/:id` | Delete a patient |

---

## Doctor Routes

| Method | Endpoint | Description |
|--------|-----------|-------------|
| GET | `/api/doctors` | Retrieve all doctors |
| GET | `/api/doctors/:id` | Retrieve a doctor by ID |
| POST | `/api/doctors` | Add a new doctor |
| PUT | `/api/doctors/:id` | Update an existing doctor |
| DELETE | `/api/doctors/:id` | Delete a doctor |

---

## Appointment Routes

| Method | Endpoint | Description |
|--------|-----------|-------------|
| GET | `/api/appointments` | Retrieve all appointments |
| GET | `/api/appointments/:id` | Retrieve an appointment by ID |
| POST | `/api/appointments` | Create a new appointment |
| PUT | `/api/appointments/:id` | Update appointment details |
| DELETE | `/api/appointments/:id` | Delete or cancel an appointment |

## Environment Setup

Create a .env file in the project root.
Add the following variables:
MONGO_URI=your_mongodb_connection_string
PORT=3000

## Key Features

Complete CRUD operations for all entities
Connected to MongoDB Atlas
Follows MVC structure
Environment variables for security
Fully compatible with Postman
JSON-based, REST-compliant responses

## Testing

Local Testing: Use Postman with http://localhost:3000 as the base URL
Postman Demo Video: https://drive.google.com/drive/folders/18S1ii-iZIJMpBCWARLcZCBzkY0HZ9_t3?usp=sharing
