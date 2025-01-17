window.onload = trataOnLoad;
/* Função: opção 1 */
function trataOnLoad() {
    buscaProdutos();
    setInterval(buscaProdutos, 10000);
}

/* Função: opção 2 */
const buscaProdutos = function () {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        const listaProdutos = JSON.parse(this.responseText);
        console.log(listaProdutos);
        carregarProduto(listaProdutos)
    }
    xhttp.open("GET", "http://localhost:3000/produtos", true);
    xhttp.send();
}

/* Função: opção 3 */
const carregarProduto = (listaProdutos) => {
    let htmlProduto = (listaProdutos.length > 0)
        ? listaProdutos.map ((produto)=> {
            return `
            <div class="w3-col l4 m6 s12 w3-container w3-padding-16">
                <div class="w3-card">
                    <div class="w3-container w3-center">
                        <img src="${produto.imagem}" style="width: 70%">
                            <h5>${produto.nome}</h5>
                            <h3 class="w3-blue">${'R$ ' + produto.preco.toLocaleString('pt-br', { minimumFractionDigits: 2 })}</h3>
                    </div>
                </div>
            </div>
            `;
        }).join(' ')
        :'<h3>Não ha produtos na lista</h3>'
    
    document.querySelector('#produtos').innerHTML = htmlProduto;
    /*
    let htmlProduto = '';
    if (listaProdutos.length > 0) {
        for (let produto of listaProdutos) {
            htmlProduto += `
        <div class="w3-col l4 m6 s12 w3-container w3-padding-16">
            <div class="w3-card">
                <div class="w3-container w3-center">
                    <img src="${produto.imagem}" style="width: 70%">
                        <h5>${produto.nome}</h5>
                        <h3 class="w3-blue">${'R$ ' + produto.preco.toLocaleString('pt-br', { minimumFractionDigits: 2 })}</h3>
                </div>
            </div>
        </div>
    `}
    }
    else {
        htmlProduto += '<h3>Não ha produtos na lista</h3>'
    };
    
    document.querySelector('#produtos').innerHTML = htmlProduto;
    */
}