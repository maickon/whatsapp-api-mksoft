import menu from '../../menu.js';
import database from '../../database.js';

function stage2(user, message) {

    if (message.toLowerCase() === "fim") {
        database[user].stage = 1;
        return ["Pedido cancelado com sucesso."];
    }
    
    if (message === "*" ) {
        database[user].stage = 3;
        return ["Estamos fechando o seu pedido, dê um ok para confirmar."];
    }
    
    if (!menu[message]) {
        return [
            "Código inválido, digite um código de produto correto.",
            "```Digite fim para finalizar ou * para cancelar```"
        ];
    }
    
    database[user].itens.push(menu[message]);
    
    return [
        `Item ${menu[message].description} adicionado com sucesso`,
        "```Digite fim para finalizar ou * para cancelar```"
    ];
}

export default stage2;