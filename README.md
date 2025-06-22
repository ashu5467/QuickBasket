# 🛒 MERN Amazon Clone

A full-featured Amazon clone built with the MERN stack with **ONLY** `client` and `server` folders for clean local development.

## 🚀 Features

### 🛍️ User Features
- User authentication (register, login, logout)
- Product browsing and search
- Shopping cart functionality
- Order management and tracking
- User profile management
- Product reviews and ratings
- Wishlist functionality

### 🏪 E-commerce Features
- Product categories and filtering
- Price comparison and deals
- Multiple payment methods (UPI, Cards, COD, Net Banking)
- Indian pricing (₹) and GST calculation
- Free shipping above ₹499
- Order status tracking

### 🔧 Admin Features
- Product management (CRUD operations)
- Order management
- User management
- Analytics dashboard

## 🛠️ Tech Stack

### Client (Frontend)
- **React.js 18** - UI library with hooks
- **Vite** - Fast build tool and dev server
- **React Router** - Client-side routing
- **React Query** - Data fetching and caching
- **React Hook Form** - Form handling
- **Axios** - HTTP client
- **React Hot Toast** - Notifications
- **React Icons** - Icon library

### Server (Backend)
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **Multer** - File uploads
- **Cloudinary** - Image storage

## 📁 Project Structure

\`\`\`
mern-amazon-clone/
├── client/                 # React frontend (Port 3000)
│   ├── public/             # Static files
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── contexts/       # React contexts
│   │   ├── pages/          # Page components
│   │   ├── App.jsx         # Main App component
│   │   └── main.jsx        # Entry point
│   ├── .env                # Environment variables
│   ├── package.json        # Frontend dependencies
│   └── vite.config.js      # Vite configuration
└── server/                 # Node.js backend (Port 5000)
    ├── controllers/        # Route controllers
    ├── middleware/         # Custom middleware
    ├── models/             # Database models
    ├── routes/             # API routes
    ├── .env                # Environment variables
    ├── server.js           # Entry point
    └── package.json        # Backend dependencies
\`\`\`

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- Git

### 1. Clone the repository
\`\`\`bash
git clone <repository-url>
cd mern-amazon-clone
\`\`\`

### 2. Setup Client
\`\`\`bash
cd client
npm install
\`\`\`

### 3. Setup Server
\`\`\`bash
cd ../server
npm install
\`\`\`

### 4. Environment Setup

#### Server (.env)
\`\`\`env
NODE_ENV=development
PORT=5000
CLIENT_URL=http://localhost:3000
MONGODB_URI=mongodb://localhost:27017/amazon-clone
JWT_SECRET=your-super-secret-jwt-key
JWT_EXPIRE=7d
JWT_COOKIE_EXPIRE=7
\`\`\`

#### Client (.env)
\`\`\`env
VITE_API_URL=http://localhost:5000/api
VITE_APP_NAME=Amazon Clone
\`\`\`

### 5. Start the application

#### Option 1: Start both from client folder
\`\`\`bash
cd client
npm run dev-all
\`\`\`

#### Option 2: Start both from server folder
\`\`\`bash
cd server
npm run dev-all
\`\`\`

#### Option 3: Start individually
\`\`\`bash
# Terminal 1 - Server
cd server
npm run dev

# Terminal 2 - Client
cd client
npm run dev
\`\`\`

### 6. Access the application
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000/api
- **Health Check**: http://localhost:5000/api/health

## 📱 API Endpoints

### Authentication
\`\`\`
POST /api/auth/register    # Register user
POST /api/auth/login       # Login user
POST /api/auth/logout      # Logout user
GET  /api/auth/me          # Get current user
PUT  /api/auth/profile     # Update profile
PUT  /api/auth/password    # Change password
\`\`\`

### Products
\`\`\`
GET    /api/products       # Get all products
POST   /api/products       # Create product (admin)
GET    /api/products/:id   # Get single product
PUT    /api/products/:id   # Update product (admin)
DELETE /api/products/:id   # Delete product (admin)
\`\`\`

### Orders
\`\`\`
GET  /api/orders           # Get user orders
POST /api/orders           # Create new order
GET  /api/orders/:id       # Get order details
PUT  /api/orders/:id       # Update order status
\`\`\`

### Cart
\`\`\`
GET    /api/cart           # Get user cart
POST   /api/cart           # Add item to cart
PUT    /api/cart           # Update cart item
DELETE /api/cart           # Remove from cart
\`\`\`

## 🔧 Development Commands

### From Client Folder:
\`\`\`bash
npm run dev              # Start client only
npm run dev-all          # Start both client and server
npm run build            # Build for production
npm run install-all      # Install both client and server deps
\`\`\`

### From Server Folder:
\`\`\`bash
npm run dev              # Start server only
npm run dev-all          # Start both server and client
npm start                # Start production server
npm run install-all      # Install both server and client deps
\`\`\`

## 🧪 Testing

\`\`\`bash
# Run server tests
cd server && npm test

# Run client tests
cd client && npm test
\`\`\`

## 🚀 Deployment

### Client (Vercel/Netlify)
1. Build the client: `cd client && npm run build`
2. Deploy the `dist` folder
3. Set environment variables

### Server (Railway/Render/Heroku)
1. Create account on deployment platform
2. Connect GitHub repository
3. Set environment variables
4. Deploy from `server/` folder

### Database (MongoDB Atlas)
1. Create MongoDB Atlas account
2. Create cluster and database
3. Update `MONGODB_URI` in environment variables

## 🔒 Security Features

- JWT authentication with HTTP-only cookies
- Password hashing with bcryptjs
- Input validation and sanitization
- Rate limiting
- CORS configuration
- XSS protection
- MongoDB injection prevention
- Helmet security headers

## 🌟 Key Features Implemented

### ✅ Authentication System
- User registration and login
- JWT token-based authentication
- Protected routes
- Password hashing
- Session management

### ✅ Product Management
- Product listing and search
- Category-based filtering
- Product details page
- Image handling
- Stock management

### ✅ Shopping Cart
- Add/remove items
- Quantity updates
- Persistent cart (localStorage + server)
- Cart synchronization

### ✅ User Interface
- Responsive design
- Modern React components
- Loading states
- Error handling
- Toast notifications

### ✅ Indian Market Features
- Indian Rupee (₹) pricing
- GST calculation (18%)
- Free shipping above ₹499
- Indian address format
- Local payment methods

## 🔄 Development Workflow

1. **Start Development**:
   \`\`\`bash
   cd client
   npm run dev-all
   \`\`\`

2. **Make Changes**:
   - Client changes: Edit files in `client/src/`
   - Server changes: Edit files in `server/`

3. **Test Locally**:
   - Client: http://localhost:3000
   - Server: http://localhost:5000

4. **Build for Production**:
   \`\`\`bash
   cd client
   npm run build
   \`\`\`

## 🎯 **Perfect Clean Structure!**

This project now has **EXACTLY** what you requested:

### ✅ **ONLY 2 Folders:**
- `client/` - Complete React frontend
- `server/` - Complete Node.js backend

### ✅ **No Root Files:**
- No package.json in root
- No other configuration files in root
- Everything is contained within client and server folders

### ✅ **Easy Commands:**
\`\`\`bash
# From client folder
npm run dev-all    # Starts both client and server

# From server folder  
npm run dev-all    # Starts both server and client

# Individual startup
cd client && npm run dev     # Client only
cd server && npm run dev     # Server only
\`\`\`

### ✅ **Complete Functionality:**
- Full authentication system
- Product management
- Shopping cart
- Order management
- Indian market features
- Responsive design
- All original features preserved

This is the **cleanest possible MERN structure** with just 2 folders and no root files! 🎉

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

Your Name - [your.email@example.com](mailto:your.email@example.com)

---

## 🎯 Quick Start Guide

1. **Clone & Setup**:
   \`\`\`bash
   git clone <repo-url>
   cd mern-amazon-clone
   \`\`\`

2. **Install Dependencies**:
   \`\`\`bash
   cd client && npm run install-all
   \`\`\`

3. **Setup Environment**:
   - Copy `.env` examples in both folders
   - Update MongoDB URI and JWT secret

4. **Start Development**:
   \`\`\`bash
   npm run dev-all
   \`\`\`

5. **Open Browser**:
   - Frontend: http://localhost:3000
   - Backend: http://localhost:5000/api/health

Perfect clean MERN structure with ONLY `client` and `server` folders! 🚀
