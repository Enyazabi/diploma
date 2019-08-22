import * as React from 'react';
import {GridWrapper} from "./GridWrapper.styled";
import {HeaderGrid} from "./HeaderGrid.styled";
import {ContentGrid} from "./ContentGrid.styled";
import {FooterGrid} from "./FooterGrid.styled";

const GridComponent = () => {
    return(
        <GridWrapper>

            <HeaderGrid>header</HeaderGrid>
            <ContentGrid>content</ContentGrid>
            <FooterGrid>footer</FooterGrid>

        </GridWrapper>
    )
};

export default GridComponent;