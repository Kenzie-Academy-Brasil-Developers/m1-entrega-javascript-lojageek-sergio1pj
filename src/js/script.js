
let item = {

    }
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
function createPaintingItem(objeto){
    let item = {
        "imagem": imagem,
        "nome": nome,
        "valor": valor
    }
    listPainting.push(item);
    return `Quadro decorativo ${item["name"]} foi adicionado com sucesso`;
}    
for(let i = 0; i < listFigure.length; i++){
    //lógica
}
let elementoLista = document.createElement('li')
let nome = document.createElement('span')
nome.innerText = `${listPerson[i].nome}`
elementoLista.appendChild(nome)
secaolistFigure.appendChild(elementoLista)





        