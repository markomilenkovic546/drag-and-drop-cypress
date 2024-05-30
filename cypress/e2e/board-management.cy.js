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
});
