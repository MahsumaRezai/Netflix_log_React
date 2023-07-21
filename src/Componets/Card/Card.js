import { Fragment } from "react";
import classes from './Card.module.css'

const Card = (props) => {
    return (
        <Fragment>
            <div className={classes.card}>
                {props.childern}
            </div>
        </Fragment>
    )
}
export default Card;