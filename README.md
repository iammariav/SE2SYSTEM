#  🏥 Backend API Project (Clinic Appointment System API) 🏥

# - Project Overview - 

## The Clinic Appointment Management API streamlines clinic operations by providing:

* Doctor Management – store and update doctor information

* Patient Records – maintain patient details and history

* Appointment Scheduling – create, update, and manage appointments

## Architecture:

- Follows MVC pattern for clean separation of concerns

- Database hosted on MongoDB Atlas.

## BASE URL 
http://localhost:3000/api

# 🌐 API Endpoints

## Patient Routes

| Method | Endpoint | Description |
|--------|-----------|-------------|
| GET | `/api/patients` | Retrieve all patients |
| GET | `/api/patients/:id` | Retrieve a patient by ID |
| POST | `/api/patients` | Add a new patient |
| PUT | `/api/patients/:id` | Update patient details |
| DELETE | `/api/patients/:id` | Delete a patient |

## Sample Requests 
### Create Patient
POST http://localhost:3000/api/patients
Body (JSON): 
{
  "name": "Charlaah Bautista",
  "birthDate": "April 12, 1999",
  "email": "charlaah.bautista@email.com",
  "phone": "09561234574"
}

### Update Patient
PUT http://localhost:3000/api/patients/68f21e86b8f51df994827030
Body (JSON): 
{
    "phone": "09561234574"
}

---

## Doctor Routes

| Method | Endpoint | Description |
|--------|-----------|-------------|
| GET | `/api/doctors` | Retrieve all doctors |
| GET | `/api/doctors/:id` | Retrieve a doctor by ID |
| POST | `/api/doctors` | Add a new doctor |
| PUT | `/api/doctors/:id` | Update an existing doctor |
| DELETE | `/api/doctors/:id` | Delete a doctor |

### Create Doctor 
POST http://localhost:3000/api/doctors
Body (JSON):
{
  "name": "Dr. Angela Reyes",
  "specialty": "Dentist"
}

### Update Doctor 
PUT http://localhost:3000/api/doctors/68f22259b8f51df994827040
BODY (JSON):
{
  "name": "Dr. Peter Ramos",
  "specialty": "Orthopedics"
}

---

## Appointment Routes

| Method | Endpoint | Description |
|--------|-----------|-------------|
| GET | `/api/appointments` | Retrieve all appointments |
| GET | `/api/appointments/:id` | Retrieve an appointment by ID |
| POST | `/api/appointments` | Create a new appointment |
| PUT | `/api/appointments/:id` | Update appointment details |
| DELETE | `/api/appointments/:id` | Delete or cancel an appointment |

### Create Appointment 
POST http://localhost:3000/api/appointments
Body (JSON):
{
  "patientId": "6711abc1234567890a1b2c4f",
  "doctorId": "6711abc1234567890a1b2d5f",
  "startAt": "2025-10-20T10:00:00Z",
  "endAt": "2025-10-20T10:45:00Z",
  "notes": "Semi-annual dental cleaning and oral exam"
}

### Update Appointment 
PUT http://localhost:3000/api/appointments/68f22538b8f51df994827048
Body (JSON):
{
  "patientId": "6711abc1234567890a1b2c4f",
  "doctorId": "6711abc1234567890a1b2d5f",
  "startAt": "2025-10-20T10:00:00Z",
  "endAt": "2025-10-20T10:45:00Z"
}

---

## Environment Setup

Create a .env file in the project root.
Add the following variables:
MONGO_URI=your_mongodb_connection_string
PORT=3000

## Key Features

> Complete CRUD operations for all entities
> Connected to MongoDB Atlas
> Follows MVC structure
> Environment variables for security
> Fully compatible with Postman
> JSON-based, REST-compliant responses

## Testing

Local Testing: Use Postman with http://localhost:3000 as the base URL
Postman Demo Video: https://drive.google.com/drive/folders/18S1ii-iZIJMpBCWARLcZCBzkY0HZ9_t3?usp=sharing
