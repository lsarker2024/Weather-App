import { LottieLight } from "lottie-react";

const WeatherAnimation = ({iconName, isDay=1, className=""}) => {
    //console.log(iconName);
    return(
        <LottieLight src={`/animations/weather/${(isDay==1)?"Day":"Night"}/${iconName}.json`} className={className} autoplay loop />
    )
}

export default WeatherAnimation;