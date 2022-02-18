import card1 from '../assets/cards/1.png';
import card5 from '../assets/cards/5.png';
import card7 from '../assets/cards/7.png';
import card8 from '../assets/cards/8.png';
import card9 from '../assets/cards/9.png';
import card10 from '../assets/cards/10.png';
import card11 from '../assets/cards/11.png';
import card13 from '../assets/cards/13.png';
import card15 from '../assets/cards/15.png';
import card16 from '../assets/cards/16.png';
import card17 from '../assets/cards/17.png';
import card18 from '../assets/cards/18.png';
import card19 from '../assets/cards/19.png';
import card20 from '../assets/cards/20.png';
import card21 from '../assets/cards/21.png';
import card22 from '../assets/cards/22.png';
import card23 from '../assets/cards/23.png';
import card24 from '../assets/cards/24.png';
import card27 from '../assets/cards/27.png';
import card28 from '../assets/cards/28.png';
import card29 from '../assets/cards/29.png';
import card30 from '../assets/cards/30.png';
import card31 from '../assets/cards/31.png';
import card32 from '../assets/cards/32.png';
import card33 from '../assets/cards/33.png';
import card34 from '../assets/cards/34.png';
import card35 from '../assets/cards/35.png';
import card36 from '../assets/cards/36.png';
import card39 from '../assets/cards/39.png';
import card40 from '../assets/cards/40.png';
import card41 from '../assets/cards/41.png';
import card43 from '../assets/cards/43.png';
import card44 from '../assets/cards/44.png';
import card45 from '../assets/cards/45.png';
import card46 from '../assets/cards/46.png';

export class TableGenerator {

    cards = [ card1, card5, card7, card8, card9, card10,
              card11, card13, card15, card16, card17, card18, card19,
              card20, card21, card22, card23, card24, card27, card28, card29, card30,
              card31, card32, card33, card34, card35, card36, card39, card40,
              card41, card43, card44, card45, card46];

    static cardAnnounced = [ card1, card5,  card7, card8, card9, card10,
        card11,  card13,  card15, card16, card17, card18, card19,
        card20, card21, card22, card23, card24, card27, card28, card29, card30,
        card31, card32, card33, card34, card35, card36, card39, card40,
        card41, card43, card44, card45, card46];
    
    cardsShuffled: Array<string> = new Array<string>();

    constructor() {
        this.generateTable();
    }

    static getRandomOneCard() {
      this.cardAnnounced = this.shuffle(this.cardAnnounced);
      const newCards = [...this.cardAnnounced];
      const cardToAnnounce = newCards.splice(0,1);
      this.cardAnnounced = newCards;
      return cardToAnnounce;
    }

    generateTable(): string[] {
      this.cardsShuffled = [...this.shuffle(this.cards).splice(0,16)];
      return this.cardsShuffled;
    }

    static  shuffle(array: string[]): string[] {
        var i = array.length,
            j = 0,
            temp;
    
        while (i--) {
    
            j = Math.floor(Math.random() * (i+1));
    
            // swap randomly chosen element with current element
            temp = array[i];
            array[i] = array[j];
            array[j] = temp;
    
        }
    
        return array;
    }

    shuffle(array: string[]): string[] {
        var i = array.length,
            j = 0,
            temp;
    
        while (i--) {
    
            j = Math.floor(Math.random() * (i+1));
    
            // swap randomly chosen element with current element
            temp = array[i];
            array[i] = array[j];
            array[j] = temp;
    
        }
    
        return array;
    }
    
}