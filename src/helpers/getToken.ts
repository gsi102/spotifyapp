export async function getToken(code: string, callback: any) {
  const response = await callback({ code })
    .unwrap()
    .then((res: any) => {
      const access_token = res.access_token;
      const token_type = res.token_type;
      const scope = res.scope;
      const expires_in = res.expires_in;
      const refresh_token = res.refresh_token;

      localStorage.setItem("access_token", JSON.stringify(access_token));
      localStorage.setItem("token_type", JSON.stringify(token_type));
      localStorage.setItem("scope", JSON.stringify(scope));
      localStorage.setItem("expires_in", JSON.stringify(expires_in));
      localStorage.setItem("refresh_token", JSON.stringify(refresh_token));
      localStorage.setItem("spotify_code", JSON.stringify(code));
    })
    .catch((e: any) => console.error(e));

  return response;
}
