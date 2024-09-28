import { FC, ReactNode, useCallback } from "react";
import { useControllers } from "./useControllers";
import { Contents, NotifWrapper, RightContent, Wrapper } from './styles';
import { Icon } from "../../icon";
import { IconNameEnum, NavigationPathsEnum } from "@utilities/enums";
import { Alert } from "../../alert";

interface Props {
    breadcrumbs: string[]
    currentPath: NavigationPathsEnum
    children: ReactNode
}

export const DashboardWrapper:FC<Props> = ({
    breadcrumbs,
    currentPath,
    children
})=> {

    const { 
        navigateTo,
        handleGotoAccount,
        handleGotoMessages,
        handleLogout,
    } = useControllers();

    const renderHeader = useCallback(()=> {
        return (
            <div className="navbar bg-base-200 rounded-box">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">La Blue River</a>
                </div>

                <div className="flex-none">
                    <button className="btn btn-ghost btn-circle" onClick={handleGotoMessages}>
                        <div className="indicator">
                            <Icon 
                                iconName={IconNameEnum.mail}
                                size='2x'
                                color="bg-neutral"
                            />
                            <span className="badge badge-xs badge-primary indicator-item"></span>
                        </div>
                    </button>

                    <label className="btn btn-ghost btn-circle" htmlFor="my-drawer-4">
                        <div className="indicator">
                            <Icon 
                                iconName={IconNameEnum.notif}
                                size='2x'
                                color="bg-neutral"
                            />
                            <span className="badge badge-xs badge-primary indicator-item"></span>
                        </div>
                    </label>

                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>

                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-200 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li>
                                <a className="justify-between" onClick={handleGotoAccount}>
                                    Mon compte
                                </a>
                            </li>
                            <li><a onClick={handleLogout}>Déconnexion</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }, [handleGotoAccount, handleGotoMessages, handleLogout]);

    const renderNavBar = useCallback(()=> {

        const navItems = [
            {
                icon: IconNameEnum.dashboard,
                label: 'Dashboard',
                link: NavigationPathsEnum.DASHBOARD
            },
            {
                icon: IconNameEnum.project,
                label: 'Projets',
                link: NavigationPathsEnum.PROJECTS
            },
            {
                icon: IconNameEnum.collabs,
                label: 'Collaborateurs',
                link: NavigationPathsEnum.COLLABS
            },
            {
                icon: IconNameEnum.ivestors,
                label: 'Investisseurs',
                link: NavigationPathsEnum.INVESTORS
            },
            {
                icon: IconNameEnum.settings,
                label: 'Paramètres',
                link: NavigationPathsEnum.SETTINGS
            },
        ];

        return (
            <ul style={{minHeight: '96vh'}} className="menu bg-base-200 rounded-box w-56">
                {
                    navItems.map((el, i)=> (
                        <li key={i}>
                            <a 
                                onClick={()=> navigateTo(el.link)}
                                className={el.link === currentPath ? "active" : ""}
                            >
                                <Icon  
                                    iconName={el.icon}
                                    color={"bg-neutral"}
                                /> {el.label}
                            </a>
                        </li>
                    ))
                }
            </ul>
        )
    }, [currentPath, navigateTo]);

    return (
        <div className="drawer drawer-end">
            <Wrapper>
                {renderNavBar()}

                <RightContent>
                    {renderHeader()}

                    <Contents>
                        <div className="breadcrumbs text-sm">
                            <ul>
                                {
                                    breadcrumbs.map((el, i)=> (
                                        <li key={i}>{el}</li>
                                    ))
                                }
                            </ul>
                        </div>

                        {children}
                    </Contents>
                </RightContent>
            </Wrapper>

            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-side">
                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                    <NotifWrapper>
                        <Alert 
                            type='infos'
                            title="Infos"
                            message="You have 1 unread message"
                        />

                        <Alert 
                            type='success'
                            title="Success"
                            message="You have 1 unread message"
                        />

                        <Alert 
                            type='warning'
                            title="Warning"
                            message="You have 1 unread message"
                            onPress={()=> {}}
                        />

                        <Alert 
                            type='error'
                            title="Error"
                            message="You have 1 unread message"
                            onPress={()=> {}}
                        />
                    </NotifWrapper>
                </ul>
            </div>
        </div>
    )
}