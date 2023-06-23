import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";
import HomePage from "./home/HomePage";
import GpuListFragment from "./home/gpu/GpuListFragment";
import CpuListFragment from "./home/cpu/CpuListFragment";
import GpuInfoFragment from "./home/gpu/info/GpuInfoPage";
import CpuInfoFragment from "./home/cpu/info/CpuInfoPage";
import {FC} from "react";

const App: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />}>
                    <Route path="/gpu" element={<GpuListFragment />} />
                    <Route path="/cpu" element={<CpuListFragment />} />
                    <Route path="/gpu/:id" element={<GpuInfoFragment />} />
                    <Route path="/cpu/:id" element={<CpuInfoFragment />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
