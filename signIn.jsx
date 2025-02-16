import * as React from 'react'
import { Context } from "./App"
//This imports Context so we can use it in this file//

export const SignInButton = () => {

    const [signedIn,setSignedIn] = useContext(Context)
//The SignInButton is now using the Context we are importing.//

    return (
        <button onClick={() => setSignedIn(!signedIn)}>
            {
                signedIn ? "Sign Out" : "Sign In"
            }
        </button>
    )
}