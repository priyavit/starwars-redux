import React from 'react';

const Textbox = (props) => {
    const {placeholder, type, changeHandler, className} = props;
    return (
        <input type={type} onChange={changeHandler}
                placeholder={placeholder} className={className}
        />
    );
}

export default Textbox;