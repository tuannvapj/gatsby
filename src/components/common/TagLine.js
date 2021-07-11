import * as React from "react";
import styled from "styled-components";

const TaglineWarraper = styled.h3`
    margin: 66px 0 22px 0;
    text-align: right;
`

const Tagline = () => {
    return (
        <TaglineWarraper>
            August 24–26th — Chicago, IL
        </TaglineWarraper>
    )
}

export default Tagline;