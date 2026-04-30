from fastapi import APIRouter
router = APIRouter()
@router.get('/')
def get_drift():
    return {'status': 'ok'}
