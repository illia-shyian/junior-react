import React, { Component } from "react";
import { ReactComponent as LeftArrow } from "../../../images/arrowLeft.svg";

export class CarouselHorizontal extends Component {
    state = {
        activeIndex: 0,
    };

    setActiveIndex = (index) => {
        const items = this.props.items || 1;
        const children = this.props.children || [];
        if (index < 0 || index > children?.length - items) {
            return;
        }
        return this.setState((state) => ({ ...state, activeIndex: index }));
    };

    render() {
        const children = this.props.children || [];
        const items = this.props.items || 1;

        const marginRight =
            (this.props.styles && this.props.styles?.marginRight) || 0;

        return (
            <div className="CarouselHorizontal">
                <div className="wrapper">
                    <div
                        className="inner"
                        style={{
                            transform: `${"translateX"}(-${
                                (this.state.activeIndex * 100) / items
                            }% )`,
                        }}
                    >
                        {React.Children.map(children, (child, index) =>
                            React.cloneElement(child, {
                                style: {
                                    width: `calc(${100 / items}% - ${
                                        (marginRight * (items - 1)) / items
                                    }px)`,
                                    marginRight: `${
                                        index ? marginRight + "px" : "0px"
                                    }`,
                                },
                            })
                        )}
                    </div>
                    <div className="arrows">
                        <div
                            className="arrow-wrapper"
                            onClick={() =>
                                this.setActiveIndex(this.state.activeIndex - 1)
                            }
                        >
                            <LeftArrow
                                className={`arrow left ${
                                    this.state.activeIndex ? "" : "hide"
                                }`}
                            />
                        </div>
                        <div
                            className="arrow-wrapper"
                            onClick={() =>
                                this.setActiveIndex(this.state.activeIndex + 1)
                            }
                        >
                            <LeftArrow
                                className={`arrow right${
                                    this.state.activeIndex >=
                                    children?.length - items
                                        ? "hide"
                                        : ""
                                }`}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
