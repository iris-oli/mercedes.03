function calcularTotal() {
    const precoProduto = 70.000; 
    const estadoSelecionado = document.getElementById("estado").value;

    let frete = 0;
    switch (estadoSelecionado) {
        case "SP":
            frete = 10;
            break;
        case "RJ":
            frete = 15;
            break;
        case "MG":
            frete = 12;
            break;
        case "RS":
            frete = 18;
            break;
        case "AC":
            frete = 30;
            break;
        case "AL":
                frete = 11;
                break;
        case "AP":
                frete = 12;
                break;
        case "AM":
                frete = 50;
                break;
        case "BA":
                frete = 25;
                break;
        case "CE":
                frete = 10;
                break;     
        case "ES":
            frete = 22;
            break;
        case "GO":
            frete = 33;
            break;
        case "MA":
            frete = 15;
            break;
        case "MT":
            frete = 18;
            break;
        case "MS":
            frete = 42;
            break;       
        case "PA":
                frete = 17;
                break;
        case "PB":
                frete = 32;
                break;
        case "PR":
                frete = 19;
                break;
        case "PI":
                frete = 5;
                break;
        case "RN":
                frete = 30;
                break;
        case "RO":
            frete = 23;
            break;
        case "RR":
            frete = 15;
            break;
        case "SC":
            frete = 11;
            break;
        case "SE":
            frete = 29;
            break;
        case "TO":
            frete = 23;
            break;
        case "PE":
            frete = 21;
            break;
    }

    const total = precoProduto + frete;

    document.getElementById("resultado").innerHTML = `Total (com frete): R$ ${total.toFixed(3)}`;
}