import trim from 'lodash/trim'

export const trimStringToTenChar = (str) => {
    try {
        return trim(str).substr(0, 12) + '...';
    } catch (error) {
        console.log('error in trim');
    }
}

export const getFileType = (str) => {
    try {
        if (str) {
            const lastIndexOfDot = `${str}`.lastIndexOf('.');
            const fileTypeString = `${str}`.substr(lastIndexOfDot + 1, `${str}`.length);
            return fileTypeString;
        } else return ''

    } catch (error) {
        console.log('error in getting file str')
    }
}

export function getRealTextWidthPx(str, fontSettings = null) {
    // Checking an input data
    if (typeof str !== "string" || typeof fontSettings !== "string") {
        return 0;
    }

    // Variables
    const canvasCtx = document.createElement("canvas").getContext("2d");

    let textMetrics;

    // Checking an exception
    if (canvasCtx === null) {
        return 0;
    }

    // Set a new font settings
    canvasCtx.font = fontSettings;

    // Getting a text metrics
    textMetrics = canvasCtx.measureText(str);

    // Return a result
    return textMetrics.width;
}

export function getTruncTextByMaxLen(str, maxLen = 0) {
    if (typeof str !== "string" || typeof maxLen !== "number") {
        return "";
    }

    return str.length > maxLen ? `${str.substring(0, maxLen)}...` : str;
}
