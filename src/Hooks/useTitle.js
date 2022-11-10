import { useEffect } from 'react';

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Immigration Abroad`;
    }, [title])
};

export default useTitle;