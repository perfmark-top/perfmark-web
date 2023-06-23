import {ComponentProps, FC, useState} from "react";
import {Link, useHistory, useLocation, useNavigate} from "react-router-dom";
import {Drawer, DrawerProps, List, ListItem, ListItemButton, ListItemText} from "@mui/material";

const _router = [
    {
        title: "CPU Benchmarks",
        to: "/cpu"
    },
    {
        title: "Video Card Benchmarks",
        to: "/gpu"
    }
]

const HomeDrawer: FC<DrawerProps> = (props) => {
    const { pathname } = useHistory()

    return (
        <Drawer {...props}>
            <List>{
                _router.map((router) => (
                    <ListItem>
                        <ListItemButton component={Link} to={router.to} selected={pathname.startsWith(router.to)}>
                            <ListItemText>{router.title}</ListItemText>
                        </ListItemButton>
                    </ListItem>
                ))
            }</List>
        </Drawer>
    )
}

export default HomeDrawer