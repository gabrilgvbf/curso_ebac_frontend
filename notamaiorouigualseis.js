function notasealunos(nomeAluno, notaAluno) {
    this.nome = nomeAluno
    this.nota = notaAluno
}

const aluno1 = new notasealunos('Gabriel', 2)
const aluno2 = new notasealunos('Leticia', 8)
const aluno3 = new notasealunos('Guilherme', 3)
const aluno4 = new notasealunos('Daniel', 5)
const aluno5 = new notasealunos('Fabricio', 3)
const aluno6 = new notasealunos('Fernanda', 6)
const aluno7 = new notasealunos('Julio', 7)


const arraydenotasealunos = [aluno1, aluno2, aluno3, aluno4, aluno5, aluno6, aluno7]

function notaMaiorOuIgualSeis() {

    for (let i = 0; i < arraydenotasealunos.length; i++) {

        if (arraydenotasealunos[i].nota > 5) {
            console.log(`Aluno ${arraydenotasealunos[i].nome}, nota da Média : ${arraydenotasealunos[i].nota}.00`)
        }
    }

}

notaMaiorOuIgualSeis()