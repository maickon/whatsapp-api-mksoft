import menu from '../../menu.js';
import database from '../../database.js';

function stage2(user, message) {

    if (message === "*") {
        database[user].stage = 1;
        return ["Pedido cancelado com sucesso"];
    }

    if (message === "sim") {
        database[user].stage = 4;
        return ["Digite o seu endereço por favor:"];
    }

    let summaryMenu = " Resumo do pedido \n\n";
    let total = 0;
    database[user].itens.forEach((value) => {
        summaryMenu += `${value.description} -------------- ${value.price} \n`;
        total += value.price;
    });

    summaryMenu += "---------------------------\n";
    summaryMenu += `Total: R$ ${total}`;

    return [summaryMenu, "Para confirmar digite sim ou para cancelar digite *"];
}

export default stage2;