import styled from 'styled-components';
import { display, space, width } from "styled-system";

const DashboardWrapper = styled.div``;

const TopContainer = styled.div``;

const MetricsWrapper = styled.div`
    display: flex;;
    justify-content: center;
`;

const MetricsDetailsBlue = styled.div`
    width: 330px;
    height: 15vh;
    background-color: #CBEEFD;
    margin-right: 1rem;
    padding: 0.9rem;
    border-radius: 10px;

`;

const MetricsDetailsPurple = styled.div`
    width: 330px;
    height: 15vh;
    background-color: #DADDFB;
    margin-right: 1rem;
    padding: 0.9rem;
    border-radius: 10px;
`;

const MetricsDetailsGreen = styled.div`
    width: 330px;
    height: 15vh;
    background-color: #DFFAD5;
    margin-right: 1rem;
    padding: 0.9rem;
    border-radius: 10px;

    
`;

const TopItems = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const BottomItems = styled.div`
     display: flex;
   
`;

const TopText = styled.p`
font-size: 15px;
font-family: Poppins;
font-style: normal;
font-weight: 500;
line-height: 24.27px;
letter-spacing: 0.3px;
`;

const BottomText = styled.p`
font-size: 23px;
font-family: Poppins;
font-style: normal;
font-weight: 700;
letter-spacing: 0.6px;
`;

const DateContainer = styled.div`
width: 8.625rem;
height: 2.5rem;
margin: 0 0 0 61.2rem;
display: flex;
justify-content: center;
align-items: center;
border-radius: 100px;
border: 1px solid #D8D8D8;
margin-bottom: 1.5em;
@media (max-width: 64em) {
    margin: -0.1rem 4rem 0 53.2rem;
    margin-bottom: 1rem;
  }
@media (max-width: 48em) {
    margin: -0.1rem 4rem 0 59.2rem;
    margin-bottom: 1rem;
  }
`;

const DateText = styled.p`
    margin-left: 0.5rem;
    font-size: 13px;
    color: #3E46B6;
`;

const CalendarIcon = styled.img.attrs({
    src: "/assets/calendar-line.png",
    alt: "Calendar logo",
  })`
    height: 1rem;
  `;
const BlueIcon = styled.img.attrs({
src: "/assets/group-line.png",
alt: "User1 logo",
})`
height: 1rem;
`;
const PurpleIcon = styled.img.attrs({
src: "/assets/money-dollar-circle-line.png",
alt: "User2 logo",
})`
height: 1rem;
`;
const GreenIcon = styled.img.attrs({
src: "/assets/team-line.png",
alt: "User3 logo",
})`
height: 1rem;
`;
const InfoIcon = styled.img.attrs({
src: "/assets/information-line.png",
alt: "User4 logo",
})`
height: 1rem;
margin-top: 1rem;
margin-left: 0.5rem;
`;

const TransactionsWrapper = styled.div`
    ${display};
    flex-direction: column;
    width: 90.8%;
    max-height: 100vh;
    border-radius: 10px;
    border: 1px solid #E2E3DD;
    background-color: #ffffff;
    padding: 1rem 2rem;
    margin: 3rem 0.8rem;
`;

const TransactionsTitle = styled.h3`
    font-size: 16px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    line-height: 32.36px;
    letter-spacing: 0.4px;
    color: #3E46B6;
`;

const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 0.5rem;
`;

const TransactionsButtons = styled.div`
    display: flex; 
    align-items: center; 
`;
const ButtonWrapper = styled.div`
   
`;
const ReceivedButton = styled.p`
    margin-right: 1rem;
    font-size: 14px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 400;
    line-height: 24.27px;
    letter-spacing: 0.3px;
    border-radius: 10000px;
    border: 1px solid #3E46B6; 
    background-color: #ffffff;
    color: #3E46B6;
    padding: 0.2rem 0.9rem;
    cursor: pointer;
`;

const PaymentButton = styled.button`
    margin-right: 1rem;
    font-size: 14px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 400;
    line-height: 24.27px;
    letter-spacing: 0.3px;
    border-radius: 10000px;
    border: 1px solid #767873; 
    background-color: #ffffff;
    color: #767873;
    padding: 0.2rem 0.9rem;
    cursor: pointer;
`;

const WithdrawalButton = styled.button`
    font-size: 14px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 400;
    line-height: 24.27px;
    letter-spacing: 0.3px;
    border-radius: 10000px;
    border: 1px solid #767873; 
    background-color: #ffffff;
    color: #767873;
    padding: 0.2rem 0.9rem;
    cursor: pointer;
`;
const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    width: 300px;
    height: 50px;
    border: 1px solid #D8D8D8;
    background-color: #FFF;
    border-radius: 1000px;
`;
const SearchInput = styled.input`
    flex: 1;
    border: none;
    outline: none;
    color: #AAACA6;
    font-size: 14px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 400;
    line-height: 24.27px;
    letter-spacing: 0.3px;
`;

const SearchIconWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-right: 4px;
    padding-left: 1rem;
`;

const SearchIcon = styled.img.attrs({
    src: "/assets/search-2-line.png",
    alt: "Search icon",
    })`
    height: 1rem;
    `;
const FileIcon = styled.img.attrs({
    src: "/assets/file-list-2-line.png",
    alt: "File icon",
    })`
    height: 1rem;
    margin-left: -1rem;
    `;
const DeleteIcon = styled.img.attrs({
    src: "/assets/delete-bin-line.png",
    alt: "Delete icon",
    })`
    height: 1rem;
    margin-left: 1rem;
    `;

const TransactionsTableHeader = styled.div`
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #E2E3DD;
    border-bottom: 1px solid #E2E3DD;
`;

const FisrtRowTableWrapper = styled.span`
    display: flex;
`;

const SerialNumText = styled.p`
    font-size: 12px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 400;
    line-height: 19.416px;
    letter-spacing: 0.24px;
`;

const ProjectName = styled.p`
    margin-left: 2rem;
    font-size: 12px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 400;
    line-height: 19.416px;
    letter-spacing: 0.24px;
`;

const SecondRowWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 48%;
    @media (max-width: 64em) {
        margin-right: 6rem; 
      }
    @media (max-width: 48em) {
        margin-right: 6rem; 
      }
`;

const ProjectOwner = styled.p`
    font-size: 12px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 400;
    line-height: 19.416px;
    letter-spacing: 0.24px;
`;

const ServiceHire = styled.p`
    font-size: 12px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 400;
    line-height: 19.416px;
    letter-spacing: 0.24px;
`;

const TransactionDate = styled.p`
    font-size: 12px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 400;
    line-height: 19.416px;
    letter-spacing: 0.24px;
`;

const ThirdRowWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 24%;
`;

const ThirdItemsContainer = styled.span`
      display: flex;
`;

const TransactionAmount = styled.p`
    font-size: 12px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 400;
    line-height: 19.416px;
    letter-spacing: 0.24px;
`;

const TransactionStatus = styled.p`
    font-size: 12px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 400;
    line-height: 19.416px;
    letter-spacing: 0.24px;
`;

const TransactionAction = styled.p`
    margin-left: 1.4rem;
    font-size: 12px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 400;
    line-height: 19.416px;
    letter-spacing: 0.24px;
`;

const TransactionsTableDetails = styled.div`
    display: flex;
    justify-content: flex-start;
    border-bottom: 1px solid #E2E3DD;
`;

const FisrtRowTableDetails = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SerialNum = styled.p`
    font-size: 13px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 400;
    line-height: 19.416px;
    letter-spacing: 0.24px;
`;

const ProjectNameDetails = styled.p`
    margin-left: 2.8rem;
    font-size: 13px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 400;
    line-height: 19.416px;
    letter-spacing: 0.24px;
`;

const SecondRowDetails = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ProjectOwnerDetails = styled.p`
    margin-left: 10.8rem;
    font-size: 13px;
    font-family: Popins;
    font-style: normal;
    font-weight: 400;
    line-height: 19.416px;
    letter-spacing: 0.24px;
    @media (max-width: 64em) {
        margin-left: 5.9rem;
      }
     @media (max-width: 48em) {
        margin-left: 7.3rem;
      }
`;

const ServiceHireText = styled.p`
    margin-left: 6.2rem; 
    font-size: 13px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 400;
    line-height: 19.416px;
    letter-spacing: 0.24px;
    @media (max-width: 64em) {
        margin-left: 5.3rem;
      }
     @media (max-width: 48em) {
        margin-left: 5.9rem;
      }
`;

const TransactionDateInfo = styled.p`
    margin-left: 5.2rem;
    font-size: 13px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 400;
    line-height: 19.416px;
    letter-spacing: 0.24px;
    @media (max-width: 64em) {
        margin-left: 4.3rem;
      }
     @media (max-width: 48em) {
        margin-left: 5rem;
      }
`;

const ThirdRowDetails = styled.span`
    display: flex;
    justify-content: space-between;
    width: 23%;
    @media (max-width: 64em) {
        margin-left: 4.3rem;
      }
      @media (max-width: 48em) {
        margin-right: 2rem;
      }
`;

const ThirdItemsDetails= styled.span`
    display: flex;
`;

const TransactionAmountDetails = styled.p`
    margin-left: 7.8rem;
    font-size: 13px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 400;
    line-height: 19.416px;
    letter-spacing: 0.24px;
    @media (max-width: 64em) {
        margin-left: 4.5rem;
      }
    @media (max-width: 48em) {
        margin-left: 6rem;
      }
`;

const TransactionStatusDetails = styled.p`
    height: 1.1rem;
    margin-left: 5rem;
    border-radius: 10000px;
    background-color: #DFFAD5;
    font-size: 10px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 400;
    line-height: 19.416px;
    letter-spacing: 0.24px;
    padding: 0.2rem 0.5rem;
    @media (max-width: 64em) {
        margin-left: 3rem;
      }
    @media (max-width: 48em) {
         margin-left: 4.3rem;
      }
`;

const TransactionActionIcons = styled.span`
    display: flex;
    align-items: center;
    margin-left: 2.5rem;
    font-size: 13px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 400;
    line-height: 19.416px;
    letter-spacing: 0.24px;
`;

const PaginationContainer = styled.div`
     display: flex;
     justify-content: center;
     align-items: center;
     padding: 0.9rem;
`;

const LeftArrowIconContainer = styled.span`
    margin-right: 1rem;
`;

const RightArrowIconContainer = styled.span`
`;

const PageNumbersContainer = styled.span`
      display: flex;
      align-items: center;
`;

const PageNumber = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border-radius: 10px;
    background-color:  ${(props) => (props.PageNumberBg ? "#36D7FF" : "#F2F2F2")};
    margin-right: 1rem;
`;

const PageNumberText = styled.p`
    font-size: 13px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 400;
    line-height: 24.27px;
    letter-spacing: 0.3px;
    text-align: center;
    color: ${(props) => (props.PageNumberColor ? "#ffffff" : "#767873")};
`;

const LeftArrowIcon = styled.img.attrs({
    src: "/assets/arrow-left-s-line.png",
    alt: "Left Arrow icon",
    })`
    height: 1rem;
    `;

const RightArrowIcon = styled.img.attrs({
    src: "/assets/arrow-right-s-line.png",
    alt: "Right Arrow icon",
    })`
    height: 1rem;
    `;
const BarChartContainer = styled.div`
    ${display};
    flex-direction: column;
    width: 90.8%;
    max-height: 100vh;
    border-radius: 10px;
    border: 1px solid #E2E3DD;
    background-color: #ffffff;
    padding: 1rem 2rem;
    margin: 3rem 0.8rem;
`;

const LineChartContainer = styled.div`
    ${display};
    flex-direction: column;
    width: 90.8%;
    max-height: 100vh;
    border-radius: 10px;
    border: 1px solid #E2E3DD;
    background-color: #ffffff;
    padding: 1rem 2rem;
    margin: 3rem 0.8rem;
`;

export {
    DashboardWrapper,
    TopContainer,
    MetricsWrapper,
    MetricsDetailsBlue,
    MetricsDetailsPurple,
    MetricsDetailsGreen,
    TopItems,
    BottomItems,
    TopText,
    BottomText,
    DateContainer,
    DateText,
    CalendarIcon,
    BlueIcon,
    PurpleIcon,
    GreenIcon,
    InfoIcon,
    TransactionsWrapper,
    TransactionsTitle,
    ButtonsContainer,
    TransactionsButtons,
    ReceivedButton,
    PaymentButton,
    WithdrawalButton,
    SearchInput,
    ButtonWrapper,
    SearchContainer,
    SearchIconWrapper,
    SearchIcon,
    FileIcon,
    DeleteIcon,
    TransactionsTableHeader,
    FisrtRowTableWrapper,
    SerialNumText,
    ProjectName,
    SecondRowWrapper,
    ProjectOwner,
    ServiceHire,
    TransactionDate,
    ThirdRowWrapper,
    ThirdItemsContainer,
    TransactionAmount,
    TransactionStatus,
    TransactionAction,
    TransactionsTableDetails,
    FisrtRowTableDetails,
    SerialNum,
    ProjectNameDetails,
    SecondRowDetails,
    ProjectOwnerDetails,
    ServiceHireText,
    TransactionDateInfo,
    ThirdRowDetails,
    ThirdItemsDetails,
    TransactionAmountDetails,
    TransactionStatusDetails,
    TransactionActionIcons,
    PaginationContainer,
    LeftArrowIconContainer,
    RightArrowIconContainer,
    PageNumbersContainer,
    PageNumber,
    PageNumberText,
    LeftArrowIcon,
    RightArrowIcon,
    BarChartContainer,
    LineChartContainer,
}