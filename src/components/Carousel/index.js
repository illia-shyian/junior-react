import React, { Component } from "react";

export class Carousel extends Component {
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
        const marginTop = this.props.styles?.marginTop || 30;

        return (
            <div className="Carousel">
                <div className="arrow-wrapper">
                    <i
                        className={`arrow up  ${
                            this.state.activeIndex ? "" : "hide"
                        }`}
                        onClick={() =>
                            this.setActiveIndex(this.state.activeIndex - 1)
                        }
                    >
                        <span></span>
                        <span></span>
                    </i>
                </div>
                <div className="wrapper">
                    <div
                        className="inner"
                        style={{
                            transform: `translateY(-${
                                (this.state.activeIndex * 100) / items
                            }%)`,
                        }}
                    >
                        {React.Children.map(children, (child, index) =>
                            React.cloneElement(child, {
                                style: {
                                    height: `calc(${100 / items}% - ${
                                        (marginTop * (items - 1)) / items
                                    }px - ${
                                        index < this.state.activeIndex ? 6 : 0
                                    }px)`,
                                    marginTop: `${
                                        !(index === this.state.activeIndex)
                                            ? marginTop + "px"
                                            : ""
                                    }`,
                                },
                            })
                        )}
                    </div>
                </div>
                <div className="arrow-wrapper">
                    <i
                        className={`arrow down  ${
                            this.state.activeIndex >= children?.length - items
                                ? "hide"
                                : ""
                        }`}
                        onClick={() =>
                            this.setActiveIndex(this.state.activeIndex + 1)
                        }
                    >
                        <span></span>
                        <span></span>
                    </i>
                </div>
            </div>
        );
    }
}
