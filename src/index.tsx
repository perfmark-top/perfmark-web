import App from "./ui/pages/App";
import {createRoot} from "react-dom/client";
import M3 from "./ui/m3theme/M3/M3.tsx";
import i18next from "i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import {initReactI18next} from "react-i18next";
import {resources} from "./react-i18next/resources.ts";

i18next.use(I18nextBrowserLanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: "zh",
        lng: navigator.language,
    })

const container = document.getElementById("root") as Element;
const root = createRoot(container);

root.render(
    <M3>
        <App />
    </M3>
)
