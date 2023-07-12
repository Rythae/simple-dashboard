import React from "react";

import {
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
    WhiteLogo,
} from "../pages/styles/reusable.styles";

import SideBarLinks from "./sidebarLinks";

export default function ReusableComponent({ children }) {

  return (
   <DashboardContainer  display={["block", "block", "flex", "flex"]}>
    <SideNavContainer width={[1, 1, "16.3958%"]}>
        <SideBarLinks />
    </SideNavContainer>
     <DashNavContainer>
        <DashNavContents>
            <DashNavTitle>Dashboard</DashNavTitle>
            <RightSideNavItems>
                <NotificationLogo />
                <UserLogo />
                <UserInfoContainer>
                    <UserDetails>James Arthur</UserDetails>
                    <UserName>james@razu.io</UserName>
                </UserInfoContainer>
                <DropdownLogo />
            </RightSideNavItems>
        </DashNavContents>
        <MainDashContents>
            {children}
        </MainDashContents>
    </DashNavContainer>
   </DashboardContainer>
  )
}
