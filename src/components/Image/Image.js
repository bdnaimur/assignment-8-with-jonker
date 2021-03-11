import React from 'react';

const Image = (props) => {
    const{image} = props.image;
    console.log(props.image);
    return (
        <div>
            <img src={image} alt=""/>
        </div>
    );
};

export default Image;