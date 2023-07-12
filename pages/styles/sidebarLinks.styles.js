import styled from 'styled-components';
import { display, space, width } from "styled-system";


const SideNavLinkWrapper = styled.div`
`;

const SideLogoContainer = styled.div``;

const NavRowContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 1.5rem;
  cursor: pointer;
`;

const IconsContainer = styled.div``;

const IconsLabel = styled.p`
    color: #ffffff;
    padding-left: 0.9rem;
`;

const DashboardIcon = styled.img.attrs({
    src: "/assets/home-5-line.png",
    alt: "Dashboard logo",
  })`
    height: 1rem;
  `;

  const ProjectsIcon = styled.img.attrs({
    src: "/assets/folder-music-line.png",
    alt: "Project logo",
  })`
    height: 1rem;
  `;

  const MusicIcon = styled.img.attrs({
    src: "/assets/play-list-2-line.png",
    alt: "Music logo",
  })`
    height: 1rem;
  `;

  const RevenueIcon = styled.img.attrs({
    src: "/assets/line-chart-line.png",
    alt: "Revenue logo",
  })`
    height: 1rem;
  `;

  const ArtistIcon = styled.img.attrs({
    src: "/assets/user-artist.png",
    alt: "Artist logo",
  })`
    height: 1rem;
  `;

  const AdminIcon = styled.img.attrs({
    src: "/assets/user-2-line.png",
    alt: "Admin logo",
  })`
    height: 1rem;
  `;

  const RolesIcon = styled.img.attrs({
    src: "/assets/user-follow-line.png",
    alt: "Roles logo",
  })`
    height: 1rem;
  `;

  const MessagesIcon = styled.img.attrs({
    src: "/assets/message-2-line.png",
    alt: "Messages logo",
  })`
    height: 1rem;
  `;

  const SettingsIcon = styled.img.attrs({
    src: "/assets/settings-2-line.png",
    alt: "Settings logo",
  })`
    height: 1rem;
  `;

  const LogoutIcon = styled.img.attrs({
    src: "/assets/logout-box-line.png",
    alt: "Logout logo",
  })`
    height: 1rem;
  `;




export { 
    SideNavLinkWrapper,
    SideLogoContainer,
    NavRowContainer,
    IconsContainer,
    IconsLabel,
    DashboardIcon,
    ProjectsIcon,
    MusicIcon,
    ArtistIcon,
    RevenueIcon,
    AdminIcon,
    RolesIcon,
    MessagesIcon,
    SettingsIcon,
    LogoutIcon,
};