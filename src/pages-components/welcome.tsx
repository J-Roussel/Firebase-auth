import React from 'react';
import { getAuth, signOut } from 'firebase/auth';
import "./welcome.css";

export interface IWelcomeProps {}

const Welcome: React.FunctionComponent<IWelcomeProps> = (props) => {
    const auth = getAuth();

    return (
        <div className='center'>
            <h2 className='white'>Bienvenue!</h2>
            <button type="button" className="btn" onClick={() => signOut(auth)}>SE DECONNECTER</button>
        </div>
    );
};
export default Welcome;