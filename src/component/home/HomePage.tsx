import React from "react";
import {Link, NavLink, Outlet, useLocation, useNavigate} from "react-router-dom";
import Drawer, {DrawerAppContent, DrawerContent} from '@material/react-drawer';
import TopAppBar from "@material/react-top-app-bar";
import List, {ListItem, ListItemGraphic, ListItemText} from "@material/react-list";

import "../../assets/css/HomePage.scss"
import withRouter, {RouteComponentProps} from "../../util/withRouter";

interface HomePageProps extends RouteComponentProps {

}

class HomePage extends React.Component<HomePageProps, any> {
    state = {

    }

    private readonly _router = [
        {
            title: "CPU Benchmarks",
            to: "/cpu"
        },
        {
            title: "Video Card Benchmarks",
            to: "/gpu"
        }
    ]

    render() {
        return (
            <div>
                <TopAppBar>

                </TopAppBar>
                <Drawer className="drawer-container">
                    <DrawerContent>
                        <List singleSelection selectedIndex={
                            this.props.router.location.key.startsWith("/gpu") ? 1 : 0
                        }>{
                            this._router.map((item, index) => (
                                <ListItem key={item.title} onClick={() => this.props.router.navigate(this._router[index].to)}>
                                    <ListItemText primaryText={item.title} />
                                </ListItem>
                            ))
                        }</List>
                    </DrawerContent>
                </Drawer>
                <DrawerAppContent className="drawer-app-content">
                    <Outlet />
                </DrawerAppContent>
            </div>
        )
    }
}

export default withRouter(HomePage)