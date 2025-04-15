var scene = document.getElementById('cube_canvas');
var cube = document.getElementById('cube');
scene === null || scene === void 0 ? void 0 : scene.addEventListener('mousedown', mousedown);
scene === null || scene === void 0 ? void 0 : scene.addEventListener('mouseup', mouseup);
var originX;
var originY;
function mousedown(event) {
    originX = event.clientX;
    originY = event.clientY;
    scene === null || scene === void 0 ? void 0 : scene.addEventListener('mousemove', mousemove);
}
function mousemove(event) {
    var currentX = event.clientX;
    var currentY = event.clientY;
    var disX = currentX - originX;
    var disY = currentY - originY;
    cube.style.transform = "rotateX(".concat(disY, "deg) rotateY(").concat(disX, "deg)");
}
function mouseup(event) {
    scene === null || scene === void 0 ? void 0 : scene.removeEventListener('mousemove', mousemove);
}
