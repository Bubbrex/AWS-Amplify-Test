import { Box } from "@mui/material";
import Button from "components/CustomButtons/Button.js";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Favorite from "@material-ui/icons/Favorite";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Palette from "@material-ui/icons/Palette";
import Parallax from "components/Parallax/Parallax.js";
import React from "react";
import Storage from "@aws-amplify/storage";
// nodejs library that concatenates classes
import classNames from "classnames";
import cv from "../../yichao_ma_cv.pdf";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import profile from "assets/img/faces/selfie.jpg";
import studio1 from "assets/img/examples/studio-1.jpg";
import studio2 from "assets/img/examples/studio-2.jpg";
import studio3 from "assets/img/examples/studio-3.jpg";
import studio4 from "assets/img/examples/studio-4.png";
import studio5 from "assets/img/examples/studio-5.png";
import { styled } from "@mui/material/styles";
import styles from "assets/jss/material-kit-react/views/profilePage.js";
import { useSelector } from "react-redux";
import work1 from "assets/img/examples/work1.jpg";
import work2 from "assets/img/examples/work2.jpg";
import work3 from "assets/img/examples/work3.jpg";
import work4 from "assets/img/examples/work4.jpg";
import work5 from "assets/img/examples/work5.jpg";

const useStyles = makeStyles(styles);
const Input = styled("input")({ display: "none" });

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const currentUser = useSelector((state) => state.auth.currentUser);
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const [url, setUrl] = React.useState("");
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  const uploadFile = async (e) => {
    const file = e.target.files[0];
    console.log(e);
    const result = await Storage.put(`${currentUser}/image0`, file, {
      level: "public",
      contentType: "image/*",
    });
    console.log("upload successfully!", result);
  };
  const getImages = async () => {
    const result = await Storage.get("test", {
      level: "public",
      download: false,
      expires: 120,
    });
    console.log(result);
    setUrl(result);
  };
  return (
    <div>
      <Header
        color="transparent"
        brand="Yichao Ma"
        to="/"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white",
        }}
        {...rest}
      />
      <Parallax
        small
        filter
        image={require("assets/img/profile-bg.jpg").default}
      />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Yichao Ma</h3>
                    <h6>AUTHOR</h6>
                    <Button
                      justIcon
                      link
                      to="https://github.com/Bubbrex/uwcssa_ca"
                      className={classes.margin5}
                    >
                      <i className={"fab fa-github"} />
                    </Button>
                    <Button
                      justIcon
                      link
                      to="https://www.instagram.com/yichao_ma/"
                      className={classes.margin5}
                    >
                      <i className={"fab fa-instagram"} />
                    </Button>
                    <Button
                      justIcon
                      link
                      to="https://www.linkedin.com/in/yichao-ma-0423"
                      className={classes.margin5}
                    >
                      <i className={"fab fa-linkedin"} />
                    </Button>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <h4>
                I completed the undergraduate program in Automotive Engineering
                in University of Windsor in Canada and travelled to UK pursing
                the Master&apos;s degree in Mechanical Engineering in University
                College London. I accomplished the dissertation in September,
                2021. I used to participate in Putnam Math Competition during my
                undergraduate period and ranked 722 out of 4700 across North
                America. I&apos;m also keen on photographing, fencing (used to
                be an elite in China), origami , coding, and travelling. I used
                to own a 2019 Subaru WRX and I really missed the period when I
                was driving to enjoy the view in Canada. Check out my{" "}
                <a href={cv} target="blank">
                  {" "}
                  CV{" "}
                </a>{" "}
                for more about my experience
              </h4>
            </div>
            <Box sx={{ display: "none" }}>
              <label htmlFor="contained-button-file">
                <Input
                  accept="image/*"
                  id="contained-button-file"
                  multiple
                  type="file"
                  onChange={(e) => uploadFile(e)}
                />
                <Button component="span">Upload</Button>
              </label>
              <Button onClick={() => getImages()}>get images</Button>
            </Box>
            {url !== "" ? <img src={url} /> : null}
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      tabButton: "Studio",
                      tabIcon: Camera,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={studio1}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={studio2}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={studio5}
                              className={navImageClasses}
                            />
                            {/* <img
                              alt="..."
                              src={studio4}
                              className={navImageClasses}
                            /> */}
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                    {
                      tabButton: "Work",
                      tabIcon: Palette,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work1}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work2}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work3}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work4}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work5}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                    {
                      tabButton: "Favorite",
                      tabIcon: Favorite,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={studio4}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={studio3}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work4}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work2}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
