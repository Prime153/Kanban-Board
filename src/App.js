import React from 'react';
import MainTemplate from './Templates/MainTemplate';
import HomeTemplate from './Templates/HomeTemplate/HomeTemplate';
import { RecoilRoot } from 'recoil';

const App = () => (
  <RecoilRoot>
    <MainTemplate>
      <HomeTemplate />
    </MainTemplate>
  </RecoilRoot>
);

export default App;
