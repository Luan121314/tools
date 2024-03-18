import React from 'react';
import { Helmet } from 'react-helmet';
import { CONSTANTS } from 'tools/Contants';

type TagHeadManagerType = {
    title: string;
    description: string;
    keywords?: Array<string>;
    isMainPage?: boolean;
    image?: string;
    route?: string;
};

export const TagHeadManager: React.FC<TagHeadManagerType> = (props) => {
    function MetaDescription() {
        if (!props.description) return null;

        return (
            <Helmet>
                <meta name="description" content={props.description} />
                <meta property="og:description" content={props.description}></meta>
            </Helmet>
        );
    }

    function MetaKeywords() {
        if (!props.keywords) return null;

        return (
            <Helmet>
                <meta name="keywords" content={props.keywords.join(', ')}></meta>
            </Helmet>
        );
    }

    function MetaTitle() {
        if (!props.title) return null;

        return (
            <Helmet>
                <title>{props.title}</title>
                <meta property="og:title" content={props.title}></meta>
            </Helmet>
        );
    }

    function MetaMainPage() {
        if (!props.isMainPage) return null;

        return (
            <Helmet>
                <meta name="robots" content="index,follow"></meta>
            </Helmet>
        );
    }

    function MetaImage() {
        if (!props.image) return null;

        return (
            <Helmet>
                <meta property="og:image" content={props.image} />
            </Helmet>
        );
    }
    return (
        <>
            <Helmet>
                <link rel="canonical" href={CONSTANTS.url + (props.route ?? '')} />
                <meta property="og:type" content="website"></meta>
            </Helmet>
            <MetaMainPage />
            <MetaTitle />
            <MetaKeywords />
            <MetaDescription />
            <MetaImage />
        </>
    );
};
