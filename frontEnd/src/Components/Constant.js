export const LOGO_URL =
  "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const BG_LOGO_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/9ba9f0e2-b246-47f4-bd1f-3e84c23a5db8/web/IN-en-20251020-TRIFECTA-perspective_d6da84e9-6145-4b1e-bb51-e402c966a045_large.jpg";
export const USERPROFILE_LOGO =
  "https://i.pinimg.com/736x/91/86/1b/91861b749841221d52122f0c2933d8a6.jpg";
export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + import.meta.env.VITE_API_READ_ACCESS_TOKEN,
  },
};
export const API_KEY = import.meta.env.VITE_API_KEY;
export const POSTER_URL = import.meta.env.VITE_POSTER_URL;
export const languages = {
  en: {
    search: "search",
    placeholder: "what would you like to watch today",
  },
  hi: {
    search: "खोज",
    placeholder: "आज आप क्या देखना चाहेंगे?",
  },
  te: {
    search: "శోధన",
    placeholder: "మీరు ఈరోజు ఏమి చూడాలనుకుంటున్నారు",
  },
};
export const supportLan = [
  {
    identifier: "en",
    name: "English",
  },
  {
    identifier: "hi",
    name: "Hindi",
  },
  {
    identifier: "te",
    name: "Telugu",
  },
];
