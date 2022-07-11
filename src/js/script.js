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
createActionItem("assets\img\actions\animewoman.jpg", "anime woman", "R$ 100")
createActionItem("assets\img\actions\dragonballpersonagem.jpg", "dragon ball personagem", "R$ 100")
createActionItem("assets\img\actions\starwarspersonagem.jpg", "star war spersonagem", "R$ 100")
console.log(listFigure)
function createPaintingItem(objeto){
    let item = {
        "imagem": imagem,
        "nome": nome,
        "valor": valor
    }
    listPainting.push(item);
    return `Quadro decorativo ${item["name"]} foi adicionado com sucesso`;
}    
/*
let elementoLista = document.createElement('li')
let nome = document.createElement('span')
nome.innerText = `${listPerson[i].nome}`
elementoLista.appendChild(nome)
secaolistFigure.appendChild(elementoLista)
*/




        