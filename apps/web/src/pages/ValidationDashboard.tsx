import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  AreaChart, Area, Cell, PieChart, Pie, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis
} from 'recharts';
import { 
  ShieldCheck, 
  Activity, 
  Clock,
  TrendingDown,
  AlertTriangle,
  CheckCircle2,
  Users,
  ArrowUpRight,
  ArrowDownRight,
  Code2,
  Terminal,
  Zap,
  Globe
} from 'lucide-react';

const scanData = [
  { tech: 'Terraform', passed: 45, failed: 2 },
  { tech: 'Kubernetes', passed: 120, failed: 8 },
  { tech: 'Helm', passed: 32, failed: 1 },
  { tech: 'Pulumi', passed: 12, failed: 0 },
  { tech: 'Bicep', passed: 24, failed: 3 },
];

const policyCompliance = [
  { name: 'Security', value: 92 },
  { name: 'Cost', value: 78 },
  { name: 'Naming', value: 100 },
  { name: 'Governance', value: 85 },
  { name: 'Resilience', value: 95 },
];

const KPI_CARDS = [
  { title: 'Total Scans', value: '4.2k', trend: '+12% MoM', color: 'teal', icon: Code2 },
  { title: 'Drift Rate', value: '0.2%', trend: '-85% YoY', color: 'teal', icon: Activity },
  { title: 'Policy Pass', value: '96.4%', trend: 'Compliance Met', color: 'teal', icon: ShieldCheck },
  { title: 'Monthly Savings', value: '$12.5k', trend: 'Infracost Optimized', color: 'teal', icon: Zap },
];

const ValidationDashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">IaC Validation & Governance</h1>
          <p className="text-slate-400">Institutional pre-flight testing and drift detection for multi-cloud infrastructure.</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all">
            Refresh Drift
          </button>
          <button className="bg-teal-600 hover:bg-teal-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all">
            Execute Validation Run
          </button>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {KPI_CARDS.map((card) => (
          <div key={card.title} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl relative group hover:border-slate-700 transition-all">
            <div className="flex justify-between items-start">
              <div className={`p-2 bg-teal-600/10 rounded-lg`}>
                <card.icon className={`w-6 h-6 text-teal-400`} />
              </div>
              <div className="text-xs font-medium text-emerald-400">
                {card.trend}
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-slate-500 font-medium">{card.title}</p>
              <p className="text-3xl font-bold text-white mt-1">{card.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Validation Results by Technology */}
        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <h3 className="text-lg font-bold text-white mb-6">Validation Success by Technology</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={scanData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="tech" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                />
                <Bar dataKey="passed" stackId="a" fill="#14b8a6" radius={[0, 0, 0, 0]} />
                <Bar dataKey="failed" stackId="a" fill="#1e293b" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Policy Compliance Radar */}
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <h3 className="text-lg font-bold text-white mb-6">Policy Domain Maturity</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={policyCompliance}>
                <PolarGrid stroke="#1e293b" />
                <PolarAngleAxis dataKey="name" stroke="#64748b" fontSize={12} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#1e293b" />
                <Radar
                  name="Compliance"
                  dataKey="value"
                  stroke="#14b8a6"
                  fill="#14b8a6"
                  fillOpacity={0.4}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Recent Drift & Violations Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-slate-800 flex items-center justify-between">
          <h3 className="text-lg font-bold text-white">Active Drift & High-Risk Violations</h3>
          <button className="text-teal-400 hover:text-teal-300 text-sm font-medium">Full Governance Report</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-800/50 text-slate-400 text-xs uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4 font-semibold">Resource / Path</th>
                <th className="px-6 py-4 font-semibold">Violation Type</th>
                <th className="px-6 py-4 font-semibold">Cloud / Env</th>
                <th className="px-6 py-4 font-semibold">Impact</th>
                <th className="px-6 py-4 font-semibold">Detection Time</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {[
                { name: 'aws_s3_bucket.data_vault', type: 'Public Exposure', cloud: 'AWS (Prod)', impact: 'Critical', time: '12m ago', color: 'red-500' },
                { name: 'kubernetes_service.api_ingress', type: 'Drift (Port Mismatch)', cloud: 'EKS (Dev)', impact: 'Medium', time: '45m ago', color: 'amber-500' },
                { name: 'azure_storage_account.legal_logs', type: 'No Encryption-at-Rest', cloud: 'Azure (Prod)', impact: 'High', time: '2h ago', color: 'orange-500' },
              ].map((finding) => (
                <tr key={finding.name} className="hover:bg-slate-800/50 transition-all group">
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-white group-hover:text-teal-400 transition-colors">{finding.name}</span>
                      <span className="text-xs text-slate-500 font-mono">Resource ID: 0x42f...</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-slate-300">{finding.type}</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-400">{finding.cloud}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 bg-${finding.color}/10 border border-${finding.color}/20 rounded-full text-[10px] text-${finding.color} font-bold uppercase tracking-wider`}>
                      {finding.impact}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500 italic">{finding.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ValidationDashboard;
