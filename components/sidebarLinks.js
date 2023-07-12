import React from "react";
import {
    SideNavLinkWrapper,
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
} from "../pages/styles/sidebarLinks.styles";

export default function SideBarLinks() {

const sideNavLinks = [
    {
     link: "/dashboard",
     label: "Dashboard",
     icon:  <DashboardIcon />
    },
    {
    link: "/projects",
    label: "Projects",
    icon:  <ProjectsIcon />
    },
     {
    link: "/music",
    label: "Music Sync",
    icon:  <MusicIcon />
    },
     {
    link: "/artists",
    label: "Artists",
    icon:  <ArtistIcon />
    },
     {
    link: "/revenue",
    label: "Sales and Revenue",
    icon:  <RevenueIcon />
    },
     {
    link: "/admin",
    label: "Admin Management",
    icon:  <AdminIcon />
    },
     {
    link: "/roles",
    label: "Roles and Permissions",
    icon:  <RolesIcon />
    },
     {
    link: "/messsages",
    label: "Messages",
    icon:  <MessagesIcon />
    },
     {
    link: "/settings",
    label: "Settings",
    icon:  <SettingsIcon />
    },
     {
    link: "/logout",
    label: "Log Out",
    icon:  <LogoutIcon />
    }
]
    return (
        <SideNavLinkWrapper>
            {sideNavLinks.map((url, index) => (
                <NavRowContainer>
                    <IconsContainer>{url.icon}</IconsContainer>
                    <IconsLabel>{url.label}</IconsLabel>
                </NavRowContainer>
            ))}
        </SideNavLinkWrapper>
    )
}
