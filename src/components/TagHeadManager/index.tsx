import React from 'react'
import { Helmet } from 'react-helmet';

type TagHeadManagerType = {
    title: string
    description: string
    keywords?: Array<string>,

}


export const TagHeadManager:React.FC<TagHeadManagerType> = (props) => {
    return (
      <Helmet>
        <meta charSet="utf-8" />
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
        {props.keywords ? <meta name="keywords" content={props.keywords.join(", ")}></meta>: null}
        <link rel = "canonical" href = "https://lntools.com.br" /> 
      </Helmet>
    );
  }