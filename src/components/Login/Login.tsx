import React, { FC, useEffect } from "react";
import Button from "../UI/Button/Button";
import { useLocation, useNavigate } from "react-router-dom";

import styles from "./Login.module.css";

const Login: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const isSpotifyCode = localStorage.getItem("spotify_code");

    if (isSpotifyCode) {
      return navigate("/", { state: { from: location } });
    }
  }, []);

  const signIn = async () => {
    // window.location.href = `https://accounts.spotify.com/authorize?client_id=c2c9ac2f171a42bab6cace5918d5d73f&response_type=code&redirect_uri=https%3A%2F%2Fspotifyapp-97395.web.app&scope=user-library-read`;

    window.location.href = `https://accounts.spotify.com/authorize?client_id=c2c9ac2f171a42bab6cace5918d5d73f&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000&scope=user-library-read`;

    // CORS problem w/ spotify
    // return lazyGetSpotifyData({})
    //   .unwrap()
    //   .then((res) => console.log(res))
    //   .catch((e) => console.error(e));

    return null;
  };

  return (
    <div className={styles.login}>
      <p>Please, sign in into your Spotify account at first.</p>
      <Button className={styles.login__btn} onClick={signIn}>
        Sign in
      </Button>
    </div>
  );
};

export default Login;
