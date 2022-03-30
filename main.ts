let set_compass = 0
basic.forever(function () {
    set_compass = input.compassHeading()
    if (input.compassHeading() >= 340 || input.compassHeading() < 20) {
        basic.showString("N")
    } else if (input.compassHeading() >= 25 && input.compassHeading() < 65) {
        basic.showString("NE")
    } else if (input.compassHeading() >= 70 && input.compassHeading() < 110) {
        basic.showString("E")
    } else if (input.compassHeading() >= 115 && input.compassHeading() < 155) {
        basic.showString("SE")
    } else if (input.compassHeading() >= 160 && input.compassHeading() < 200) {
        basic.showString("S")
    } else if (input.compassHeading() >= 205 && input.compassHeading() < 245) {
        basic.showString("SW")
    } else if (input.compassHeading() >= 250 && input.compassHeading() < 290) {
        basic.showString("W")
    } else if (input.compassHeading() >= 295 && input.compassHeading() < 335) {
        basic.showString("NW")
    } else {
        basic.showString("\"\"")
    }
})
