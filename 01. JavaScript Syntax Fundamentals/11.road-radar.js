function roadRadar(speed, area) {
    function PrintResult(speed, areaLimit) {
        const speedingLimit = 20;
        const excessiveSpeedingLimit = 40;
        
        if (speed > areaLimit) {
                    
            const difference = speed - areaLimit;
            const status = difference <= speedingLimit ? "speeding" : difference <= excessiveSpeedingLimit ? "excessive speeding" : "reckless driving";
    
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${areaLimit} - ${status}`);
        } else {
            console.log(`Driving ${speed} km/h in a ${areaLimit} zone`);
        }
        
    }
    
    const motorwayLimit = 130;
    const interstateLimit = 90;
    const cityLimit = 50;
    const residentialLimit = 20;


    switch (area) {
        case "motorway":
            PrintResult(speed, motorwayLimit);
            break;

        case "interstate":
            PrintResult(speed, interstateLimit);
            break;

        case "city":
            PrintResult(speed, cityLimit);
            break;

        case "residential":
            PrintResult(speed, residentialLimit);
            break;
    }
}



roadRadar(40, "city");