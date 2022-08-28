const btn = document.querySelector("#Calc");

//acao do botao
btn.onclick = () => {
    const ax2 = document.querySelector("#A").value;
    const bx = document.querySelector("#B").value;
    const c = document.querySelector("#C").value;
    
    const val = document.querySelector("#val");

    val.value = calcula(ax2,bx,c);
}

//funcao principal
function calcula(a,b,c)
{
    console.log(a,b,c)
    let mensagem = '';
    let arrX1X2 = [];
    
    let delta = (b*b) - (4*a*c);

    console.log(delta);

    if(delta < 0){
        mensagem = 'Delta negativo';
    }else{
        if(delta == 0){
            arrX1X2[0] = - b / (2*a);
            arrX1X2[1] = - b / (2*a);
        }else{
            arrX1X2[0] = (- b + Math.sqrt(delta)) / 2*a;
            arrX1X2[1] = (- b - Math.sqrt(delta)) / 2*a;
        }

        console.log(arrX1X2);
        mensagem = 'X1 é: ' + arrX1X2[0] + ' e X2 é: ' + arrX1X2[1];
    }
    
    return mensagem;
}


