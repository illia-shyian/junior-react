import { Component } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as LogoImage } from "../../images/logo.svg";

class Logo extends Component {
    render() {
        return (
            <Link to="/" className="Logo">
                <LogoImage />
            </Link>
        );
    }
}

export { Logo };
