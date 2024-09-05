import { UserContext } from "@contexts";
import { useContext } from "react";

export const useUserSelectors = ()=> {

    const { user, signinError } = useContext(UserContext);

    return {
        user,
        signinError,
    }
}
