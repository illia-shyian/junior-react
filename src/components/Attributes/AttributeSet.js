import { Component } from "react";
import { AttributeItem } from "./AttributeItem";

class AttributeSet extends Component {
    render() {
        const { set = {}, onSelect = null } = this.props || {};
        return (
            <div className="AttributeSet">
                <div className="attribute-set-name">{set?.name}:</div>
                <div className="attribute-item-list-wrapper">
                    <div className="attribute-item-list">
                        {(set?.items || []).map((item) => (
                            <AttributeItem
                                {...this.props}
                                key={item?.name}
                                item={item}
                                type={set?.type}
                                onSelect={(value) =>
                                    onSelect && onSelect(set?.name, value)
                                }
                            />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export { AttributeSet };
