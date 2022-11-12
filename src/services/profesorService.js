import { ProfesorRepository } from '../repository/index.js'

const getAll = async () => {
    return await ProfesorRepository.getAll();
}

const insert = () => {
    return ProfesorRepository.insert();
}

const ProfesorService = { getAll, insert }

export default ProfesorService;