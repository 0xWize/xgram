// auth
import { useState } from "react";
import { useHistory } from "react-router-dom";

import ContentFormatXZ from "../content/webz/content-format-xz";

import WebbDividerMedium from "../content/webx/webb-divider-md";
import WebbDividerSmall from "../content/webx/webb-divider-sm";

import AuthWalletModule from "../content/auth/auth-wallet";


export default function Auth () {
  
  const history = useHistory();

  return(
    <ContentFormatXZ 
      head = 'Posts'
      home = {`/`}
      link = {`/`}
      form = 'medium'
      avtr = {
        <>

        </>

      }
      data = {
        <>
          
          <WebbDividerMedium />
          <AuthWalletModule/>

        </>
      } 
    />
  )
}