const btn = document.querySelector("#descobrir");

btn.onclick = () => {
    const lA = document.querySelector("#ladoA").value;
    const lB = document.querySelector("#ladoB").value;
    const lC = document.querySelector("#ladoC").value;
    const classif = document.querySelector("#classificacao");
    
    classif.value = desco (lA, lB, lC);
}

function desco(a,b,c)
{
    console.log(a,b,c);
    let mensagem = '';
    if(a == b && c == a) {
        mensagem = "Equilátero";
    } else {  
      if(a == b || b == c || a == c) {
        mensagem = "Isósceles";
      } else {
        mensagem = "Escaleno";
      }
    }
    return mensagem;
}


