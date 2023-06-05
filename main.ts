radio.setGroup(33)
basic.forever(function () {
    if (BitMaker.read_Din_value(GrovePort.P8) > 0) {
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            `)
    } else {
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            `)
        radio.sendString("Obstacle gauche")
    }
})
basic.forever(function () {
    if (BitMaker.read_Din_value(GrovePort.P1) > 0) {
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            `)
    } else {
        basic.showLeds(`
            # # # # #
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        radio.sendString("Obstacle frontale")
    }
})
basic.forever(function () {
    if (BitMaker.read_Din_value(GrovePort.P0) > 0) {
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            `)
    } else {
        basic.showLeds(`
            . . . . #
            . . . . #
            . . . . #
            . . . . #
            . . . . #
            `)
        radio.sendString("Obstacle droite")
    }
})
