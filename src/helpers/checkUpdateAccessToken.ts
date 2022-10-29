import { updateAccessToken } from "./updateAccessToken";

export async function checkUpdateAccessToken(callback: any) {
  let shouldUpdateToken = false;
  let expiresIn: number | string | null = localStorage.getItem("expires_in");
  let lastTimestamp: number | string | null =
    localStorage.getItem("last_timestamp");

  if (expiresIn) {
    expiresIn = JSON.parse(expiresIn);
  }
  if (lastTimestamp) {
    lastTimestamp = JSON.parse(lastTimestamp);
  }
  if (lastTimestamp && expiresIn) {
    let now: number | Date = new Date();
    lastTimestamp = Number(lastTimestamp);
    expiresIn = Number(expiresIn);
    now = Number(now);
    shouldUpdateToken = Boolean(now - lastTimestamp >= expiresIn * 1000);
  }

  let response = null;
  if (shouldUpdateToken) {
    let refreshToken = localStorage.getItem("refresh_token");
    if (refreshToken) {
      refreshToken = JSON.parse(refreshToken);

      // @ts-ignore
      response = await updateAccessToken(refreshToken, callback).catch(
        (e: any) => console.error(e)
      );
    }
  }

  return response;
}
