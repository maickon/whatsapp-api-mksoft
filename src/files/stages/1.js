import menu from '../../menu.js';
import database from '../../database.js';

function stage1(user, message) {
    let messageMenu = " Cardápio \n\n";
    Object.keys(menu).forEach((value) => {
        let item = menu[value];
        messageMenu += `${value} - ${item.description}     R$ ${item.price} \n`;
    });

    database[user].stage = 2;

    return [
        messageMenu,
        "Olá! Bem vindo ao cardápio virtual, para fazer um pedido basta enviar o código do produto." 
    ];
}

export default stage1;