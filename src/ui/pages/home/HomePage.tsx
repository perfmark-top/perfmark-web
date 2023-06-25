import {Dispatch, FC, SetStateAction, useEffect, useState} from "react";

import "../../../assets/css/HomePage.scss"
import {Outlet} from "react-router-dom";
import HomeDrawer from "../../component/HomeDrawer.tsx";
import HomeAppBar from "../../component/HomeAppBar.tsx";
import {Box, SxProps, useMediaQuery, useTheme} from "@mui/material";
import {TargetTypeEnum, useTargetType} from "../App.tsx";
import {GpuItemData} from "./gpu/GpuListFragment.tsx";
import {CpuItemData} from "./cpu/CpuListFragment.tsx";

const drawerWidth = 260;

export type CpuContextType = {
    cpuSearch: string,
    cpuList: CpuItemData[], setCpuList: Dispatch<SetStateAction<CpuItemData[]>>,
    cpuCompare: CpuItemData[], setCpuCompare: Dispatch<SetStateAction<CpuItemData[]>>,
}

export type GpuContextType = {
    gpuSearch: string,
    gpuList: GpuItemData[], setGpuList: Dispatch<SetStateAction<GpuItemData[]>>,
    gpuCompare: GpuItemData[], setGpuCompare: Dispatch<SetStateAction<GpuItemData[]>>,
}

const HomePage: FC = () => {
    const theme = useTheme()
    const isSmUp = useMediaQuery(theme.breakpoints.up("md"))

    const rootStyles: SxProps = {
        display: "flex",
        minHeight: "100vh"
    }
    const navStyles: SxProps = {
        width: { md: drawerWidth },
        flexShrink: { md: 0 },
    };
    const homeStyles: SxProps = {
        flex: 1,
        display: "flex",
        flexDirection: "column",
    };
    const containerStyles: SxProps = {
        p: 0,
        flex: 1,
    }

    const [ isMobileOpen, setMobileOpen ] = useState(false)

    const [ cpuSearch, setCpuSearch ] = useState("")
    const [ cpuList, setCpuList ] = useState<CpuItemData[]>([])
    const [ cpuCompare, setCpuCompare ] = useState<CpuItemData[]>([])

    const [ gpuSearch, setGpuSearch ] = useState("")
    const [ gpuList, setGpuList ] = useState<GpuItemData[]>([])
    const [ gpuCompare, setGpuCompare ] = useState<GpuItemData[]>([])

    const routerType = useTargetType()

    return (
        <Box sx={rootStyles}>
            <Box component="nav" sx={navStyles}>
                {isSmUp ? null : (
                    <HomeDrawer
                        PaperProps={{ style: { width: drawerWidth } }}
                        variant="temporary"
                        open={isMobileOpen}
                        onClose={() => setMobileOpen(false)}
                    />
                )}
                <HomeDrawer variant="permanent"
                            PaperProps={{ style: { width: drawerWidth } }}
                            sx={{ display: { md: "block", sm: "none", xs: "none" } }} />
            </Box>
            <Box sx={homeStyles}>
                <HomeAppBar onSearch={routerType == TargetTypeEnum.CPU ? setCpuSearch : setGpuSearch}
                            search={routerType == TargetTypeEnum.CPU ? cpuSearch : gpuSearch}
                            type={routerType}
                            onDrawerToggle={() => setMobileOpen(!isMobileOpen)} />
                <Box sx={containerStyles}>
                    <Outlet context={{
                        cpuSearch, cpuList, setCpuList, cpuCompare, setCpuCompare,
                        gpuSearch, gpuList, setGpuList, gpuCompare, setGpuCompare,
                    }} />
                </Box>
            </Box>
        </Box>
    )
}

export default HomePage