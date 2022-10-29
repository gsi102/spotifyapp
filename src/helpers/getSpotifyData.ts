import { AppDispatch } from "../store/store";
import { setCategoryItems } from "../store/reducers/commonSlice";

export async function getSpotifyData(
  callbackQuery: any,
  dispatch: AppDispatch
) {
  const getFunc = async (
    browseData: string,
    responseType: string,
    updateTarget: string
  ) => {
    let accessToken: string | null = localStorage.getItem("access_token");
    if (accessToken) {
      accessToken = JSON.parse(accessToken);
    }

    const response = await callbackQuery({ accessToken, type: browseData })
      .unwrap()
      .then((res: any) => {
        const items = [...res[responseType].items];
        dispatch(setCategoryItems({ type: updateTarget, data: items }));
      })
      .catch((e: any) => console.error(e));
    return response;
  };

  return Promise.all([
    getFunc("browse/new-releases", "albums", "newReleases"),
    getFunc("browse/featured-playlists", "playlists", "featured"),
    getFunc("browse/categories", "categories", "browse"),
  ]).catch((e) => console.error(e));
}
