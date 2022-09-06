import { Component } from "react";
import { ReactComponent as Plus } from "../../../../../../../../images/plus.svg";
import { ReactComponent as Minus } from "../../../../../../../../images/minus.svg";

export class Counter extends Component {
    render() {
        const { onPlusClick, onMinusClick, count = 1 } = this.props || {};
        return (
            <div className="Counter">
                <div className="plus" onClick={onPlusClick}>
                    <Plus />
                </div>
                <div className="count">{count}</div>
                <div className="minus">
                    <Minus onClick={onMinusClick} />
                </div>
            </div>
        );
    }
}
