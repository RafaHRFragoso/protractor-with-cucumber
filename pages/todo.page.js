'use strict'

class TodoPage {
  constructor(){
    console.log('----------------------------------------------------------------');
    this.taskList = element(by.model('todoList.todoText'));
    this.taskButton = element(by.css('[value="add"]'));
    this.todoList = element.all(by.repeater('todo in todoList.todos'));
  }

  visit(site){
    browser.get(site);
  }

  addTask(task){
    this.taskList.sendKeys(task);
  }

  submitTask(){
    this.taskButton.click();
  }

}
module.exports = TodoPage;
