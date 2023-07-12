import React, { useState } from "react";

import {
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
} from "./styles/dashboard.styles";

import ReusableComponent from "@/components/reusable";
import BarChart from '@/components/barChart';
import LineChart from '@/components/lineChart';
import { Chart, CategoryScale, LinearScale, BarElement, PointElement, LineElement } from 'chart.js'
import { Data } from "../utils/Data";

Chart.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement)


export default function Dashboard() {
 const [chartData, setChartData] = useState({
        labels: Data.map((data) => data.month), 
        datasets: [
          {
            label: 'Transaction Revenue',
            data: Data.map((data) => data.percentage),
            backgroundColor: [
                "rgba(75,192,192,1)",
                "&quot;#ecf0f1",
                "#50AF95",
                "#f3ba2f",
                "#2a71d0"
              ],
              borderColor: "black",
              borderWidth: 2
            }
        ]
      });

  return (
       <ReusableComponent>
         <DashboardWrapper>
            <TopContainer>
                <DateContainer>
                    <CalendarIcon />
                    <DateText>Select Date</DateText>
                </DateContainer>
                <MetricsWrapper>
                    <MetricsDetailsBlue>
                        <TopItems>
                            <TopText>No. of Active Users</TopText>
                            <BlueIcon />
                        </TopItems>
                        <BottomItems>
                        <BottomText>3247</BottomText> 
                        <InfoIcon />
                        </BottomItems>
                    </MetricsDetailsBlue>
                    <MetricsDetailsPurple>
                        <TopItems>
                            <TopText>Total No of Revenue Generated</TopText>
                            <PurpleIcon />
                        </TopItems>
                        <BottomItems>
                        <BottomText>$305,298.00</BottomText> 
                        <InfoIcon />
                        </BottomItems>
                    </MetricsDetailsPurple>
                    <MetricsDetailsGreen>
                        <TopItems>
                            <TopText>No. of Collaborations Created</TopText>
                            <GreenIcon />
                        </TopItems>
                        <BottomItems>
                        <BottomText>241</BottomText> 
                        <InfoIcon />
                        </BottomItems>
                    </MetricsDetailsGreen>
                </MetricsWrapper>
            </TopContainer>
            <TransactionsWrapper display={["block", "block", "flex", "flex"]}>
                <TransactionsTitle>Recent User Transactions</TransactionsTitle>
                <ButtonsContainer>
                    <TransactionsButtons>
                        <ButtonWrapper>
                            <ReceivedButton>Received</ReceivedButton>
                        </ButtonWrapper>
                        <ButtonWrapper>
                             <PaymentButton>Payment</PaymentButton>
                        </ButtonWrapper>
                        <ButtonWrapper>
                            <WithdrawalButton>Withdrawal</WithdrawalButton>
                        </ButtonWrapper>
                    </TransactionsButtons>
                    <SearchContainer>
                        <SearchIconWrapper>
                            <SearchIcon />  
                        </SearchIconWrapper>
                        <SearchInput  type="text" placeholder="Search" />
                    </SearchContainer>
                </ButtonsContainer>
                <TransactionsTableHeader>
                    <FisrtRowTableWrapper>
                        <SerialNumText>S/N</SerialNumText>
                        <ProjectName>PROJECT NAME</ProjectName>
                    </FisrtRowTableWrapper>
                    <SecondRowWrapper>
                        <ProjectOwner>PROJECT OWNER</ProjectOwner>
                        <ServiceHire>SERVICE HIRE</ServiceHire>
                        <TransactionDate>DATE</TransactionDate> 
                     </SecondRowWrapper>
                    <ThirdRowWrapper>
                        <TransactionAmount>AMOUNT</TransactionAmount>
                        <ThirdItemsContainer>
                            <TransactionStatus>STATUS</TransactionStatus>
                            <TransactionAction>ACTION</TransactionAction>
                        </ThirdItemsContainer>
                    </ThirdRowWrapper>
                </TransactionsTableHeader>

                <TransactionsTableDetails>
                    <FisrtRowTableDetails>
                        <SerialNum>1</SerialNum>
                        <ProjectNameDetails>White Sand</ProjectNameDetails>
                    </FisrtRowTableDetails>
                    <SecondRowDetails>
                        <ProjectOwnerDetails>James Arthur</ProjectOwnerDetails>
                        <ServiceHireText>Songwriting</ServiceHireText>
                        <TransactionDateInfo>20/2/2023</TransactionDateInfo>
                    </SecondRowDetails>
                    <ThirdRowDetails>
                        <TransactionAmountDetails>$1779.53</TransactionAmountDetails>
                        <ThirdItemsDetails>
                            <TransactionStatusDetails>Success</TransactionStatusDetails>
                            <TransactionActionIcons>
                                <FileIcon />
                                <DeleteIcon />
                            </TransactionActionIcons>
                        </ThirdItemsDetails>
                    </ThirdRowDetails>
                </TransactionsTableDetails>

                <TransactionsTableDetails>
                    <FisrtRowTableDetails>
                        <SerialNum>1</SerialNum>
                        <ProjectNameDetails>White Sand</ProjectNameDetails>
                    </FisrtRowTableDetails>
                    <SecondRowDetails>
                        <ProjectOwnerDetails>James Arthur</ProjectOwnerDetails>
                        <ServiceHireText>Songwriting</ServiceHireText>
                        <TransactionDateInfo>20/2/2023</TransactionDateInfo>
                    </SecondRowDetails>
                    <ThirdRowDetails>
                        <TransactionAmountDetails>$1779.53</TransactionAmountDetails>
                        <ThirdItemsDetails>
                            <TransactionStatusDetails>Success</TransactionStatusDetails>
                            <TransactionActionIcons>
                                <FileIcon />
                                <DeleteIcon />
                            </TransactionActionIcons>
                        </ThirdItemsDetails>
                    </ThirdRowDetails>
                </TransactionsTableDetails>

                <TransactionsTableDetails>
                    <FisrtRowTableDetails>
                        <SerialNum>1</SerialNum>
                        <ProjectNameDetails>White Sand</ProjectNameDetails>
                    </FisrtRowTableDetails>
                    <SecondRowDetails>
                        <ProjectOwnerDetails>James Arthur</ProjectOwnerDetails>
                        <ServiceHireText>Songwriting</ServiceHireText>
                        <TransactionDateInfo>20/2/2023</TransactionDateInfo>
                    </SecondRowDetails>
                    <ThirdRowDetails>
                        <TransactionAmountDetails>$1779.53</TransactionAmountDetails>
                        <ThirdItemsDetails>
                            <TransactionStatusDetails>Success</TransactionStatusDetails>
                            <TransactionActionIcons>
                                <FileIcon />
                                <DeleteIcon />
                            </TransactionActionIcons>
                        </ThirdItemsDetails>
                    </ThirdRowDetails>
                </TransactionsTableDetails>

                <TransactionsTableDetails>
                    <FisrtRowTableDetails>
                        <SerialNum>1</SerialNum>
                        <ProjectNameDetails>White Sand</ProjectNameDetails>
                    </FisrtRowTableDetails>
                    <SecondRowDetails>
                        <ProjectOwnerDetails>James Arthur</ProjectOwnerDetails>
                        <ServiceHireText>Songwriting</ServiceHireText>
                        <TransactionDateInfo>20/2/2023</TransactionDateInfo>
                    </SecondRowDetails>
                    <ThirdRowDetails>
                        <TransactionAmountDetails>$1779.53</TransactionAmountDetails>
                        <ThirdItemsDetails>
                            <TransactionStatusDetails>Success</TransactionStatusDetails>
                            <TransactionActionIcons>
                                <FileIcon />
                                <DeleteIcon />
                            </TransactionActionIcons>
                        </ThirdItemsDetails>
                    </ThirdRowDetails>
                </TransactionsTableDetails>

                <TransactionsTableDetails>
                    <FisrtRowTableDetails>
                        <SerialNum>1</SerialNum>
                        <ProjectNameDetails>White Sand</ProjectNameDetails>
                    </FisrtRowTableDetails>
                    <SecondRowDetails>
                        <ProjectOwnerDetails>James Arthur</ProjectOwnerDetails>
                        <ServiceHireText>Songwriting</ServiceHireText>
                        <TransactionDateInfo>20/2/2023</TransactionDateInfo>
                    </SecondRowDetails>
                    <ThirdRowDetails>
                        <TransactionAmountDetails>$1779.53</TransactionAmountDetails>
                        <ThirdItemsDetails>
                            <TransactionStatusDetails>Success</TransactionStatusDetails>
                            <TransactionActionIcons>
                                <FileIcon />
                                <DeleteIcon />
                            </TransactionActionIcons>
                        </ThirdItemsDetails>
                    </ThirdRowDetails>
                </TransactionsTableDetails>

                <TransactionsTableDetails>
                    <FisrtRowTableDetails>
                        <SerialNum>1</SerialNum>
                        <ProjectNameDetails>White Sand</ProjectNameDetails>
                    </FisrtRowTableDetails>
                    <SecondRowDetails>
                        <ProjectOwnerDetails>James Arthur</ProjectOwnerDetails>
                        <ServiceHireText>Songwriting</ServiceHireText>
                        <TransactionDateInfo>20/2/2023</TransactionDateInfo>
                    </SecondRowDetails>
                    <ThirdRowDetails>
                        <TransactionAmountDetails>$1779.53</TransactionAmountDetails>
                        <ThirdItemsDetails>
                            <TransactionStatusDetails>Success</TransactionStatusDetails>
                            <TransactionActionIcons>
                                <FileIcon />
                                <DeleteIcon />
                            </TransactionActionIcons>
                        </ThirdItemsDetails>
                    </ThirdRowDetails>
                </TransactionsTableDetails>

                <TransactionsTableDetails>
                    <FisrtRowTableDetails>
                        <SerialNum>1</SerialNum>
                        <ProjectNameDetails>White Sand</ProjectNameDetails>
                    </FisrtRowTableDetails>
                    <SecondRowDetails>
                        <ProjectOwnerDetails>James Arthur</ProjectOwnerDetails>
                        <ServiceHireText>Songwriting</ServiceHireText>
                        <TransactionDateInfo>20/2/2023</TransactionDateInfo>
                    </SecondRowDetails>
                    <ThirdRowDetails>
                        <TransactionAmountDetails>$1779.53</TransactionAmountDetails>
                        <ThirdItemsDetails>
                            <TransactionStatusDetails>Success</TransactionStatusDetails>
                            <TransactionActionIcons>
                                <FileIcon />
                                <DeleteIcon />
                            </TransactionActionIcons>
                        </ThirdItemsDetails>
                    </ThirdRowDetails>
                </TransactionsTableDetails>

                <PaginationContainer>
                    <LeftArrowIconContainer>
                        <LeftArrowIcon />
                    </LeftArrowIconContainer>
                    <PageNumbersContainer>
                        <PageNumber PageNumberBg>
                            <PageNumberText PageNumberColor>1</PageNumberText>
                        </PageNumber>
                        <PageNumber>
                            <PageNumberText>2</PageNumberText>
                        </PageNumber>
                        <PageNumber>
                            <PageNumberText>3</PageNumberText>
                        </PageNumber>
                        <PageNumber>
                            <PageNumberText>4</PageNumberText>
                        </PageNumber>
                        <PageNumber>
                            <PageNumberText>5</PageNumberText>
                        </PageNumber>
                    </PageNumbersContainer>
                    <RightArrowIconContainer>
                        <RightArrowIcon />
                    </RightArrowIconContainer>
                </PaginationContainer>
            </TransactionsWrapper>
            <BarChartContainer>
                <h3>Overall Transactions</h3>
                <BarChart chartData={chartData} />
            </BarChartContainer>
            <LineChartContainer>
                <h3>Total Transactions</h3>
                <LineChart chartData={chartData}  />
            </LineChartContainer>
        </DashboardWrapper>
       </ReusableComponent>
  )
}
