import * as React from 'react';
import { Button } from "../UI/Controls/Buttons.styled";
import {UserIcon} from "../UI/Icon.styled";
import { AdminIcon } from "../UI/Icon.styled";
import {Header} from "./Header.styled";
import {NavWrapper} from "./NavWrapper.styled";
import {Label} from "../UI/Label.styled";

const HeaderComponent = (option) => {
    return(
        <Header>
            <Label> Some label </Label>
            <NavWrapper>
                <Button> Home </Button>
                <Button> Tests </Button>
                <Button> Users </Button>
                {
                    option.isAdmin?
                        <AdminIcon/>
                        :
                        <UserIcon/>
                }
            </NavWrapper>
        </Header>

    )
};

export default HeaderComponent;