import React from "react";
import styled from "styled-components";

import thumb_after from "../shared/thumb_after.png";
import thumb_before from "../shared/thumb_before.png";

const ThumbsUp = (props) => {

    const icon_url = props.is_like? thumb_after : thumb_before;

    return (
        <React.Fragment>
            <Thumb onClick = {props._onClick} icon_url={icon_url}></Thumb>
        </React.Fragment>
    );
};

const Thumb = styled.div`
    width: 40px;
    height: 40px;
    background: url(${(props) => props.icon_url});
    margin: 10px auto;
`;

export default ThumbsUp;