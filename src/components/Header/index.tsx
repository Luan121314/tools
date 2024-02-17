import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Header:React.FC<{}> = ()=>{
    return <HearderContainer>
       <Link className='link' to="/" >
        <span className='principal-name' >LN tools</span>
       </Link> 
    </HearderContainer>
}

const HearderContainer = styled.section`
    width: 100%;
    padding: ${props => props.theme['middle-padding']};
    height: 40px;
    background-color: ${props => props.theme['green-100']};

    .link{
        text-decoration: none;
        color: ${props => props.theme.black};
    }

    .principal-name{
        font-size: ${props => props.theme['medium-size']};
        font-weight: 600;
    }

`