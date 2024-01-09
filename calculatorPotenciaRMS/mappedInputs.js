function getInputs(){
    const powerInput = document.querySelector('#powerId')
    const resistanceInput = document.querySelector('#resistanceId')
    const calculateBtn = document.querySelector("#submitButton")
    const dinamicDBInput = document.querySelector("#dinamicMusicID")

    //insert default values
    powerInput.value = 0
    resistanceInput.value= 2
    // dinamicDBInput.value = 3

    return {
        powerInput,
        resistanceInput,
        calculateBtn,
        dinamicDBInput
    }

}