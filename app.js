var _condition = "pokemon";
var _pocketmonster = "pichu"

fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
.then(res => res.json())
.then(data => {
    // console.log(data.sprites)
    const{...img} = data.sprites;
    // console.log(img)
    selector = document.querySelector('.card');
    pokeIMG = `<img src="${img.back_default}" class="card-img-top">`;
    selector.innerHTML = pokeIMG;
});