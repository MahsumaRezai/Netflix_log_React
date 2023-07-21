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
                                <button type="checkbox">mm</button>
                                <span>Remember me</span>
                            </div>
                            <div >
                                <a href>Need help?</a>
                            </div>


                        </div>

                    </div>

                </form>

            </Card>
        </Fragment>
    )
}
export default Adduser;