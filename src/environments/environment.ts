// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const environment = {
  firebase: {
    projectId: 'ntt-crud-jesus',
    appId: '1:214429375308:web:90066cf630df29b0664de9',
    storageBucket: 'ntt-crud-jesus.appspot.com',
    locationId: 'europe-west',
    apiKey: 'AIzaSyC3A3ZnGyHXA2Ui5McxNhViA-Qw6ejbhhE',
    authDomain: 'ntt-crud-jesus.firebaseapp.com',
    messagingSenderId: '214429375308',
    measurementId: 'G-8WWHETDHPN',
  },
  production: false
};

const app = initializeApp(environment.firebase);
const analytics = getAnalytics(app);
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
