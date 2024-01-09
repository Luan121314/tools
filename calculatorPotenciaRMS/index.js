window.addEventListener("DOMContentLoaded", () => {
  const inputs = getInputs();
  const printResults = document.querySelector(".showResults")

  // console.log('cvse');

  inputs.calculateBtn.addEventListener("click", () => {
    const powerValue = inputs.powerInput.value;
    const resistanceValue = inputs.resistanceInput.value;
    const dinamicDBInputValue = inputs.dinamicDBInput.value;

    if (!powerValue && !resistanceValue) {
      throw new Error("Did not enter information");
    }

    const results = calculateValuesRMSPeak(powerValue, resistanceValue, dinamicDBInputValue);

   const templateHTMLtoRMS = templateService.render(results.rms, "RMS")
   const templateHTMLtoPeak = templateService.render(results.peak, "Peak")

//    document.createElement()

   printResults.innerHTML = templateHTMLtoRMS + templateHTMLtoPeak 
//    printResults.append(templateHTMLtoPeak)
   
  });
});
