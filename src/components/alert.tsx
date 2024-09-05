import { FC, useMemo } from "react";
import { Icon } from "./icon";
import { IconNameEnum } from "@utilities/enums";

interface Props {
    type?: 'infos' | 'success' | 'warning' | 'error' 
    title: string
    message: string
    onPress?: ()=> void
}

export const Alert:FC<Props> = ({
    type = 'infos',
    title,
    message,
    onPress,
})=> {

    const iconName = useMemo(()=> {
        switch (type) {
            case 'infos':
                return IconNameEnum.infos;
            case 'success':
                return IconNameEnum.check;
            case 'warning':
                return IconNameEnum.warning;
            case 'error':
                return IconNameEnum.error;
        
            default:
                return IconNameEnum.infos;
        }
    }, [type]);

    const alertType = useMemo(()=> {
        switch (type) {
            case 'infos':
                return 'alert-info';
            case 'success':
                return 'alert-success';
            case 'warning':
                return 'alert-warning';
            case 'error':
                return 'alert-error';
        
            default:
                return 'alert-info';
        }
    }, [type]);

    return (
        <div role="alert" className={`alert ${alertType}`}>
            <Icon
                iconName={iconName}
                size='2x'
            />
            <div>
                <h3 className="font-bold">{title}</h3>
                <div className="text-xs">{message}</div>
            </div>
            {
                onPress && (
                    <button className="btn btn-sm" onClick={onPress}>Vue</button>
                )
            }
        </div>
    )
}