import React, {useState} from 'react';
import './ErrorButton.module.scss';

const ErrorButton = () => {
    const [renderError, setRenderError] = useState(false)

    if (renderError) {
        // @ts-ignore
        this.foo.bar = 0;
    }

    return (
        <button
            className="error-button btn btn-danger btn-lg" onClick={() => setRenderError(true)}>
            Throw Error
        </button>
    );
}

export default ErrorButton;
