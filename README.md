
# Spotify App

Link: https://spotifyapp-97395.web.app

> The App is in the Development mode on Spotify, which means that I have to add users manually so they can see the result. If you are interested in, please send me an email associated with Spotify account and I will add it in the whitelist.

## App functionality:
The App uses Spotify API. When any user logs in his Spotify account a document is created in the Firestore database with a unique id and timestamp field. Keys for access, refresh tokens, timestamp, theme, etc. also are set with values in the **Localstorage**

Albums, playlists, and categories are fetched from the Spotify API in three blocks:
- new-releases
- featured-playlists
- categories

A responsive layout (usable on mobile) functionality:
- Night and day mode can be switched on the ***sun*** and ***moon*** icons click (by inverting the colors)
- The dashboard includes three scrollable (using arrows) blocks with data
- Blocks in the sidebar aren't clickable. Only the ***search block*** has functionality: filtering the data according to its names and the search input string
- When users click on a song (album, playlist, category, etc) block save the data from this block provided by Spotify API to the Firestore user document in the subcollection ***Favorite***.

# Stack

Front:
- React
- Redux
- RTK Query
- Typescript
- Firestore (DB)
- pure CSS

