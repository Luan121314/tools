import React from 'react'
import { MainShape } from 'tools/components/MainShape'
import AppService from 'tools/services/appService'
import { InitialPage } from './InitialPage'
import { Header } from 'tools/components/Header'


const ComponentApp:React.FC = () => {
    return(
        <MainShape>
            <Header/>
            <InitialPage/>
        </MainShape>
    )
}

const configApp = {
    name: 'Cálculo de potência',
    route:'/calculatorPotenciaRMS',
    component: ComponentApp,
    info: "Obtenha valores de grandezas elétricas, calculando valor RMS e pico aplicado em alto falantes ou amplificadores."
}


AppService.appRegister.register('calculePotencia', configApp)
