const db_3 = Math.sqrt(2);
function getDinamicMap(value) {

  return {
    3: Math.pow(db_3, 1),
    6: Math.pow(db_3, 2),
    9: Math.pow(db_3, 2),
    12: Math.pow(db_3, 4),
  }[value];
}

function getVoltByPowerResistance(power, resistance) {
  return Math.sqrt(power * resistance);
}

function getPowerRMSFromPeak(powerRMS, dinamicDB = 3) {
  return powerRMS / getDinamicMap(dinamicDB);
}

function getPowerPeakFromPowerRMS(powerRMS, dinamicDB = 3) {
  return powerRMS * getDinamicMap(dinamicDB);
}

function getVoltRMSFromVoltsPeak(volts, dinamicDB = 3) {
  return volts / getDinamicMap(dinamicDB);
}

function getVoltPeakFromVoltsRMS(volts, dinamicDB = 3) {
  return volts * getDinamicMap(dinamicDB);
}

function getPowerPeakFromVoltRMS(voltRMS, dinamicDB, resistance) {
  return Math.pow(getVoltPeakFromRMS(voltRMS, dinamicDB), 2) / resistance;
}

function getCurrentByvoltsResistance(volts, resistance) {
  return volts / resistance;
}

export function calculateValuesRMSPeak(powerRMS, resistance, dinamicDB) {
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
    rmsValue.volt,
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

function formatNumber(value){
    return Number(value).toFixed(3)
}
