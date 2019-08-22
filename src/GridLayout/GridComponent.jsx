import * as React from 'react';
import {GridWrapper} from "./GridWrapper.styled";
import {HeaderGrid} from "./HeaderGrid.styled";
import {ContentGrid} from "./ContentGrid.styled";
import {FooterGrid} from "./FooterGrid.styled";
import HeaderComponent from "../Components/HeaderComponent";

const GridComponent = () => {
    return(
        <GridWrapper>
            <HeaderGrid>
                <HeaderComponent/>
            </HeaderGrid>
            <ContentGrid></ContentGrid>
            <FooterGrid></FooterGrid>

        </GridWrapper>
    )
};

export default GridComponent;