import { Injectable } from '@angular/core';
import { ENV } from '../environments/environment';

@Injectable()
export class Environment {

    public getApiBaseUrl() : string{
        return ENV[ENV.currentEnvironment].API_BASE_URL;
    }

    public getApiUrl() : string{
        return this.getApiBaseUrl() + '/v' + this.getApiVersion() + '/';
    }

    public getApiVersion() : string{
        return ENV[ENV.currentEnvironment].API_VERSION;
    }

    public getApiKey() : string{
        return ENV[ENV.currentEnvironment].API_KEY;
    }
}