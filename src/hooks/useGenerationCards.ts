import { TableGenerator } from '../utils/table.generator';

export const useGenerationCards = () => {
    const tableGenerator = new TableGenerator();
    return tableGenerator.cardsShuffled;
}