import { Component } from "react";
import { connect } from "react-redux";
import { CartIcon } from "./CartIcon";
import { CCurrency } from "./Currencies";

class Actions extends Component {
    render() {
        return (
            <div className="Actions">
                <div className="action-set">
                    <div className="action-item">
                        <CCurrency />
                    </div>
                    <div className="action-item">
                        <CartIcon />
                    </div>
                </div>
            </div>
        );
    }
}

export const CActions = connect((state) => ({
    currencies: state?.promise?.currenciesAll?.payload || [],
}))(Actions);

export { Actions };
