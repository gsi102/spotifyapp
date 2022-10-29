import React, { FC } from "react";
import { useLocation, Navigate } from "react-router-dom";

const RequireLogin: FC<any> = ({ children }) => {
  const location = useLocation();

  const isSpotifyCode = localStorage.getItem("spotify_code");
  const queryParams = location.search;
  const re = /code=([^&]*)/gm;
  const codeRE = re.exec(queryParams);

  if (!isSpotifyCode && codeRE === null) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};

export default RequireLogin;
