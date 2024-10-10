import React, { Component } from "react";
import Header from "../../components/header/Header.js";
import Footer from "../../components/footer/Footer.js";
import TopButton from "../../components/topButton/TopButton.js";
import { Fade } from "react-reveal";
import { resumeHeader } from "../../portfolio.js";
// import { Document, Page, pdfjs } from 'react-pdf';
import "./resume.css";
// import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink =
  "https://raw.githubusercontent.com/Madhavkabra/Portfolio/master/src/Assets/Madhav%20Resume%202024.pdf";

class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 1200,
    };

    this.updateWidth = this.updateWidth.bind(this);
  }

  componentDidMount() {
    this.setState({ width: window.innerWidth });
    window.addEventListener("resize", this.updateWidth);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWidth);
  }

  updateWidth() {
    this.setState({ width: window.innerWidth });
  }

  render() {
    const theme = this.props.theme;
    const { width } = this.state;

    return (
      <div className="projects-main">
        <Header theme={theme} />
        <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <div className="projects-heading-div">
              <div className="projects-heading-text-div">
                <h1
                  className="projects-heading-text"
                  style={{ color: theme.text }}
                >
                  {resumeHeader.title}
                </h1>
              </div>
            </div>
          </Fade>
          <div className="resume-container">
            <div className="resume-header">
              <a
                href={resumeLink}
                download="Madhav_Resume_2024.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={this.trackDownload}
                className="download-button"
              >
                <span>Download CV</span>
              </a>
            </div>

            <div className="resume-content">
              {/* <Document
                file={resumeLink}
                className="resume-document"
              >
                <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
                <hr className="divider" />
                <Page pageNumber={2} scale={width > 786 ? 1.7 : 0.6} />
              </Document> */}
            </div>
          </div>
        </div>

        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Resume;
