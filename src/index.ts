const scene = document.getElementById('cube_canvas')
const cube = document.getElementById('cube')

scene?.addEventListener('mousedown', mousedown)
scene?.addEventListener('mouseup', mouseup)

let originX: number
let originY: number

function mousedown(event: MouseEvent) {
  originX = event.clientX
  originY = event.clientY

  scene?.addEventListener('mousemove', mousemove)
}

function mousemove(event: MouseEvent) {
  const currentX = event.clientX
  const currentY = event.clientY

  const disX = currentX - originX
  const disY = currentY - originY

  cube!.style.transform = `rotateX(${disY}deg) rotateY(${disX}deg)`
}

function mouseup(event: MouseEvent) {
  scene?.removeEventListener('mousemove', mousemove)
}