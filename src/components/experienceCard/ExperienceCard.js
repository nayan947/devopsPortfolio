import React, { Component } from "react";
import "./ExperienceCard.css";
import { Fade } from "react-reveal";

class ExperienceCard extends Component {
  render() {
    const experience = this.props.experience;
    const descriptions = experience["descriptions"]
    const index = this.props.index;
    const theme = this.props.theme;
    return (
      <div
        className="experience-list-item"
        style={{ marginTop: index === 0 ? 30 : 50, width: "70%", margin: "auto" }}
      >
        {/* <div className="experience-card-stepper">
          <div
            style={{
              width: 20,
              height: 20,
              backgroundColor: `${theme.headerColor}`,
              borderRadius: 50,
              zIndex: 100,
            }}
          />
          {index !== totalCards - 1 && (
            <div
              style={{
                height: 190,
                width: 2,
                backgroundColor: `${theme.headerColor}`,
                position: "absolute",
                marginTop: 20,
              }}
            />
          )}
        </div> */}
        <Fade left duration={2000} distance="40px">
          <div>
            <img
              className="experience-card-logo"
              src={require(`../../assets/images/${experience["logo_path"]}`)}
              alt=""
            />
          </div>
        </Fade>

        <Fade right duration={2000} distance="40px">
          <div style={{ display: "flex", flexDirection: "row", width: "90%" }}>
            {/* <div
              className="arrow-left"
              style={{ borderRight: `10px solid ${theme.body}` }}
            ></div> */}
            <div
              className="experience-card"
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  padding: "0px 20px",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column",gap:"10px",paddingTop:"10px" }}>
                  <h3
                    className="experience-card-title"
                    style={{ color: theme.text }}
                  >
                    {experience["title"]}
                  </h3>
                  <p
                    className="experience-card-company"
                    style={{ color: theme.text }}
                  >
                    <a
                      href={experience["company_url"]}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {experience["company"]}
                    </a>
                  </p>
                </div>
                <div>
                  <div className="experience-card-heading-right" >
                    <p
                      className="experience-card-duration"
                      style={{ color: theme.secondaryText }}
                    >
                      {experience["duration"]}
                    </p>
                    <p
                      className="experience-card-location"
                      style={{ color: theme.secondaryText }}
                    >
                      {experience["location"]}
                    </p>
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "5px",
                  width: "100%",
                  justifyContent: "flex-start",
                  marginTop: 5,
                  background: `${theme.body}`,
                  borderBottomLeftRadius: "10px",
                  borderBottomRightRadius: "10px",
                  paddingBottom: "10px",
                }}
              >
                <div className="repo-description" />
                {descriptions && descriptions.map((description) => {
                  return (
                    <p style={{ color: theme.text, margin: "5px 0" }} key={description}>
                      {description}
                    </p>
                  );
                })}

              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}

export default ExperienceCard;
