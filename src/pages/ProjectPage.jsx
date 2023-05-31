import Header from 'components/Header';
import React from 'react';
import { textLabel } from 'common/textLabel';
import styled from 'styled-components';

const ProjectTitle = styled.div`
  width: 100%;
  height: 68px;

  margin-top: 8vw;
  text-align: center;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;

  color: #FF6347;


  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`

const ProjectContent = styled.div`
  position: absolute;
  width: 785px;
  height: 566px;
  left: calc(50% - 785px/2);
  top: calc(50% - 566px/2 + 65px);

  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
`

const ProjectContentText = styled.div`
  position: absolute;
  width: 655px;
  height: 500px;
  left: calc(50% - 655px/2 - 14px);
  top: calc(50% - 500px/2 + 80.5px);

  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 21px;
  line-height: 25px;

  color: #000000;
`

const ProjectPage = () => {
  document.body.style.backgroundColor = textLabel.PrimaryBlue;

  return (
    <>
      <Header cur='project' />
      {'lang' === 'ko-KR' ?(
      <>
        <ProjectTitle>{textLabel.Project.ProjectTitle[0]}</ProjectTitle>
        <ProjectContent>{textLabel.Project.ProjectContent[0].period}</ProjectContent>
        <ProjectContent>{textLabel.Project.ProjectContent[0].name}</ProjectContent>
      </>
      ) : (
      <>
        <ProjectTitle>{textLabel.Project.ProjectTitle[1]}</ProjectTitle>
        {textLabel.Project.ProjectContent.map((item, index) => (
          <>
          <React.Fragment key={index}>
            <br />
            <ProjectContent>
              <ProjectContentText>{item.period[1]}<br /><b>{item.name[1]}</b></ProjectContentText>
            </ProjectContent>
          </React.Fragment>
          </>
        ))}
      </>
      )}
    </>
  )
}

export default ProjectPage;