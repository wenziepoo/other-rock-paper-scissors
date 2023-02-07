def on_button_pressed_a():
    global counter
    counter = [0, 0]
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_received_string(receivedString):
    global counter
    if can == True:
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
        can = False
radio.on_received_string(on_received_string)

def on_gesture_shake():
    shake()
input.on_gesture(Gesture.SHAKE, on_gesture_shake)
def on_button_pressed_b():
    global counter
    score = "" + str(counter[0]) + " - " + ("" + str(counter[1]))
    basic.show_string(score)

    
input.on_button_pressed(Button.B, on_button_pressed_b)

def shake():
    global choice, can
    choice = items[randint(0, 2)]
    radio.set_group(8)
    radio.send_string("" + (choice))
    if choice == "A":
        basic.show_leds("""
            . # # # .
                        # # # # #
                        # # # # #
                        . # # # 1#
                        . . # # .
        """)
    elif choice == "B":
        basic.show_leds("""
            . . . . .
                        . # # # .
                        . # # # .
                        . # # # .
                        . # # # .
        """)
    else:
        basic.show_leds("""
            . . # . .
                        . # . . .
                        . # . . #
                        # # # # .
                        . # . . .
        """)
    
    can = True

score = ""
choice = ""
counter2: List[number] = []
counter: List[number] = []
items: List[str] = []
can = False
items = ["A", "B", "C"]
counter = [0, 0]