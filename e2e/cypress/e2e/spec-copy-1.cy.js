describe("Тесты формы авторизации", () => {
  it("Позитивный кейс: успешная авторизация", () => {
    cy.visit("https://login.qa.studio");
    cy.get('input[name="login"]').type("german@dolnikov.ru");
    cy.get('input[name="password"]').type("iLoveqastudio1");
    cy.get('button[type="submit"]').click();
    cy.get(".success-message").should("contain", "Успешная авторизация");
    cy.get(".close-button").should("exist");
  });

  it("Тест логики восстановления пароля", () => {
    cy.visit("https://login.qa.studio");
    cy.contains("Забыли пароль?").click();
    cy.get('input[name="email"]').type("example@email.com");
    cy.get(".success-message").should("contain", "На ваш email отправлено письмо");
    cy.get(".close-button").should("exist");
  });

  it("Негативный кейс: неправильный пароль", () => {
    cy.visit("https://login.qa.studio");
    cy.get('input[name="login"]').type("german@dolnikov.ru");
    cy.get('input[name="password"]').type("incorrect_password");
    cy.get('button[type="submit"]').click();
    cy.get(".error-message").should("contain", "Неправильный пароль");
    cy.get(".close-button").should("exist");
  });

  it("Негативный кейс: неправильный логин", () => {
    cy.visit("https://login.qa.studio");
    cy.get('input[name="login"]').type("incorrect_email");
    cy.get('input[name="password"]').type("iLoveqastudio1");
    cy.get('button[type="submit"]').click();
    cy.get(".error-message").should("contain", "Неправильный логин");
    cy.get(".close-button").should("exist");
  });

  it("Негативный кейс: валидация логина", () => {
    cy.visit("https://login.qa.studio");
    cy.get('input[name="login"]').type("invalidlogin");
    cy.get('input[name="password"]').type("iLoveqastudio1");
    cy.get('button[type="submit"]').click();
    cy.get(".error-message").should("contain", "Неверный формат email");
    cy.get(".close-button").should("exist");
  });

  it("Проверка на приведение к строчным буквам", () => {
    cy.visit("https://login.qa.studio");
    cy.get('input[name="login"]').type("GerMan@Dolnikov.ru");
    cy.get('input[name="password"]').type("iLoveqastudio1");
    cy.get('button[type="submit"]').click();
    cy.get(".success-message").should("contain", "Успешная авторизация");
    cy.get(".close-button").should("exist");
  });

  it("Проверка на баг с приведением к строчным буквам", () => {
    cy.visit("https://login.qa.studio");
    cy.get('input[name="login"]').type("MaXiM@qa.studio");
    cy.get('input[name="password"]').type("iLoveqastudio1");
    cy.get('button[type="submit"]').click();
    cy.get(".success-message").should("not.exist"); // Ожидаем, что авторизация не произойдет
  });
});
