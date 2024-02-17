const db_3 = Math.sqrt(2);
function getDinamicMap(value: number ): number {
  const dinamicDBMap = {
    3: Math.pow(db_3, 1),
    6: Math.pow(db_3, 2),
    9: Math.pow(db_3, 3),
    12: Math.pow(db_3, 4),
  }

  return dinamicDBMap[value]
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

export function calculateValuesRMSPeak(powerRMS: number, resistance: number, dinamicDB: number): calculateValuesRMSPeakType{
  const config = {
    powerRMS,
    // get powerPeak() {
    //   return this.powerRMS * getDinamicMap(dinamicDB);
    // },
    resistance,
  };

  const voltsRMS = getVoltByPowerResistance(config.powerRMS, config.resistance);
  const currentRMS = getCurrentByvoltsResistance(voltsRMS, config.resistance);

  const rmsValue = {
    volt: formatNumber(voltsRMS),
    current: formatNumber(currentRMS),
    resistance: config.resistance,
    power:formatNumber( config.powerRMS),
  };

  const voltsPeak = getVoltPeakFromVoltsRMS(
    Number(rmsValue.volt),
    dinamicDB
  );
  const currentPeak = getCurrentByvoltsResistance(voltsPeak, config.resistance);

  const peakValue = {
    volt: formatNumber(voltsPeak),
    current: formatNumber(currentPeak),
    resistance: config.resistance,
    power: formatNumber(voltsPeak*currentPeak),
  };

  return {
    rms: rmsValue,
    peak: peakValue
  }
}

function formatNumber(value: number){
    return Number(value).toFixed(3)
}


export type calculateValuesRMSPeakType =  { rms: { volt: string; current: string; resistance: number; power: string; }; peak: { volt: string; current: string; resistance: number; power: string; }; }