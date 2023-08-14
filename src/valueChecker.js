export function hexChecker(value) {
    
    let regex = /^#[0-9A-F]{6}$/

    if(!regex.test(value))
        return false

    let cleaned = value.replaceAll('#', '')

}

export function rgbChecker(value) {

    let regex = /^rgb\(\d{1,3}, ?\d{1,3}, ?\d{1,3}\)$/

    if(!regex.test(value))
        return false

    let cleaned = value.split('(')[1].replaceAll(')', '').split(', ')

    console.log(cleaned)

}

export function hslChecker(value) {

    let regex = /^hsl\((?:\d{1,3}(?:\.\d{1})?), ?(?:\d{1,3}(?:\.\d{1})?), ?(?:\d{1,3}(?:\.\d{1})?)\)$/

    if(!regex.test(value))
        return false

    return true
    
}