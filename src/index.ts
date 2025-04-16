const scene = document.getElementById('cube_canvas')
const cube = document.getElementById('cube')
cube!.style.transform = 'rotateX(-25deg) rotateY(-45deg)'

scene?.addEventListener('mousedown', mousedown)

let x: number = -45
let y: number = -45

function mousedown(event: MouseEvent) {
  const originX = event.clientX
  const originY = event.clientY

  scene?.addEventListener('mousemove', mousemove)
  scene?.addEventListener('mouseup', mouseup)

  function mousemove(event: MouseEvent) {
    const currentX = event.clientX
    const currentY = event.clientY

    const disX = currentX - originX
    const disY = currentY - originY

    x = x + disX / 20
    y = y + disY / 20

    cube!.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`
  }

  function mouseup() {
    scene?.removeEventListener('mousemove', mousemove)
    scene?.removeEventListener('mouseup', mouseup)
  }
}