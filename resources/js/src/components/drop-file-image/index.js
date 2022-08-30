import React, { useCallback, useMemo, useState, useEffect } from 'react'
import { useDropzone } from 'react-dropzone'
import PropTypes from 'prop-types';
import { errorNotif } from '../notification';

const baseStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#eeeeee',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    outline: 'none',
    transition: 'border .24s ease-in-out'
};

const activeStyle = {
    borderColor: '#2196f3'
};

const acceptStyle = {
    borderColor: '#00e676'
};

const rejectStyle = {
    borderColor: '#ff1744'
};


const thumbsContainer = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16
};

const thumb = {
    display: 'inline-flex',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    marginBottom: 8,
    marginRight: 8,
    width: 100,
    height: 100,
    padding: 4,
    boxSizing: 'border-box'
};

const thumbInner = {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden'
};

const img = {
    display: 'block',
    width: 'auto',
    height: '100%'
};

const onDropHandler = (file) => {
    return new Promise(resolve => {
        const reader = new FileReader();
        reader.onload = (event) => {
            resolve(event.target.result);
        };
        reader.readAsDataURL(file);
    })
}

const DropFileImage = ({images, imageUplaod, maxFiles, returnUrl = true}) => {
    const [files, setFiles] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');
    const {
        getRootProps,
        getInputProps,
        isDragActive,
        isDragAccept,
        isDragReject
    } = useDropzone({
        accept: {
            'image/*': ['.jpeg', '.png']
        },
        multiple: maxFiles && maxFiles == 1 ? false : true,
        maxFiles: maxFiles ?? 0,
        onDrop: acceptedImages => {
            let _images = []
            setIsLoading(true)
            if((acceptedImages.length > 0 && acceptedImages.length <= maxFiles) || !maxFiles) {
                setMessage('')
                acceptedImages.forEach(async _image => {
                    try {
                        const _data = await onDropHandler(_image);
                        _images.push(Object.assign(_image, {
                            preview: !returnUrl ? _data ?? URL.createObjectURL(_image) : URL.createObjectURL(_image)
                        }))
                        if (_images.length == acceptedImages.length) {
                            setIsLoading(false)
                            imageUplaod(_images)
                            setFiles(_images);
                        }
                    } catch (error) {
                        errorNotif(error)
                    }
                })
            } else {
                setIsLoading(false)
                setMessage(`Echec de chargement des images. ${acceptedImages.length > maxFiles || acceptedImages.length == 0 ? `Vous ne pouvez charger que ${maxFiles} images maximum.` : ''}`)
            }
        }
    });

    useEffect(() => {
        setFiles(images?.length > 0 ? images : [])
    }, [images])

    const style = useMemo(() => ({
        ...baseStyle,
        ...(isDragActive ? activeStyle : {}),
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ? rejectStyle : {})
    }), [
        isDragActive,
        isDragReject,
        isDragAccept
    ]);

    const thumbs = files.map(file => {
        return (
            <div style={thumb} key={file.preview}>
                <div style={thumbInner}>
                    <img
                        src={file.preview}
                        style={img}
                    />
                    {file.preview}
                </div>
            </div>
        )
    });

    return (
        <>
            {
                isLoading ? (
                    <div style={baseStyle}>
                        <span>Veuillez patienter ...</span>
                    </div>
                ):(
                    <div>
                        <div {...getRootProps({ style })}>
                            <input {...getInputProps()} />
                            {
                                isDragActive ?
                                    <p>déploser quelques fichiers ici ...</p> :
                                    <p>Glisser et déploser quelques fichiers ou cliquer pour les selectionner</p>
                            }
                        </div>
                        <aside style={thumbsContainer}>
                            {message ? (
                                <span className="text-danger">{message}</span>
                            ) :  thumbs}
                        </aside>
                    </div>
                )
            }
        </>
    )
}

DropFileImage.propTypes = {
    images: PropTypes.array.isRequired,
    maxFiles: PropTypes.number,
    imageUplaod: PropTypes.func
}

export default DropFileImage
