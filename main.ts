input.onButtonPressed(Button.A, function () {
    counter2 = [0, 0]
})
radio.onReceivedString(function (receivedString) {
    let can: boolean;
if (can == true) {
        if (choice == "A") {
            if (receivedString == "C") {
                counter[1] = counter[1] + 1
            } else if (receivedString != choice) {
                counter[0] = counter[0] + 1
            }
        } else if (choice == "B") {
            if (receivedString == "A") {
                counter[1] = counter[1] + 1
            } else if (receivedString != choice) {
                counter[0] = counter[0] + 1
            }
        } else if (choice == "C") {
            if (receivedString == "B") {
                counter[1] = counter[1] + 1
            } else if (receivedString != choice) {
                counter[0] = counter[0] + 1
            }
        }
        can = false
    }
})
input.onGesture(Gesture.Shake, function () {
    shake()
})
function shake () {
    choice = items[randint(0, 2)]
    radio.setGroup(8)
    radio.sendString("" + (choice))
    if (choice == "A") {
        basic.showLeds(`
            . # # # .
            # # # # #
            # # # # #
            . # # # #
            . . # # .
            `)
    } else if (choice == "B") {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            `)
    } else {
        basic.showLeds(`
            . . # . .
            . # . . .
            . # . . #
            # # # # .
            . # . . .
            `)
    }
    score = "" + counter[0] + " - " + ("" + counter[1])
    can2 = true
}
let can2 = false
let score = ""
let choice = ""
let counter2: number[] = []
let counter: number[] = []
let items: string[] = []
let can3 = false
items = ["A", "B", "C"]
counter = [0, 0]
