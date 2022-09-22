import { Component } from "react";
import { generateCartItemKey } from "../../helpers";
import { CCartitem } from "./CartItem";

export class CartItemList extends Component {
    render() {
        const { items = [] } = this.props || {};
        const displayCarousel = this.props.displayCarousel || false;
        return (
            <div className="CartItemList">
                {(items || [])?.map((item) => (
                    <CCartitem
                        {...this.props}
                        item={item}
                        displayCarousel={displayCarousel || false}
                        key={generateCartItemKey(item.product)}
                    />
                ))}
            </div>
        );
    }
}
