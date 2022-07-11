let listFigure = [];
let listPainting = [];
function createActionItem(imagem, nome, valor){
    let item = {
        "imagem": imagem,
        "nome": nome,
        "valor": valor
    }
    listFigure.push(item);
    return `Boneco de ação ${item["name"]} foi adicionado com sucesso`;
};
createActionItem("assets/img/actions/animewoman.jpg", "anime woman", "R$ 99");
createActionItem("assets/img/actions/dragonballpersonagem.jpg", "dragon ball personagem", "R$ 99");
createActionItem("assets/img/actions/starwarspersonagem.jpg", "star war spersonagem", "R$ 99");

function createPaintingItem(imagem, nome, valor){
    let item = {
        "imagem": imagem,
        "nome": nome,
        "valor": valor
    }
    listPainting.push(item);
    return `Quadro decorativo ${item["name"]} foi adicionado com sucesso`;
};
createPaintingItem("assets/img/painting/clock.jpg", "clock", "R$ 199");    
createPaintingItem("assets/img/painting/gamepad.jpg", "gamepad", "R$ 199");
createPaintingItem("assets/img/painting/personagem.jpg", "personagem", "R$ 199");
function criarCard(produto){
    let tagLi = document.createElement("li");
    tagLi.classList.add("product-card");
    let tagImage = document.createElement("img");
    let tagNome = document.createElement("h2");
    let tagValor = document.createElement("p");
    tagImage.src = produto["imagem"];
    tagNome.innerText = produto["nome"];
    tagValor.innerText = produto["valor"];
    tagLi.appendChild(tagImage);
    tagLi.appendChild(tagNome);
    tagLi.appendChild(tagValor);
    return tagLi;
}
let secaoFigure = document.querySelector(".action_figures")
let secaoPainting = document.querySelector(".paintings")
listFigure.forEach(figure => secaoFigure.appendChild(criarCard(figure)));
listPainting.forEach(painting => secaoPainting.appendChild(criarCard(painting)));


        