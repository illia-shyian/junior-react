import { Component } from "react";

export class Slider extends Component {
    state = {
        selectedImage: null,
        delta: 0,
        imagesToDisplay: [],
    };

    setSelectedImage = (image) => this.setState({ selectedImage: image });
    setImagesToDisplay = (images) => this.setState({ imagesToDisplay: images });
    setDelta = (delta) => this.setState({ delta });

    addDelta = () =>
        this.setState((state) => ({ ...state, delta: state.delta + 1 }));

    reduceDelta = () =>
        this.setState((state) => ({ ...state, delta: state.delta - 1 }));

    componentDidMount() {
        const { images } = this.props || [];
        images?.length && this.setSelectedImage(images[0]);
        images?.length && this.setImagesToDisplay(images.slice(0, 5));
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.images !== prevProps.images) {
            const { images } = this.props || [];
            images?.length && this.setSelectedImage(images[0]);
            images?.length && this.setImagesToDisplay(images.slice(0, 5));
        }
        if (this.state.delta !== prevState.delta) {
            const { images } = this.props || [];
            if (this.state.delta < 0) {
                this.setDelta(0);
                return false;
            }
            this.setImagesToDisplay(
                images.slice(this.state.delta, this.state.delta + 5)
            );
        }
    }
    render() {
        const { images } = this.props || [];
        console.log(images?.length);
        return (
            <div className="Slider">
                <div className="gallery">
                    <div className="arrow-wrapper">
                        <i
                            className={`arrow up  ${
                                !this.state.delta ? "hide" : ""
                            }`}
                            onClick={this.reduceDelta}
                        >
                            <span></span>
                            <span></span>
                        </i>
                    </div>
                    <div className="image-list">
                        {(this.state.imagesToDisplay || []).map((image) => (
                            <img
                                src={image}
                                key={image}
                                onClick={() => this.setSelectedImage(image)}
                            />
                        ))}
                    </div>

                    <div className="arrow-wrapper">
                        <i
                            className={`arrow down ${
                                images?.length - this.state.delta <= 5
                                    ? "hide"
                                    : ""
                            }`}
                            onClick={this.addDelta}
                        >
                            <span></span>
                            <span></span>
                        </i>
                    </div>
                </div>

                <div className="selected-image">
                    <img src={this.state.selectedImage} />
                </div>
            </div>
        );
    }
}
