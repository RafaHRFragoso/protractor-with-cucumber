'use strict'

class BuscaPage {
  constructor(){
    this.campoBusca = element(by.id('auto-complete'));
    this.botaoBusca = element(by.css('#form-buscar > button'));
    this.produtoPesquisado = element(by.css('#corpo > div > div.secao-principal.row-fluid > div.conteudo.span9 > div.listagem.borda-alpha > h1'));
  }

  visit(){
    browser.get('http://tghcastro.lojaintegrada.com.br/');
  }

  pesquisar(filme){
    this.campoBusca.sendKeys(filme);
    this.botaoBusca.click();
    browser.sleep(8000);
  }
}

module.exports = BuscaPage;
