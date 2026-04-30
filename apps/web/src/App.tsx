import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import ValidationDashboard from './pages/ValidationDashboard';

const Placeholder = ({ name }: { name: string }) => (
  <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
    <h2 className="text-xl font-bold text-white mb-2">{name}</h2>
    <p className="text-slate-400">The IaC validation engine is currently analyzing multi-cloud state files. Reports will be generated following the completion of the static analysis cycle.</p>
  </div>
);

function App() {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<ValidationDashboard />} />
          <Route path="/security" element={<Placeholder name="IaC Security Scans (tfsec/Checkov)" />} />
          <Route path="/policy" element={<Placeholder name="Policy-as-Code Compliance (OPA)" />} />
          <Route path="/drift" element={<Placeholder name="Continuous Drift Detection" />} />
          <Route path="/cost" element={<Placeholder name="Infracost Optimization Dashboard" />} />
          <Route path="/tests" element={<Placeholder name="Terratest & Unit Test Catalog" />} />
          <Route path="/kubernetes" element={<Placeholder name="K8s Manifest & Helm Validation" />} />
          <Route path="/pipelines" element={<Placeholder name="CI/CD Pipeline Integration Logs" />} />
          <Route path="/history" element={<Placeholder name="Governance & Audit History" />} />
          <Route path="/settings" element={<Placeholder name="Platform & Tooling Settings" />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
}

export default App;
