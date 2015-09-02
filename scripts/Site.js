var cube;
var angle = 0;
var distance = 0;

window.onload = function () {
    cube = document.getElementById("cube");

    cube.addEventListener("click", rotateCard);
    cube.addEventListener("mousewheel", changeDistance);
}

var updateCubeTransform = function () {
    cube.style.transform = "translate3d(0,100px," + distance + "px) rotateY(" + angle + "deg)";
}

function rotateCard(e) {
    angle += 30;
    updateCubeTransform();
}

function changeDistance(e) {

    if (e.wheelDelta > 0) {
        distance += 50;
    } else {
        distance -= 50;
    }
    
    updateCubeTransform();
}