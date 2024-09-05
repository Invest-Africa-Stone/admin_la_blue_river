import { useMemo } from "react"

export const useControllers = ()=> {

    const breadcrumbs = useMemo(()=> ['Paramètres'], []);

    return {
        breadcrumbs
    }
}
