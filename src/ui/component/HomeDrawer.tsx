import {FC} from "react";
import {useTranslation} from "react-i18next";
import {Link, useLocation} from "react-router-dom";
import {Drawer, DrawerProps, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography} from "@mui/material";
import {RouterData} from "../pages/App.tsx"

const HomeDrawer: FC<DrawerProps> = (props) => {
    const { pathname } = useLocation()
    const { t } = useTranslation()

    return (
        <Drawer {...props}>
            <Toolbar>
                <Typography color="inherit" sx={{ fontWeight: 500, letterSpacing: 0.5, fontSize: 20 }}>
                    {t("title")}
                </Typography>
            </Toolbar>
            <List>{
                RouterData.map((router) => (
                    <ListItem>
                        <ListItemButton component={Link} to={router.to}
                                        selected={pathname.startsWith(router.to)}
                                        onClick={() => props.onClose?.({}, "backdropClick")}>
                            <ListItemText>{t(router.translation)}</ListItemText>
                        </ListItemButton>
                    </ListItem>
                ))
            }</List>
        </Drawer>
    )
}

export default HomeDrawer