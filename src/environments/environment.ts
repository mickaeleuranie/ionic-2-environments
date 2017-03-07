export class ENV {

    // environment will be setted from command line ./start [environment]
    // and added just after the following line
    // {{ENV}}
public static currentEnvironment: string = "development"; // {{ENV_REMOVE}}
    // public static currentEnvironment: string = "test";
    // public static currentEnvironment: string = "development";
    // public static currentEnvironment: string = "preproduction";
    // public static currentEnvironment: string = "production";

    /**
     * DEVELOPMENT
     */
    public static development: any = {
        API_BASE_URL: "https://avocadoo.dev/api",
        API_VERSION: "1",
        API_KEY: "MadrarAb4wReNawrAxuf8pharub3aq",
    };

    /**
     * TEST
     */
    public static test: any = {
        API_BASE_URL: "http://test.avocadoo.com/api",
        API_VERSION: "1",
        API_KEY: "MadrarAb4wReNawrAxuf8pharub3aq",
    };

    /**
     * PREPRODUCTION
     */
    public static preproduction: any = {
        API_BASE_URL: "http://preprod.avocadoo.com/api",
        API_VERSION: "1",
        API_KEY: "MadrarAb4wReNawrAxuf8pharub3aq",
    };

    /**
     * PRODUCTION
     */
    public static production: any = {
        API_BASE_URL: "https://avocadoo.com/api",
        API_VERSION: "1",
        API_KEY: "MadrarAb4wReNawrAxuf8pharub3aq",
    };
}
