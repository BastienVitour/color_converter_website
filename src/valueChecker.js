export function hexChecker(value) {
    
    let regex = /^#[0-9A-F]{6}$|^#[0-9A-F]{3}$/

    if(!regex.test(value))
        return false

    return true

}

export function rgbChecker(value) {

    let regex = /^rgb\(\d{1,3}, ?\d{1,3}, ?\d{1,3}\)$/

    if(!regex.test(value))
        return false

    let string = value.toString()
    let values = string.split('').slice(4).join('').replaceAll(')', '').split(', ')
    let r = values[0], g = values[1], b = values[2]

    if (r < 0 || r > 255 || g < 0 || g > 255 || b < 0 || b > 255) {
        return false
    }

    return true

}

export function hslChecker(value) {

    let regex = /^hsl\((?:\d{1,3}(?:\.\d{1})?), ?(?:\d{1,3}(?:\.\d{1})?)%, ?(?:\d{1,3}(?:\.\d{1})?)%\)$/

    if(!regex.test(value))
        return false

    return true
    
}