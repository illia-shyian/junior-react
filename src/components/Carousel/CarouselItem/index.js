import { Component } from "react";

export class CarouselItem extends Component {
    render() {
        const children = this.props.children || [];
        const style = this.props.style || {};
        return (
            <div
                className="CarouselItem"
                style={style}
                onClick={this.props.onClick}
            >
                {children}
            </div>
        );
    }
}
