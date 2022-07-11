// main landing screen
import { useState } from "react";
import { useHistory } from "react-router-dom";

import ContentFormatXZ from "../content/webz/content-format-xz";

import WebbDividerMedium from "../content/webx/webb-divider-md";
import WebbDividerSmall from "../content/webx/webb-divider-sm";


export default function Videos () {
  
  const history = useHistory();

  return(
    <ContentFormatXZ 
    head = 'Videos'
    home = {`/`}
    link = {`/`}
    form = 'medium'
    data = {
      <>
        <WebbDividerMedium />
        

      </>
      } 
    />
  )
}