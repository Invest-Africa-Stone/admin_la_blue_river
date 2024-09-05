import { FC } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp, SizeProp } from "@fortawesome/fontawesome-svg-core";

interface IIcon {
    iconName: IconProp
    color?: string
    size?: SizeProp
    onPress?: ()=> void
}

export const Icon:FC<IIcon> = ({
    iconName,
    color = '#000000',
    size = '1x',
    onPress,
})=> {
    return (
        <FontAwesomeIcon 
            icon={iconName}
            color={color}
            size={size}
            onClick={onPress}
        />
    )
}