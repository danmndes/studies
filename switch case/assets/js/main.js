
let data = new Date;
let datainfo = data.getDay();
let dia = data.getDate();
let mes = data.getMonth();
let ano = data.getFullYear();
let hora = data.getHours();
let minutos = data.getMinutes();
let diadasemana;
let mesCorreto;

switch (datainfo) {
    case 0:
        diadasemana = 'Domingo';
        break;
    case 1:
        diadasemana = 'Segunda';
        break;
    case 2:
        diadasemana = 'Terça';
        break;
    case 3:
        diadasemana = 'Quarta';
        break;
    case 4:
        diadasemana = 'Quinta';
        break;
    case 5:
        diadasemana = 'Sexta';
        break;
    case 6:
        diadasemana = 'Sábado';
        break;
}


switch (mes) {
    case 0:
        mesCorreto = 'Janeiro';
        break;
    case 1:
        mesCorreto = 'Fevereiro';
        break;
    case 2:
        mesCorreto = 'Março';
        break;
    case 3:
        mesCorreto = 'Abril';
        break;
    case 4:
        mesCorreto = 'Maio';
        break;
    case 5:
        mesCorreto = 'Junho';
        break;
    case 6:
        mesCorreto = 'Julho';
        break;
    case 7:
        mesCorreto = 'Agosto';
        break;
    case 8:
        mesCorreto = 'Setembro';
        break;
    case 9:
        mesCorreto = 'Outubro';
        break;
    case 10:
        mesCorreto = 'Novembro';
        break;
    case 11:
        mesCorreto = 'Dezembro';
        break;
}

console.log(`${diadasemana}, ${dia} de ${mesCorreto} de ${ano} ${hora}:${minutos}`);
const resultado = document.querySelector('#resultado');
resultado.innerHTML = `<p class="paragrafo-resultado">${diadasemana}, ${dia} de ${mesCorreto} de ${ano} ${hora}:${minutos}</p>`;
