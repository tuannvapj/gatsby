import React from 'react';
import favicon from './images/icon.png';
import PropTypes from 'prop-types';

export default class HTML extends React.Component {
    render() {
        return (
            <html lang="en" {...this.props.htmlAttributes}>
                <head>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
                    <title>TUANNVA Travel | Testing</title>
                    <link rel="icon" href={favicon} />
                    {this.props.headComponents}
                </head>
                <body {...this.props.bodyAttributes}>
                    {this.props.preBodyComponents}
                    <div id="___gatsby" dangerouslySetInnerHTML={{__html: this.props.body}} />
                    {this.props.postBodyComponents}
                </body>
            </html>
        )
    }
    
}

HTML.propTypes = {
    htmlAttributes: PropTypes.object,
    headComponents: PropTypes.array,
    bodyAttributes: PropTypes.object,
    preBodyComponents: PropTypes.array,
    body: PropTypes.string,
    postBodyComponents: PropTypes.array,
  }