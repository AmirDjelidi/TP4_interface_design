import { PublicClientApplication } from '@azure/msal-browser'

const requestedScopes = {
    scopes: ["User.Read"]
}

const msalInstance = new PublicClientApplication({
    auth: {
        clientId: process.env.VUE_APP_CLIENT_ID,
        authority: "https://login.microsoftonline.com/common",
        redirectUri: process.env.VUE_APP_REDIRECT_URI
    },
    cache: {
        cacheLocation: "sessionStorage",
        storeAuthStateInCookie: false
    }
})

// Fonction d'initialisation pour MSAL
export async function initializeMsal() {
    try {
        await msalInstance.initialize();
        console.log('MSAL initialized');
    } catch (error) {
        console.error('Error initializing MSAL:', error);
    }
}

export async function signInAndGetUser() {
    try {
        await initializeMsal();
        const authResult = await msalInstance.loginPopup(requestedScopes);
        msalInstance.setActiveAccount(authResult.account);
        return authResult.account;
    } catch (error) {
        console.error('Error during login:', error);
        return null;
    }
}
