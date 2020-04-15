import React from "react";
import "./App.css";
import { auth, firebase } from "./store";

export default function Login() {
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [user, setUser] = React.useState(false);
  const [verificationId, setVerificationId] = React.useState(false);
  const [otp, setOtp] = React.useState(false);

  React.useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log(authUser);
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(false);
      }
    });
  }, []);

  const loginHandler = () => {
    window.cordova &&
      window.cordova.plugins.firebase.auth
        .verifyPhoneNumber("+91" + phoneNumber, 0)
        .then((verificationId) => {
          setVerificationId(verificationId);
        });
  };

  const verify = (verificationId, otp) => {
    console.log(verificationId, otp);
    var credential = firebase.auth.PhoneAuthProvider.credential(
      verificationId,
      otp
    );
    auth
      .signInAndRetrieveDataWithCredential(credential)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <input
          type="number"
          name="phoneNumber"
          value={phoneNumber}
          onChange={(e) => {
            e.preventDefault();
            setPhoneNumber(e.target.value);
          }}
          placeholder="+9198XXXXXXXX"
        ></input>
        <br />
        <button onClick={loginHandler}>Login</button>
        {verificationId && (
          <>
            <input
              type="number"
              name="otp"
              placeholder={"888888"}
              onChange={(e) => {
                e.preventDefault();
                setOtp(e.target.value);
              }}
            ></input>
            <br />
            <button
              onClick={(e) => {
                e.preventDefault();
                verify(verificationId, otp);
              }}
            >
              Verify
            </button>
          </>
        )}
      </header>
    </div>
  );
}
