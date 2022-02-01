/// <reference types="cypress" />
// @ts-check

import data from "../../support/data.json";
import dayjs from "dayjs";

class HomePage {
  visit() {
    cy.visit('/');
  }

  clickButton(button) {
    cy.intercept('GET', '/', {
      statusCode: 304,
    })
    cy.contains(`${button}`).click(); 
  }

  validatePage(navbar) {
    cy.url().should('contain', `${navbar}`)
  }

  validateMainText(){
    cy.title().should('eq', 'Rain Instant Payment')

  }
  validateTextCarousel(text) {
    cy.intercept('GET', '/static/*', {
      statusCode: 304,
    })
    cy.get('[id="howItWorks"]').should('contain', `${text}`)
  }
  goHowItWorks() {
    cy.contains('How it works').click(); 
  }

  clickCarousel(text) {
   switch (text) {
     case 'RAIN MOBILE APP':
      cy.get('[for="mobile_1"]').click()
      break;
      case 'HOW WE PAY OUR BILLS':
        cy.get('[for="bills_2"]').click()
        break;
      case 'EASY INTEGRATIONS':
        cy.get('[for="integrtions_0"]').click()
        break;
    }
  }

  goToBottom() {
    cy.get('footer').scrollIntoView()
  }
}
export default new HomePage();
