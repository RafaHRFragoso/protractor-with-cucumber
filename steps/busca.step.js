'use strict'
let chai = require('chai');
let chaiAsPromised =require('chai-as-promised');
const BuscaPage = require('../pages/busca.page.js');

chai.use(chaiAsPromised);
const expect = chai.expect;

module.exports = function(){
  const buscaPage = new BuscaPage();

  this.Then(/^que eu esteja na Loja Integrada$/, function() {
    buscaPage.visit();
  });

  this.Then(/^eu busco o filme "([^"]*)"$/, function(filme) {
    buscaPage.pesquisar(filme);
  });

  this.Then(/^visualizo o resultado de busca com apenas esse filme$/,{timeout: 50 * 1000},function(callback) {
    expect(buscaPage.produtoPesquisado.getText()).to.eventually.contain('Senhor dos Anéis - As Duas Torres').and.notify(callback);
  });

};
