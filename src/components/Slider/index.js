import { Component } from "react";
import { CarouselVertical } from "../Carousel";
import { CarouselItem } from "../Carousel";

export class Slider extends Component {
    state = {
        selectedImage: null,
    };

    setSelectedImage = (image) => this.setState({ selectedImage: image });

    componentDidMount() {
        const { images } = this.props || [];
        images?.length && this.setSelectedImage(images[0]);
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.images !== prevProps.images) {
            const { images } = this.props || [];
            images?.length && this.setSelectedImage(images[0]);
        }
    }
    render() {
        const { images } = this.props || [];

        return (
            <div className="Slider">
                <CarouselVertical items={4} marginTop={30}>
                    {images?.map((image) => (
                        <CarouselItem
                            key={image}
                            onClick={() => this.setSelectedImage(image)}
                        >
                            <img src={image} alt="product gallery" />
                        </CarouselItem>
                    ))}
                </CarouselVertical>
                <div className="selected-image">
                    <img
                        src={this.state.selectedImage}
                        alt="product gallery selected"
                    />
                </div>
            </div>
        );
    }
}
