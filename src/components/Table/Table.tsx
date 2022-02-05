import { Card } from '../Card/Card';
import { useGenerationCards } from '../../hooks/useGenerationCards';

type Props = {
  initCard?: Array<string>
}

export const Table = ({ initCard }: Props) :JSX.Element => {
    let cards = null;
    
    if (initCard && initCard?.length > 0) {
      cards = initCard;
    } else {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      cards = useGenerationCards();
    }

    return (
    <div>
        { cards.map((card, index) => {
           return (
                <>
                  <Card imageUrl={card} />
                  {(index+1) % 4 === 0 ? <br/> : null }
                </>
           )
        })
        }
    </div>)
}