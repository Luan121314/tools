import React from 'react'
import AppService from 'tools/services/appService'

export default function Main(){

    const apps = AppService.getApps()


    return <div className="main">
        <header>
            <label>LnTools apps</label>
            <label>Ferramental genéricos</label>
        </header>
        <section>
            {
                apps.map((app, index) => {
                    return <a href={app.route} key={index+app.name} >{app.name}</a>
                })
            }
        </section>
    </div>
}