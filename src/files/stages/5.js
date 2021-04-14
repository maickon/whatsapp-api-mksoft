import menu from '../../menu.js';
import database from '../../database.js';

function stage4(user, message) {
    database[user].stage = 0;
    return [
        "Obrigado pela preferência.",
        "Aguarde, seu pedido chegará em breve",
        "Para mais informações ligue para (xx) xxxxx-xxxx"
    ];
}

export default stage4;