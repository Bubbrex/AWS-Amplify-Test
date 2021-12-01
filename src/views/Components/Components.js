import { Box, Typography } from "@mui/material";

import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
// react components for routing our app without refresh
import Parallax from "components/Parallax/Parallax.js";
import React from "react";
import SectionCarousel from "./Sections/SectionCarousel.js";
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
              <Box sx={{ textAlign: "right" }} className={classes.brand}>
                <Typography
                  // variant="h1"
                  sx={{
                    right: 0,
                    fontSize: "4.2rem",
                    fontWeight: "600",
                    display: "inline-block",
                    position: "relative",
                  }}
                  // className={classes.title}
                >
                  About Me.
                </Typography>
                <Typography
                  // variant="h3"
                  sx={{
                    position: "absolute",
                    right: 0,
                    fontSize: "1.313rem",
                    fontWeight: "300",
                    maxWidth: "500px",
                    margin: "10px 0 0",
                  }}
                  // className={classes.subtitle}
                >
                  I am a Mechanical Engineering graduate. I hope that this
                  website helps you to know much more about me
                </Typography>
              </Box>
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
