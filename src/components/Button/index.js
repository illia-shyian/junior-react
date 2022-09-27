import { Component } from "react";

export class Button extends Component {
    state = {
        isClick: false,
    };

    setIsClick = (value) => this.setState({ isClick: value });

    render() {
        const { onClick = null, children = null } = this.props || {};

        return (
            <div
                className={`Button ${this.state.isClick ? "active" : ""}`}
                onMouseDown={() => this.setIsClick(true)}
                onMouseUp={() => this.setIsClick(false)}
                onClick={onClick}
            >
                {children}
            </div>
        );
    }
}
