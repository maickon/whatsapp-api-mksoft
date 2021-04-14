import stage1 from './files/stages/1.js';
import stage2 from './files/stages/2.js';
import stage3 from './files/stages/3.js';
import stage4 from './files/stages/4.js';
import stage5 from './files/stages/5.js';

let stages = {
    1:{
        description: "Boas vindas",
        execute: stage1
    },
    2:{
        description: "Vendas",
        execute: stage2
    },
    3:{
        description: "Resumo",
        execute: stage3
    },
    4:{
        description: "Endereço",
        execute: stage4
    },
    5:{
        description: "Encerramento",
        execute: stage5
    }
}

export default stages;