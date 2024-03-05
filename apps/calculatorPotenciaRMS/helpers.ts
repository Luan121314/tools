import { ResultType } from "./InitialPage";

export function buildTemplateStringShared(result: ResultType) {
  function buildString(collection: typeof result.rms) {
    return collection.map((unit) => {
      return `${unit.name}: ${unit.value} ${unit.suffix}`;
    });
  }

  const str = `
  *Resultado de potência RMS e de pico*
   Dinâmica musical: ${result.crestFactor} db

*RMS*
${buildString(result.rms).join('\n')}

*Peak*
${buildString(result.peak).join('\n')}

by https://lntools.com.br`;

  return str;
}
