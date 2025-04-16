document.getElementById('formCadastro').addEventListener('submit', function (e) {
    e.preventDefault();

    const nomeAluno = document.getElementById('nomeAluno');
    const Contato = document.getElementById('Contato');
    const email = document.getElementById('email');
    const cpf = document.getElementById('cpf');
    const dataNascimento = document.getElementById('dataNascimento');
    const endereco = document.getElementById('endereco');
    const Contatos = document.getElementById('Contatos');

    let valid = true;

    if (nomeAluno.value.trim() === '') {
        alert('Por favor, preencha o nome do aluno');
        valid = false;
    }

    const telefoneRegex = /^\d{11}$/;
    if (!telefoneRegex.test(Contato.value)) {
        alert('Telefone deve conter 11 dígitos (DDD + número)');
        valid = false;
    }

    if (email.value !== '') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {
            alert('Por favor, insira um e-mail válido');
            valid = false;
        }
    }

/*  Opção 1

    let cpfNumeros = cpf.value.replace('.', '');
    cpfNumeros = cpfNumeros.replace('.','');
    cpfNumeros = cpfNumeros.replace('-','');

    const cpfRegex = /^\d{11}$/;
    if (!cpfRegex.test(cpfNumeros)) {
        alert('Por favor, insira um CPF em um formato válido');
        valid = false;
    }*/

/*  Opção 2

    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
    if (!cpfRegex.test(cpf.value)) {
        alert('Por favor, insira um CPF em um formato válido');
        valid = false;
    } */

    if (dataNascimento.value < 1905 || dataNascimento.value > new Date().getFullYear()) {
        alert('Ano do nascimento tem que ser a partir de 1905 para acima');
        valid = false;
    }

    if (valid) {
        alert('O cadastro foi um sucesso!');
        this.reset();
    }
});