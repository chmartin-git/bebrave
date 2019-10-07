import React from 'react'

const Logo = ({alt, src, className}) => (
        <div className={className}>
            <img src={src} alt={alt}/>
        </div>
);

export default Logo

