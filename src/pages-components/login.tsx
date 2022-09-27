import React, {ChangeEvent, useState} from 'react';
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, GithubAuthProvider, signInWithPopup, signInWithEmailAndPassword} from 'firebase/auth';
import {useNavigate} from 'react-router-dom';
// @ts-ignore
import './login.css';

import facebook from '../images/facebookk.png';
import github from '../images/github.png';
import google from '../images/google.png';


const Login: React.FC = () => {
    const auth = getAuth();
    const navigate = useNavigate();
    const [authing, setAuthing] = useState<boolean>(false);
    const [ email, setEmail] = useState<string>('');
    const [ password, setPassword ] = useState<string>('');

    const signInWithGoogle = async () => {
        setAuthing(true);

        signInWithPopup(auth, new GoogleAuthProvider())
            .then(() => {
                navigate('/home');
            })
            .catch((error) => {
                console.log(error);
                setAuthing(false);
            });
    };

    const signInWithFacebook = async () => {
        setAuthing(true);

        signInWithPopup(auth, new FacebookAuthProvider())
            .then(() => {
                navigate('/home');
            })
            .catch((error) => {
                console.log(error);
                setAuthing(false);
            });
    };

    const signInWithGithub = async () => {
        setAuthing(true);

        signInWithPopup(auth, new GithubAuthProvider())
            .then(() => {
                navigate('/home');
            })
            .catch((error) => {
                console.log(error);
                setAuthing(false);
            });
    };

    const signInWithEmail = async () => {
        setAuthing(true);

        signInWithEmailAndPassword(auth, email, password)
            .then((response) => {
                console.log(response.user.email);
                navigate("/welcome");
            })
            .catch(error => {
                setAuthing(false);
                alert(error.message);
            })
    }

    return (
        <div className='container padding-1 border-default border-radius-1' >
            <h4 className='text-align-center '>CONNEXION</h4>
            <form className="container__form padding-standard" >
                <input className='bg-tr border-default border-radius-2' type='email' placeholder='Veuillez entrer votre adresse email' onChange={(event:ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}/>
                <input className='bg-tr border-default border-radius-2' type='password' placeholder='Veuillez entrer votre mot de passe'    onChange={(event:ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)}/>
                <button className='form__btn' onClick={() => signInWithEmail()} disabled={authing}>
                    SE CONNECTER
                </button>
            </form>

            <div className='text-align-center'>

                <button className='bg-tr width-icon border-none' onClick={() => signInWithFacebook()} disabled={authing}>
                    <img src={facebook} alt="facebook"/>
                </button>

                <button className='bg-tr width-icon border-none' onClick={() => signInWithGoogle()} disabled={authing}>
                    <img src={google} alt="google" />
                </button>

                <button className='bg-tr width-icon border-none' onClick={() => signInWithGithub()} disabled={authing}>
                    <img src={github} alt="github"/>
                </button>
                
            </div>
            <p className='text-align-center text-deco-underline'>Créer un compte</p>
            
        </div>
    );
};

export default Login;