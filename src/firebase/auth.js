import { auth } from './firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';

export const doCreateUserWithEmailAndPassword = async (user, password) => {
    return createUserWithEmailAndPassword(auth, user, password);
}

export const doSignInWithEmailAndPassword = async (user, password) => {
    return signInWithEmailAndPassword(auth, user, password);
}

export const doSignOut = () => {
    return auth.signOut();
}

// export const doPasswordChange = (password) => {
//     return updatePassword(auth.currentUser, password);
// }

// export const doEmailChange = (email) => {
//     return updateEmail(auth.currentUser, email);
// }

    // export const doSendEmailVerification = (email) =>{
        //     return sendEmailVerificationEmail(auth.currentUser, {url:`${window.location.origin}/home`,
        // })
        // }
        
        // export const doPasswordReset = (email) => {
        //     return sendPasswordResetEmail(auth, email)
        // }