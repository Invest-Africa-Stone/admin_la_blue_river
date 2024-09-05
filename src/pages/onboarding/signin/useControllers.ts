import { NavigationPathsEnum } from "@utilities/enums";
import { useNavigation } from "@utilities/hooks";
import { useCallback, useState } from "react"

export const useControllers = ()=> {

    const { navigateTo } = useNavigation();
    const [identifier, setIdentifier] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSignin = useCallback(()=> {
        setIdentifier('');
        setPassword('');
        
        navigateTo(NavigationPathsEnum.DASHBOARD);
    }, [navigateTo]);

    return {
        identifier,
        password,
        setIdentifier,
        setPassword,
        handleSignin,
    }
}
