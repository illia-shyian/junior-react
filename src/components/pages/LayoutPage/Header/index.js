import { Component } from "react";
import { Logo } from "../../../Logo";
import { CActions } from "./Actions";
import { CCategories } from "./Categories";

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <CCategories />
                <CActions />
                <Logo />
            </div>
        );
    }
}

export { Header };
