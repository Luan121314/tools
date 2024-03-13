const db_3 = Math.sqrt(2);
function getDinamicMap(value: number): number {
    const dinamicDBMap = {
        3: Math.pow(db_3, 1),
        6: Math.pow(db_3, 2),
        9: Math.pow(db_3, 3),
        12: Math.pow(db_3, 4),
    };

    return dinamicDBMap[value];
}

function getVoltByPowerResistance(power: number, resistance: number) {
    return Math.sqrt(power * resistance);
}

function getPowerRMSFromPeak(powerRMS: number, dinamicDB = 3) {
    return powerRMS / getDinamicMap(dinamicDB);
}

function getPowerPeakFromPowerRMS(powerRMS: number, dinamicDB = 3) {
    return powerRMS * getDinamicMap(dinamicDB);
}

function getVoltRMSFromVoltsPeak(volts: number, dinamicDB = 3) {
    return volts / getDinamicMap(dinamicDB);
}

function getVoltPeakFromVoltsRMS(volts: number, dinamicDB = 3) {
    return volts * getDinamicMap(dinamicDB);
}

// function getPowerPeakFromVoltRMS(voltRMS, dinamicDB, resistance) {
//   return Math.pow(getVoltPeakFromRMS(voltRMS, dinamicDB), 2) / resistance;
// }

function getCurrentByvoltsResistance(volts: number, resistance: number) {
    return volts / resistance;
}

export function calculateValuesRMSPeak(
    powerRMS: number,
    resistance: number,
    dinamicDB: number,
    powerType: string
): calculateValuesRMSPeakType {
    const config = {
        powerRMS,
        resistance,
    };

    const volts = getVoltByPowerResistance(config.powerRMS, config.resistance);
    const current = getCurrentByvoltsResistance(volts, config.resistance);

    if (powerType === 'pico') {
        const peakValue = {
            volt: formatNumber(volts),
            current: formatNumber(current),
            resistance: config.resistance,
            power: formatNumber(config.powerRMS),
        };

        const voltRMS = getVoltRMSFromVoltsPeak(volts, dinamicDB);
        const currentRMS = getCurrentByvoltsResistance(voltRMS, resistance);
        const powerRMS = formatNumber(voltRMS * currentRMS);

        const rmsValue = {
            volt: formatNumber(voltRMS),
            current: formatNumber(currentRMS),
            resistance: resistance,
            power: powerRMS,
        };

        return {
            rms: rmsValue,
            peak: peakValue,
        };
    }

    const rmsValue = {
        volt: formatNumber(volts),
        current: formatNumber(current),
        resistance: config.resistance,
        power: formatNumber(config.powerRMS),
    };

    const voltsPeak = getVoltPeakFromVoltsRMS(Number(rmsValue.volt), dinamicDB);
    const currentPeak = getCurrentByvoltsResistance(voltsPeak, config.resistance);

    const peakValue = {
        volt: formatNumber(voltsPeak),
        current: formatNumber(currentPeak),
        resistance: config.resistance,
        power: formatNumber(voltsPeak * currentPeak),
    };

    return {
        rms: rmsValue,
        peak: peakValue,
    };
}

function formatNumber(value: number) {
    return Number(value).toFixed(3);
}

export type calculateValuesRMSPeakType = {
    rms: { volt: string; current: string; resistance: number; power: string };
    peak: { volt: string; current: string; resistance: number; power: string };
};
