import React, {FC, useState} from "react";

import "../../../assets/css/HomePage.scss"
import {Outlet} from "react-router-dom";
import HomeDrawer from "../../component/home/HomeDrawer";
import HomeAppBar from "../../component/home/HomeAppBar";
import {Box, SxProps, useMediaQuery, useTheme} from "@mui/material";

const drawerWidth = 260;

const HomePage: FC = () => {
    const theme = useTheme()
    const isSmUp = useMediaQuery(theme.breakpoints.up('md'))

    const [ isMobileOpen, setMobileOpen ] = useState(false)

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
        display: 'flex',
        flexDirection: 'column',
    };
    const containerStyles: SxProps = {
        p: 0,
        flex: 1,
    }

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
                            sx={{ display: { md: 'block', sm: 'none', xs: 'none' } }} />
            </Box>
            <Box sx={homeStyles}>
                <HomeAppBar onDrawerToggle={() => setMobileOpen(!isMobileOpen)} />
                <Box sx={containerStyles}>
                    <Outlet />
                </Box>
            </Box>
        </Box>
    )
}

export default HomePage