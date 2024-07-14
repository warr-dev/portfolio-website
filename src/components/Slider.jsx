import "./slider.scss";
import "solid-slider/slider.css";
import { createSlider } from "solid-slider";
import { FaRegularCircle, FaSolidCircle } from "solid-icons/fa";
import { createEffect } from "solid-js";
function Slider({ images }) {
    const [
        slider,
        {
            current,
            next,
            prev,
            moveTo,
        }
    ] = createSlider();
    slider;
    createEffect(() => {
        setInterval(() => {
            console.log('images', images.length);
            images && current() !== images?.length - 1 ? next() : moveTo(0)
        }, 2000)
    });

    // setInterval(() => {
    // console.log('images',images);
    //     current() !== images?.length() - 1 ? next() : moveTo(0)
    // }, 2000)

    return (
        <>
            <div use:slider class="group">
                {images.length > 0 && images.map(img => (<div class="slide"><img src={img.src} alt={img.name} /></div>))}
            </div>
            <div class="flex justify-center py-4 gap-2">
                {images.length > 0 && images.map((img, ind) => current() == ind ? <FaSolidCircle color="black" /> : <FaRegularCircle color="black" />)}
            </div>
        </>
    );
}
export default Slider;