import { Fragment } from "react";
import Card from "../Card/Card";
import classes from "./Adduser.module.css";
import Button from "../Button/Button";

const Adduser = (props) => {
    return (
        <Fragment>
            <Card>
                <div className={classes.text}>
                    <p>Sign In</p>
                </div>
                <form className={classes.form}>

                    <div className={classes.content}>

                        <input placeholder="Email or Phone number" className={classes.input} />
                        <input placeholder="Password" className={classes.input} />
                        <Button></Button>
                        <div className={classes.link}>
                            <div className={classes.links}>
                                <button type="checkbox" className={classes.button}></button>
                                <span className={classes.btn}>Remember me</span>
                            </div>
                            <div >
                                <a href className={classes.site}>Need help?</a>
                            </div>
                        </div>
                    </div>

                </form>
                <div className={classes.contenttext}>
                    <div className={classes.para}>
                        <span>New Netflix?</span>
                        <a href>Sign up now</a>

                    </div>
                    <div className={classes.paragh}>
                        <span>
                            this page is protected by Google reCAPTCHA to <br></br> ensure you are not a bot.
                        </span>
                        <a href className={classes.lin}>Learn more</a>
                    </div>
                </div>

            </Card>
        </Fragment>
    )
}
export default Adduser;