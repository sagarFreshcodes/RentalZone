import {
  API_ROOT_URL,
  CHECK_OTP,
  GOOGLE_LOGIN,
  LOGIN_WITH_PHONE,
} from "../../../../Constant/api_constant";
import {
  POST_API,
  ToastError,
  ToastSuccess,
} from "../../../Common/Component/helperFunction";
import { auth } from "../../../../Constant/fireBaseConfig"; // Path to your firebase.js file
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { UserActions } from "../../../../Redux_Store/Actions/userActions";
const SaveUserAuthToken = ({ token, user_details }) => {
  localStorage.setItem("rentalUserAuthToken", token);
  localStorage.setItem("user_details", user_details);
};
export const GenerateOtp = ({ mobile, toggle }) => {
  const bodyFormData = new FormData();
  bodyFormData.append("phone_number", mobile);

  POST_API({
    endPoint: `${API_ROOT_URL}/${LOGIN_WITH_PHONE}`,
    body: bodyFormData,
  })
    .then((response) => {
      ToastSuccess(response);
      toggle();
    })
    .catch((error) => {
      ToastError(error);
    });
};

export const LoginWithOTP = ({ otp, mobile, toggle, Redirect, dispatch }) => {
  const bodyFormData = new FormData();
  bodyFormData.append("phone_number", mobile);
  bodyFormData.append("otp", otp);

  POST_API({
    endPoint: `${API_ROOT_URL}/${CHECK_OTP}`,
    body: bodyFormData,
  })
    .then((response) => {
      const user_details = JSON.stringify(response.data.data.user_details);

      SaveUserAuthToken({
        token: response.data.data.token,
        user_details: user_details,
      });
      ToastSuccess(response);

      dispatch(
        UserActions({ status: "success", profileData: response.data.data })
      );
      toggle();
      Redirect();
    })
    .catch((error) => {
      ToastError(error);
    });
};
export const SubmitGoogleLoginCred = ({
  email,
  mobile,
  token,
  toggle,
  Redirect,
  name,
  dispatch,
}) => {
  const BodyData = {
    email: email,
    name: "",
    phone_number: mobile || 9090789090,
    google_auth_token: token,
  };

  const bodyFormData = new FormData();
  bodyFormData.append("email", email);
  bodyFormData.append("name", name);
  bodyFormData.append("phone_number", mobile);
  bodyFormData.append("google_auth_token", token);

  POST_API({
    endPoint: `${API_ROOT_URL}/${GOOGLE_LOGIN}`,
    body: bodyFormData,
  })
    .then((response) => {
      ToastSuccess(response);
      const user_details = JSON.stringify(response.data.data.user_details);
      SaveUserAuthToken({
        token: response.data.data.token,
        user_details: user_details,
      });
      Redirect();
      console.log("test2512", response);

      dispatch(
        UserActions({ status: "success", profileData: response.data.data })
      );
      toggle();
    })
    .catch((error) => {
      ToastError(error);
    });
};

export const LoginWithGoogle = ({
  setToken,
  setEmail,
  setName,
  mobile,
  toggle,
  Redirect,
  dispatch,
}) => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      setEmail(user.email);
      setToken(token);
      setName(`${user.displayName}`.split(" ")[1]);
      SubmitGoogleLoginCred({
        email: user.email,
        mobile: mobile,
        name: `${user.displayName}`.split(" ")[1],
        token: token,
        toggle: toggle,
        Redirect: Redirect,
        dispatch: dispatch,
      });
    })
    .catch((error) => {
      ToastError(error);
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
