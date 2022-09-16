import { Component } from "react";
import { connect } from "react-redux";
import { getCurrentCurrency, updateQueryParams } from "../../helpers";

class Currency extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            currency: null,
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

    updateCurrency = () => {
        this.props.currencies?.length &&
            this.setState({ currency: getCurrentCurrency() });
    };

    componentDidMount() {
        this.updateCurrency();
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            this.updateCurrency();
        }
    }

    render() {
        const {
            props: { currencies } = {},
            state: { isOpen },
            setIsOpen,
        } = this || {};

        return (
            <div className="Currency">
                <div
                    className="menu"
                    onClick={() => setIsOpen(!isOpen)}
                    onMouseLeave={() => setIsOpen(false)}
                >
                    <div className="current">
                        {this.state.currency?.symbol}
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
}))(Currency);

export { Currency };
