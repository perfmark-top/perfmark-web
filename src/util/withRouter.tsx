import {
    Location,
    useLocation,
    useNavigate,
    useParams,
    Params,
} from "react-router-dom";
import React, {ComponentProps} from "react";
import {NavigateFunction} from "react-router/dist/lib/hooks";

export interface RouteComponentProps extends ComponentProps<any> {
    router: {
        location: Location,
        navigate: NavigateFunction,
        params: Readonly<Params>,
    }
}

export default function withRouter<P extends RouteComponentProps>(Component: React.ComponentType<P>) {
    function ComponentWithRouterProp(props: P) {
        const location = useLocation();
        const navigate = useNavigate();
        const params = useParams();

        return (
            <Component {...props} router={{ location, navigate, params }}/>
        )
    }

    return ComponentWithRouterProp;
}
