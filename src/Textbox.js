import React from 'react';
import PropTypes from 'prop-types';

const Textbox = (props) => {
    const {placeholder, type, changeHandler, className} = props;
    return (
        <input type={type} onChange={changeHandler}
                placeholder={placeholder} className={className}
        />
    );
}

 
Textbox.propTypes = {
    placeholder: PropTypes.string.isRequired,
    changeHandler: PropTypes.func,
    className: PropTypes.string,
    type: PropTypes.string.isRequired
}

Textbox.defaultProps = {
    placeholder: '',
    changeHandler: '',
    className: '',
    type: ''
  };
export default Textbox;