import {FC, useContext} from "react";
import {AppBar, Grid, IconButton, Toolbar, Tooltip, useScrollTrigger} from "@mui/material";
import MenuIcon from "@mui/icons-material/MenuTwoTone";
import {TargetTypeEnum} from "../pages/App.tsx"
import {ThemeModeContext} from "../m3theme";
import {useTranslation} from "react-i18next";

import DarkIcon from "@mui/icons-material/DarkModeOutlined";
import LightIcon from "@mui/icons-material/LightModeOutlined";

interface HeaderProps {
    onDrawerToggle?: () => void,
    search: string,
    type: TargetTypeEnum,
    onSearch: (keyword: string) => void,
}

const HomeAppBar: FC<HeaderProps> = (props) => {
    const { t } = useTranslation()
    const { toggleTheme, themeMode } = useContext(ThemeModeContext);

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: undefined,
    });

    return (
        <AppBar position={"sticky"} elevation={trigger ? 2 : 0}>
            <Toolbar>
                <Grid container spacing={1} alignItems="center">
                    <Grid item sx={{ display: { md: "none", sm: "block" } }}>
                        <IconButton color="inherit" edge="start" onClick={props.onDrawerToggle}>
                            <MenuIcon />
                        </IconButton>
                    </Grid>
                </Grid>
                <Grid item xs></Grid>
                <Grid item>
                    <Tooltip title={t("switch-theme")}>
                        <IconButton size={"large"} color={"inherit"}
                                    onClick={toggleTheme}>
                            {themeMode == "light" ? <DarkIcon /> : <LightIcon />}
                        </IconButton>
                    </Tooltip>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default HomeAppBar