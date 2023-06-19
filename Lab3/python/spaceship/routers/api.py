from fastapi import APIRouter
import numpy as np

router = APIRouter()

@router.get('')
def hello_world() -> dict:
    return {'msg': 'Hello, World!'}

@router.get('/matrix')
def matrix() -> dict:
    matrixA = np.random.rand(5, 5)
    matrixB = np.random.rand(5, 5)
    
    rowsA, columnsA = matrixA.shape
    rowsB, columnsB = matrixB.shape

    if columnsA != rowsB:
        response = {
            'error': 'Matrix dimensions are not compatible for multiplication'
        }
    else:
        result = np.dot(matrixA, matrixB)
        
        response = {
            'matrixA': matrixA.tolist(),
            'matrixB': matrixB.tolist(),
            'product': result.tolist()
        }

    return response
