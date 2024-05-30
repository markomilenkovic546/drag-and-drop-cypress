import Board from '../pageObjects/Board';
import * as columns from '../fixtures/data.json';
import { faker } from '@faker-js/faker';
const board = new Board();

describe('Board management - Desktop viewport', () => {
    beforeEach(() => {
        cy.viewport('macbook-15');
        cy.visit('/');
    });
    it('User should be able to create a new card', () => {
        const cardName = faker.word.verb();
        board.addItemButton(columns[0].name).click();
        board.addItemInput(columns[0].name).type(cardName);
        board.saveItemButton(columns[0].name).click();
        board.card(columns[0].name, cardName).should('be.visible');
        board.addItemButton(columns[0].name).should('be.visible');
        board.enableEditButton(columns[0].name).should('be.visible');
    });
    it('User should be able to move a card to other column', () => {
        const dataTransfer = new DataTransfer();
        board.card(columns[0].name, columns[0].cards[0].name).trigger('dragstart', { dataTransfer });
        board.taskContainer(columns[1].name).trigger('drop', { dataTransfer });
        board.card(columns[1].name, columns[0].cards[0].name).should('be.visible');
    });
    it('User should be able to delete card', () => {
        const dataTransfer = new DataTransfer();
        board.card(columns[0].name, columns[0].cards[0].name).trigger('dragstart', { dataTransfer });
        board.trashCanElement().trigger('drop', { dataTransfer });
        board.card(columns[0].name, columns[0].cards[0].name).should('not.exist');
    });
});
