const hexTab = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]

export function rgbToHex(r, g, b) {

    if (r < 0 || r > 255 || g < 0 || g > 255 || b < 0 || b > 255) {
        return ("Invalid value(s)")
    }
    
    let hexRed = hexTab[Math.floor(r / 16)]+hexTab[r % 16]

    let hexGreen = hexTab[Math.floor(g / 16)]+hexTab[g % 16]

    let hexBlue = hexTab[Math.floor(b / 16)] + hexTab[b % 16]

    return [hexRed, hexGreen, hexBlue]

}

export function rgbToHsl(r, g, b) {

    if (r < 0 || r > 255 || g < 0 || g > 255 || b < 0 || b > 255) {
        return ("Invalid value(s)")
    }

    let red = r / 255
    let green = g / 255
    let blue = b / 255
    let max_val = Math.max(red, green, blue)
    let min_val = Math.min(red, green, blue)
    let d = max_val - min_val

    let lightness = (max_val + min_val) / 2

    let saturation = lightness != 0 ? d / (1 - Math.abs(2 * lightness - 1)) : 0

    let hue = 0
    let segment = 0
    let shift = 0

    if (d == 0) {
        hue = 0
    }
    else {
        switch(max_val) {
            case red:
                segment = (green - blue) / d
                shift = 0 / 60
                if (segment < 0)
                    shift = 360 / 60
                hue = segment + shift
                break
            case green:
                segment = (blue - red) / d
                shift = 120 / 60
                hue = segment + shift
                break
            case blue:
                segment = (red - green) / d
                shift = 240 / 60
                hue = segment + shift
        }
    }

    hue = (hue * 60).toFixed(1)

    saturation = (saturation * 100).toFixed(1)
    lightness = (lightness * 100).toFixed(1)

    return [hue.toString(), saturation.toString(), lightness.toString()]

}

export function hexToRgb(value) {

    let vals = cleanHexValue(value)

    let r = vals[0]; let g = vals[1]; let b = vals[2]

    let red = r.toUpperCase().split('')
    let rgbRed = hexTab.indexOf(red[0]) * 16 + hexTab.indexOf(red[1])
    let green = g.toUpperCase().split('')
    let rgbGreen = hexTab.indexOf(green[0]) * 16 + hexTab.indexOf(green[1])
    let blue = b.toUpperCase().split('')
    let rgbBlue = hexTab.indexOf(blue[0]) * 16 + hexTab.indexOf(blue[1])

    return [rgbRed, rgbGreen, rgbBlue]

    return `rgb(${rgbRed}, ${rgbGreen}, ${rgbBlue})`

}

export function hexToHsl(value) {

    let vals = cleanHexValue(value)

    let r = vals[0]; let g = vals[1]; let b = vals[2]

    let rgb_vals = hexToRgb(value)

    return rgbToHsl(rgb_vals[0], rgb_vals[1], rgb_vals[2])

}

export function hslToRgb(h, s, l) {

    let d = (s / 100) * (1 - Math.abs(2 * (l / 100) - 1))

    let x = d * (1 - Math.abs((h / 60) % 2 - 1))

    let m = (l / 100) - d / 2

    let r = 0, g = 0, b = 0

    if (0 <= h && h < 60)
        r = d; g = x; b = 0
    if (60 <= h && h < 120)
        r = x; g = d; b = 0
    if (120 <= h && h < 180)
        r = 0; g = d; b = x
    if (180 <= h && h < 240)
        r = 0; g = x; b = d
    if (240 <= h && h < 300)
        r = x; g = 0; b = d
    if (300 <= h && h < 360)
        r = d; g = 0; b = x

    let red = (r + m) * 255
    let green = (g + m) * 255
    let blue = (b + m) * 255

    return [Math.round(red), Math.round(green), Math.round(blue)]

}

export function hslToHex(h, s, l) {

    let rgb_vals = hslToRgb(h, s, l)

    return rgbToHex(rgb_vals[0], rgb_vals[1], rgb_vals[2])

}

export function cleanHexValue(hex) {

    let string = hex.replaceAll('#', '')

    let red = string.slice(0, 2)
    let green = string.slice(2, 4)
    let blue = string.slice(4, 6)

    return [red, green, blue]

}