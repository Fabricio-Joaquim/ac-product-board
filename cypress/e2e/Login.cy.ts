describe("Login Page", () => {
  it("Login", () => {
    cy.visit("/");
    cy.get('input[name="email"]').type("teste@teste.com");
    cy.get('input[name="password"]').type("123123");
    cy.get('button[type="submit"]').click();

    cy.url().should("include", "/dashboard");
  });

  it("create User", () => {
    cy.visit("/");
    cy.get("a").contains("Cadastra-se").click();
    cy.get('input[name="name"]').type("Teste");
    cy.get('input[name="email"]').type("teste1@teste.com");
    cy.get('input[name="password"]').type("123123");
    cy.get('input[name="confirmPassword"]').type("123123");
    cy.get('button[type="submit"]').click();
    cy.get("h2").contains("Usuário cadastrado com sucesso!");
  });
});

export {};
