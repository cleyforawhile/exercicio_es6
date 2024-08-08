
//Exercício ES6

const alunos = [{ nome: 'Halcer', nota: 10 },{ nome: 'Cleytin', nota: 5 },
    { nome: 'Joana Dark', nota: 8 },{ nome: 'Seu Carlo', nota: 4 },
        { nome: 'Maranhão', nota: 1 },{ nome: 'Neymar', nota: 9 }
    ];
    
    function alunosAprovados(alunos) {
        
        return alunos.filter(({ nota }) => nota >= 6).sort((a, b) => b.nota - a.nota);
    }
    
    const resultado = alunosAprovados(alunos);
    console.log(resultado);
    