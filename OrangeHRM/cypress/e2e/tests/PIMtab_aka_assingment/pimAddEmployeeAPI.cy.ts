/// <reference types="cypress" />
import LoginPage from "../../../pageObjects/LoginPage"
import PimTab from "../../../pageObjects/PIMTab"
const pimTab: PimTab = new PimTab();
const logee: LoginPage = new LoginPage();
let employeeEmpNum = 0
let firstName=""
let lastName =""
let employeeId = 0
describe("Login Page", () => {
    beforeEach(() => {
      cy.visit(
        "/web/index.php/auth/login"
      );
      logee.login('admin','admin123')
    });
  
 
   it('Add Employee',()=>{
    cy.fixture('employee.json').then((employee) => {
        cy.request({
            method: 'POST',
            url: '/web/index.php/api/v2/pim/employees', 
            body: {
              lastName:employee.lastName,
              firstName: employee.firstName,
              middleName: employee.middleName,
              employeeId: employee.employeeId
          },
          }).then((response) => {
            expect(response.status).to.equal(200); 
              employeeEmpNum = response.body.data.empNumber
              firstName = response.body.data.firstName
              lastName = response.body.data.lastName
              employeeId = response.body.data.employeeId
          });
    })

   })
     it('confirm header & add employee personal details', () => {
            cy.visit(`/web/index.php/pim/viewPersonalDetails/empNumber/${employeeEmpNum}`)
            cy.get('.orangehrm-edit-employee-name > .oxd-text').should('have.text', `${firstName} ${lastName}`);
            cy.fixture('employee.json').then((employee) => {
                pimTab.insertEmployeeInfo(employee.martialStatus,employee.birthday,employee.gender,employee.smoker)
            })
            
  });
     it('Search for added employee', () => {
     cy.visit('/web/index.php/pim/viewEmployeeList')
     cy.fixture('employee.json').then((employee) => {
      pimTab.searchForAddedEmployeeById(employee)
  })
    });
});
