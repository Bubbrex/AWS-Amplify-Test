import {
  ConfirmSignUp,
  ResendConfirmationCode,
  SignIn,
  SignUp,
} from "redux/authSlice";
import { Controller, useForm } from "react-hook-form";
import React, { useEffect } from "react";

import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CardHeader from "components/Card/CardHeader.js";
import CustomInput from "components/CustomInput/CustomInput.js";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Icon from "@material-ui/core/Icon";
import InputAdornment from "@material-ui/core/InputAdornment";
import People from "@material-ui/icons/People";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import image from "assets/img/bg7.jpg";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/loginPage.js";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";

const useStyles = makeStyles(styles);

export default function LoginPage(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const currentUser = useSelector((state) => state.auth.currentUser);
  const [login, setLogin] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const [code, setCode] = React.useState("");
  const [cardAnimation, setCardAnimation] = React.useState("cardHidden");
  const {
    handleSubmit,
    control,
    formState: { errors },
    getValues,
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
      email: "",
    },
  });

  useEffect(() => {
    if (currentUser !== null) {
      history.push("/");
    }
  }, [currentUser]);

  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;
  const onSubmit = async (data) => {
    if (login === false) {
      const signUpInfo = { ...data };
      console.log("check", signUpInfo);
      const response = await dispatch(SignUp(signUpInfo));
      setSubmitted(true);
      console.log(response);
      history.push("/");
    } else {
      const signInInfo = { ...data };
      console.log("check", signInInfo);
      const response = await dispatch(SignIn(signInInfo));
      history.push("/");
      console.log(response);
    }
  };
  return (
    <div>
      <Header
        absolute
        color="transparent"
        brand="Yichao Ma"
        rightLinks={<HeaderLinks />}
        to="/"
        {...rest}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimation]}>
                <form className={classes.form}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <Button
                      simple
                      color="transparent"
                      size="lg"
                      onClick={() => setLogin((prev) => !prev)}
                    >
                      <SwapHorizIcon />
                      {login === false ? "Login" : "Register"}
                    </Button>
                    <div className={classes.socialLine}>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className={"fab fa-twitter"} />
                      </Button>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className={"fab fa-facebook"} />
                      </Button>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className={"fab fa-google-plus-g"} />
                      </Button>
                    </div>
                  </CardHeader>
                  <p className={classes.divider}>
                    {`Classically ${login === false ? "Register" : "Login"}`}
                  </p>
                  <CardBody>
                    {login === false ? (
                      <React.Fragment>
                        <Controller
                          name="username"
                          control={control}
                          rules={{
                            required: true,
                          }}
                          render={({ field: { onChange, value } }) => (
                            <CustomInput
                              labelText={`Username${
                                errors.username ? " is required!" : ""
                              }`}
                              id="first"
                              value={value}
                              disabled={submitted}
                              error={!!errors.username}
                              formControlProps={{
                                fullWidth: true,
                              }}
                              onChange={(e) => {
                                onChange(e);
                                console.log(value);
                              }}
                              inputProps={{
                                autoFocus: true,
                                type: "text",
                                endAdornment: (
                                  <InputAdornment position="end">
                                    <People
                                      className={classes.inputIconsColor}
                                    />
                                  </InputAdornment>
                                ),
                              }}
                            />
                          )}
                        />
                        <Controller
                          name="email"
                          control={control}
                          rules={{
                            required: true,
                          }}
                          render={({ field: { onChange, value } }) => (
                            <CustomInput
                              labelText={`Email${
                                errors.email ? " is required!" : ""
                              }`}
                              id="email"
                              disabled={submitted}
                              onChange={(e) => onChange(e)}
                              value={value}
                              error={!!errors.email}
                              formControlProps={{
                                fullWidth: true,
                              }}
                              inputProps={{
                                type: "email",
                                endAdornment: (
                                  <InputAdornment position="end">
                                    <Email
                                      className={classes.inputIconsColor}
                                    />
                                  </InputAdornment>
                                ),
                              }}
                            />
                          )}
                        />
                        <Controller
                          name="password"
                          control={control}
                          rules={{
                            required: true,
                          }}
                          render={({ field: { onChange, value } }) => (
                            <CustomInput
                              labelText={`Password${
                                errors.password !== undefined
                                  ? " is required"
                                  : ""
                              }`}
                              id="pass"
                              error={!!errors.password}
                              disabled={submitted}
                              formControlProps={{
                                fullWidth: true,
                              }}
                              value={value}
                              onChange={(e) => onChange(e)}
                              inputProps={{
                                type: "password",
                                endAdornment: (
                                  <InputAdornment position="end">
                                    <Icon className={classes.inputIconsColor}>
                                      lock_outline
                                    </Icon>
                                  </InputAdornment>
                                ),
                                autoComplete: "off",
                              }}
                            />
                          )}
                        />
                      </React.Fragment>
                    ) : (
                      <React.Fragment>
                        <Controller
                          name="username"
                          control={control}
                          rules={{
                            required: true,
                          }}
                          render={({ field: { onChange, value } }) => (
                            <CustomInput
                              labelText={`Username${
                                errors.username ? " is required!" : ""
                              }`}
                              id="first"
                              value={value}
                              disabled={submitted}
                              error={!!errors.username}
                              formControlProps={{
                                fullWidth: true,
                              }}
                              onChange={(e) => {
                                onChange(e);
                                console.log(value);
                              }}
                              inputProps={{
                                autoFocus: true,
                                type: "text",
                                endAdornment: (
                                  <InputAdornment position="end">
                                    <People
                                      className={classes.inputIconsColor}
                                    />
                                  </InputAdornment>
                                ),
                              }}
                            />
                          )}
                        />
                        <Controller
                          name="password"
                          control={control}
                          rules={{
                            required: true,
                          }}
                          render={({ field: { onChange, value } }) => (
                            <CustomInput
                              labelText={`Password${
                                errors.password !== undefined
                                  ? " is required"
                                  : ""
                              }`}
                              id="pass"
                              error={!!errors.password}
                              disabled={submitted}
                              formControlProps={{
                                fullWidth: true,
                              }}
                              value={value}
                              onChange={(e) => onChange(e)}
                              inputProps={{
                                type: "password",
                                endAdornment: (
                                  <InputAdornment position="end">
                                    <Icon className={classes.inputIconsColor}>
                                      lock_outline
                                    </Icon>
                                  </InputAdornment>
                                ),
                                autoComplete: "off",
                              }}
                            />
                          )}
                        />
                      </React.Fragment>
                    )}
                    {submitted ? (
                      <React.Fragment>
                        <CustomInput
                          labelText="Confirmation Code"
                          id="code"
                          value={code}
                          onChange={(e) => setCode(e.target.value)}
                          formControlProps={{
                            fullWidth: true,
                          }}
                          inputProps={{
                            autoFocus: true,
                            type: "code",
                            endAdornment: (
                              <InputAdornment position="end">
                                60s <AccessAlarmIcon />
                              </InputAdornment>
                            ),
                            autoComplete: "off",
                          }}
                        />
                        <Button
                          onClick={() =>
                            dispatch(
                              ConfirmSignUp({
                                username: getValues("username"),
                                code: code,
                              })
                            )
                          }
                        >
                          Submit
                        </Button>
                        <Button
                          onClick={() =>
                            dispatch(
                              ResendConfirmationCode({
                                username: getValues("username"),
                              })
                            )
                          }
                        >
                          Resend
                        </Button>
                      </React.Fragment>
                    ) : null}
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button
                      simple
                      color="primary"
                      size="lg"
                      disabled={submitted}
                      onClick={handleSubmit(onSubmit)}
                    >
                      Get started
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}
