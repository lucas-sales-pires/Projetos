function validarCPF() {
    const cpfInput = $("#cpf");
    const cpf = cpfInput.val().replace(/[^\d]+/g, ''); // Remover caracteres não numéricos

    if (verificarCPF(cpf)) {
        // Dizer que o campo é válido
        console.log('CPF válido');
    } else {
        // Dizer que o campo é inválido
        console.log('CPF inválido');
    }
}

function verificarCPF(cpf) {
    if (cpf.length !== 11 || /^(.)\1+$/.test(cpf)) {
        return false;
    }

    let add = 0;
    let rev;

    for (let i = 0; i < 9; i++) {
        add += parseInt(cpf.charAt(i)) * (10 - i);
    }
    rev = 11 - (add % 11);
    rev = rev >= 10 ? 0 : rev;
    if (rev !== parseInt(cpf.charAt(9))) {
        return false;
    }

    add = 0;
    for (let i = 0; i < 10; i++) {
        add += parseInt(cpf.charAt(i)) * (11 - i);
    }
    rev = 11 - (add % 11);
    rev = rev >= 10 ? 0 : rev;
    if (rev !== parseInt(cpf.charAt(10))) {
        return false;
    }

    return true;
}
