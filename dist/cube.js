var scene = document.getElementById('cube_canvas');
var cube = document.getElementById('cube');
cube.style.transform = 'rotateX(-25deg) rotateY(-45deg)';
scene === null || scene === void 0 ? void 0 : scene.addEventListener('mousedown', mousedown);
var x = -45;
var y = -45;
function mousedown(event) {
    var originX = event.clientX;
    var originY = event.clientY;
    scene === null || scene === void 0 ? void 0 : scene.addEventListener('mousemove', mousemove);
    scene === null || scene === void 0 ? void 0 : scene.addEventListener('mouseup', mouseup);
    function mousemove(event) {
        var currentX = event.clientX;
        var currentY = event.clientY;
        var disX = currentX - originX;
        var disY = currentY - originY;
        x = x + disX / 20;
        y = y + disY / 20;
        cube.style.transform = "rotateX(".concat(y, "deg) rotateY(").concat(x, "deg)");
    }
    function mouseup() {
        scene === null || scene === void 0 ? void 0 : scene.removeEventListener('mousemove', mousemove);
        scene === null || scene === void 0 ? void 0 : scene.removeEventListener('mouseup', mouseup);
    }
}
