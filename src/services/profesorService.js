import { ProfesorRepository } from '../repository/index.js'

const getAll = async () => {
    return await ProfesorRepository.getAll();
}

const insert = async (profesor) => {
    return await ProfesorRepository.insert(profesor);
}

const ProfesorService = { getAll, insert }

export default ProfesorService;