import { UserContext } from "@contexts";
import { fetchGetDataRequest } from "@utilities/services";
import { useCallback, useContext } from "react"

export const useUserDispatch = ()=> {

    const { setUser, setSigninError } = useContext(UserContext);

    const getUserData = useCallback(async()=> {
        const request = await fetchGetDataRequest('token');
        if(request.code === 500){
            console.log('error management ===>', request.data);
            setSigninError(request.data);
        }

        const data = request.data;
        setUser(data);
    }, [setSigninError, setUser]);

    return {
        getUserData
    }
}