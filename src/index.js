import { create, Whatsapp } from 'venom-bot';
import stages from './stages.js';
import database from './database.js';
import menu from './menu.js';

create().then((client) => start(client)).catch((erro) => {
    console.log(erro);
});

function getStage(user) {
    return database[user].stage;
}

function start(client) {
    client.onMessage((message) => {
        console.log('listener ok');
        console.log(message.body);
        console.log(message.from);
        console.log("Stage: ", getStage(message.from));
        let resp = stages[getStage(message.from)].execute(
            message.from,
            message.body
        );
        
        console.log(resp);
        for (let index = 0; index <= resp.length; index++) {
            const messageText = resp[index];
            client
            .sendText(message.from, messageText)
                .then((result) => {
                    console.log('From: ', message.from);
                    console.log('Message: ', messageText);
                    })
                .catch((erro) => {
                    console.error('Error when sending: ', erro); //return object error
                });
        }

        // client
        //     .sendText(message.from, 'Bem vindo ao Mksoft')
        //     .then((result) => {
        //     console.log('Result: ', result); //return object success
        // })
        // .catch((erro) => {
        //     console.error('Error when sending: ', erro); //return object error
        // });
    
    });
}