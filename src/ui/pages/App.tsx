import {
    BrowserRouter,
    Route,
    Navigate,
    Routes, useLocation
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
                    <Route index element={<Navigate to="/cpu" replace />} />
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


export const RouterData = [
    {
        translation: "cpu-bench",
        to: "/cpu"
    },
    {
        translation: "gpu-bench",
        to: "/gpu"
    }
]

export enum TargetTypeEnum {
    CPU,
    GPU,
}

export function useTargetType(): TargetTypeEnum {
    const { pathname } = useLocation()
    return pathname.startsWith("/gpu") ? TargetTypeEnum.GPU : TargetTypeEnum.CPU
}
