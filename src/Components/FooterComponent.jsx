import * as React from 'react';
import {Footer} from "./Footer.styled";

const FooterComponent = () => {
  return(
      <Footer>©
          {
              (new Date).getFullYear()
          }
      </Footer>

  )
};

export default FooterComponent;