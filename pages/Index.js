import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";

const IndexContainer = styled.div`
  display: flex;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  flex-direction: column;
`;

const Jumbotron = styled.section`
  padding: 6rem 1rem 6rem 1rem;
  text-align: center;
  background: #422c46
    url("data:image/png;base64,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")
    repeat;
`;

const JumbotronHeader = styled.div`
  z-index: 4;
  max-width: auto;
  max-height: auto;
  font-weight: 100;
  color: #eee;
  text-transform: uppercase;
  font-family: "Source Sans Pro", sans-serif;
`;

const JumbotronHeaderBig = styled(JumbotronHeader)`font-size: 70px;`;

const JumbotronHeaderSmall = styled(JumbotronHeader)`font-size: 24px;`;

const CTAButton = styled.a`
  background: transparent;
  color: #e4a5f0;
  border: 2px solid rgba(255, 255, 255, 0.15);
  padding: 12px 18px !important;
  font-size: 12px !important;
  cursor: pointer;
  font-weight: 400;
  letter-spacing: 2px;
  text-align: center;
  display: inline-block;
  transition: 0.2s background linear;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    color: #eee;
    background: rgba(255, 255, 255, 0.15) !important;
  }
`;

const TechStackContainer = styled.div`
  padding: 80px;
  padding-top: 0;
  flex-direction: row;
  display: flex;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  justify-content: center;
  background: #422c46
    url("data:image/png;base64,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")
    repeat;
`;

const QuickStartContainer = styled.div`
  display: flex;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-top: 60px;
  justify-content: space-around;
`;

const QuickStartItem = styled.div`
  text-align: center;
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
`;

const QuickStartIcon = styled.img`
  height: 30px;
  margin: 3%;
  filter: grayscale(100%);

  :hover {
    filter: grayscale(0%);
  }
`;

const QuickStartCode = styled.pre`
  display: block;
  padding: 9.5px;
  margin: 0 0 10px;
  font-size: 10px;
  line-height: 1.42857143;
  color: #333;
  word-break: break-all;
  word-wrap: break-word;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  border-radius: 0px;
  font-family: Menlo, Monaco, Consolas, "Courier New", monospace;
  overflow: auto;
  text-align: left;
`;

const SectionDevider = styled.hr`
  border: 0;
  margin-top: 90px;
  border-top: 1px solid #eee;
  width: 100%;
`;

const SectionHeading = styled.div`
  margin-top: 90px;
  margin-bottom: 60px;
  text-align: center;
`;

const SectionTitleSmall = styled.h4`
  text-transform: capitalize;
  opacity: 0.75;
  font-family: "Source Sans Pro", sans-serif;
  line-height: 1;
  margin: 0px;
  font-size: 14px;
  font-weight: 400;
  font-style: italic;
  text-decoration: underline;
  padding-bottom: 5px;
`;

const SectionTitleLarge = styled.h2`
  opacity: 1;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 600;
  font-size: 35px;
  text-transform: uppercase;
  margin: 0px;
`;

const AboutSectionContent = styled.div`
  display: flex;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  flex-direction: row;
  justify-content: space-around;
  flex-flow: wrap;
`;

const AboutInfoContainer = styled.div`
  display: flex;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  flex-direction: row;
  max-width: 480px;
`;

const AboutIcon = styled.div`
  color: #333;
  font-size: 24px;
  height: 60px;
  text-align: center;
  background-color: #f6f6f6;
  border-radius: 32px;
  transition: all 200ms ease-in;
  padding: 16px;
  margin: 20px;
  margin-top: 0px;
`;

const AboutInfo = styled.div`
  & h3 {
    margin: 0;
    font-weight: 600;
    font-size: 20px;
  }
  & p {
    margin: 10px 0 10px 0;
    padding-right: 20px;
    line-height: 25px;
    font-weight: 400;
    font-size: 14px;
    min-height: 100px;
    color: #000;
    word-wrap: break-word;
  }
`;

const Video = styled.img`
  border: 1px solid #eee;
  padding: 10px;
  width: 40%;
  min-width: 320px;
  height: 40%;
  background-color: #000;
`;

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>DROPSTACK.RUN › SHIP IT • EVERYTHING • EVERYTIME</title>
        </Helmet>
        <IndexContainer>
          <section id="home">
            <Jumbotron>
              <JumbotronHeaderBig>Ship It</JumbotronHeaderBig>
              <JumbotronHeaderSmall>
                everything • everytime
              </JumbotronHeaderSmall>
              <br />
              <CTAButton href="/docs/getting-started#five-minutes-guide">
                npm install -g dropstack-cli
              </CTAButton>
            </Jumbotron>

            <TechStackContainer>
              <Video src="getting-started.gif" alt="getting started" />
            </TechStackContainer>

            <QuickStartContainer>
              <QuickStartItem>
                <QuickStartIcon src="icon-docker.svg" alt="icon docker" />
                <br />
                <br />
                <QuickStartCode>
                  {`
  $ my-python-app/ ls
  Dockerfile
  server.py
  requirements.txt
  $ my-python-app/ dropstack deploy
                  `}
                </QuickStartCode>
              </QuickStartItem>

              <QuickStartItem>
                <QuickStartIcon src="icon-html5.svg" alt="icon html5" />
                <br />
                <br />
                <QuickStartCode>
                  {`
  $ my-web-site/ ls
  index.html
  bundle.js
  logo.png
  $ my-web-site/ dropstack deploy
                  `}
                </QuickStartCode>
              </QuickStartItem>

              <QuickStartItem>
                <QuickStartIcon src="icon-nodejs.svg" alt="icon nodejs" />
                <br />
                <br />
                <QuickStartCode>
                  {`
  $ my-nodejs-api/ ls
  package.json
  server.js
  $ my-nodejs-api/ dropstack deploy

                  `}
                </QuickStartCode>
              </QuickStartItem>
            </QuickStartContainer>
          </section>

          <SectionDevider />

          <section id="about">
            <div>
              <SectionHeading>
                <SectionTitleSmall>What is does?</SectionTitleSmall>
                <SectionTitleLarge>You ship it - We run it</SectionTitleLarge>
              </SectionHeading>
            </div>

            <AboutSectionContent>
              <div className="wow fadeInLeft animated" data-wow-delay="0.3s">
                <AboutInfoContainer>
                  <AboutIcon>
                    <i className="fa fa-ship" />
                  </AboutIcon>
                  <AboutInfo>
                    <h3>Instantly Ready</h3>
                    <p>
                      Install the dropstack-cli and just enter{" "}
                      <strong>dropstack deploy</strong> - your deployment is
                      ready to use. You don't need servers, repositories,
                      accounts or different configurations.
                    </p>
                  </AboutInfo>
                </AboutInfoContainer>
              </div>
              <div className="wow fadeInLeft animated" data-wow-delay="0.6s">
                <AboutInfoContainer>
                  <AboutIcon>
                    <i className="fa fa-hand-pointer-o" />
                  </AboutIcon>
                  <AboutInfo>
                    <h3>Hybrid-Cloud</h3>
                    <p>
                      You have the entire control - work in a local development
                      environment and publish on-premise or to the cloud
                      environment.
                    </p>
                  </AboutInfo>
                </AboutInfoContainer>
              </div>
              <div className="wow fadeInRight animated" data-wow-delay="0.9s">
                <AboutInfoContainer>
                  <AboutIcon>
                    <i className="fa fa-hand-pointer-o" />
                  </AboutIcon>
                  <AboutInfo>
                    <h3>Individual Scaling</h3>
                    <p>
                      One, two or more instances - One, two or more runtime
                      environments. You can choose your individual deployment
                      and scaling strategy that fits your technical and business
                      requirements.
                    </p>
                  </AboutInfo>
                </AboutInfoContainer>
              </div>
              <div className="wow fadeInRight animated" data-wow-delay="1.2s">
                <AboutInfoContainer>
                  <AboutIcon>
                    <i className="fa fa-ship" />
                  </AboutIcon>
                  <AboutInfo>
                    <h3>Productive Development</h3>
                    <p>
                      Static Web-sites, Single-Page-Applications, NodeJS/NPM
                      Applications, etc. - we try to detect your environment
                      (e.g. NPMs package.json, PiPs requirements.txt, etc.)
                      automatically or you just create your own Dockerfile.
                      That's all!
                    </p>
                  </AboutInfo>
                </AboutInfoContainer>
              </div>
            </AboutSectionContent>
          </section>

          <SectionDevider />
        </IndexContainer>
      </div>
    );
  }
}
