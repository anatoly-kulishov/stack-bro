import React, {FC, memo, useEffect, useRef, useState} from 'react';
import {useDispatch} from "react-redux";
import {Dispatch} from "redux";
import {Button} from '@wavea/ui-kit';
import classes from './PhotoPicker.module.scss';
import downloadIcon from "../../assets/icons/upload-cloud-icon.svg";
import removeIcon from "../../assets/icons/remove-red-icon.svg";

type PhotoPickerPropsType = {
    fieldValue: { file: File | null, photo: string | ArrayBuffer | null } | null,
    setFieldValue: (file: File | null, photo: string | ArrayBuffer | null) => (dispatch: Dispatch) => void,
    resetFieldValue: () => (dispatch: Dispatch) => void,
    label?: string,
    description?: string,
}

const PhotoPicker: FC<PhotoPickerPropsType> = props => {
    const {
        fieldValue,
        setFieldValue,
        resetFieldValue,
        label = 'Upload Photo',
        description = ''
    } = props;

    const dispatch = useDispatch();
    const [preview, setPreview] = useState<string | ArrayBuffer | null>(null);
    const fileRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if (fieldValue) setPreview(fieldValue?.photo);
    }, [fieldValue])

    const _onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // @ts-ignore Todo: debug this type
        let file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreview(reader.result);
            dispatch(setFieldValue(file, reader.result));
        };
    }

    const _onRemove = () => {
        dispatch(resetFieldValue());
        setPreview(null);
    }

    const _triggerClick = () => {
        fileRef?.current?.click()
    }

    return (
        <div className={classes.wrapper}
             style={{backgroundImage: (preview && fieldValue?.photo) ? `url(${preview})` : 'none'}}>
            {!fieldValue && (
                <>
                    <Button typeButton="outline-primary"
                            isLarge={true}
                            iconBeforeTextUrl={downloadIcon}
                            onClick={_triggerClick}
                            label={label}/>
                    <input type="file"
                           ref={fileRef}
                           className='d-none mt-3'
                           onChange={_onChange}/>
                    <p className={classes.desc}>{description}</p>
                </>
            )}
            {fieldValue && (
                <button className={classes.removeBtn} onClick={_onRemove}>
                    <img src={removeIcon} alt=""/>
                </button>
            )}
        </div>
    );
}

export default memo(PhotoPicker);