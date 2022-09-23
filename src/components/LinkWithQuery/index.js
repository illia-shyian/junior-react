import { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class LinkWithQuery extends Component {
    render() {
        const {
            children,
            to = "",
            location: { search = "" } = {},
            ...props
        } = this.props || {};
        return (
            <Link
                to={to + search}
                {...props}
                className={"Link " + this.props?.className || ""}
            >
                {children}
            </Link>
        );
    }
}

const CLinkWithQuery = withRouter(LinkWithQuery);
export { CLinkWithQuery as LinkWithQuery };
