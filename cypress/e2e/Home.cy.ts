describe("Login Page", () => {
  it("Create Product", () => {
    cy.visit("/");
    cy.get('input[name="email"]').type("teste@teste.com");
    cy.get('input[name="password"]').type("123123");
    cy.get('button[type="submit"]').click();

    cy.get("button").contains("Novo Produto").click();
    cy.get('input[name="dsProduto"]').type("Produto Teste");
    cy.get('input[name="dsCategoria"]').type("Teste");
    cy.get('input[name="cdProduto"]').type("10");
    cy.get('input[name="vlProduto"]').type("10");
    cy.get('input[name="qtdProduto"]').type("10");
    cy.get('button[type="submit"]').click();
    cy.get("h2").contains("Produto cadastrado com sucesso!");
  });

  it("Update Product", () => {
    cy.visit("/");
    cy.get('input[name="email"]').type("teste@teste.com");
    cy.get('input[name="password"]').type("123123");
    cy.get('button[type="submit"]').click();

    cy.get("a").contains("Editar").click();
    cy.get('input[name="dsProduto"]').type(" Editado");
    cy.get('button[type="submit"]').click();
    cy.get("h2").contains("Produto atualizado com sucesso!");
  });

  it("Delete Product", () => {
    cy.visit("/");
    cy.get('input[name="email"]').type("teste@teste.com");
    cy.get('input[name="password"]').type("123123");
    cy.get('button[type="submit"]').click();

    cy.get("button").contains("Excluir").click();
    cy.get("button").contains("Sim").click();
    cy.get("h2").contains("Produto excluído com sucesso");
  });
});
