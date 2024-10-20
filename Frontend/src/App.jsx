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
import ProjectNavbar from "./components/ProjectNavbar.jsx";
import ProjectTeamMembers from "./pages/HRM Module/ProjectTeamMembers.jsx";
import ProjectTimeline from "./pages/HRM Module/ProjectTimeline.jsx";
import ProjectUpdates from "./pages/HRM Module/ProjectUpdates.jsx";
import CreateNewPassword from "./pages/Login-Signup/CreateNewPassword.jsx";
import RecruitmentCandidates from "./pages/HRM Module/RecruitmentCandidates.jsx";
import RecruitmentDashboard from "./pages/HRM Module/RecruitmentDashboard.jsx";
import RecruitmentForm from "./pages/HRM Module/RecruitmentForm.jsx";
import JobSummary from "./pages/HRM Module/JobSummary.jsx";
import UpdatesFiles from "./components/UpdatesFiles.jsx";
import ProjectFiles from "./pages/HRM Module/ProjectFiles.jsx";
import ProjectSidebar from "./components/ProjectSidebar.jsx";
import ProjectSettings from "./pages/HRM Module/ProjectSettings.jsx";

import "./App.css";
import Payroll from "./pages/HRM Module/Payroll.jsx";
import ChatComponent from "./pages/HRM Module/Message.jsx";

const MainContent = () => {
  const location = useLocation(); // Get the current route
  const routeTitles = {
    "/Dashboard": "Dashboard",
    "/Directory": "Directory",
    "/Notification": "Notification",
    "/Employee-Management": "Employee Management",
    "/Leave-Request": "Employee Management",
    "/Projects": "Projects",
    "/Candidates": "Candidates",
    "/Job-List": "Recruitment",
    "/Job-Description": "Job Description",
    "/Project-summary": "Project Summary",
    "/Project-team-members": "Project Team Members",
    "/Project-calendar": "Project Calendar",
    "/Project-updates": "Project Updates",
    "/Project-Files": "Project Files",
    "/Payroll": "Payroll",
    "/Messages": "Messages",
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
  const NavbarLayout = ({ children }) => (
    <>
      <div className="app-container">
        <ProjectSidebar />
        <CurrentPage title={getPageTitle()} />
        <Navbar />
        <ProjectNavbar />
        <div className="page-content">{children}</div>
      </div>
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
        <Route
          path="/Messages"
          element={
            <HRMLayout>
              <CurrentPage title={getPageTitle()} />
              <ChatComponent />
            </HRMLayout>
          }
        />

        <Route
          path="/Projects"
          element={
            <HRMLayout>
              <CurrentPage title={getPageTitle()} />
              <ProjectDashboard />
            </HRMLayout>
          }
        />
        <Route
          path="/Candidates"
          element={
            <HRMLayout>
              <CurrentPage title={getPageTitle()} />
              <RecruitmentCandidates />
            </HRMLayout>
          }
        />
        <Route
          path="/Job-List"
          element={
            <HRMLayout>
              <CurrentPage title={getPageTitle()} />
              <RecruitmentDashboard />
            </HRMLayout>
          }
        />
        <Route
          path="/Job-Description/:id"
          element={
            <HRMLayout>
              <CurrentPage title={getPageTitle()} />
              <JobSummary />
            </HRMLayout>
          }
        />
      </Routes>

      <Routes>
        <Route
          path="/Project-summary/:id"
          element={
            <NavbarLayout>
              <ProjectSummary />
            </NavbarLayout>
          }
        />
        <Route
          path="/Project-team-members"
          element={
            <NavbarLayout>
              <ProjectTeamMembers />
            </NavbarLayout>
          }
        />
        <Route
          path="/Project-calendar"
          element={
            <NavbarLayout>
              <ProjectTimeline />
            </NavbarLayout>
          }
        />
        <Route
          path="/Project-updates"
          element={
            <NavbarLayout>
              <ProjectUpdates />
            </NavbarLayout>
          }
        />
        <Route
          path="/Project-Files"
          element={
            <NavbarLayout>
              <ProjectFiles />
            </NavbarLayout>
          }
        />

        <Route
          path="/Project-Settings"
          element={
            <NavbarLayout>
              <ProjectSettings />
            </NavbarLayout>
          }
        />
        <Route
          path="/Payroll"
          element={
            <HRMLayout>
              <CurrentPage title={getPageTitle()} />
              <Payroll />
            </HRMLayout>
          }
        />
      </Routes>
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
