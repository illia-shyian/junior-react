import { Component } from "react";
import { ReactComponent as PlusMini } from "../../../../images/plus-24.svg";
import { ReactComponent as MinusMini } from "../../../../images/minus-24.svg";
import { ReactComponent as Plus } from "../../../../images/plus-45.svg";
import { ReactComponent as Minus } from "../../../../images/minus-45.svg";

export class Counter extends Component {
    render() {
        const {
            onPlusClick,
            onMinusClick,
            count = 1,
            miniControls = false,
        } = this.props || {};
        return (
            <div className="Counter">
                {miniControls ? (
                    <PlusMini className="plus" onClick={onPlusClick} />
                ) : (
                    <Plus className="plus" onClick={onPlusClick} />
                )}
                <div className="count">{count}</div>

                {miniControls ? (
                    <MinusMini className="minus" onClick={onMinusClick} />
                ) : (
                    <Minus className="minus" onClick={onMinusClick} />
                )}
            </div>
        );
    }
}
