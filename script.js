function calcularTotal() {
    const precoProduto = 0; 
    const estadoSelecionado = document.getElementById("estado").value;

    let frete = 0;
    switch (estadoSelecionado) {
        case "SP":
            frete = 18.000;
            break;
        case "RJ":
            frete = 500;
            break;
        case "MG":
            frete = 546;
            break;
        case "RS":
            frete = 70;
            break;
       
    }

    const total =  frete;

    document.getElementById("resultado").innerHTML = `Total : R$ ${total.toFixed(3)}`;
}