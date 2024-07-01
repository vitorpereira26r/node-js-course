
// a car runs 16km/l with gasoline and 11km/l with ethanol
// distance is in metters
function fuelConsumptionPerKmDriven(distance, fuelType){
    if(distance < 0){
        return "distance has to be > 0"
    }

    const distanceInKm = distance/1000;
    if(fuelType === "Gasoline"){
        return distanceInKm / 16;
    }
    else if(fuelType === "Ethanol"){
        return distanceInKm / 11;
    }

    return "This fuel does not exists";
}

module.exports = {fuelConsumptionPerKmDriven}