import { Component } from "react";
import { AttributeSet } from "./AttributeSet";

class Attributes extends Component {
    componentDidMount() {
        const { attributes = {}, setAttribute } = this.props || {};

        attributes?.map(
            (set) => setAttribute && setAttribute(set?.name, set.value)
        );
    }

    componentDidUpdate(prevProps) {
        const {
            attributes = {},
            setAttribute = null,
            selectedAttributes,
        } = this.props || {};

        if (
            attributes !== prevProps.attributes ||
            Object.keys(selectedAttributes)?.length === 0
        ) {
            attributes?.map((set) => {
                setAttribute && setAttribute(set?.name, set.items[0].value);
            });
        }
    }

    render() {
        const {
            attributes = {},
            setAttribute = null,
            selectedAttributes,
        } = this.props || {};
        return (
            <div className="Attributes">
                {(attributes || []).map((set) => (
                    <AttributeSet
                        key={set.name}
                        set={set}
                        onSelect={setAttribute}
                        selectedValue={selectedAttributes[set.name]}
                    />
                ))}
            </div>
        );
    }
}

export { Attributes };
