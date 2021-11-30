import Card from "components/Card/Card.js";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import React from "react";
// @material-ui/icons
import image1 from "assets/img/efficiency1.png";
import image2 from "assets/img/pressure using nhexane 1000RPM 0.75mol fueltot.png";
import image3 from "assets/img/AHRR using nhexane 1000RPM 0.75mol fueltot.png";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import portfolio from "../../../e-portfolio.pdf";
import sc1 from "assets/img/sc1.png";
import sc2 from "assets/img/sc2.png";
import sc3 from "assets/img/sc3.png";
import styles from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";

const useStyles = makeStyles(styles);

export default function SectionCarousel() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem>
            <div className={classes.title}>
              <h2 className={classes.title}>
                Project - &quot;Smart&quot; Fuel for High &eta; and Low Emission
                Combustion
              </h2>
              <h5>MAY 2021</h5>
            </div>
          </GridItem>
          <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
            <Card carousel>
              <Carousel {...settings}>
                <div>
                  <img src={image1} alt="First slide" className="slick-image" />
                  <div className="slick-caption">
                    {/* <h4>Efficiency plot</h4> */}
                  </div>
                </div>
                <div>
                  <img
                    src={image2}
                    alt="Second slide"
                    className="slick-image"
                  />
                  <div className="slick-caption">
                    {/* <h4>Pressure plot</h4> */}
                  </div>
                </div>
                <div>
                  <img src={image3} alt="Third slide" className="slick-image" />
                  <div className="slick-caption">
                    {/* <h4>AHRR plot</h4> */}
                  </div>
                </div>
              </Carousel>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <div className={classes.typo}>
              <h5>
                It is my dissertation project of my Master&apos;s degree in UCL.
                The key point of the project is to dig the potential of the
                conventional ICEs. Although I have project experience related to
                the EVs and I have to admit the fact that from an energy
                prospective, EVs are indeed better than ICEs, I am obsessed of
                the beauty of designing engines and other mechanical parts.
                Therefore, as a mechanical student, I was trying to looking for
                the balance between ICEs and the environment.
                <br />
                The plot on the right are some of the results of the simulation
                result. The simulation and post processes applied
                <a target="blank" href="https://cantera.org/">
                  {" "}
                  Cantera
                </a>
                <a target="blank" href="https://www.python.org/">
                  , Python
                </a>{" "}
                and,
                <a
                  target="blank"
                  href="https://www.mathworks.com/products/matlab.html"
                >
                  {" "}
                  MATLAB
                </a>
                . Overall, this sophisticated project resulted in a desired
                result using
                <a
                  target="blank"
                  href="https://en.wikipedia.org/wiki/Monoterpene#:~:text=Monoterpenes%20are%20a%20class%20of,methyl%20group%2C%20are%20called%20monoterpenoids."
                >
                  {" "}
                  Monoterpene{" "}
                </a>
                as the biofuel. Contact me if you are interested in the project
                or you would like to know more about the detail of the result.
              </h5>
            </div>
          </GridItem>
          <GridItem>
            <div className={classes.title}>
              <h2 className={classes.title}>
                Thermal Electric Wearable Phone Charger
              </h2>
              <h5>Jan 2020</h5>
            </div>
          </GridItem>

          <GridItem xs={12}>
            <div className={classes.typo}>
              <h5>
                Check out the
                <a href={portfolio} target="blank">
                  {" "}
                  portfolio{" "}
                </a>
                for more information about this project
              </h5>
            </div>
          </GridItem>
          <GridItem>
            <div className={classes.title}>
              <h2 className={classes.title}>UWCSSA Community Website Design</h2>
              <h5>MAY 2021</h5>
            </div>
          </GridItem>
          <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
            <Card carousel>
              <Carousel {...settings}>
                <div>
                  <img src={sc1} alt="First slide" className="slick-image" />
                  <div className="slick-caption">
                    {/* <h4>Efficiency plot</h4> */}
                  </div>
                </div>
                <div>
                  <img src={sc2} alt="Second slide" className="slick-image" />
                  <div className="slick-caption">
                    {/* <h4>Pressure plot</h4> */}
                  </div>
                </div>
                <div>
                  <img src={sc3} alt="Third slide" className="slick-image" />
                  <div className="slick-caption">
                    {/* <h4>AHRR plot</h4> */}
                  </div>
                </div>
              </Carousel>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <div className={classes.typo}>
              <h5>
                The project is aiming to design a full stack website project
                with
                <a href="https://reactjs.org/" target="blank">
                  {" "}
                  React{" "}
                </a>
                and
                <a href="https://aws.amazon.com/amplify/" target="blank">
                  {" "}
                  AWS Amplify
                </a>
                . The UI library adopts
                <a href="https://mui.com/" target="blank">
                  {" "}
                  MUI
                </a>
                . Although it seems irrelevant to my major which is mechanical
                engineering, my strong self-learning skills and interests of
                coding push me to learning faster. Screenshots on the right
                demonstrates some of the functions and design of the website.
                Check out the
                <a
                  href="https://github.com/ShenShu2016/uwcssa_ca"
                  target="blank"
                >
                  {" "}
                  source{" "}
                </a>
                and the
                <a href="https://dev.uwcssa.ca/" target="blank">
                  {" "}
                  UWCSSA
                </a>
                .
              </h5>
            </div>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
