import * as React from 'react';
import { StaticImage } from "gatsby-plugin-image"

import Head from '../head';

import '../styles/index.scss';

export default function Home() {
  return (
    <>
      <div onLoad={setTimeout(function(){window.scrollTo(0,0)}, 200)} className="u-bg--primary colors-2">
      <div className="logo u-fadein u-delay-4">
      <a href="/" className="logo-type"><span className="logo-color-span">AF</span></a>
    </div>
    <div className="u-overlay u-flex">
          <div className="u-posRelative">
        <StaticImage id="image" className="bg-image u-bg-color--primary" src='../static/smokestack.png' alt="extremely small file-size picture of an offshore windmall farm" />
        <div className="u-overlay img-overlay"></div>
      </div>
    </div>
      </div>
    </>
  );
}
