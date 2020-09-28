// Created by: Nina Mathew
// Created on: 9/28/20
// To change a variable
let hungryness = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        hungryness = hungryness + 1
        basic.showNumber(hungryness)
    } else if (input.buttonIsPressed(Button.B)) {
        hungryness = 0
        basic.showNumber(hungryness)
    }
})
