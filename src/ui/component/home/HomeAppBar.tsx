import {FC} from "react";
import {AppBar, Toolbar, useScrollTrigger} from "@mui/material";

interface HeaderProps {
    onDrawerToggle?: () => void,
    window?: () => Window;
}

const HomeAppBar: FC<HeaderProps> = (props) => {

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: props.window ? props.window() : undefined,
    });

    return (
        <>
            <AppBar position={"sticky"} elevation={trigger ? 2 : 0}>
                <Toolbar>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default HomeAppBar