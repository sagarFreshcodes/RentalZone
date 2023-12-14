import {
  API_ROOT_URL,
  CHECK_OTP,
  LOGIN_WITH_PHONE,
} from "../../../../Constant/api_constant";
import {
  POST_API,
  ToastError,
  ToastSuccess,
} from "../../../Common/Component/helperFunction";
import { auth } from "../../../../Constant/fireBaseConfig"; // Path to your firebase.js file
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";


export const GenerateOtp = ({ mobile, toggle }) => {
  const BodyData = {
    phone_number: mobile || "9090789090",
  };
  POST_API({
    endPoint: `${API_ROOT_URL}/${LOGIN_WITH_PHONE}`,
    body: BodyData,
  })
    .then((response) => {
      ToastSuccess(response);
      toggle();
    })
    .catch((error) => {
      toggle();
      ToastError(error);
    });
};

export const LoginWithOTP = ({ otp, mobile, toggle }) => {
  const BodyData = {
    phone_number: mobile || "9090789090",
    otp: otp,
  };

  POST_API({
    endPoint: `${API_ROOT_URL}/${CHECK_OTP}`,
    body: BodyData,
  })
    .then((response) => {
      ToastSuccess(response);
      toggle();
    })
    .catch((error) => {
      ToastError(error);
    });
};

export const LoginWithGoogle = ({ setToken, setEmail }) => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      setEmail(user.email);
      setToken(token);
      console.log("test2512", user, "toke", token);
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};
