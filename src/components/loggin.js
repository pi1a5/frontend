import { GoogleLogin } from "react-google-login";

const clientId =
  "961754812465-2ovtm0ao3pdnrnk9letc5d8g5arifl9v.apps.googleusercontent.com";

function Loggin(props) {
  return (
  <div>
        <GoogleLogin
      clientId={clientId}
      buttonText="Entrar com o E-mail Institucional"
      onSuccess={props.successFunction}
      onFailure={props.failureFunction}
      cookiePolicy={"single_host_origin"}
      isSignedIn={true}
    />

  </div>
  );
}

export default Loggin;
