import React from 'react';
import { getAuth, signOut } from 'firebase/auth';

export interface IWelcomeProps {}

const Welcome: React.FunctionComponent<IWelcomeProps> = (props) => {
    const auth = getAuth();

    return (
        <div className=''>
            <div className=''>
                <h2>Welcome {auth.currentUser?.displayName}!</h2>
                <button type="button" className="" onClick={() => signOut(auth)}>Sign out</button>
            </div>
        </div>
    );
};
export default Welcome;