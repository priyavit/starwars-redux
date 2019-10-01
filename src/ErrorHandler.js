import React from 'react';

const ErrorHandler = (props) => {
    const {message, className} = props;
    return (
        <span className={className}>
            {message}
        </span>
    );
}

export default ErrorHandler;