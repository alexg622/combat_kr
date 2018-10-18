const gokuStartCords = document.querySelector(".goku").getBoundingClientRect()
const spawnStartCords = document.querySelector(".spawn").getBoundingClientRect()
const container = document.querySelector(".container")
const windowWidth = window.innerWidth



const moveGoku = () => {
  window.addEventListener("keydown", e => {
    let goku = document.querySelector(".goku")
    window.e = e
    if(e.keyCode === 37) {
      let left = goku.offsetLeft
      goku.style.left = `${left-5}px`
    } else if (e.keyCode === 38) {
      let top = goku.offsetTop
      goku.style.top = `${top-5}px`
    } else if (e.keyCode === 39) {
      let left = goku.offsetLeft
      goku.style.left = `${left+5}px`
    } else if (e.keyCode === 40) {
      let top = goku.offsetTop
      goku.style.top = `${top+5}px`
    } else if (e.keyCode === 32) {
      gokuAttack()
    }
  })
}

const moveSpawn = () => {
  window.addEventListener("keydown", e => {
    console.log(e.keyCode);
    let spawn = document.querySelector(".spawn")
    if(e.keyCode === 65) {
      let left = spawn.offsetLeft
      spawn.style.left = `${left-5}px`
    } else if (e.keyCode === 69) {
      let top = spawn.offsetTop
      spawn.style.top = `${top-5}px`
    } else if (e.keyCode === 70) {
      let left = spawn.offsetLeft
      spawn.style.left = `${left+5}px`
    } else if (e.keyCode === 68) {
      let top = spawn.offsetTop
      spawn.style.top = `${top+5}px`
    } else if (e.keyCode === 16) {
      spawnAttack()
    }
  })
}

const gokuAttack = () => {
  let id = String(Math.floor(Math.random() * 1000000))
  let img = document.createElement("img")
  img.style.position = "absolute"
  img.src = 'https://media.giphy.com/media/qIo9nPEXGIDsY/giphy.gif'
  img.id = id
  img.style.height = "150px"
  img.style.width = "150px"
  img.classList.add("fireball")
  new Promise((res, rej) => {
    container.append(img)
    res("good")
  }).then(() => {
    let goku = document.querySelector(".goku")
    let goCords = goku.getBoundingClientRect()
    let imgCords = img.getBoundingClientRect()
    let imgStartY = imgCords.y
    let yDiff = goCords.y-gokuStartCords.y
    let newY = yDiff
    img.style.transform = `translate(${100 + goCords.x - imgCords.x}px)`
    let firing = setInterval(() => {
      let newCords = img.getBoundingClientRect()
      img.style.transform = `translate(${newCords.x+2}px, ${newY+125}px)`
      if (newCords.x > windowWidth-400) {
        container.removeChild(img)
        clearInterval(firing)
      }
    }, 1)
  })
}

const spawnAttack = () => {
  let id = String(Math.floor(Math.random() * 1000000))
  let img = document.createElement("img")
  img.style.position = "absolute"
  img.src = 'https://3.bp.blogspot.com/--uX11Zg1jvw/T7S_CZ2ylDI/AAAAAAAABAE/oiLxMEMCii8/s1600/blue+fire.gif'
  img.id = id
  img.style.height = "150px"
  img.style.width = "150px"
  img.classList.add("fireball")
  new Promise((res, rej) => {
    container.append(img)
    res("good")
  }).then(() => {
    let spawn = document.querySelector(".spawn")
    let spCords = spawn.getBoundingClientRect()
    let imgCords = img.getBoundingClientRect()
    let imgStartY = imgCords.y
    let yDiff = spCords.y-spawnStartCords.y
    let newY = yDiff
    img.style.transform = `translate(${spCords.x - imgCords.x - 100}px)`
    let firing = setInterval(() => {
      let newCords = img.getBoundingClientRect()
      img.style.transform = `translate(${newCords.x-2}px, ${newY+125}px)`
      if (newCords.x < 0) {
        container.removeChild(img)
        clearInterval(firing)
      }
    }, 1)
  })
}

moveGoku()
moveSpawn()
