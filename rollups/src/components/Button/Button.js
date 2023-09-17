import 'Button.less';
import React from "react";


export default function Button({
    text,
    onClick,
}) {
    return (
        <button onClick={onClick} className='Button'>
            {text}
        </button>
    );
}

Button.defaultProps = {
    text: '',
    onClick: () => undefined,
}
