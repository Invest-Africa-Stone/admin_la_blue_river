import { CSSProperties, FC, useMemo } from "react";
import { Section } from "@components";

import { useControllers } from './useControllers';
import { Wrapper } from './styles';
import { useScreenSize } from "@utilities/hooks";

export const Signin:FC = ()=> {

    const { isMobile } = useScreenSize();
    const { 
        identifier,
        password,
        setIdentifier,
        setPassword,
        handleSignin,       
    } = useControllers();

    const customSectionStyles:CSSProperties = useMemo(()=> (
        {
            width: isMobile ? '100%' : '40%',
            display: 'flex',
            flexDirection: 'column',
            gap: 5,
        }
    ), [isMobile]);

    return (
        <Wrapper>
            <Section style={customSectionStyles}>
                <label className="input input-bordered flex items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                        d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                    </svg>
                    <input 
                        type="text" className="grow" placeholder="Identifiant" 
                        value={identifier} onChange={e=> setIdentifier(e.target.value)}
                    />
                </label>

                <label className="input input-bordered flex items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                        fillRule="evenodd"
                        d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                        clipRule="evenodd" />
                    </svg>
                    <input 
                        type="password" className="grow" placeholder="Mot de passe"
                        value={password} onChange={e=> setPassword(e.target.value)}
                    />
                </label>

                <button 
                    className="btn" style={{marginTop: 20}}
                    onClick={handleSignin}
                >
                    je me connecte
                </button>
            </Section>
        </Wrapper>
    )
}