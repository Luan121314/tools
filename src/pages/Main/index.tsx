import React from 'react'
import AppService from '../../services/appService'

export default function Main(){

    const apps = AppService.getApps()


    return <div className="main">
        <header>
            <label>LnTools apps</label>
            <label>Ferramental genéricos</label>
        </header>
        <section>
            {
                apps.map(app => {
                    return <a href={app.route}>{app.name}</a>
                })
            }
        </section>
    </div>
}