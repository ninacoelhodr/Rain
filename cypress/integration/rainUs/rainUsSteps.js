import { Given, Then, When, And } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../pages/homePage";

Given('I navigate to the main page of rain.us', () => {
  HomePage.visit()
})
Given('go to How it works', () => {
  HomePage.goHowItWorks()
})
Given('I am at the bottom of the page', () => {
  HomePage.goToBottom()
})
When('I click {string}', (button) => {
  HomePage.clickButton(button)
})

When('I click {string} carousel', (button) => {
  HomePage.clickCarousel(button)
})

Then('I should see be redirect to the {string} page', (navbar) => {
  HomePage.validatePage(navbar)
})

Then('I should see the {string}', (text) => {
  HomePage.validateTextCarousel(text)
})

Then('I should see the main page with details about the rain.us', () => {
  HomePage.validateMainText()
})