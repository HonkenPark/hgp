import styled from 'styled-components';
import { HomeOutlined, UserOutlined, ProfileOutlined, MailOutlined, GlobalOutlined } from '@ant-design/icons';
import { Breadcrumb, ConfigProvider } from 'antd';
import DropdownLanguage from './DropdownLanguage';

const HeaderDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* padding: 40px 270px; */
  gap: 10px;

  position: absolute;
  width: 100%;
  left: 0px;
  top: 0px;
  height: 4vw;

  @media screen and (max-width: 640px) {
    height: 8vw;
  }

  @media screen and (max-width: 480px) {
    height: 12vw;
  }

  background: #F7F7F7;
`

const Header = (props) => {

  return (
    <HeaderDiv>
      <ConfigProvider
        theme={{
          token: {
            fontSize: 15,
            colorTextDescription: '#000000',
          }
        }}>
        <Breadcrumb
          items={[
          {
            href: '/',
            title: (
              <>
                <HomeOutlined />
                {props.cur === 'home' ? <span><b><u>Home</u></b></span> : <span>Home</span> }
              </>
            )
          },
          {
            href: '/about',
            title: (
              <>
                <UserOutlined />
                {props.cur === 'about' ? <span><b><u>About</u></b></span> : <span>About</span> }
              </>
            ),
          },
          {
            href: '/project',
            title: (
              <>
                <ProfileOutlined />
                {props.cur === 'project' ? <span><b><u>Project</u></b></span> : <span>Project</span> }
              </>
            )
          },
          {
            href: '/contact',
            title: (
              <>
                <MailOutlined />
                {props.cur === 'contact' ? <span><b><u>Contact</u></b></span> : <span>Contact</span> }
              </>
            )
          },
          {
            href: '',
            title: (
              <>
                <GlobalOutlined />
                <span>Language</span>
              </>
            )
          },
          ]}
        />
        {/* <DropdownLanguage /> */}
      </ConfigProvider>
    </HeaderDiv>
  )
}

export default Header;