import {useDelaySearch} from "../../../../app/model/DelaySearchModel.ts";
import {useOutletContext} from "react-router-dom";
import {CpuContextType} from "../HomePage.tsx";

export interface CpuItemData {
    id: number,
    name: string,
    cpuCount: number,
    singleMark: number,
    multiMark: number,
}


const CpuListFragment = () => {
    const {
        cpuSearch,
        cpuList,
        setCpuList,
        cpuCompare,
        setCpuCompare
    } = useOutletContext<CpuContextType>()

    useDelaySearch(() => {

    }, [cpuSearch])
    return (

    )
}

export default CpuListFragment