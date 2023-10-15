import {RecPageResponse} from "../respsonses/RecPageRes"
import{Recruitment} from "../../pageObjects/Recruitment"
const rec :Recruitment = new Recruitment()
let numberOfRecords:number
declare global {
    namespace Cypress {
        interface Chainable {
            getRecruitmentList: (requestURL: string) => Chainable<RecPageResponse>;
        }
    }

}
Cypress.Commands.add('getRecruitmentList', (requestURL: string) => {
    cy.intercept('GET', requestURL, (req) => {
        req.headers = {
            ...req.headers,
            'Content-Type': 'application/json'
        };
    }).as('getRecruitmentList');
    cy.visit('/web/index.php/recruitment/viewCandidates'); 
    cy.wait('@getRecruitmentList').then((interception) => {
         numberOfRecords =interception.response.body.meta.total
         rec.verifyNumberOfRecruitmentRecoards(numberOfRecords)
      })
});
