import getRecruitments from "../../../support/Pagehelpers/RecPageHelper"
import LoginPage from "../../../pageObjects/LoginPage";
import {Recruitment} from "../../../pageObjects/Recruitment";
const logee: LoginPage = new LoginPage();
import { faker } from '@faker-js/faker';
const rec :Recruitment = new Recruitment()
let candidateId:Number
describe('Recruitment Page logic', () => {
    beforeEach(() => {
        cy.visit("/web/index.php/auth/login");
        logee.login('admin','admin123')
      });
    // it('verify number of recoards from api ', () => {
    //    getRecruitments.getRecruitmentsViaAPI();
    // })

    it('add candidate via api',()=>{
        cy.api({
            method: 'POST',
            url: '/web/index.php/api/v2/recruitment/candidates',
            body: {
              firstName: faker.name.firstName(),
              middleName: faker.internet.userName(),
              lastName: faker.internet.userName(),
              email: faker.internet.email(),
              dateOfApplication: "2023-10-14",
            }
          }).then((response) => {
            expect(response.status).to.equal(200);
             candidateId = response.body.data.id;
              console.log(candidateId)
          });
          
    })
    it('Change candidate status to Shortlisted', () => {
      cy.request({
        method: 'PUT',
        url: `/web/index.php/api/v2/recruitment/candidates/${candidateId}/shortlist`,
      })
    });
    it('schdule interview using ui', () => {
      cy.visit(`/web/index.php/recruitment/addCandidate/${candidateId}`);
      cy.get('.oxd-button--success').click({force: true} );
      cy.get(':nth-child(2) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('QA');
      cy.get('.oxd-autocomplete-text-input > input').type('a');
      cy.wait(3000);
      cy.get('.oxd-autocomplete-option').eq(0).click();
      cy.get('.oxd-date-input > .oxd-input').type('2023-10-30');
      cy.get('.oxd-select-option').click();
      //assertion that interview is scheduiled
      cy.get('.orangehrm-recruitment-status > .oxd-text').should('have.text', 'Status: Interview Scheduled')
    });

})


