import LoginPage from "../../../pageObjects/LoginPage";
import {Recruitment} from "../../../pageObjects/Recruitment";

const logee: LoginPage = new LoginPage();
describe('Recruitment page', () => { 

it('upload file to recrutment ', () => {
    cy.visit('/')
    logee.login("admin","admin123")
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/addCandidate')
    cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type("saed")
    cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type("moha")
    cy.get(':nth-child(3) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type("mohammad@gmail.com")
    cy.get('input[type="file"]').selectFile("cypress/fixtures/certificate.pdf",{force:true})
    cy.wait(2000)
    cy.get('.oxd-file-input-div').should('contain', 'certificate');
    cy.get('.oxd-button--secondary').click()
});
})