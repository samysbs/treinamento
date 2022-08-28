const btn = document.querySelector("#imprimir");

//acao do botao
btn.onclick = () => {
    const n = document.querySelector("#numero").value;
    
     const val = document.querySelector("#val");

    val.innerHTML = imprimir(n).join(',');
}

//funcao principal
function imprimir(n)
{
    let arr = [];
    for (let i = 1; i <= n; i++) {
        let msg = "";
        if(i % 5 == 0 && i % 9 == 0){
            msg = "LuidyMoura";
        }else if (i % 5 == 0) {
            msg = "Luidy";
        }else if(i % 9 == 0){
            msg = "Moura";
        }else{
            msg = i;
        }
        arr[i] = msg;
    }

    return arr;
}


