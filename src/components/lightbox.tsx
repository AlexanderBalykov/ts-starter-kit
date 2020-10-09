import React, { useState } from 'react';
import classNames from 'classnames/bind';
import style from  './style.scss';

const cn = classNames.bind(style);


export const Lightbox:React.FC = () => {
    const [light, setLight] = useState<boolean>(false);

    const handleClick = (e: React.MouseEvent) => {
        setLight(!light);
    };

    const classes = cn({
        lightbox: true,
        light: light
    })

    return (
        <div className={classes}>
            <button onClick={handleClick}>Turn the light!</button>
        </div>
    );

}