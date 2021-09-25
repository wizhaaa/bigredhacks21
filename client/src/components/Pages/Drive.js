import React, { useState } from "react";
import $ from 'jquery';

//pass in the following:
//props.cityName --> the city name
function Drive(props) {
    const [timeOfDay, setTimeOfDay] = useState(true); //true means daytime, false means nighttime

    let cityName = props.cityName;

    let keyword = cityName + (timeOfDay ? "")

    return (
        
    );
}

export default Drive;
