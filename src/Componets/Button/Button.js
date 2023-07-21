import classes from './Button.module.css'
const Button = (props) => {
    return (
        <div>
            {props.children}
            <button className={classes.btn}>Sign In</button>
        </div>

    )

}
export default Button;
