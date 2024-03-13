import { Registry } from 'tools/services/Registry';

export type AppServiceType = {
    name: string;
    component: React.FC;
    route: string;
    description?: string;
    keywords?: Array<string>;
};

function AppService() {
    const appRegister = new Registry<AppServiceType>();

    function getApps() {
        return [...appRegister.items.values()];
    }

    function getAppTitles() {
        const apps = [...appRegister.items.values()];

        return apps.map((app) => app.name);
    }

    return {
        appRegister,
        getApps,
        getAppTitles,
    };
}

const appService = AppService();

export default appService;
