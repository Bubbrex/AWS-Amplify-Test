import Button from "components/CustomButtons/Button.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
import Parallax from "components/Parallax/Parallax.js";
import React from "react";
import SectionBasics from "./Sections/SectionBasics.js";
import SectionCarousel from "./Sections/SectionCarousel.js";
import SectionCompletedExamples from "./Sections/SectionCompletedExamples.js";
import SectionDownload from "./Sections/SectionDownload.js";
import SectionExamples from "./Sections/SectionExamples.js";
import SectionJavascript from "./Sections/SectionJavascript.js";
import SectionLogin from "./Sections/SectionLogin.js";
import SectionNavbars from "./Sections/SectionNavbars.js";
import SectionNotifications from "./Sections/SectionNotifications.js";
import SectionPills from "./Sections/SectionPills.js";
import SectionTabs from "./Sections/SectionTabs.js";
import SectionTypography from "./Sections/SectionTypography.js";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand="Yichao Ma"
        rightLinks={<HeaderLinks />}
        to="/about-yichao"
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Parallax image={require("assets/img/back10.png").default}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>About Me.</h1>
                <h3 className={classes.subtitle}>
                  I'm a Mechanical Engineering graduate. I hope that this
                  website helps you to know much more about me.
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        {/* <SectionBasics /> */}
        {/* <SectionNavbars />
        <SectionTabs />
        <SectionPills />
        <SectionNotifications /> */}
        {/* <SectionTypography /> */}
        {/* <SectionJavascript /> */}
        <SectionCarousel />
        {/* <SectionCompletedExamples />
        <SectionLogin />
        <GridItem md={12} className={classes.textCenter}>
          <Link to={"/login-page"} className={classes.link}>
            <Button color="primary" size="lg" simple>
              View Login Page
            </Button>
          </Link>
        </GridItem>
        <SectionExamples />
        <SectionDownload /> */}
      </div>
      <Footer />
    </div>
  );
}
