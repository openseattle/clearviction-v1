import { useEffect, useState } from "react";

const useDocumentTitle = title => {
    const [ documentTitle, setDocumentTitle, ] = useState(title);

    useEffect(() => {
        document.title = documentTitle + "Clearviction";
    }, [ documentTitle, ]);

    return [ documentTitle, setDocumentTitle, ];
};

export { useDocumentTitle };
