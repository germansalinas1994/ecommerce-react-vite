import React, { useEffect, useRef, useState } from "react";
import Keycloak from "keycloak-js";

export const UseAuth = () => {
    const [isLogin, setLogin] = useState(false);
    const isRun = useRef(false);
    // const [user, setUser] = useState(null);
    useEffect(() => {
        if (isRun.current) return;


        isRun.current = true;
        const client = new Keycloak({
            url: import.meta.env.VITE_APP_KEYCLOAK,
            realm: import.meta.env.VITE_APP_REALM,
            clientId: import.meta.env.VITE_APP_CLIENT_ID,
            grantType: "password",
            
            
        });
        client.init({ onLoad: "login-required" }).then((authenticated) => {
            setLogin(authenticated);
            // setUser(client);
        });
    }
        , []);


    return isLogin;
}



