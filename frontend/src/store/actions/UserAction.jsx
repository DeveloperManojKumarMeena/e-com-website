import axios from "../../api/AxiosConfig";
import { loadUser } from "../reducers/UserSlice";

const asyncUser = ()=> async (dispatch,getState) => {
    try {
        console.log(getState())
        const response = await axios.get("/users");
     
        dispatch(loadUser(response.data));
    } catch (error) {
        console.error(error);
    }
}

export default asyncUser;