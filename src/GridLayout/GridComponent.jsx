import * as React from 'react';
import {GridWrapper} from "./GridWrapper.styled";
import {HeaderGrid} from "./HeaderGrid.styled";
import {ContentGrid} from "./ContentGrid.styled";
import {FooterGrid} from "./FooterGrid.styled";
import HeaderComponent from "../Components/HeaderComponent";
import FooterComponent from "../Components/FooterComponent";
import HomePageComponent from "../Components/HomePageComponent";
import { BrowserRouter, Route } from "react-router-dom";

const GridComponent = () => {
    return(
        <BrowserRouter>
            <GridWrapper>
                <HeaderGrid>
                    <HeaderComponent/>
                </HeaderGrid>
                <ContentGrid>
                    <Route exact path ="/" component = {HomePageComponent}/>
                </ContentGrid>
                <FooterGrid>
                    <FooterComponent/>
                </FooterGrid>
            </GridWrapper>
        </BrowserRouter>
    )
};

export default GridComponent;