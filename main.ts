let zähler = 0
let Symbol = 0
input.onPinPressed(TouchPin.P0, function () {
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    zähler = zähler + 1
})
input.onGesture(Gesture.Shake, function () {
    Symbol = randint(1, 3)
    if (Symbol == 1) {
        basic.showLeds(`
            . . # . .
            . # . . .
            . # . . #
            # # # # .
            . # . . .
            `)
    } else if (Symbol == 2) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (Symbol == 3) {
        basic.showLeds(`
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            `)
    }
})
input.onButtonPressed(Button.AB, function () {
    zähler = 0
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(zähler)
    basic.pause(2000)
    basic.clearScreen()
})
basic.forever(function () {
    if (zähler == 3) {
        for (let index = 0; index < 2; index++) {
            basic.clearScreen()
            basic.showString("Sieg")
            basic.clearScreen()
            basic.pause(100)
            basic.showIcon(IconNames.Happy)
            basic.pause(100)
            basic.clearScreen()
        }
        zähler = 0
    }
})
