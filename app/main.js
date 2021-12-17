/** Boiler Galería simple */
let cambioimagen = (img, alt) => {
    let imagengrande = document.querySelector("#caja");
    imagengrande.src = img;
    imagengrande.alt = alt;
};


document.querySelectorAll('.mini').forEach(item => {
    item.addEventListener('click', event => {
        cambioimagen(item.src, item.alt);
    })
})

//Aplicar el tema que el usuario quiera

let botones = document.querySelector(`#theme-btn`);

botones.addEventListener("click", (e) => {
    let body = document.querySelector(`body`);

    switch (`${e.target.id}`) {
        case `theme1`: //Tema normal
            body.classList.remove(`dark-theme`);
            body.classList.remove(`sepia-theme`);
            break;
        case `theme2`: //Tema oscuro
            body.classList.add(`dark-theme`);
            body.classList.remove(`sepia-theme`);
            break;
        case `theme3`: //Tema sepia
            body.classList.add(`sepia-theme`);
            body.classList.remove(`dark-theme`);
            break;
        default:
            body.classList.remove(`dark-theme`);
            body.classList.remove(`sepia-theme`);
            break;
    }
});


//Botones que cambian la imagen
let rightBtn = document.querySelector(`#arrow`);
let leftBtn = document.querySelector(`#arrow2`);

let i = 0;

//Función para cambiar a la siguiente imagen
let changeImg = () => {
    var img = document.querySelector(`#caja`);
    var images = [`assets/images/1.jpg`, `assets/images/2.jpg`, `assets/images/3.jpg`, `assets/images/4.jpg`, `assets/images/5.jpg`, `assets/images/6.jpg`, `assets/images/7.jpg`, `assets/images/8.jpg`, `assets/images/9.jpg`];

    if (i < 8) {
        i++;
    } else {
        i = 0;
    }
    img.setAttribute("src", images[i]);

    switch (images[i]) {
        case `assets/images/1.jpg`:
            datos.innerHTML = `<h5>La Libertad guiando al pueblo</h5>
            <h6>Eugène Delacroix</h6>`;
            break;
        case `assets/images/2.jpg`:
            datos.innerHTML = `<h5>Los fusilamientos del 3 de mayo</h5>
            <h6>Francisco de Goya</h6>`;
            break;
        case `assets/images/3.jpg`:
            datos.innerHTML = `<h5>Guernica</h5>
            <h6>Pablo Picasso</h6>`;
            break;
        case `assets/images/4.jpg`:
            datos.innerHTML = `<h5>La creación de Adán</h5>
            <h6>Miguel Ángel</h6>`;
            break;
        case `assets/images/5.jpg`:
            datos.innerHTML = `<h5>La tentación de San Antonio</h5>
            <h6>Salvador Dalí</h6>`;
            break;
        case `assets/images/6.jpg`:
            datos.innerHTML = `<h5>Los amantes</h5>
            <h6>René Magritte</h6>`;
            break;
        case `assets/images/7.jpg`:
            datos.innerHTML = `<h5>Las Meninas</h5>
            <h6>Diego Velázquez</h6>`;
            break;
        case `assets/images/8.jpg`:
            datos.innerHTML = `<h5>La persistencia de la Memoria</h5>
            <h6>Salvador Dalí</h6>`;
            break;
        case `assets/images/9.jpg`:
            datos.innerHTML = `<h5>La noche estrellada</h5>
            <h6>Vincent van Gogh</h6>`;
            break;
    };
}

//Función para cambiar a la imagen anterior
let changeImgBack = () => {
    var img = document.querySelector(`#caja`);
    var images = [`assets/images/1.jpg`, `assets/images/2.jpg`, `assets/images/3.jpg`, `assets/images/4.jpg`, `assets/images/5.jpg`, `assets/images/6.jpg`, `assets/images/7.jpg`, `assets/images/8.jpg`, `assets/images/9.jpg`];
    let src = img.getAttribute("src");
    if (src == images[0]) {
        i = 8;
    } else {
        i--;
    }
    img.setAttribute("src", images[i]);

    switch (images[i]) {
        case `assets/images/1.jpg`:
            datos.innerHTML = `<h5>La Libertad guiando al pueblo</h5>
            <h6>Eugène Delacroix</h6>`;
            break;
        case `assets/images/2.jpg`:
            datos.innerHTML = `<h5>Los fusilamientos del 3 de mayo</h5>
            <h6>Francisco de Goya</h6>`;
            break;
        case `assets/images/3.jpg`:
            datos.innerHTML = `<h5>Guernica</h5>
            <h6>Pablo Picasso</h6>`;
            break;
        case `assets/images/4.jpg`:
            datos.innerHTML = `<h5>La creación de Adán</h5>
            <h6>Miguel Ángel</h6>`;
            break;
        case `assets/images/5.jpg`:
            datos.innerHTML = `<h5>La tentación de San Antonio</h5>
            <h6>Salvador Dalí</h6>`;
            break;
        case `assets/images/6.jpg`:
            datos.innerHTML = `<h5>Los amantes</h5>
            <h6>René Magritte</h6>`;
            break;
        case `assets/images/7.jpg`:
            datos.innerHTML = `<h5>Las Meninas</h5>
            <h6>Diego Velázquez</h6>`;
            break;
        case `assets/images/8.jpg`:
            datos.innerHTML = `<h5>La persistencia de la Memoria</h5>
            <h6>Salvador Dalí</h6>`;
            break;
        case `assets/images/9.jpg`:
            datos.innerHTML = `<h5>La noche estrellada</h5>
            <h6>Vincent van Gogh</h6>`;
            break;
    };
}

rightBtn.addEventListener("click", changeImg);
leftBtn.addEventListener("click", changeImgBack);

//Para mostrar la información del cuadro
let infoBtn = document.getElementById(`info`);
let datos = document.querySelector(`#datos_cuadros`);
var imagen = document.getElementById(`caja`);
let src = imagen.getAttribute("src");

//mostrar el del primer cuadro, el resto con switch
if (src == `assets/images/1.jpg`) {
    datos.innerHTML = `<h5>La Libertad guiando al pueblo</h5>
    <h6>Eugène Delacroix</h6>`;
};

//botón que activa el cuadro de info
infoBtn.addEventListener(`click`, () => {
    datos.classList.toggle(`active`);
});