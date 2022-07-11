let listPainting = [];
let listFigure = [];
let secaoPainting = document.querySelector(".paintings")
let secaoFigure = document.querySelector(".action_figures")
function createPaintingItem(imagem, nome, valor){
    let item = {
        "imagem": imagem,
        "nome": nome,
        "valor": valor
    }
    listPainting.push(item);
    return `Quadro decorativo ${item["name"]} foi adicionado com sucesso`;
};
function createActionItem(imagem, nome, valor){
    let item = {
        "imagem": imagem,
        "nome": nome,
        "valor": valor
    }
    listFigure.push(item);
    return `Boneco de ação ${item["name"]} foi adicionado com sucesso`;
};
function createCard(produto){
    let tagLi = document.createElement("li");
    tagLi.classList.add("product-card");
    let tagDivImg = document.createElement("div");
    tagDivImg.classList.add("product-card-image");
    let tagImage = document.createElement("img");
    let tagDivInfo = document.createElement("div");
    tagDivInfo.classList.add("product-card-info");
    let tagNome = document.createElement("h2");
    let tagValor = document.createElement("p");
    tagImage.src = produto["imagem"];
    tagNome.innerText = produto["nome"];
    tagValor.innerText = produto["valor"];
    tagDivImg.appendChild(tagImage);
    tagDivInfo.appendChild(tagNome);
    tagDivInfo.appendChild(tagValor);
    tagLi.appendChild(tagDivImg);
    tagLi.appendChild(tagDivInfo);
    return tagLi;
}
function createSection(list, section) {
    list.forEach(element => section.appendChild(createCard(element)));
}
createPaintingItem("assets/img/painting/clock.jpg", "Clock", "R$ 199");    
createPaintingItem("assets/img/painting/gamepad.jpg", "Gamepad", "R$ 199");
createPaintingItem("assets/img/painting/personagem.jpg", "Personagem", "R$ 199");
createActionItem("assets/img/actions/animewoman.jpg", "Anime woman", "R$ 99");
createActionItem("assets/img/actions/dragonballpersonagem.jpg", "Dragon ball personagem", "R$ 99");
createActionItem("assets/img/actions/starwarspersonagem.jpg", "Star wars personagem", "R$ 99");
createSection(listFigure, secaoFigure);
createSection(listPainting, secaoPainting);
