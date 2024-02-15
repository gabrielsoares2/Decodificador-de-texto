function codificar() {

    let cod = document.getElementById('entrada').value;
    let decod = document.getElementById('saida');

    cod = cod.replace(/a/g, "ai");
    cod = cod.replace(/e/g, "enter");
    cod = cod.replace(/i/g, "imes");
    cod = cod.replace(/o/g, "ober");
    cod = cod.replace(/u/g, "ufat");

    decod.value = cod;

}

function decodificar() {
    
    let cod = document.getElementById('entrada').value;
    let decod = document.getElementById('saida');

    cod = cod.replace(/ufat/g, "u");
    cod = cod.replace(/ober/g, "o");
    cod = cod.replace(/imes/g, "i");
    cod = cod.replace(/enter/g, "e");
    cod = cod.replace(/ai/g, "a");

    decod.value = cod;

}

function copiar() {
    
    let decod = document.getElementById('saida');
    
    if (navigator.clipboard) {
        navigator.clipboard.writeText(decod.value)
            .then(() => {
                console.log('Texto copiado para a área de transferência!');
            })
            .catch(err => {
                console.error('Erro ao copiar texto: ', err);
            });
    } else {
        decod.select();
        decod.setSelectionRange(0, 99999);
        document.execCommand('copy');
        console.log('Texto copiado para a área de transferência!')
    }
}
