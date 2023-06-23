import React, { useState} from "react";
import {Outlet, useLocation, useNavigate} from "react-router-dom";

import "../../../assets/css/HomePage.scss"
import {Box, Drawer, SxProps, useMediaQuery, useTheme} from "@mui/material";

const drawerWidth = 260;

export default function HomePage() {
    const theme = useTheme();
    const isSmUp = useMediaQuery(theme.breakpoints.up('md'));

    const [ isMobileOpen, setMobileOpen ] = useState(false)

    const rootStyles: SxProps = {
        display: 'flex',
        minHeight: '100vh',
    };
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
    };

    return (
        <Box sx={rootStyles}>
            <Box component="nav" sx={navStyles}>
                {isSmUp ? null : (
                    <HomeDrawer
                        PaperProps={{ style: { width: drawerWidth } }}
                        variant="temporary"
                        open={isMobileOpen}
                        onClose={() => setMobileOpen(false)} />
                )}
                <HomeDrawer variant="permanent"
                            PaperProps={{ style: { width: drawerWidth } }}
                            sx={{ display: { md: 'block', sm: 'none', xs: 'none' } }} />
            </Box>
            <Box sx={homeStyles}>
                {/*<HomeAppBar onDrawerToggle={() => setMobileOpen(!isMobileOpen)} />*/}
                <Box sx={containerStyles}>
                    <Outlet />
                </Box>
            </Box>
        </Box>
    )
}