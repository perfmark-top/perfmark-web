import {useState} from "react";
import {Box, Drawer, DrawerProps, List, ListItem, ListItemButton, Toolbar, Typography} from "@mui/material";
import {Link, useLocation, useNavigate} from "react-router-dom";

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

export default function HomeDrawer(props: DrawerProps) {
    const [ selectedItem, setSelectedItem ] = useState(0)

    const { pathname } = useLocation()
    const navigator = useNavigate()

    return (
        <Drawer {...props}>
            <Toolbar>
                <Typography color="inherit" sx={{ fontWeight: 500, letterSpacing: 0.5, fontSize: 20 }}>
                    PerfMark
                </Typography>
            </Toolbar>
            <List>
                <Box>{
                    _router.map((router, index) => (
                        <ListItem>
                            <ListItemButton component={Link} to={router.to}
                                            selected={pathname.startsWith(router.to)}
                                            onClick={() => setSelectedItem(index)}>

                            </ListItemButton>
                        </ListItem>
                    ))
                }</Box>
            </List>
        </Drawer>
    )
}