/// <reference types="cypress" />
import LoginPage from "../../../pageObjects/LoginPage"
import addEmployee from "../../../pageObjects/addEmployee"
const addEmp : addEmployee = new addEmployee();
const logee: LoginPage = new LoginPage();
describe("Login Page", () => {
    beforeEach(() => {
      cy.visit(
        "/web/index.php/auth/login"
      );
      logee.login('admin','admin123')
    });

    it('add an employee', () => {
        addEmp.addNewEmployee('ahmad','mohsen','gaming')
    });
});
