import React, { Component } from "react";

export class CarouselVertical extends Component {
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
        const renderedArrow =
            this.props.renderedArrow && this.props.renderedArrow();

        const marginTop =
            (this.props.styles && this.props.styles?.marginTop) || 0;

        return (
            <div className="CarouselVertical">
                <div
                    className="arrow-wrapper"
                    onClick={() =>
                        this.setActiveIndex(this.state.activeIndex - 1)
                    }
                >
                    {renderedArrow ? (
                        renderedArrow
                    ) : (
                        <i
                            className={`arrow up ${
                                this.state.activeIndex ? "" : "hide"
                            }`}
                        >
                            <span></span>
                            <span></span>
                        </i>
                    )}
                </div>
                <div className="wrapper">
                    <div
                        className="inner"
                        style={{
                            transform: `${"translateY"}(-${
                                (this.state.activeIndex * 100) / items
                            }% )`,
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
                                    marginTopTop: `${
                                        index ? marginTop + "px" : "0px"
                                    }`,
                                },
                            })
                        )}
                    </div>
                </div>
                <div
                    className="arrow-wrapper"
                    onClick={() =>
                        this.setActiveIndex(this.state.activeIndex + 1)
                    }
                >
                    {renderedArrow ? (
                        renderedArrow
                    ) : (
                        <i
                            className={`arrow  down ${
                                this.state.activeIndex >=
                                children?.length - items
                                    ? "hide"
                                    : ""
                            }`}
                        >
                            <span></span>
                            <span></span>
                        </i>
                    )}
                </div>
            </div>
        );
    }
}
