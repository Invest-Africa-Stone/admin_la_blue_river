import { useMemo } from "react"

export const useControllers = ()=> {

    const breadcrumbs = useMemo(()=> ['Dashboard', 'Messages'], []);

    return {
        breadcrumbs
    }
}
