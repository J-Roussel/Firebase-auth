import React from 'react';
import { getAuth, signOut } from 'firebase/auth';
import "./welcome.css";

export interface IWelcomeProps {}

const Welcome: React.FunctionComponent<IWelcomeProps> = (props) => {
    const auth = getAuth();

    return (
        <div className='center'>
            <h2 className='white'>Welcome!</h2>
            <button type="button" className="" onClick={() => signOut(auth)}>Sign out</button>
        </div>
    );
};
export default Welcome;