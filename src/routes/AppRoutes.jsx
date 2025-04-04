import {   Route, Routes } from "react-router-dom";
import AuthRoute from "./AuthRoute";
import ProtectedRoute from "./ProtectedRoute";
import SignIn from "../pages/auth/SignIn";
import Dashboard from "../pages/home/Dashboard";

import NotFound from "../pages/errors/NotFound";
import PatientList from "@/pages/patient/PatientList";
import PatientHistory from "@/pages/patient/PatientHistory";
import ReportView from "@/pages/report/ReportView";
import PatientSummary from "@/pages/summary/PatientSummary";


function AppRoutes() {
  return (

      <Routes>
        <Route path="/" element={<AuthRoute />}>
        <Route path="/" element={<SignIn />} />
          
        </Route>

        <Route path="/" element={<ProtectedRoute />}>
        <Route path="/home" element={<Dashboard />} />

               <Route path="/patient" element={<PatientList />} />
           
               <Route path="/patient/history/:id" element={<PatientHistory />} />
        
                <Route path="/patient/report/:id" element={<ReportView />} />
                <Route path="/summary" element={<PatientSummary />} />
   

        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    
  );
}

export default AppRoutes;