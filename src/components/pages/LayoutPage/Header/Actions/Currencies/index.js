import { Component } from "react";
import { connect } from "react-redux";
import { actionCurrencySetSelected } from "../../../../../../reducers";

class Currency extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };
    }

    setIsOpen = (value) =>
        this.setState({
            isOpen: value,
        });

    setCurrencies = (currencies = []) =>
        this.setState({
            currencies,
        });

    render() {
        const {
            props: { currencies, currCurrency = null, onClick = null } = {},
            state: { isOpen },
            setIsOpen,
        } = this || {};
        return (
            <div className="Currency">
                <div
                    className="menu"
                    onMouseEnter={() => setIsOpen(true)}
                    onMouseLeave={() => setIsOpen(false)}
                >
                    <div className="current">
                        {currCurrency?.symbol}
                        <div className="arrow-wrapper">
                            <i className={`arrow ${isOpen ? "active" : ""}`}>
                                <span></span>
                                <span></span>
                            </i>
                        </div>
                    </div>
                    <div className={`dropdown-menu ${isOpen ? "open" : ""}`}>
                        {(currencies || []).map((curr) => (
                            <div
                                className="dropdown-item"
                                key={curr?.label}
                                onClick={() => onClick && onClick(curr)}
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

export const CCurrency = connect(
    (state) => ({
        currencies: state?.promise?.currenciesAll?.payload || [],
        currCurrency: state?.currency?.selected || null,
    }),
    { onClick: (currency) => actionCurrencySetSelected(currency || {}) }
)(Currency);

export { Currency };
