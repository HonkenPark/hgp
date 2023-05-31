import styled from 'styled-components';
import Header from 'components/Header';
import { textLabel } from 'common/textLabel';

const Introduce = styled.div`
  width: 100%;
  height: 39px;

  margin-top: 10vw;
  text-align: center;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  /* identical to box height */

  color: #FF6347;

  @media screen and (max-width: 640px) {
    width: 500px;
    margin-top: 12vw;
    margin-left: 2%;
  }

  @media screen and (max-width: 480px) {
    width: 300px;
    margin-top: 15vw;
    margin-left: 10%;
  }


  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`

const DetailIntroduce = styled.div`
  width: 900px;
  height: 240px;

  margin-top: 2vw;
  margin-left: 25%;
  text-align: center;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  /* or 120% */

  text-align: center;

  color: #FFFFFF;

  @media screen and (max-width: 640px) {
    width: 500px;
    margin-top: 12vw;
    margin-left: 2%;
  }

  @media screen and (max-width: 480px) {
    width: 300px;
    margin-top: 15vw;
    margin-left: 10%;
  }


  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
`

const AboutPage = () => {
  document.body.style.backgroundColor = textLabel.PrimaryPurple;
  return (
    <>
      <Header cur = {'about'} />
      {'lang' !== 'ko-KR' ?
      <>
        <Introduce>{textLabel.About.introduce[0]}</Introduce>
        <DetailIntroduce>{textLabel.About.detail_introduce[0]}</DetailIntroduce>
      </>
      :
      <>
        <Introduce>{textLabel.About.introduce[1]}</Introduce>
        <DetailIntroduce>{textLabel.About.detail_introduce[1]}</DetailIntroduce>
      </>
      }
    </>
  )
}

export default AboutPage;