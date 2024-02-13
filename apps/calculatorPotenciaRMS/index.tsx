// import { calculateValuesRMSPeak } from './functionsUtility';
// import {getInputs} from './mappedInputs'
// import { templateService } from './templates';
import React from 'react'
import AppService from 'tools/services/appService'

// window.addEventListener("DOMContentLoaded", () => {
//   if(Boolean) return
//   const inputs = getInputs();
//   const printResults = document.querySelector(".showResults") || {}

//   // console.log('cvse');

//   inputs.calculateBtn?.addEventListener("click", () => {

//     const powerValue = inputs.powerInput?.value;
//     const resistanceValue = inputs.resistanceInput?.value;
//     const dinamicDBInputValue = inputs.dinamicDBInput?.value;

//     if (!powerValue && !resistanceValue) {
//       throw new Error("Did not enter information");
//     }

//     const results = calculateValuesRMSPeak(powerValue, resistanceValue, dinamicDBInputValue);

//    const templateHTMLtoRMS = templateService.render(results.rms, "RMS")
//    const templateHTMLtoPeak = templateService.render(results.peak, "Peak")

// //    document.createElement()

//    printResults.innerHTML = templateHTMLtoRMS + templateHTMLtoPeak 
// //    printResults.append(templateHTMLtoPeak)
   
//   }); 
// });

const ComponentApp:React.FC = () => {
    return(
        <div className="container-app">
            <h1>App 01</h1>
        </div>
    )
}

const configApp = {
    name: 'Cálculo de potência',
    route:'/calculatorPotenciaRMS',
    component: ComponentApp,
    info: "Obtenha valores de grandezas elétricas, calculando valor RMS e pico aplicado em alto falantes ou amplificadores."
}


AppService.appRegister.register('calculePotencia', configApp)
