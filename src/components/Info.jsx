import React from 'react';

function Info({classNameDiv, classNameTitle, classNamePar,titleText, subTextOne, subTextTwo}) {
    return (
        <div className={classNameDiv}>
            <h3 className={classNameTitle}>{titleText}</h3>
            <p className={classNamePar}>{subTextOne}</p>
            <p className={classNamePar}>{subTextTwo}</p>

        </div>
    );
}

export default Info;