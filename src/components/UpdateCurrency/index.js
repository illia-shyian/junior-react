import { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getCurrentCurrency } from "../../helpers";
import { actionSetSelectedCurrency } from "../../reducers";

export class UpdateCurrency extends Component {
    updateCurrency = () => {
        const { setCurrency } = this.props || {};
        const currency = getCurrentCurrency();
        currency && setCurrency && setCurrency(currency);
    };

    componentDidMount() {
        this.updateCurrency();
    }

    componentDidUpdate(prevProps) {
        if (
            this.props.location.search !== prevProps?.location.search ||
            !this.props.currency
        ) {
            this.updateCurrency();
        }
    }

    render() {
        const children = this.props.children;

        return <>{children}</>;
    }
}

export const CUpdateCurrencyWithRouter = connect(
    (state) => ({
        currency: state?.currency?.selectedCurrency,
        currencies: state?.promise?.currenciesAll?.payload || [],
    }),
    {
        setCurrency: (currency) => actionSetSelectedCurrency(currency),
    }
)(withRouter(UpdateCurrency));
