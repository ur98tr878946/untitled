input.onButtonPressed(Button.A, function () {
    basic.showNumber(20)
    basic.showIcon(IconNames.Yes)
    basic.showString("burger meal")
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    led.enable(true)
    funk = randint(0, 20)
    basic.showString("" + (randint(0, 20)))
    basic.showString("" + (randint(0, 20)))
    basic.showString("" + (randint(0, 20)))
    basic.showString("" + (randint(0, 20)))
    basic.showString("" + (randint(0, 20)))
    basic.showString("" + (randint(0, 20)))
    basic.showString("" + (randint(0, 20)))
    basic.showString("" + (randint(0, 20)))
    basic.showString("" + (randint(0, 20)))
    basic.showString("" + (randint(0, 20)))
    basic.showString("" + (randint(0, 20)))
    basic.showString("" + (randint(0, 20)))
    basic.showString("" + (randint(0, 20)))
    basic.showString("" + (randint(0, 20)))
    basic.showString("" + (randint(0, 20)))
    basic.showString("" + (randint(0, 20)))
    basic.showString("" + (randint(0, 20)))
    basic.showString("" + (randint(0, 20)))
    basic.showString("" + (randint(0, 20)))
    basic.showString("" + (randint(0, 20)))
    if (funk == 20) {
        basic.showNumber(funk)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(10)
    basic.showIcon(IconNames.Yes)
    basic.showString("burger")
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    let funk2 = 0
    led.enable(true)
    basic.clearScreen()
    if (mone > 0) {
        basic.showIcon(IconNames.Yes)
        mone += coin
    } else if (funk2 == 20) {
        basic.showString("hacking in progress ")
        music.playMelody("C C5 C C5 C C5 C C5 ", 120)
        basic.showLeds(`
            # . # . #
            . # . # .
            . # . # .
            . # . # .
            # . # . #
            `)
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            `)
        basic.pause(1000)
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            `)
        basic.pause(1000)
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            `)
        basic.pause(1000)
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            `)
        basic.pause(1000)
        basic.showLeds(`
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            `)
        basic.pause(1000)
        basic.showLeds(`
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            `)
        basic.pause(1000)
        basic.showLeds(`
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            `)
        basic.pause(1000)
        basic.showLeds(`
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            `)
        basic.pause(1000)
        basic.showLeds(`
            # # # . .
            # # # . .
            # # # . .
            # # # . .
            # # # . .
            `)
        basic.pause(1000)
        basic.showLeds(`
            # # # . .
            # # # . .
            # # # . .
            # # # . .
            # # # . .
            `)
        basic.pause(1000)
        basic.showLeds(`
            # # # . .
            # # # . .
            # # # . .
            # # # . .
            # # # . .
            `)
        basic.pause(1000)
        basic.showLeds(`
            # # # . .
            # # # . .
            # # # . .
            # # # . .
            # # # . .
            `)
        basic.pause(1000)
        basic.showLeds(`
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            `)
        basic.pause(1000)
        basic.showLeds(`
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            `)
        basic.pause(1000)
        basic.showLeds(`
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            `)
        basic.pause(1000)
        basic.showLeds(`
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            `)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        mone = 10000000
        music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
        for (let index = 0; index < 1000000000000000; index++) {
            basic.showString("hacked")
        }
    } else {
        basic.clearScreen()
        basic.showLeds(`
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.clearScreen()
        basic.showLeds(`
            . # . # .
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.clearScreen()
        basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            . . . . .
            . . . . .
            `)
        basic.clearScreen()
        basic.showLeds(`
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            . . . . .
            `)
        basic.clearScreen()
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
    basic.showNumber(mone)
})
let funk = 0
let mone = 0
let coin = 0
coin = 0
mone = 100
funk = 0
loops.everyInterval(60000, function () {
    if (true) {
        basic.showString("sleep mode")
        led.enable(false)
    }
})
basic.forever(function () {
    basic.showLeds(`
        . # # # .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # . . . #
        . # # # .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        # . . . #
        . # # # .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . # . # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . # . # .
        `)
})
