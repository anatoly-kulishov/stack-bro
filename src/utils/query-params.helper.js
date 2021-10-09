/**
 * @function getRequestParams
 *
 * @param {object} paramsObject request params
 *
 * @return {string} Return string from request params
 */

export const getRequestParams = (paramsObject) => {
    const currentParams = Object.keys(paramsObject).reduce((acc, key) => {
        if (paramsObject[key]) {
            acc[key] = `${key}=${paramsObject[key]}`;
        }
        return acc;
    }, {});

    return window.encodeURI(Object.values(currentParams).join("&"));
};
