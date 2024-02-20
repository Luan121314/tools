import { ResultType } from "./InitialPage";

export function buildTemplateStringShared(result: ResultType) {
  function buildString(collection: typeof result.rms) {
    return collection.map((unit) => {
      return `${unit.name}: ${unit.value} ${unit.suffix}`;
    });
  }

  const str = `
  *Resultado de potência RMS e de pico*

*RMS*
${buildString(result.rms).join('\n')}

*Peak*
${buildString(result.peak).join('\n')}

`;

  return str;
}
