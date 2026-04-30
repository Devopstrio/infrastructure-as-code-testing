from fastapi import APIRouter
from app.api.v1.endpoints import (
    auth, validate, policy, drift, cost, dashboard
)

api_router = APIRouter()
api_router.include_router(auth.router, prefix="/auth", tags=["auth"])
api_router.include_router(validate.router, prefix="/validate", tags=["validate"])
api_router.include_router(policy.router, prefix="/policy", tags=["policy"])
api_router.include_router(drift.router, prefix="/drift", tags=["drift"])
api_router.include_router(cost.router, prefix="/cost", tags=["cost"])
api_router.include_router(dashboard.router, prefix="/dashboard", tags=["dashboard"])
