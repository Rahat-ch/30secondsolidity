import React from 'react';

import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const About = () => (
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    <Content>
      <p>
        Bite size chunks of Solidity to get you used to the language and ready to build your own
        smart contracts. The best way to learn something is to teach it. This is the approach I took
        with creating this online video course.
      </p>
      <p>
        My name is Rahat. I am a Full Stack Blockchain Engineer interested in the future of Web3. I
        hope to help others learn in this journey and create additional resources to help get folks
        jumpstarted in there web3 careers.
      </p>
      <p>Want to be a guest instructor on a lesson? Send me a message on Twitter @rahatcodes!</p>
    </Content>
  </Main>
);

export default About;
