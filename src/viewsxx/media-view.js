// main landing screen
import { useState } from "react";
import { useHistory } from "react-router-dom";

import ContentFormatXZ from "../content/webz/content-format-xz";

import WebbDividerMedium from "../content/webx/webb-divider-md";
import WebbDividerSmall from "../content/webx/webb-divider-sm";

import MainViewMediaModule from "../content/main/main-view-media";

export default function MediaView () {
  
  const history = useHistory();

  return(
    <ContentFormatXZ 
      head = 'Posts'
      home = {`/`}
      link = {`/`}
      form = 'small'
      avtr = { <></>}
      data = {
        <>
          <MainViewMediaModule/>

        </>
      } 
    />
  )
}