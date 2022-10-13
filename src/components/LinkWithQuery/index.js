import { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class LinkWithQuery extends Component {
    render() {
        const {
            children,
            to = "",
            location: { search = "" } = {},
            className = "",
            ...props
        } = this.props || {};

        delete props["staticContext"];

        return (
            <Link
                to={to + search}
                className={"Link " + className || ""}
                {...props}
            >
                {children}
            </Link>
        );
    }
}

const CLinkWithQuery = withRouter(LinkWithQuery);
export { CLinkWithQuery as LinkWithQuery };
