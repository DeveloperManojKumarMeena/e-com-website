import axios from "../../api/AxiosConfig";
import { loadUser } from "../reducers/UserSlice";

const asyncUser = async () => {
    try {
        const response = await axios.get("/users");
        console.log(response.data);
        return loadUser(response.data);
    } catch (error) {
        console.error(error);
    }
}

export default asyncUser;