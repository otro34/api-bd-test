class Curso {
    constructor(curso) {
        if (!curso) return

        this.id = curso.id,
        this.nombre = curso.nombre,
        this.nivel = curso.nivel,
        this.idProfesor = curso.idProfesor
    }
}

export default Curso