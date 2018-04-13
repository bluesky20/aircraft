const e = sel => document.querySelector(sel)

const log = console.log.bind(console)

const imageFromPath = function(path) {
    let img = new Image()
    img.src = patha
    return img
}

const rectIntersects = function(a, b) {
    let o = a
    if(b.y > o.y && b.y < o.y + o.texture.height) {
        if(b.x > o.x && b.x < o.x + o.texture.width) {
            return true
        }
    }
    return false
}

const randomBetween = function(start, end) {
    let n = Math.random() * (end - start) + start
    return Math.floor(n)
}