Spotify App

Task description:
Spotify Authentification flow:
-Create an app at https://developer.spotify.com/dashboard/
-Read Spotify API documentation regarding authentification process
Example of authentification flow (you can make your own simpler flow):
When a user opens the app show a login button that redirects the user to Spotify
authorization page. Afterward, this page redirects the user to your
redirect URL (set in the developer Spotify app settings to your app). The URL will contain
code.

Catch the parameter and store the code in Firestore document associated with the user and use it
to get the API access token and refresh it further if it expires (use this access token to access
Spotify API, provide it in Authorization header). Do not ask user to log in again in the next
sessions.

App functionality:
Create a mini Spotify app using Spotify API. When the user logs in to the page create a
document in Firestore with a unique id with the timestamp field of the user's first log-in
session, which should be used in further log-in sessions (probably store it in localStorage).
Fetch albums, playlists, and categories in the US (required, include a country parameter in the
request URL) from Spotify API (use the following paths):

- new-releases
- featured-playlists
- categories
  Create a responsive layout (should be usable on mobile) of the app (see pictures below).
- Set night and day mode switch on the sun and moon icons click (find inverts of the
  colors).
- The dashboard should include three scrollable (using arrows) blocks with data.
