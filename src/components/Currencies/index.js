import React, { Component } from "react";
import { connect } from "react-redux";
import { updateQueryParams } from "../../helpers";
import { Arrow } from "../Arrow";

class Currency extends Component {
    state = {
        isOpen: false,
    };
    currenciesRef = React.createRef();

    setIsOpen = (value) =>
        this.setState({
            isOpen: value,
        });

    checkClickOutsideCurrencies = (e) => {
        if (
            this.currenciesRef?.current &&
            !this.currenciesRef?.current?.contains(e.target)
        ) {
            this.setIsOpen(false);
        }
    };

    componentDidMount() {
        document.addEventListener(
            "mousedown",
            this.checkClickOutsideCurrencies
        );
    }

    componentWillUnmount() {
        document.removeEventListener(
            "mousedown",
            this.checkClickOutsideCurrencies
        );
    }

    render() {
        const {
            props: { currencies, currency } = {},
            state: { isOpen },

            setIsOpen,
        } = this || {};

        return (
            <div className="Currency" ref={this.currenciesRef}>
                <div className="menu" onClick={(e) => setIsOpen(!isOpen)}>
                    <div className="current">
                        {currency?.symbol}
                        <div className="arrow-wrapper">
                            <Arrow className={`${isOpen ? "active" : ""}`} />
                        </div>
                    </div>
                    <div className={`dropdown-menu ${isOpen ? "open" : ""}`}>
                        {(currencies || []).map((curr) => (
                            <div
                                className="dropdown-item"
                                key={curr?.label}
                                onClick={() =>
                                    updateQueryParams({ currency: curr.label })
                                }
                            >
                                {curr?.symbol} {curr?.label}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export const CCurrency = connect((state) => ({
    currencies: state?.promise?.currenciesAll?.payload || [],
    currency: state?.currency?.selectedCurrency,
}))(Currency);

export { Currency };
