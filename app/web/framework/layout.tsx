import React, { Component } from 'react';
export default class Layout extends Component<any> {
  componentDidMount() {
    console.log('888')
  }
  render() {
    return <html>
      <head>
        <title>{this.props.title}</title>
        <meta charSet="utf-8"></meta>
        <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui"></meta>
        <meta name="keywords" content={this.props.keywords}></meta>
        <meta name="description" content={this.props.description}></meta>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"></link>
        <script>
          var hm = document.createElement(`script`);
          hm.src = `https://hm.baidu.com/hm.js?9ede63df5a953e85f86b234dd06ce7e0`;
          var s = document.getElementsByTagName(`script`)[0]; 
          s.parentNode.insertBefore(hm, s);
        </script>
      </head>
      <body><div id="app">{this.props.children}</div></body>
    </html>;
  }
}