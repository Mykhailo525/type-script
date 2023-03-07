import {apiService} from "./apiService";
import {IUser} from "../interfaces/userInterface";
import {Ires} from "../interfaces/responsInterface";

const userService={
    getAll:():Ires<IUser[]> => apiService.get('/users')
}

export {
    userService
}