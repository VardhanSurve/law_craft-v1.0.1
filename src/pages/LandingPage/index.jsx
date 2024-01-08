import React from "react";

import { Img, Line, Text } from "components";
import LandingPageColumnellipseone from "components/LandingPageColumnellipseone";
import LandingPageColumnellipseoneOne from "components/LandingPageColumnellipseoneOne";
import LandingPageColumnellipseoneTwo from "components/LandingPageColumnellipseoneTwo";

const LandingPagePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-almarai sm:gap-10 md:gap-10 gap-[337px] items-start justify-start mx-auto pb-[348px] w-full">
        <div className="flex flex-col gap-[22px] items-center w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <header className="bg-gradient  flex h-48 md:h-auto items-center justify-center md:px-5 shadow-bs w-full">
              <div className="flex flex-col gap-[23px] h-[161px] md:h-auto items-center justify-end max-w-[1198px] w-full">
                <div className="bg-gray-700 h-[38px] w-[97%]"></div>
                <div className="flex md:flex-col flex-row md:gap-10 gap-[337px] items-center justify-center w-auto md:w-full">
                  <Img
                    className="h-[100px] md:h-auto object-cover w-[345px]"
                    src="images/img_logoblack.png"
                    alt="logoblack"
                  />
                  <ul className="flex sm:flex-col flex-row gap-[25px] sm:hidden items-center justify-center w-auto common-row-list">
                    <li>
                      <a
                        href="javascript:"
                        className="md:text-2xl sm:text-[22px] text-[26px] text-black-900"
                      >
                        <Text size="txtAlmaraiRegular26">Complaint</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="md:text-2xl sm:text-[22px] text-[26px] text-black-900"
                      >
                        <Text size="txtAlmaraiRegular26">FIR Draft</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="md:text-2xl sm:text-[22px] text-[26px] text-black-900"
                      >
                        <Text size="txtAlmaraiRegular26">Database</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="md:text-2xl sm:text-[22px] text-[26px] text-black-900"
                      >
                        <Text size="txtAlmaraiRegular26">Feedback</Text>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </header>
            <div className="flex flex-col items-center justify-start w-full">
              <div className="md:h-[1173px] h-[771px] md:px-5 relative w-full">
                <Img
                  className="h-[771px] m-auto object-cover w-full"
                  src="images/img_pexelsphotoby.png"
                  alt="pexelsphotoby"
                />
                <Line className="absolute bg-black-900 h-px inset-x-[0] mx-auto shadow-bs1 top-[0] w-[87%]" />
                <div className="absolute flex md:flex-col flex-row md:gap-10 h-max inset-y-[0] items-center justify-between left-[4%] my-auto w-[88%]">
                  <LandingPageColumnellipseone className="flex flex-col gap-[25px] items-center justify-start w-[2%] md:w-full" />
                  <div className="bg-gradient1  flex md:flex-col flex-row md:gap-11 items-center justify-between p-[9px] rounded-[15px] w-[90%] md:w-full">
                    <div className="flex flex-col items-center justify-start md:ml-[0] ml-[26px] pb-[37px] w-3/5 md:w-full">
                      <div className="flex flex-col gap-11 justify-start w-full">
                        <div className="md:h-[67px] h-[69px] relative w-[91%] sm:w-full">
                          <div className="absolute bg-orange-200 h-[67px] inset-y-[0] left-[0] my-auto rounded-bl-[15px] rounded-br-[15px] rounded-tl-[15px] w-[28%]"></div>
                          <Text
                            className="absolute bottom-[0] inset-x-[0] mx-auto sm:text-[35px] md:text-[41px] text-[45px] text-black-900 w-max"
                            size="txtAlmaraiBold45"
                          >
                            FIR Generation Reimagined
                          </Text>
                        </div>
                        <Text
                          className="md:ml-[0] ml-[15px] md:text-2xl sm:text-[22px] text-[26px] text-black-900"
                          size="txtAlmaraiRegular26"
                        >
                          <>
                            “Law-Craft” redefines the process of FIR
                            <br /> (First Information Report) generation,
                            enhancing efficiency and accuracy for police
                            officers. The portal employs state-of-the-art
                            Natural Language
                            <br />
                            Processing (NLP) and Machine Learning (ML) models to
                            streamline the complaint registration process.
                          </>
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start mr-[15px] w-[34%] md:w-full">
                      <div className="md:h-[596px] h-[621px] relative w-full">
                        <div className="absolute bg-orange-200 bottom-[0] h-[583px] right-[0] rounded-[15px] w-[85%]"></div>
                        <div className="absolute bg-blue_gray-100 flex flex-col items-center justify-start left-[0] rounded-[15px] top-[0] w-[88%]">
                          <Img
                            className="h-[596px] md:h-auto object-cover rounded-[15px] w-full"
                            src="images/img_pexelsphotoby_596x318.png"
                            alt="pexelsphotoby_One"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Line className="bg-black-900 h-px max-w-[1250px] mx-auto shadow-bs2 w-full" />
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <div className="h-[771px] md:h-[862px] md:px-5 relative w-full">
              <Img
                className="h-[771px] m-auto object-cover w-full"
                src="images/img_pexelsphotoby_771x1440.png"
                alt="pexelsphotoby_Two"
              />
              <Line className="absolute bg-black-900 h-px inset-x-[0] mx-auto shadow-bs1 top-[0] w-[87%]" />
              <div className="absolute flex md:flex-col flex-row md:gap-10 h-max inset-y-[0] items-center justify-between left-[4%] my-auto w-[87%]">
                <LandingPageColumnellipseoneOne className="flex flex-col gap-[25px] items-center justify-start w-[2%] md:w-full" />
                <div className="md:gap-5 gap-[15px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 min-h-[auto] w-[67%] md:w-full">
                  <div className="bg-gradient2  flex flex-col gap-[23px] h-[228px] justify-center p-[21px] sm:px-5 shadow-bs w-full">
                    <Text
                      className="mr-[55px] mt-1 sm:text-[35px] md:text-[41px] text-[45px] text-shadow-ts text-white-A700_01"
                      size="txtAlmaraiExtraBold45"
                    >
                      Step 1
                    </Text>
                    <Text
                      className="mb-[18px] ml-3.5 md:ml-[0] mr-[3px] text-white-A700_01 text-xl"
                      size="txtAlmaraiRegular20"
                    >
                      <>
                        Get the Victim
                        <br />
                        Details
                      </>
                    </Text>
                  </div>
                  <div className="bg-gradient2  flex flex-col gap-[19px] h-[228px] items-start justify-center p-[17px] shadow-bs w-full">
                    <Text
                      className="ml-1 md:ml-[0] mt-2 sm:text-[35px] md:text-[41px] text-[45px] text-shadow-ts text-white-A700_01"
                      size="txtAlmaraiExtraBold45"
                    >
                      Step 2
                    </Text>
                    <Text
                      className="mb-[50px] ml-2 md:ml-[0] text-white-A700_01 text-xl w-[96%] sm:w-full"
                      size="txtAlmaraiRegular20"
                    >
                      Get the Complaint Details or upload written document
                    </Text>
                  </div>
                  <div className="bg-gradient2  flex flex-col gap-6 h-[228px] justify-center p-[21px] sm:px-5 shadow-bs w-full">
                    <Text
                      className="mr-[51px] mt-1 sm:text-[35px] md:text-[41px] text-[45px] text-shadow-ts text-white-A700_01"
                      size="txtAlmaraiExtraBold45"
                    >
                      Step 3
                    </Text>
                    <Text
                      className="mb-[84px] md:ml-[0] ml-[7px] mr-[29px] text-white-A700_01 text-xl"
                      size="txtAlmaraiRegular20"
                    >
                      Submit the report
                    </Text>
                  </div>
                  <div className="bg-gradient2  flex flex-col gap-[21px] h-[228px] justify-center p-[18px] shadow-bs w-full">
                    <Text
                      className="mr-14 mt-[5px] sm:text-[35px] md:text-[41px] text-[45px] text-shadow-ts text-white-A700_01"
                      size="txtAlmaraiExtraBold45"
                    >
                      Step 4
                    </Text>
                    <Text
                      className="mb-6 ml-2.5 md:ml-[0] mr-[13px] text-white-A700_01 text-xl w-[89%] sm:w-full"
                      size="txtAlmaraiRegular20"
                    >
                      The ML Model Processes the Document
                    </Text>
                  </div>
                  <div className="bg-gradient2  flex flex-col gap-[21px] h-[228px] items-start justify-center p-[19px] shadow-bs w-full">
                    <Text
                      className="mt-[5px] sm:text-[35px] md:text-[41px] text-[45px] text-shadow-ts text-white-A700_01"
                      size="txtAlmaraiExtraBold45"
                    >
                      Step 5
                    </Text>
                    <Text
                      className="mb-[23px] md:ml-[0] ml-[3px] text-white-A700_01 text-xl w-[89%] sm:w-full"
                      size="txtAlmaraiRegular20"
                    >
                      IPCs,CrPCs,and Regional Penial Codes are Suggested
                    </Text>
                  </div>
                  <div className="bg-gradient2  flex flex-col gap-[22px] h-[228px] justify-center p-[21px] sm:px-5 shadow-bs w-full">
                    <Text
                      className="md:ml-[0] ml-[9px] mr-10 mt-0.5 sm:text-[35px] md:text-[41px] text-[45px] text-shadow-ts text-white-A700_01"
                      size="txtAlmaraiExtraBold45"
                    >
                      Step 6
                    </Text>
                    <Text
                      className="mb-5 mr-[17px] text-white-A700_01 text-xl w-[91%] sm:w-full"
                      size="txtAlmaraiRegular20"
                    >
                      Generates FIR Draft
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[21px] items-center justify-start max-w-[1250px] mx-auto md:px-5 w-full">
              <Line className="bg-black-900 h-px shadow-bs2 w-full" />
              <Line className="bg-black-900 h-px shadow-bs1 w-full" />
            </div>
          </div>
        </div>
        <LandingPageColumnellipseoneTwo className="flex flex-col gap-[25px] items-center justify-start md:ml-[0] ml-[61px] md:px-5 w-[2%] md:w-full" />
        <div className="flex flex-col items-center md:px-10 sm:px-5 px-[94px] w-full">
          <Line className="bg-black-900 h-px max-w-[1250px] mx-auto shadow-bs2 w-full" />
        </div>
      </div>
    </>
  );
};

export default LandingPagePage;
