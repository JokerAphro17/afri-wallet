import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useDropzone } from "react-dropzone";
// import { IconPdf, IconWord } from '@shared/Icons';
import PropTypes from "prop-types";
import ListPdfDocument from "./show";
import { errorNotif } from "../notification";

const baseStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    borderWidth: 2,
    borderRadius: 2,
    borderColor: "#eeeeee",
    borderStyle: "dashed",
    backgroundColor: "#fafafa",
    color: "#bdbdbd",
    outline: "none",
    transition: "border .24s ease-in-out",
};

const activeStyle = {
    borderColor: "#2196f3",
};

const acceptStyle = {
    borderColor: "#00e676",
};

const rejectStyle = {
    borderColor: "#ff1744",
};

const thumbsContainer = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 16,
};

const onDropHandler = (file) => {
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = (event) => {
            resolve(event.target.result);
        };
        reader.readAsDataURL(file);
    });
};

const DropFileDocument = ({
    listFiles,
    maxFiles,
    fileUplaod,
    returnUrl = true,
}) => {
    const [files, setFiles] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const {
        getRootProps,
        getInputProps,
        isDragActive,
        isDragAccept,
        isDragReject,
    } = useDropzone({
        // accept: '.pdf, .doc, .docx',
        accept: {
            "application/pdf": [".pdf"],
        },
        maxFiles: maxFiles ?? 1,
        multiple: maxFiles && maxFiles < 2 ? false : true,
        onDrop: (acceptedFiles) => {
            setIsLoading(true);
            let _files = [];
            acceptedFiles.forEach(async (_file) => {
                try {
                    let fileBase = '';
                    if(!returnUrl) {
                        fileBase = await onDropHandler(_file);
                    }
                    _files.push(
                        Object.assign(_file, {
                            preview: !returnUrl
                                ? fileBase
                                : URL.createObjectURL(_file),
                        })
                    );
                    if (_files.length == acceptedFiles.length) {
                        _files =
                            listFiles?.length > 0
                                ? listFiles?.concat(_files)
                                : _files;
                        console.log("_files :>> ", _files);
                        setIsLoading(false);
                        fileUplaod(_files);
                        setFiles(_files);
                    }
                } catch (error) {
                    errorNotif(error);
                }
            });
        },
    });

    useEffect(() => {
        if (listFiles) {
            setFiles(listFiles?.length > 0 ? listFiles : []);
        }
    }, [listFiles]);

    const style = useMemo(
        () => ({
            ...baseStyle,
            ...(isDragActive ? activeStyle : {}),
            ...(isDragAccept ? acceptStyle : {}),
            ...(isDragReject ? rejectStyle : {}),
        }),
        [isDragActive, isDragReject, isDragAccept]
    );

    return (
        <>
            {isLoading ? (
                <div style={baseStyle}>
                    <span>Veuillez patienter ...</span>
                </div>
            ) : (
                <div>
                    <div {...getRootProps({ style })}>
                        <input {...getInputProps()} />
                        {isDragActive ? (
                            <p>déploser quelques fichiers ici ...</p>
                        ) : (
                            <p>
                                Glisser et déploser quelques fichiers ou cliquer
                                pour les selectionner
                            </p>
                        )}
                    </div>
                    <aside style={thumbsContainer}>
                        <ListPdfDocument
                            onUpdateFiles={(_files) => fileUplaod(_files)}
                            files={files}
                        />
                    </aside>
                </div>
            )}
        </>
    );
};

DropFileDocument.propTypes = {
    listFiles: PropTypes.array.isRequired,
    maxFiles: PropTypes.number,
    fileUplaod: PropTypes.func,
    returnUrl: PropTypes.bool,
};

export default DropFileDocument;
