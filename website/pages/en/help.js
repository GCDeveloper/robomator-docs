/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

function Help(props) {
  const {config: siteConfig, language = ''} = props;
  const {baseUrl, docsUrl} = siteConfig;
  const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
  const langPart = `${language ? `${language}/` : ''}`;
  const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

  const supportLinks = [
    {
      content: `See the [overview](${docUrl(
        'overview.html',
      )})`,
      title: 'Browse Docs',
    },
    {
      content: 'Ask questions about the documentation and project in our [slack group](https://join.slack.com/t/fb-javascript/shared_invite/enQtODA5OTMyNTM0Mjc5LTkxY2M2YjE2ZDY4NzY3MGZiODQzZTQ3NmE4ODczZjZiZTFkZDMxYjk1OTk1YmZjNmFhMThmODhiNmMyODJiZTU?fbclid=IwAR24ZALeEiAH6OLBH5J4ABFfsRSar3TU4lbz8EMdkhtEc9NEHs3xebphJLI)',
      title: 'Join the community',
    },
  ];

  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer postContainer">
        <div className="post">
          <header className="postHeader">
            <h1>Need help?</h1>
          </header>
          <GridBlock contents={supportLinks} layout="threeColumn" />
        </div>
      </Container>
    </div>
  );
}

module.exports = Help;
