import React from 'react';
import favicon from './images/icon.png';

let inLinedStyles = "";
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === "production"){
    try {
        inLinedStyles = require('!raw-loader!../public/styles.css')
    }
    catch (e) {
        console.log(e)
    }
}

export default function HTML(props) {
    let css;
    if (process.env.NODE_ENV === "production"){
        css = (
            <style id="gatsby-inline-css">
                dangerouslySetInnerHTML={{ __html: inLinedStyles }}
            </style>
        )
    }
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
                {props.headComponents}
                <link rel="icon" href={favicon} />
                {css}
            </head>
            <body>
                <div id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }} />
                    {props.postBodyComponents}
            </body>
        </html>
    )
}
