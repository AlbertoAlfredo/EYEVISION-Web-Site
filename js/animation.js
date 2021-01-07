const throttle = _.throttle;


const players =
    Array.from(document.querySelectorAll('.js-play-on-screen'));


function isOnScreen(el) {
    let rect = el.getBoundingClientRect()
    return rect.top > 0 && rect.bottom < window.innerHeight;
}

function playAnimation(el) {
    if (isOnScreen(el)) el.style.animationPlayState = 'running';
}


const render = throttle(() => players.forEach(playAnimation), 150);

render();
window.addEventListener('scroll', render);


/* Animação das imagens da galeria */
$(".galeria-imagem").bind('mouseover', function () {

    $(this).animate({ height: "200px", width: "200px" });

});
$(".galeria-imagem").bind('mouseout', function () {

    $(this).animate({ height: "76px", width: "75px" });

});