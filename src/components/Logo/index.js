import { Component } from "react";
import { ReactComponent as LogoImage } from "../../images/logo.svg";

class Logo extends Component {
    render() {
        return (
            <div className="Logo">
                <LogoImage />
            </div>
        );
    }
}

export { Logo };
