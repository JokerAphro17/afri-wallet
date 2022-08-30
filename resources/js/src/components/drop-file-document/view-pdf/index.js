import { useEffect, useState } from "react";
import { Document, Page, pdfjs } from 'react-pdf';
import pdfjsWorker from "pdfjs-dist/build/pdf.worker";

pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

const ViewDocumentPdf = ({dataFile}) => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [urlFile, setUrlFile] = useState('');
    const [nameFIle, setNameFile] = useState('');

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    }

    useEffect(() => {
        console.log('dataFile :>> ', typeof dataFile);
        if (dataFile?.url) {
            setUrlFile(dataFile.url)
            console.log('dataFile :>> ', dataFile?.url);
        }
        if (dataFile?.name) {
            setNameFile(dataFile.name)
        }
    }, [dataFile])

    const handlerPaginate = (e, status) => {
        if(status == 'next') {
            setPageNumber(+pageNumber+1)
        } else if(status == 'custom') {
            let value = e.target.value
            if(+value > numPages) {
                value = numPages
            } else if(+value < 1) {
                value = 1
            }
            setPageNumber(+value)
        } else {
            setPageNumber(+pageNumber-1)
        }
    }

    const PaginateView = () => (
        <div className="d-flex justify-content-center m-5">
            <div className="p-2 bd-highlight">
                <button disabled={!(pageNumber-1 >= 1)} size="sm" onClick={(e)=>handlerPaginate(e, 'preview')}>Precedent</button>
            </div>
            <div className="d-flex justify-content-center align-items-center">
                <span className="mr-2">Page</span>
                <div className="w-40">
                    <input
                        type='number'
                        value={pageNumber}
                        onChange={(e)=> handlerPaginate(e, 'custom')}
                        min={pageNumber}
                        max={numPages}
                    />
                </div>
                <span className="ml-2">sur {numPages}</span>
            </div>
            <div className="p-2 bd-highlight">
                <button disabled={!(pageNumber+1 <= numPages)} size="sm" onClick={(e)=>handlerPaginate(e, 'next')}>Suivant</button>
            </div>
        </div>
    )

    return (
        <div>
            <PaginateView />
            <Document
                file={`${urlFile ?? ''}`}
                onLoadSuccess={onDocumentLoadSuccess}
                className="view-doc-pdf"
                onLoadError={error => console.log('error pdf load :>> ', error)}
            >
                <Page pageNumber={pageNumber} />
            </Document>
            <PaginateView />
        </div>
    )
}

export default ViewDocumentPdf

