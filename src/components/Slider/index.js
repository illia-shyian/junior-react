import { Component } from "react";
import { Carousel } from "../Carousel";
import { CarouselItem } from "../Carousel/CarouselItem";

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
                <Carousel direction="vertical" items={5}>
                    {images?.map((image) => (
                        <CarouselItem
                            key={image}
                            onClick={() => this.setSelectedImage(image)}
                        >
                            <img src={image} />
                        </CarouselItem>
                    ))}
                </Carousel>
                <div className="selected-image">
                    <img src={this.state.selectedImage} />
                </div>
            </div>
        );
    }
}
