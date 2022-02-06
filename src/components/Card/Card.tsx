import { useCallback, useState } from 'react';

import { CardHolderImage,TokenHolderImage,WrapperCard } from './Card.styled';
import token from '../../assets/token.png';

interface Props {
    imageUrl?: string | null;
    hasTokenEnabled?: boolean;
    [rest:string]: any;
}

export const Card = ( {imageUrl, hasTokenEnabled=true, ...rest}: Props) : JSX.Element  => {

    const [showToken, setShowToken] = useState(false);

    const handleClick = useCallback(() => {
        setShowToken(!showToken);
    }, [showToken]); 

    return (
            <WrapperCard>
                <CardHolderImage
                  onClick={handleClick}
                  alt="card" 
                  src={imageUrl ? imageUrl : ""}
                  {...rest} />

                { (showToken && hasTokenEnabled) ? (
                    <TokenHolderImage
                        onClick={handleClick} 
                        alt="token"
                        src={token}
                    />
                ) : null }
            </WrapperCard>
    )
}