import { TableGenerator } from '../../utils/table.generator';

export const getCardAnnounced = () => {
    const tableGenerator = new TableGenerator();
    return tableGenerator.getRandomOneCard()[0];
};


