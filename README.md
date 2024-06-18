# DocDog - Veterinary Appointment Scheduling Application

DocDog is an application designed for scheduling veterinary appointments. The application uses Firebase for database management and provides a user-friendly interface for users to register, log in, and manage their appointments.

## Features

- User Registration with email and password validation
- User Login with cookie-based session management
- User Profile with avatar, personal information, and a list of appointments
- Appointment scheduling with calendar integration
- Real-time appointment status updates using Firebase
- Responsive design for various screen sizes
- Customizable components and slots for badges

## Project Structure

### Main Structure

1. **Add Appointment Flow**

   - [DONE] Calendar + Doctor Selection
   - [DONE] Confirm Appointment (Props from Calendar and Doctor Components)
   - [TODO] Display the appointment in the pending list (Emit to User Profile)

2. **User Profile**
   - [DONE] View containing avatar, calendar, appointment list, personal data, and "Add Appointment" button
   - [DONE] Responsive Design (RWD)

### Components

- **RegisterUser Component**

  - [DONE] Disabled button if passwords are invalid
  - [DONE] Form trimming
  - [DONE] Form reset after submission
  - [DONE] Email and password validation

- **Doctor Component**
  - [DONE] Doctor selection component

## Database

**Endpoint:** `https://doc-dog-42e1c-default-rtdb.firebaseio.com/[ENDPOINT].json`

## Tasks

### TODO

- Replace default dialogs with modals
- After registering an appointment, show a toast notification
- Add environment variables for endpoints
  - Install `dotenv`
  - Create variables with paths
  - Write tests
- User login:
  - Implement cookie-based session management
  - Fetch user data from the database
  - Toggle login/logout state

### DONE

- [DONE] User registration: Password validation and button state change
- [DONE] Reset forms after submission
- [DONE] Trim inputs on forms
- [DONE] Configure Axios
- [DONE] Create user profile view
  - Avatar, calendar, appointments, personal data, "Add Appointment" button
- [DONE] Responsive Design (RWD)
- [DONE] Create slot with badge component
- [DONE] Fix avatar link
- [DONE] Create doctor component
- [DONE] Implement calendar component and integrate it with user view
- [DONE] Select Firebase as the database
- [DONE] Split into smaller components where possible
- [DONE] Back/cancel button to return to the dashboard
- [DONE] Fixed issue: Computed property "selectedDoctor" was assigned to but it has no setter.
- [DONE] Email validation
- [DONE] Password validation

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
