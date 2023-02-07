input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    counter = [0, 0]
})
radio.onReceivedString(function on_received_string(receivedString: string) {
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
input.onGesture(Gesture.Shake, function on_gesture_shake() {
    shake()
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    let score = "" + ("" + counter[0]) + " - " + ("" + ("" + counter[1]))
    basic.showString(score)
})
function shake() {
    
    choice = items[randint(0, 2)]
    radio.setGroup(8)
    radio.sendString("" + choice)
    if (choice == "A") {
        basic.showLeds(`
            . # # # .
                        # # # # #
                        # # # # #
                        . # # # 1#
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
    
    can = true
}

let score = ""
let choice = ""
let counter2 : number[] = []
let counter : number[] = []
let items : string[] = []
let can = false
items = ["A", "B", "C"]
counter = [0, 0]
