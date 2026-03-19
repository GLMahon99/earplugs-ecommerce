import { useEffect } from "react";

const GoogleLoginButton = () => {
  useEffect(() => {
    /* global */
    window.google.accounts.id.initialize({
      client_id: "TU_CLIENT_ID_DE_GOOGLE",
      callback: handleCredentialResponse,
    });

    window.google.accounts.id.renderButton(
      document.getElementById("googleButton"),
      {
        theme: "outline",
        size: "large",
      }
    );
  }, []);

  const handleCredentialResponse = (response) => {
    console.log("Token ID de Google:", response.credential);
    // Acá lo podés enviar a tu backend para validarlo
  };

  return <div id="googleButton"></div>;
};

export default GoogleLoginButton;
