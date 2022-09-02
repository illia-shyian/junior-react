import { Component } from "react";

class AttributeItem extends Component {
    render() {
        const {
            type = "",
            item: { value = "" },
            selectedValue = null,
            onSelect = null,
        } = this.props || {};

        return (
            <div
                className="AttributeItem"
                onClick={() => onSelect && onSelect(value)}
            >
                {type?.toLowerCase() === "swatch" ? (
                    <div
                        className={`attribute-value swatch ${
                            value === selectedValue ? "selected" : ""
                        }`}
                        style={{ backgroundColor: value }}
                    ></div>
                ) : (
                    <div
                        className={`attribute-value text ${
                            value === selectedValue ? "selected" : ""
                        }`}
                    >
                        {value}
                    </div>
                )}
            </div>
        );
    }
}

export { AttributeItem };
