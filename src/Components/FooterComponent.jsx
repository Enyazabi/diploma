import * as React from 'react';
import {Footer} from "./Footer.styled";

const FooterComponent = () => {
  return(
      <Footer>© &nbsp;
          {
              (new Date).getFullYear()
          }
      </Footer>

  )
};

export default FooterComponent;