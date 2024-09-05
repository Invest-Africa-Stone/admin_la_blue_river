import { NavigationPathsEnum } from "@utilities/enums";
import { useNavigation } from "@utilities/hooks";
import { useCallback } from "react"

export const useControllers = ()=> {

    const { navigateTo } = useNavigation();

    const handleGotoAccount = useCallback(()=> {
        navigateTo(NavigationPathsEnum.ACCOUNT);
    }, [navigateTo]);

    const handleGotoMessages = useCallback(()=> {
        navigateTo(NavigationPathsEnum.MESSAGE);
    }, [navigateTo]);

    const handleLogout = useCallback(()=> {

    }, []);

    return {
        navigateTo,
        handleGotoAccount,
        handleGotoMessages,
        handleLogout,
    }
}
