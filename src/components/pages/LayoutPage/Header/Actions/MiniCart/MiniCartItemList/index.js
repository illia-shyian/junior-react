import { Component } from "react";
import { generateCartItemKey } from "../../../../../../../helpers";
import { MiniCartItem } from "../MiniCartItem";

export class MiniCartItemList extends Component {
    render() {
        const { items = [] } = this.props || {};
        console.log(items);
        return (
            <div className="MiniCartItemList">
                {(items || [])?.map((item) => (
                    <MiniCartItem
                        {...this.props}
                        item={item}
                        key={generateCartItemKey(item.product)}
                    />
                ))}
            </div>
        );
    }
}
