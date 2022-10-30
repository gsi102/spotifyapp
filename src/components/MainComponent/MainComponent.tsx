import React, { FC, useCallback, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDarkTheme } from "../../hooks/useDarkTheme";
import MainLeft from "../MainLeft/MainLeft";
import MainRight from "../MainRight/MainRight";
import { getToken } from "../../helpers/getToken";
import { checkUpdateAccessToken } from "../../helpers/checkUpdateAccessToken";
import { setSpotifyAuthCode } from "../../helpers/setSpotifyAuthCode";
import {
  useLazyGetTokenQuery,
  useLazyRefreshTokenQuery,
  useLazyGetDataQuery,
} from "../../services/spotifyAppService";
import { getSpotifyData } from "../../helpers/getSpotifyData";

import styles from "./MainComponent.module.css";
import { useAppDispatch } from "../../hooks/useAppDispatch";

const MainComponent: FC = () => {
  const { dark } = useDarkTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const [lazyRefreshToken] = useLazyRefreshTokenQuery();
  const [lazyGetToken] = useLazyGetTokenQuery();
  const [lazyGetData] = useLazyGetDataQuery();
  const dispatch = useAppDispatch();

  const setSpotifyCode = useCallback(
    async (code: string) => await setSpotifyAuthCode(code),
    []
  );
  const receiveTokens = useCallback(
    async (code: string, callback: any) => await getToken(code, callback),
    []
  );
  const updateToken = useCallback(
    async (callback: any) => await checkUpdateAccessToken(callback),
    []
  );

  useEffect(() => {
    const queryParams = location.search;
    const re = /code=([^&]*)/gm;
    const codeRE = re.exec(queryParams);

    updateToken(lazyRefreshToken).catch((e) => console.error(e));

    if (queryParams && codeRE !== null) {
      const code = codeRE[1];
      Promise.all([receiveTokens(code, lazyGetToken), setSpotifyCode(code)])
        .then(() => {
          return getSpotifyData(lazyGetData, dispatch);
        })
        .catch((e) => {
          alert("Something went wrong");
          navigate("/login");
          console.error(e);
          return null;
        });
    } else {
      getSpotifyData(lazyGetData, dispatch).catch((e) => console.error(e));
    }
  }, []);

  return (
    <div className={styles.main + " " + dark}>
      <MainLeft />
      <MainRight />
    </div>
  );
};

export default MainComponent;
