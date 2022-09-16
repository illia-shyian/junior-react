import { Component } from "react";
import { generateCartItemKey } from "../../helpers";
import { CCartitem } from "./CartItem";

export class CartItemList extends Component {
    render() {
        const { items = [] } = this.props || {};
        console.log(items);
        return (
            <div className="CartItemList">
                {(items || [])?.map((item) => (
                    <CCartitem
                        {...this.props}
                        item={item}
                        key={generateCartItemKey(item.product)}
                    />
                ))}
            </div>
        );
    }
}
