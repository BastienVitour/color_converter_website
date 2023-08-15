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

    return true

}

export function hslChecker(value) {

    let regex = /^hsl\((?:\d{1,3}(?:\.\d{1})?), ?(?:\d{1,3}(?:\.\d{1})?), ?(?:\d{1,3}(?:\.\d{1})?)\)$/

    if(!regex.test(value))
        return false

    return true
    
}