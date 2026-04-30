export enum IaCTechnology {
  TERRAFORM = "TERRAFORM",
  PULUMI = "PULUMI",
  CLOUDFORMATION = "CLOUDFORMATION",
  BICEP = "BICEP",
  HELM = "HELM",
  KUBERNETES = "KUBERNETES"
}

export enum ValidationStatus {
  PASSED = "PASSED",
  FAILED = "FAILED",
  WARNING = "WARNING",
  PENDING = "PENDING",
  SKIPPED = "SKIPPED"
}

export interface ValidationResult {
  id: string;
  projectId: string;
  tech: IaCTechnology;
  status: ValidationStatus;
  score: number; // 0-100
  findingsCount: number;
  duration: number; // ms
  createdAt: string;
}

export interface PolicyViolation {
  id: string;
  policyId: string;
  severity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
  message: string;
  resourceId: string;
  file: string;
  line: number;
}

export interface DriftEvent {
  id: string;
  resourceId: string;
  expectedState: any;
  actualState: any;
  detectedAt: string;
  severity: "LOW" | "HIGH";
}

export interface CostEstimation {
  id: string;
  monthlyCost: number;
  currency: string;
  diff: number;
  breakdown: any;
}
