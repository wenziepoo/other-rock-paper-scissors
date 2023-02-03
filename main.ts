input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    let counter2 = [0, 0]
})
radio.onReceivedString(function on_received_string(receivedString: string) {
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
    
})
input.onGesture(Gesture.Shake, function on_gesture_shake() {
    shake()
})
function shake() {
    
    choice = items[randint(0, 2)]
    radio.setGroup(8)
    radio.sendString(choice)
    basic.pause(100)
    score = "" + ("" + counter[0]) + " - " + ("" + ("" + counter[1]))
}

let score = ""
let choice = ""
let items : string[] = []
items = ["A", "B", "C"]
let counter = [0, 0]
