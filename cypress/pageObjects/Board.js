export default class Board {
    constructor() {
        this.column = (columnName) => {
            return cy.get(`.CycleCard_container__3suZ4:contains(${columnName})`);
        };
        this.taskContainer = (columnName) => {
            return this.column(columnName).find('.TaskContainer_taskContainer__2z1k1');
        };
        this.card = (columnName, cardName) => {
            return this.column(columnName).find(`.Task_task__1btSi:contains(${cardName})`);
        };
        this.addItemButton = (columnName) => {
            return this.column(columnName).find('.CycleCard_operationButton__11yd0:contains("Add item")');
        };

        this.enableEditButton = (columnName) => {
            return this.column(columnName).find('.CycleCard_operationButton__11yd0:contains("Enable Edit")');
        };

        this.addItemInput = (columnName) => {
            return this.column(columnName).find('.AddTask_addItemInnerContainer__1N_JK');
        };
        this.saveItemButton = (columnName) => {
            return this.column(columnName).find('.AddTask_saveOperation__3nI-D');
        };
        this.cancelButton = (columnName) => {
            return this.column(columnName).find('.AddTask_cancelOperation__3G31s');
        };
        this.trashCanElement = () => cy.get('.TaskContainer_taskContainer__2z1k1');
    }
}
