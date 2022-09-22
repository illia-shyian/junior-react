import { Component } from "react";
import { CarouselItem, CarouselHorizontal } from "../Carousel";

export class Test extends Component {
    render() {
        return (
            <div className="Test">
                <CarouselHorizontal items={1}>
                    <CarouselItem>Item 1</CarouselItem>
                    <CarouselItem>Item 1</CarouselItem>
                    <CarouselItem>Item 3</CarouselItem>
                    <CarouselItem>Item 4</CarouselItem>
                    <CarouselItem>Item 5</CarouselItem>
                </CarouselHorizontal>
            </div>
        );
    }
}
