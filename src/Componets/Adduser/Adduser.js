import { Fragment } from "react";
import Card from "../Card/Card";

const Adduser = (props) => {
    return (
        <Fragment>
            <Card>
            <form >
                    <label htmlFor="username">Username</label>
                    <input
                       
                    />
                    <label htmlFor="age">Age (Years)</label>
                    <input
                        
                    />
                    <button type="submit">Add User</button>
                </form>

            </Card>
        </Fragment>
    )
}
export default Adduser;