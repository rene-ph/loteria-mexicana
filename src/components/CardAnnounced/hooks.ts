import { TableGenerator } from '../../utils/table.generator';

export const getCardAnnounced = () => {
    return TableGenerator.getRandomOneCard()[0];
};


