import React, { FormEvent, useState } from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import { Button } from "tools/components/Button/Button";
import { FormGroup } from "tools/components/FormGroup";
import { calculateValuesRMSPeak } from "./services/functionsUtility";
import { ShowUnitGroup, ShowUnitGroupType } from "./components/UnitGroup";
import { useTitle } from "tools/services/hooks/useTitle";
import { SharedContent } from "./components/SharedContent";
import { buildTemplateStringShared } from "./helpers";
import { TagHeadManager } from "tools/components/TagHeadManager";
import { CONFIG_APP } from ".";
import { InputRadioText } from "./components/InputRadioText";

const selectOptions = [
  {
    label: "3",
    value: "3",
  },
  {
    label: "6",
    value: "6",
  },
  {
    label: "12",
    value: "12",
  },
];

export type ResultType = {
  rms: ShowUnitGroupType["units"];
  peak: ShowUnitGroupType["units"];
  crestFactor: number
};


export const InitialPage: React.FC = () => {
  const [power, setPower] = useState("");
  const [resistance, setresistance] = useState("");
  const [powerType, setPowerType] = useState('rms');
  const [crestFactor, setCrestFactor] = useState(3);
  const [units, setUnits] = useState<ResultType | null>(null);


  function handleSubmit(ev: FormEvent) {
    ev.preventDefault();

    const powerValid = !isNaN(Number(power)) || Number(power) <= 0.1 ? Number(power) : 1
    const resistanceValid = !isNaN(Number(resistance)) || Number(resistance) <= 0.1  ? Number(resistance) : 1


    const resultFromService = calculateValuesRMSPeak(
      powerValid,
      resistanceValid,
      crestFactor,
      powerType
    );

    setUnits({
      crestFactor: crestFactor,
      rms: [
        {
          name: "Tensão",
          value: Number(resultFromService.rms.volt),
          suffix: "V",
        },
        {
          name: "Corrente",
          value: Number(resultFromService.rms.current),
          suffix: "A",
        },
        {
          name: "Potência",
          value: Number(resultFromService.rms.power),
          suffix: "W",
        },
        {
          name: "Resistência",
          value: Number(resultFromService.rms.resistance),
          suffix: "R",
        },
      ],
      peak: [
        {
          name: "Tensão",
          value: Number(resultFromService.peak.volt),
          suffix: "V",
        },
        {
          name: "Corrente",
          value: Number(resultFromService.peak.current),
          suffix: "A",
        },
        {
          name: "Potência",
          value: Number(resultFromService.peak.power),
          suffix: "W",
        },
        {
          name: "Resistência",
          value: Number(resultFromService.peak.resistance),
          suffix: "R",
        },
      ],
    });
  }


  return (
    <>
      <TagHeadManager title={CONFIG_APP.name} description={CONFIG_APP.description} keywords={CONFIG_APP.keywords} />
      <Container>
        <TitleApp>
          <h2 className="principal">Cálcular potência RMS e de pico</h2>
          <h3 className="description">
            Insira os valores de potência RMS e resistência para obter demais
            grandezas elétricas para seu alto falante ou amplificador.
          </h3>
        </TitleApp>
        <Form onSubmit={handleSubmit}>

            <InputRadioText 
              name="potenciaType"
              label="Potência:"
              suffix="Watts"
              valueRadio={powerType}
              onChangeRadio={(value)=> setPowerType(value)}
              radiosButtons={[
                {label: "RMS", value: "rms"},
                {label: "Pico", value: "pico"},
              ]}
              onChange={(ev=> setPower(ev.target.value))}
              value={power}
              type="text"
              placeholder="2000w"
              required
            />

          <FormGroup
            name="Resistência"
            label="Resistência:"
            suffix="Ohms"
            type="text"
            value={resistance}
            onChange={(ev=> setresistance(ev.target.value))}
            placeholder="2R"
            required
          />

          <FormGroup
            name="dbMusical"
            label="Dinâmica musical:"
            suffix="db"
            type="select"
            value={crestFactor}
            selectOptions={selectOptions}
            onChange={(e) => setCrestFactor(Number(e.target.value))}
          />

          <Button id="submitButton" type="submit" text="Calcular">
            Calcular
          </Button>
        </Form>
      </Container>

      <ResultLayer>
        {units?.rms ? <ShowUnitGroup title="RMS" units={units.rms} /> : null}
        {units?.peak ? <ShowUnitGroup title="Peak" units={units.peak} /> : null}
      </ResultLayer>
      {units?.rms && <SharedContent text={buildTemplateStringShared(units)} />}
    </>
  );
};

const Form = styled.form`
  padding: ${(props) => props.theme["small-padding"]};
  border: 1px solid ${(props) => props.theme["gray-100"]};
  border-radius: ${(props) => props.theme["border-radius"]};
  padding-bottom: ${(props) => props.theme["padding-bottom"]};
  width: 70%;
  max-width: 500px;

  @media only screen and (max-width: ${(props) => props.theme.breakPoints.tablet}) {
    width: 100%;
    border: none;

    button {
      width: 100%;
      border-radius: 0;
    }
  }
`;

const TitleApp = styled.div`
  color: ${(props) => props.theme["gray-100"]};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: ${(props) => props.theme["middle-margin"]};
  margin-bottom: ${(props) => props.theme["large-margin"]};

  .principal {
    font-size: ${(props) => props.theme["medium-size"]};
    font-weight: 600;
  }
  .description {
    text-align: center;
    font-size: ${(props) => props.theme["small-size"]};
    padding: ${(props) => props.theme["middle-padding"]};
  }

  @media only screen and (max-width: ${(props) => props.theme.breakPoints.tablet}) {
    span.principal {
      font-size: ${(props) => props.theme["medium-size"]};
    }
  }
`;

const Container = styled.div`
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme["gray-200"]};
  padding: ${(props) => props.theme["middle-padding"]};
  padding-bottom: ${(props) => props.theme["large-padding"]};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ResultLayer = styled.div`
  display: flex;
  color: ${(props) => props.theme["gray-100"]};
  justify-content: space-evenly;
  width: 100%;
  padding-top: ${(props) => props.theme["middle-padding"]};

  @media only screen and (max-width: ${(props) => props.theme.breakPoints.smartphone}) {
    & {
      flex-direction: column;
      align-items: center;
      padding: ${(props) => props.theme["middle-padding"]};
      padding-left: ${(props) => props.theme["large-padding"]};
    }

    & article {
      width: 100%;
    }
  }
`;
