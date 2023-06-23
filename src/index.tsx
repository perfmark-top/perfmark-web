import App from "./ui/pages/App";
import {createRoot} from "react-dom/client";
import M3 from "./ui/m3theme/M3/M3.tsx";

const container = document.getElementById('root') as Element;
const root = createRoot(container);

root.render(
    <M3>
        <App />
    </M3>
)
