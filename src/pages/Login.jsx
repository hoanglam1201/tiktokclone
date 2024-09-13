import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {auth} from '../data/firebase';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const [user,setUser] = useState([]);
    const [token, setToken] = useState(null);
    const navigate = useNavigate();
    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        

        signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            // const user = result.user;
            localStorage.setItem('token', token);
            
            // IdP data available using getAdditionalUserInfo(result)
            // ...
            console.log(result.user);
            console.log(token);

            navigate('/admin');
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
    }
    return (
        <div className="p-10">
            <button className="p-3 border border-[#ccc] rounded-md" onClick={signInWithGoogle}>Sign in Google</button>
            
        </div>
    )
};
export default Login;