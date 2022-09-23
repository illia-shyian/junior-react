import { Component } from "react";

import { ReactComponent as LogoImage } from "../../images/logo.svg";
import { LinkWithQuery } from "../LinkWithQuery";

class Logo extends Component {
    render() {
        return (
            <LinkWithQuery to="/" className="Logo">
                <LogoImage />
            </LinkWithQuery>
        );
    }
}

export { Logo };
