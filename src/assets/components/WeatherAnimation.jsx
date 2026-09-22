import { LottieLight } from "lottie-react";

const WeatherAnimation = ({iconName,className=""}) => {
    console.log(iconName);
    return(
        <LottieLight src={`/animations/weather/${iconName}.json`} className={className} autoplay loop />
    )
}

export default WeatherAnimation;