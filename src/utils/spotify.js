//https://developer.spotify.com/documentaion/web-playback-sdk/quick-start/#

export const authEndpoint = "https://accounts.spotify.com/authorize";

//Redirect the user on this url after login
const redirectUri = "https://spotify-clone-b7998.web.app/";

const clientId = "7df72512ccd3413cad349bc1b157c88d";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
