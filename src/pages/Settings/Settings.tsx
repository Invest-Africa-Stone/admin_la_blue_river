import { FC } from "react";
import { useControllers } from "./useControllers";
import { DashboardWrapper } from "@components";
import { NavigationPathsEnum } from "@utilities/enums";

export const Settings:FC = ()=> {

    const { breadcrumbs } = useControllers();

    return (
        <DashboardWrapper 
            currentPath={NavigationPathsEnum.SETTINGS}
            breadcrumbs={breadcrumbs}
        >
            <>
                
            </>
        </DashboardWrapper>
    )
}