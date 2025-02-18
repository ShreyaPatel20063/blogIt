import { useState, useEffect } from 'react';

const usePaginate = (page, listLength) => {
    const [pageNo, setPageNo] = useState(page);
    const [limit, setLimit] = useState(4);
    const [noOfPages, setNoOfPages] = useState(1);

    useEffect(() => {
        setNoOfPages(Math.ceil(listLength / limit));
    }, [listLength, limit]);

    const increase = () => {
        setPageNo((prev) => (prev < noOfPages ? prev + 1 : prev));
    };

    const decrese = () => {
        setPageNo((prev) => (prev > 1 ? prev - 1 : prev));
    };

    return [pageNo, noOfPages, limit, increase, decrese];
};

export default usePaginate;
