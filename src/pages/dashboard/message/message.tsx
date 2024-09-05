import { FC, useCallback } from "react";
import { useControllers } from "./useControllers";
import { DashboardWrapper, Icon } from "@components";
import { IconNameEnum, NavigationPathsEnum } from "@utilities/enums";
import { messageList, messages } from "./mocks";

export const Message:FC = ()=> {

    const { breadcrumbs } = useControllers();

    const renderMessageList = useCallback(()=> {
        return (
            <div className="h-[80vh] overflow-y-auto rounded-lg w-80 bg-neutral">
                <ul className="menu w-full">
                    {messageList.map((el, i) => (
                        <li key={i} className="bg-base-100 rounded-lg mb-2">
                            <a className={
                                `flex items-center justify-between ${i === 2 ? "active" : ""}`
                            }>
                                <div className="flex items-center">
                                    <div className="avatar mr-3">
                                        <div className="w-10 rounded-full">
                                            <img src="https://via.placeholder.com/150" alt="+33 7 58 93 00 56 profile" />
                                        </div>
                                    </div>
                                    <div>
                                        <span className="font-bold">{el.completeName}</span>
                                        <p className="text-sm">{el.lastMessage}</p>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center items-center">
                                    {
                                        el.newMessageNumber && (
                                            <div className="badge badge-primary">{el.newMessageNumber}</div>
                                        )
                                    }
                                    <span className="text-sm text-gray-500">{el.houre}</span>
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }, []);

    const renderChats = useCallback(()=> {
        return (
            <div className="flex flex-col flex-1">
                <div className="flex flex-col bg-neutral overflow-y-auto rounded-lg p-4 h-[70vh]">
                    {
                        messages.map((el, i)=> {
                            return (
                                <div key={i} className={`chat ${el.isRemote ? "chat-end" : "chat-start"}`}>
                                    <div className="chat-image avatar">
                                        <div className="w-10 rounded-full">
                                        <img
                                            alt="Tailwind CSS chat bubble component"
                                            src={el.avatar} 
                                        />
                                        </div>
                                    </div>
                                    
                                    <div className={`
                                        chat-bubble ${el.isRemote ? "bg-accent-content" : "bg-primary text-primary-content"}`
                                    }>
                                        {el.content}
                                    </div>
                                    <div className="chat-footer opacity-50">Seen at {el.houre}</div>
                                </div>
                            )
                        })
                    }
                </div>

                <div className="flex items-center justify-between mt-5 gap-5">
                    <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered input-lg w-full" 
                    />

                    <Icon 
                        iconName={IconNameEnum.sentMessage}
                        color="oklch(var(--p))"
                        size='2x'
                    />
                </div>
            </div>
        )
    }, []);

    return (
        <DashboardWrapper 
            currentPath={NavigationPathsEnum.MESSAGE}
            breadcrumbs={breadcrumbs}
        >
            <div className="flex items-start gap-5">
                {renderMessageList()}
                
                {renderChats()}
            </div>
        </DashboardWrapper>
    )
}