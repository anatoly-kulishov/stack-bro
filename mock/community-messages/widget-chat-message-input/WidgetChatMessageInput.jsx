/**
 *  External Imports
 */
import React, { useState, useEffect, useRef } from "react";
import { func, string } from "prop-types";

/**
 *  Internal Imports
 */
import iconUploadFile from "../../../../assets/icons/icon-upload-file.svg";
import iconAttach from "../../../../assets/icons/attach.svg";
import styles from "./index.module.css";

const MAX_FILE_SIZE = 10;

/**
 *  Component
 *
 *  @param props
 *
 *  @return {JSX.Element}
 *
 */
const WidgetChatMessageInput = (props) => {
    const { chatMsg, selectedFile } = props;
    const { onMessageChange, onMessageSend, onFileUploaded } = props;

    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const fileInputRef = useRef(null);

    const [hasUploadError, setHasUploadError] = useState(false);
    const [convertedFileSize, setConvertedFileSize] = useState("");

    const fileFormats = ['.jpg', '.pdf', '.png', '.doc', '.docx']

    const onFileIconUpload = (event) => {
        validateUploadedFileSize(event.target.files[0].size);
        validateFileFormat()
        onFileUploaded(event.target.files[0]);
    };

    const validateUploadedFileSize = (fileSize) => {
        const convertedSize = fileSize / 1024 / 1024;
        if (convertedSize > MAX_FILE_SIZE) {
            setConvertedFileSize("");
            setHasUploadError(true);
        } else {
            setConvertedFileSize(`${Math.floor(convertedSize * 100) / 100} MB`);
            setHasUploadError(false);
        }
    };

    const resetFileUpload = () => {
        onFileUploaded(null);
        setHasUploadError(false);
        setConvertedFileSize("");
        fileInputRef.current.value = null;
    };

    const validateFileFormat = () => {
        const fileName = fileInputRef?.current?.files[0]?.name.toLowerCase()
        for(const format of fileFormats){
            if(fileName && fileName?.includes(format)){
                setHasUploadError(false)
                break
            } else {
                setHasUploadError(true)
            }
        }
    }

    useEffect(() => {
        setIsButtonDisabled((!selectedFile && !chatMsg) || hasUploadError);
    }, [chatMsg, hasUploadError, selectedFile]);

    useEffect(() => {
        if (!selectedFile) {
            fileInputRef.current.value = null;
        }
    }, [selectedFile]);

    return (
        <div className={styles.chatMessagesBottomArea}>
            {selectedFile && (
                <div className={styles.uploadedFile}>
                    <div className={styles.uploadImg}>
                        <img src={iconAttach} alt="Icon Attached File" />
                    </div>
                    <div className={styles.uploadedFileInfo}>
                        <div className={styles.uploadedFileTextWrap}>
                            <p className={styles.uploadedFileText} data-testid="fileName">
                                {selectedFile.name}
                            </p>
                            <button
                                data-testid="fileClearBtn"
                                onClick={resetFileUpload}
                                className={styles.uploadFileClear}>
                                ×
                            </button>
                        </div>
                        {!hasUploadError && (
                            <p className={styles.uploadedFileHint}>
                                {convertedFileSize}
                            </p>
                        )}
                        {hasUploadError && (
                            <p className={styles.uploadFileError}>
                                The file cannot be uploaded. Upload only PDF,
                                DOC, DOCX, JPEG or PNG up to 10 MB
                            </p>
                        )}
                    </div>
                </div>
            )}
            <div className={styles.chatMessagesInputArea}>
                <div className={styles.chatInputFieldArea}>
                    <label className={styles.upload}>
                        <img 
                            src={iconUploadFile}
                            alt="Icon Upload File"
                            className={styles.chatInputFileIconUpload}
                        />
                        <input
                            data-testid="uploadFileInput"
                            ref={fileInputRef}
                            onChange={onFileIconUpload}
                            className={styles.uploadInput}
                            type="file"
                            accept={fileFormats.join(',')}
                        />
                    </label>
                    <input
                        className={styles.chatInputField}
                        data-testid="messageInput"
                        type="text"
                        placeholder="Type a message"
                        maxLength="400"
                        value={chatMsg}
                        onChange={onMessageChange}
                        onKeyPress={onMessageSend(true)}
                    />
                </div>

                <button
                    data-testid="sendBtn" 
                    className={
                        isButtonDisabled
                            ? `${styles.chatSendBtn} cvb-button-disabled`
                            : styles.chatSendBtn
                    }
                    onClick={onMessageSend()}>
                    Send
                </button>
            </div>
            <span
                className={
                    chatMsg.length && chatMsg.length === 400
                        ? `${styles.messageCounter} ${styles.messageCounterError}`
                        : styles.messageCounter
                }>{`${chatMsg.length}/400`}</span>
        </div>
    );
};

WidgetChatMessageInput.propTypes = {
    chatMsg: string.isRequired,
    onMessageChange: func.isRequired,
    onMessageSend: func.isRequired,
};

/**
 *  Exports
 */
export default WidgetChatMessageInput;
