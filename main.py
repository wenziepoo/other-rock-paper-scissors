def on_button_pressed_a():
    global counter
    counter2 = [0, 0]
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_received_string(receivedString):
    if choice == "A":
        if receivedString == "C":
            counter[1] = counter[1] + 1
        elif receivedString != choice:
            counter[0] = counter[0] + 1
    elif choice == "B":
        if receivedString == "A":
            counter[1] = counter[1] + 1
        elif receivedString != choice:
            counter[0] = counter[0] + 1
    elif choice == "C":
        if receivedString == "B":
            counter[1] = counter[1] + 1
        elif receivedString != choice:
            counter[0] = counter[0] + 1
radio.on_received_string(on_received_string)

def on_gesture_shake():
    shake()
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def shake():
    global choice, score, counter
    choice = items[randint(0, 2)]
    radio.set_group(8)
    radio.send_string(choice)
    basic.pause(100)
    score = "" + str(counter[0]) + " - " + ("" + str(counter[1]))
score = ""
choice = ""
items: List[str] = []
items = ["A", "B", "C"]
counter = [0, 0]