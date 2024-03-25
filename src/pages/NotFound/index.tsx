import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Header } from 'tools/components/Header';
import { MainShape } from 'tools/components/MainShape';
import { TagHeadManager } from 'tools/components/TagHeadManager';

export const NotFound = () => {
    const [timer, setTimer] = useState(5);

    const navigate = useNavigate();

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimer((prev) => prev - 1);
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    useEffect(() => {
        if (timer === 0) {
            navigate('/');
        }
    }, [timer]);

    return (
        <MainShape>
            <TagHeadManager
                title="Página não encontrada"
                noIndex
                description="Esta página não foi encontrada, para continuidade do uso do website, será feito o redirecionamento para a página principal"
            />
            <Header />
            <NotFoundContent>
                <h1>404 - Página não encontrada</h1>
                <p>
                    Desculpe, em alguns instantes você será redirecionado para a página
                    principal.
                </p>

                <div className="redirect-timer">
                    <h1>Redirecionando em {timer} s</h1>
                </div>
            </NotFoundContent>
        </MainShape>
    );
};

const NotFoundContent = styled.div`
    height: calc(100vh - 40px);
    width: 100%;
    display: flex;
    color: ${(props) => props.theme.white};
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    padding: ${(props) => props.theme['middle-padding']};
    font-size: ${(props) => props.theme['medium-size']};

    p {
        text-align: center;
    }

    @media only screen and (max-width: ${(props) => props.theme.breakPoints.tablet}) {
        h1 {
            font-size: ${(props) => props.theme['medium-size']};
        }

        p {
            font-size: ${(props) => props.theme['small-size']};
        }
    }
`;
