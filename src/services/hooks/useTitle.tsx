import { useEffect } from 'react';

export const useTitle = (titleName: string) => {
    useEffect(() => {
        document.title = titleName;
    }, []);
};
