import { Card } from '../Card/Card';
import { useGenerationCards } from './hooks';

export const Table = () :JSX.Element => {
    const cards = useGenerationCards();

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