var fuelConsumption = require('./tests_exercice.js');

test('10 km with gasoline', () => {
    expect(fuelConsumption.fuelConsumptionPerKmDriven(10000,"Gasoline")).toBe(0.625);
});

test('11 km with ethanol', () => {
    expect(fuelConsumption.fuelConsumptionPerKmDriven(11000,"Ethanol")).toBe(1);
});