import { CursoRepository } from '../repository/index.js'

const getAll = () => {
    return CursoRepository.getAll();
}

const insert = () => {
    return CursoRepository.insert();
}

const CursoService = { getAll, insert }

export default CursoService;