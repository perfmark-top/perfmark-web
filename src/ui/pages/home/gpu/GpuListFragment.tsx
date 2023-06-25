import {ComponentProps, FC, useEffect} from "react";
import {useOutletContext} from "react-router-dom"
import {GpuContextType} from "../HomePage.tsx";

export interface GpuItemData {
    name: string,
    mark: number,
}


const GpuListFragment = () => {
    const {
        gpuSearch,
        gpuList,
        setGpuList,
        gpuCompare,
        setGpuCompare
    } = useOutletContext<GpuContextType>()

    useEffect(() => {

    }, [gpuSearch])

    return (
        <div>

        </div>
    )
}

export default GpuListFragment
