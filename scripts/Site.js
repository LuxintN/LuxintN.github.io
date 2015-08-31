window.onload = function () {
    document.getElementById("cube").addEventListener("click", rotateCard);
    document.getElementById("cube").addEventListener("mousewheel", changeDistance);
}

var angle = 0;
var distance = 0;

var updateCubeTransform = function () {
    document.getElementById("cube").style.transform = "translate3d(0,100px," + distance + "px) rotateY(" + angle + "deg)";
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