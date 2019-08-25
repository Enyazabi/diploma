import * as React from 'react';
import { HomeTextTitle, HomeWrapper} from "./HomePage.styled";
import { HomeText } from "./HomePage.styled";
import {ButtonStart} from "../UI/Controls/Buttons.styled";
import {HomeContent} from '../Content/HomeContent';

const HomePageComponent = () => {

    return(
        <HomeWrapper>
            <HomeTextTitle> {HomeContent.title} </HomeTextTitle>
            <HomeText> {HomeContent.text} </HomeText>
            <ButtonStart> {HomeContent.button} </ButtonStart>
        </HomeWrapper>
    )
};

export default HomePageComponent;