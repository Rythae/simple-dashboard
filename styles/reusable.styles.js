import styled from 'styled-components';
import { display, space, width } from "styled-system";

const DashboardContainer = styled.div`
     display: flex;
     width: 100%;
`;

const SideNavContainer = styled.div`
     ${width};
     flex: 0 0 16.3958%;
     max-height: 100%;
     height: 138.5rem;
     background-color: #3e46b6;
      @media (max-width: 48em) {
        display: none;
      }
`;

const DashNavContainer = styled.div`
     width: 100%;
     flex: 1;
     height: 3.3rem;
     background-color: #ffffff;
     border-bottom: solid 1px #E2E3DD;
     box-shadow: 0 10px 99px 0 rgba(62, 70, 182, 0.04);
     padding-left: 1.5rem;
     padding-right: 1.5rem;

     @media screen and (max-width: 48em){
        width: 69rem;
     }

`;

const DashNavContents = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const MainDashContents = styled.div`
    padding: 1.3rem 0;
`;

const DashNavTitle = styled.div``;

const RightSideNavItems = styled.span`
    display: flex;
    align-items: center;
`;

const UserInfoContainer = styled.span`
    margin-right: 1rem;
`;

const UserDetails = styled.p`
    font-size: 13px;
`;

const UserName = styled.p`
    margin-top: -0.9rem;
    font-size: 11px;
`;

const NotificationLogo = styled.img.attrs({
    src: "/assets/notification.png",
    alt: "Notification logo",
  })`
    height: 1.1rem;
    margin-right: 1rem;
  `;

  const UserLogo = styled.img.attrs({
    src: "/assets/man.png",
    alt: "User logo",
  })`
    height: 2rem;
    margin-right: 1rem;
  `;

  const WhiteLogo = styled.img.attrs({
    src: "/assets/white-logo.png",
    alt: "White logo",
  })`
    height: 1.1rem;
    padding: 2rem;
  `;

  const DropdownLogo = styled.img.attrs({
    src: "/assets/arrow-drop-down-line.png",
    alt: "Dropdown logo",
  })`
    height: 1.3rem;
  `;


export { 
    DashboardContainer,
    SideNavContainer,
    DashNavContainer,
    DashNavContents,
    MainDashContents,
    DashNavTitle,
    RightSideNavItems,
    UserInfoContainer,
    UserDetails,
    UserName,
    NotificationLogo,
    UserLogo,
    DropdownLogo,
    WhiteLogo
};