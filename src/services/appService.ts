import { useEffect, useState } from "react"
import { Registry } from "tools/services/Registry"

export type AppServiceType = {
    name: string
    component: React.FC
    route: string
    info?: string

}


function AppService() {
    
    const appRegister = new Registry<AppServiceType>()
    // appRegister.register(name, {component, name})

    function getApps(){
        return [...appRegister.items.values()]
    }

    

    return {
        appRegister,
        getApps
    }
    
}

const appService = AppService()

export default appService

export function useApps(){
   
    const [apps, setApps] = useState<Array<AppServiceType>>([])

    const appsList = appService.getApps()
    
    
    useEffect(()=>{
        console.log("appsList", appsList);
        setApps(appsList)
    }, [apps.length])

    return apps
}