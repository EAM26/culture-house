import React from 'react';

function Info({classNameDiv, classNameTitle,titleText, subTextOne, subTextTwo}) {
    return (
        <div className={classNameDiv}>
            <h3 className={classNameTitle}>{titleText}</h3>
            <p>{subTextOne}</p>
            <p>{subTextTwo}</p>

        </div>
    );
}

export default Info;