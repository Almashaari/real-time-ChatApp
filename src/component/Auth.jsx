import { signInWithPopup } from "firebase/auth";
import Cookies from "universal-cookie";
import { auth, provider } from "../firebase-config.js";

const cookies = new Cookies();

function Auth({setIsAuth}) {
    const signInWithGoogle = async () => {
        try {
          const result = await signInWithPopup(auth, provider);
          cookies.set("auth-token", result.user.refreshToken);
          setIsAuth(true);
        } catch (err) {
          console.error(err);
        }
      };
      return (
        <div className="modal modal-sheet  d-block bg-body-light p-4 py-md-5 d-flex justify-content-center align-items-center" tabIndex="-1" role="dialog" id="modalSignin">
            <div className="modal-dialog" role="document">
                <div className="modal-content rounded-4 shadow bg-transparent">
                    <div className="modal-header p-5 pb-4 border-bottom-0">
                    <h4 className="fw-bold "> Sign In With Google To Continue </h4>
                    </div>
                    <div className="modal-body p-5 pt-0">
                            <button className="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit" onClick={signInWithGoogle}> Sign In with Google </button>
                    </div>
                </div>
            </div>
        </div>
      );
}

export default Auth;