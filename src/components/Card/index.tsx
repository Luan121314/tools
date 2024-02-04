import React from 'react'

type CardType = {
    title: string
    subtitle?: string
    children?: React.ReactNode 
}

export const Card:React.FC<CardType> = ({title, children, subtitle})=>{
    return <article className="card-container">
        <div className="title">{title}</div>
        <div className="content">
            {children}
        </div>
    </article>
}