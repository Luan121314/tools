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

export const CONFIG_APP = {
    name: '"Calcular potência RMS e Pico"',
    route:'/calculatorPowerRMSPEAK',
    component: ComponentApp,
    description: "Obtenha valores de grandezas elétricas, calculando valor RMS e pico aplicado em alto falantes ou amplificadores.",
    keywords:["Aplicação de potência", "calculo de potência", "RMS", "Pico", "valor eficaz", "Análise de Potência", "Potência de Áudio", "Potência de Amplificação para Automóveis", "Valor Máximo de Saída"]
}


AppService.appRegister.register('calculePotencia', CONFIG_APP)
