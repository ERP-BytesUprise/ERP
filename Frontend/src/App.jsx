import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import HomeNavbar from "./components/HomeNavbar.jsx";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/HRM Module/Dashboard.jsx";
import EmployeesList from "./pages/HRM Module/EmployeesList.jsx";
import Manage from "./pages/HRM Module/ManageEmployee.jsx";
import Leave from "./pages/HRM Module/EmployeeLeave.jsx";
import Notification from "./pages/HRM Module/Notification.jsx";
import CurrentPage from "./components/Backnav.jsx";
import LandingPage from "./pages/Landing Page/LandingPage.jsx";
import ActivateAccount from "./pages/Login-Signup/ActivateAccount.jsx";
import CreateAccountPage1 from "./pages/Login-Signup/CreateAccountPage1.jsx";
import CreateAccountPage2 from "./pages/Login-Signup/CreateAccountPage2.jsx";
import Login from "./pages/Login-Signup/Login.jsx";
import ResetPassword from "./pages/Login-Signup/ResetPassword.jsx";
import NewPassword from "./pages/Login-Signup/CreateNewPassword.jsx";
import ResetPasswordEmailSent from "./pages/Login-Signup/ResetPasswordEmailSentMsg.jsx";
import ProjectSummary from "./pages/HRM Module/ProjectSummary.jsx";
import ProjectDashboard from "./pages/HRM Module/ProjectDashboard.jsx";
import "./App.css";

const MainContent = () => {
  const location = useLocation(); // Get the current route
  const routeTitles = {
    "/": "Home",
    "/Dashboard": "Dashboard",
    "/Directory": "Directory",
    "/Notification": "Notification",
    "/Employee-Management": "Employee Management",
    "/Leave-Request": "Employee Management",
    // Add more routes here as needed
  };

  const getPageTitle = () => {
    return routeTitles[location.pathname] || "Home"; // Default to 'Home' if path is not found
  };

  const LandingLayout = ({ children }) => (
    <>
      <HomeNavbar />
      {children}
    </>
  );

  // Layout for HRM module (with Navbar and Sidebar)
  const HRMLayout = ({ children }) => (
    <div className="app-container">
      <Navbar />
      <div className="main-content">
        <Sidebar />
        <div className="page-content">{children}</div>
      </div>
    </div>
  );

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <LandingLayout>
              <LandingPage />
            </LandingLayout>
          }
        />
        <Route path="/Login" element={<Login />} />
        <Route path="/CreateAccountPage1" element={<CreateAccountPage1 />} />
        <Route path="/CreateAccountPage2" element={<CreateAccountPage2 />} />
        <Route path="/ResetPassword" element={<ResetPassword />} />
        <Route
          path="/ResetPasswordEmailSent"
          element={<ResetPasswordEmailSent />}
        />

        <Route
          path="/Dashboard"
          element={
            <HRMLayout>
              <CurrentPage title={getPageTitle()} />
              <Dashboard />
            </HRMLayout>
          }
        />

        <Route
          path="/Directory"
          element={
            <HRMLayout>
              <CurrentPage title={getPageTitle()} />
              <EmployeesList />
            </HRMLayout>
          }
        />

        <Route
          path="/Employee-Management"
          element={
            <HRMLayout>
              <CurrentPage title={getPageTitle()} />
              <Manage />
            </HRMLayout>
          }
        />
        <Route
          path="/Leave-Request"
          element={
            <HRMLayout>
              <CurrentPage title={getPageTitle()} />
              <Leave />
            </HRMLayout>
          }
        />

        <Route
          path="/Notification"
          element={
            <HRMLayout>
              <CurrentPage title={getPageTitle()} />
              <Notification />
            </HRMLayout>
          }
        />
      </Routes>
      {/* Add more routes here as needed 
         <CurrentPage title={getPageTitle()} />
      <ProjectSummary />*/}
      \
    </>
  );
};

const App = () => {
  return (
    <Router>
      <MainContent />
    </Router>
  );
};

export default App;
