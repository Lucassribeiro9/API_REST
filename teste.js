function helloworld(){
    console.log('Hello world');
}

const saudacao = () => {
    var data = new Date()
    return data.getHours() <= 12? "Bom dia": data.getHours() <= 18? "Boa tarde": "Boa noite"
}

helloworld();
console.log(`A saudação do momento é: ` + saudacao());
console.log('')

// Notas
// ESLint permite criar ou buscar um padrão de código; bom para projetos