'use strict'
let chai = require('chai');
let chaiAsPromised =require('chai-as-promised');
const TodoPage = require('../pages/todo.page.js');

chai.use(chaiAsPromised);
const expect = chai.expect;

module.exports = function(){
  const todoPage = new TodoPage();

  this.Given(/^I go to "([^"]*)"$/, function (site) {
    todoPage.visit(site);
  });

  this.When(/^I add "([^"]*)" in the task field$/, function (task) {
    todoPage.addTask(task);
  });

  this.When(/^I click the add button$/, function () {
    todoPage.submitTask();
   });

   this.Then(/^I should see my new task in the list$/, {timeout: 50 * 1000},function (callback) {
    var todoList = todoPage.todoList;
     expect(todoList.count()).to.eventually.equal(3);
     expect(todoList.get(2).getText()).to.eventually.equal('Be Awesome').and.notify(callback);
  });

};
