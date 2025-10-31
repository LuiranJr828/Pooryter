
msg.oninput = contar;

function contar(){
    //Obter tamanho do conteúdo do textarea#msg
    contagem.innerText = msg.value.length;
}