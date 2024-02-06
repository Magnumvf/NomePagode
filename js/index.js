// dia.onchange = () => {
//     switch(dia.value){
//         case "Segunda-feira":
//             frase.innerHTML = "Frase de segunda"
//         break ;
//         case "Terça-feira":
//             frase.innerHTML = "Frase de terça"
//         break ;
//         case "Quarta-feira":
//             frase.innerHTML = "Frase de quarta"
//         break ;
//         case "Quinta-feira":
//             frase.innerHTML = "Frase de quinta"
//         break ;
//         case "Sexta-feira":
//             frase.innerHTML = "Frase de sexta"
//         break ;
//         case "Sabado":
//             frase.innerHTML = "Frase de sabado"
//         break ;
//         case "Domingo":
//             frase.innerHTML = "Frase de domingo"
//         break ;
//         default:
//             frase.innerHTML = "Escolha um dia válido"
//     }
// }

mes.onchange = () => {
    switch(mes.value.toLowerCase()){
        case "janeiro":
            nome.innerHTML = "Rei"
        break;
        case "fevereiro":
            nome.innerHTML = "Mô"
        break;
    }
}