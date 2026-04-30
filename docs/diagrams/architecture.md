# Architecture & Validation Diagrams

## 11. Pre-Deployment Validation Workflow (Detailed)
*How the engine orchestrates multiple scanners into a single pass/fail signal.*

```mermaid
graph TD
    Trigger[PR Created] --> Pull[Pull Code]
    Pull --> Syntax[Syntax & Lint Check]
    Syntax --> Security[Security Scan: tfsec/Checkov]
    Security --> Policy[Policy Check: OPA]
    Policy --> Cost[Cost Impact: Infracost]
    Cost --> Result[Aggregated Test Report]
    Result -->|Pass| Approval[Auto-Approve PR]
    Result -->|Fail| Comment[Annotate PR with Findings]
```

## 13. Drift Detection State Comparison
```mermaid
graph LR
    Local[Local State File] <-> Remote[Live Cloud Reality]
    Remote --> Detect[Drift Analyzer]
    Detect -->|Missing Resource| Alert[Drift: Deleted Resource]
    Detect -->|Modified Property| Alert[Drift: Property Change]
```

## 20. Infracost Budget Enforcement
```mermaid
stateDiagram-v2
    Change --> Estimate: Run Infracost
    Estimate --> Budget: Check Threshold
    Budget --> Approved: Within Budget
    Budget --> Rejected: Over Budget Alert
```
