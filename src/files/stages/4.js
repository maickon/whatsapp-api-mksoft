import stages from '../../stages.js';
import database from '../../database.js';

function stage4(user, message) {

    if (message === "*") {
        database[user].stage = 1;
        return ["Pedido cancelado com sucesso"];
    }

    if (message.toLowerCase() === "sim") {
        database[user].stage = 5;
        return [stages.step[5].execute(user, "")];
    }

    return [
        `Confirme o endereço de entrega: \n ${message}`,
        "Digite sim para continuar ou * para cancelar"
    ];
}

export default stage4;