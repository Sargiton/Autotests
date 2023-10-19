describe('Тестирование покупки аватара', function () {
  it('Посещение страницы магазина', function () {
    cy.visit('https://pokemonbattle.me/shop');
    cy.get(':nth-child(1) > .auth__input').type('tsvetaevruslan@yandex.ru');
    cy.get('#password').type('Ruslik1');
    cy.get('.auth__button').click();
    cy.get('.header__btns > [href="/shop"]').click();
    cy.get(':nth-child(3) > .shop__button').click(); // Замените селектор и действия на соответствующие вашему сайту
    cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111 1111 1111 1111');
    cy.get(':nth-child(1) > .pay_base-input-v2').type('1225');
    cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
    cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Ruslan Tsvetaev');
    cy.get('.pay-btn').click();
    cy.get('#cardnumber').type('56456');
    cy.get('.payment__submit-button').click();
  });
});
