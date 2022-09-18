/// <reference types="cypress" />

import { Test } from "../../templates/Test";


let b = () => {
    cy.visit('https://example.cypress.io/todo')
}

var t = new Test(b);
t.test();