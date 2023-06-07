import styled from 'styled-components';
import main_square from 'assets/main_square.svg'
import { useState } from 'react';
import { textLabel } from 'common/textLabel';

import Header from 'components/Header';

const BodyContent = styled.div`
  display: block;
`

const SquareImg = styled.img`
  margin-top: 15%;
  margin-left: -50%;
`

const BriefContent = styled.div`
  margin-top: -15%;
  margin-left: 40%;
  text-align: left;

  @media screen and (max-width: 800px) {
    margin-top: 5%;
    margin-left: 10%;
  }

  @media screen and (max-width: 480px) {
    margin-top: 5%;
    margin-left: 10%;
  }
`

const BriefWhite = styled.h1`
  color: #F7F7F7;
`

const BriefOrange = styled.h1`
  color: #FF4500;
`

const MainPage = (props) => {
  document.body.style.backgroundColor = textLabel.PrimaryBlack;
  
  const [lang, setLang] = useState('ko-KR');

  return (
    <>
      <Header cur = {'home'} />
      <BodyContent>
        <SquareImg src={main_square} alt='Main Logo' />
        {lang === 'ko-KR' ?
        <BriefContent>
          <BriefWhite>{textLabel.Main.introduce_top[0]}</BriefWhite>
          <BriefWhite>{textLabel.Main.introduce_mid[0]}</BriefWhite>
          <BriefOrange>{textLabel.Main.introduce_bot[0]}</BriefOrange>
        </BriefContent>
        :
        <BriefContent>
          <BriefWhite>{textLabel.Main.introduce_top[1]}</BriefWhite>
          <BriefOrange>{textLabel.Main.introduce_mid[1]}</BriefOrange>
          <BriefWhite>{textLabel.Main.introduce_bot[1]}</BriefWhite>
        </BriefContent>
        }
      </BodyContent>
    </>
  )
}

export default MainPage;