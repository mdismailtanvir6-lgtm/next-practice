# Next.js Authentication System - Setup Guide

Complete user authentication system built with Next.js, React, and MongoDB.

## 📋 Prerequisites

- Node.js 16.0 or higher
- MongoDB Atlas account (free tier available)
- npm or yarn package manager

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install mongoose bcryptjs
```

### 2. MongoDB Setup

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account or sign in
3. Create a new cluster
4. Create a database user with username and password
5. Get your connection string (should look like):
   ```
   mongodb+srv://username:password@cluster.mongodb.net/next-practice?retryWrites=true&w=majority
   ```

### 3. Environment Configuration

1. Copy `.env.local.example` to `.env.local`
2. Update the `MONGODB_URI` with your connection string from MongoDB Atlas
3. Replace `username` and `password` with your MongoDB credentials

```bash
MONGODB_URI=mongodb+srv://your-username:your-password@your-cluster.mongodb.net/next-practice?retryWrites=true&w=majority
```

### 4. Run Development Server

```bash
npm run dev
```

The application will start at `http://localhost:3000`

## 📁 Project Structure

```
app/
├── api/
│   └── auth/
│       ├── register/
│       │   └── route.js          # User registration endpoint
│       ├── login/
│       │   └── route.js          # User login endpoint
│       └── logout/
│           └── route.js          # User logout endpoint
├── register/
│   ├── page.js                   # Sign up page
│   └── register.module.css       # Sign up styles
├── login/
│   ├── page.js                   # Sign in page
│   └── login.module.css          # Sign in styles
├── dashboard/
│   ├── page.js                   # Protected dashboard
│   └── dashboard.module.css      # Dashboard styles
└── layout.js                     # Root layout

lib/
└── mongodb.js                    # MongoDB connection with caching

models/
└── User.js                       # User schema and model
```

## 🎯 Features

✅ **User Registration**
- Full name, email, and password validation
- Duplicate email checking
- Password strength indicator
- Secure password hashing with bcrypt

✅ **User Login**
- Email and password validation
- Secure authentication
- HTTP-only cookies for session management
- User data stored in localStorage

✅ **Protected Dashboard**
- Only accessible to authenticated users
- Display user information
- Logout functionality
- Automatic redirect to login for unauthenticated users

✅ **Security Features**
- Password hashing with bcrypt (10 salt rounds)
- HTTP-only secure cookies
- Input validation on client and server
- Email format validation
- Password confirmation matching

✅ **User Experience**
- Beautiful gradient UI design
- Responsive design (mobile, tablet, desktop)
- Form validation with error messages
- Loading states
- Success messages
- Password strength indicator

## 🔗 Application URLs

| Page | URL | Description |
|------|-----|-------------|
| Sign Up | `http://localhost:3000/register` | Create a new account |
| Sign In | `http://localhost:3000/login` | Log in to existing account |
| Dashboard | `http://localhost:3000/dashboard` | Protected user dashboard |

## 📝 API Endpoints

### Register User
```
POST /api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "confirmPassword": "password123"
}

Response:
{
  "message": "User registered successfully",
  "user": {
    "id": "...",
    "name": "John Doe",
    "email": "john@example.com",
    "createdAt": "..."
  }
}
```

### Login User
```
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}

Response:
{
  "message": "Login successful",
  "user": {
    "id": "...",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

### Logout User
```
POST /api/auth/logout

Response:
{
  "message": "Logout successful"
}
```

## 🔐 Password Requirements

- Minimum 6 characters
- Weak: Less than 6 characters
- Medium: 6-9 characters or lacks uppercase/numbers
- Strong: 10+ characters with uppercase and numbers

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop (1024px and above)
- Tablet (600px - 1023px)
- Mobile (below 600px)

## 🛠️ Troubleshooting

### MongoDB Connection Issues
- Verify your connection string is correct
- Check username and password in MongoDB Atlas
- Ensure your IP address is whitelisted in MongoDB Atlas
- Check that `MONGODB_URI` is set in `.env.local`

### "User already registered" Error
- Use a different email address
- Or reset your MongoDB database

### CORS Issues
- The API routes are on the same domain, so CORS shouldn't be an issue
- If problems persist, check your `fetch` calls include proper headers

### Cookies Not Working
- Ensure you're testing on localhost or proper domain
- Check browser cookie settings
- Verify secure cookie flags in production

## 🚀 Production Deployment

When deploying to production:

1. Update `MONGODB_URI` in your hosting platform's environment variables
2. Set `NODE_ENV=production`
3. Update `NEXT_PUBLIC_API_URL` to your production domain
4. Ensure HTTPS is enabled
5. Update MongoDB Atlas IP whitelist to include your production server

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Mongoose Documentation](https://mongoosejs.com)
- [bcryptjs Documentation](https://github.com/dcodeIO/bcrypt.js)

## 📄 License

This project is open source and available under the MIT License.

---

**Happy Coding! 🎉**
