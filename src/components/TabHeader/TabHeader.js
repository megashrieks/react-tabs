import React from 'react';
import './TabHeader.css';
export default (props) => {
    return (
        <div
            className={"tab-header"+(props.active === props.id ? " active":"")}
            onClick={() => props.select(props.id)}>
            {props.title}
        </div>
    );
}