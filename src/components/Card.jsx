import React from 'react';

function Card({ classNameDiv , classNameTitle,titleText, subText}) {
    return (
        <div
            className={classNameDiv}
        >
            <h3
                className={classNameTitle}>
                {titleText}
            </h3>
            <p
                className="text-gray-400 py-3 ">
                {subText}
            </p>
        </div>
    );
}

export default Card;