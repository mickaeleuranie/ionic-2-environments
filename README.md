# Ionic 2 environments
Short code I made to add environments to an Ionic 2 application inspired by a code I found in a forum (I'll put the source when I'll remember it), with scripts to switch between them.

In this code exemple, I only use environment's specific API variables :
- `API_BASE_URL`
- `API_VERSION`
- `API_KEY`

## Installation

_[Note] This is for a basic Ionic 2 installation. Your configuration may be different._

1) Copy `src/environments` folder into your `src` folder.
2) Copy `src/providers/environment.ts` file into your `providers` folder
3) Update your `app/app.module.ts` file like this :

```
// add this line in import part
import { Environment } from '../providers/environment';

// [...]
// add provider in providers list
providers: [
    Environment,  // add provider here
    // ... Your other providers
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ],
```

4) Update your `.gitignore` file to ignore generated `src/environments/environment.old` file when switching

## How to use it

1) In a provider or a page, import the `Environment` provider

```
// if in a provider
import { Environment } from './environment';

// if in a page
import { Environment } from '../providers/environment';

// update constructor by adding
// private environment: Environment
```

2) Get your environment variables in your code

```
this.environment.getApiUrl();
this.environment.getApiVersion();
this.environment.getApiKey();
```

3) Switch between environments

Simply execute next code in root folder

```
# switch to development
./switch.sh dev

# switch to production
./switch.sh prod

# ...
```

## Adding new variable

To add new variable, you need to edit both `src/environments/environment.ts` and `src/providers/environment.ts` files

Exemple, if you want to add a `API_PROTOCOL` variable :

`src/environments/environment.ts`

```
    /**
     * DEVELOPMENT
     */
    public static development: any = {
        API_BASE_URL: "PATH_DEV",
        API_VERSION: "1",
        API_KEY: "API_KEY_DEV",
        API_PROTOCOL: "http",
    };

    // [...]

    /**
     * PRODUCTION
     */
    public static production: any = {
        API_BASE_URL: "API_PATH_PROD",
        API_VERSION: "1",
        API_KEY: "API_KEY_PROD",
        API_PROTOCAL: "https",
    };
```

`src/providers/environment.ts`

```
    public getApiProtocol() : string{
        return ENV[ENV.currentEnvironment].API_PROTOCOL;
    }
```

To get your variable, simply call `this.environment.getApiProtocol();`