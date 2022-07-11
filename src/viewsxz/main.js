// main landing screen
import { useState } from "react";
import { useHistory } from "react-router-dom";

import ContentFormatXZ from "../content/webz/content-format-xz";

import WebbDividerMedium from "../content/webx/webb-divider-md";
import WebbDividerSmall from "../content/webx/webb-divider-sm";

import MainViewHeadModule from "../content/main/main-view-head";
import MainViewIntroModule from "../content/main/main-view-intro";
import MainViewSocialModule from "../content/main/main-view-social";

import MainViewTokensModule from "../content/main/main-view-tokens";


export default function Main () {
  
  const history = useHistory();

  return(
    <ContentFormatXZ 
      head = 'Posts'
      home = {`/`}
      link = {`/`}
      form = 'medium'
      avtr = {
        <>
          <MainViewHeadModule />
          <MainViewIntroModule />
          <MainViewSocialModule />
        </>

      }
      data = {
        <>
          
          <WebbDividerMedium />
          <MainViewTokensModule/>

        </>
      } 
    />
  )
}