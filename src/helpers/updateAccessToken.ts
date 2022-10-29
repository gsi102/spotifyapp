import { setSpotifyAuthCode } from "./setSpotifyAuthCode";

export async function updateAccessToken(refreshToken: string, callback: any) {
  const response = await callback({ refreshToken })
    .unwrap()
    .then((res: any) => {
      const access_token = res.access_token;
      const token_type = res.token_type;
      const scope = res.scope;
      const expires_in = res.expires_in;

      localStorage.setItem("access_token", JSON.stringify(access_token));
      localStorage.setItem("token_type", JSON.stringify(token_type));
      localStorage.setItem("scope", JSON.stringify(scope));
      localStorage.setItem("expires_in", JSON.stringify(expires_in));

      let spotifyCode = localStorage.getItem("spotify_code");
      if (spotifyCode) {
        spotifyCode = JSON.parse(spotifyCode);
        // @ts-ignore
        setSpotifyAuthCode(spotifyCode);
      }
    })
    .catch((e: any) => console.error(e));

  return response;
}
