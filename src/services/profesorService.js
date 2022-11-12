import { ProfesorRepository } from '../repository/index.js'

const getAll = () => {
    return ProfesorRepository.getAll();
}

const insert = () => {
    return ProfesorRepository.insert();
}

const ProfesorService = { getAll, insert }

export default ProfesorService;