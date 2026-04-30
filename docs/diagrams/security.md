# Security & Compliance Diagrams

## 31. OPA Rego Policy Lifecycle
```mermaid
graph LR
    Rego[Rego Policy] --> Test[Policy Unit Test]
    Test --> Publish[Publish to OPA Bundle]
    Publish --> Runtime[Enforce in Pipeline]
```

## 34. Infrastructure Security Testing Pyramid
```mermaid
graph TD
    Unit[Unit Tests: Terratest] --> Integration[Integration Tests]
    Integration --> Security[Security Scans]
    Security --> Compliance[Compliance Validation]
```

## 40. Multi-Environment Parity Check
```mermaid
graph LR
    Dev[Dev Env] <-> Staging[Staging Env]
    Staging <-> Prod[Prod Env]
    Prod --> Diff[Identify Parity Gaps]
```
