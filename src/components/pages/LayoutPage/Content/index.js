import { Component } from "react";
import { connect } from "react-redux";
import { Overlay } from "../../../Overlay";

class Content extends Component {
    state = {
        isOverlayOpen: false,
    };

    render() {
        const { children, isOverlayOpen = false } = this.props || {};
        return (
            <div className="Content">
                {children}
                <Overlay open={isOverlayOpen} />
            </div>
        );
    }
}

export const CContent = connect((state) => ({
    isOverlayOpen: state.overlay.content || false,
}))(Content);
export { Content };
