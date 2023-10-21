/// <reference types="cypress" />
import LoginPage from "../../../pageObjects/LoginPage";
import PimTab from "../../../pageObjects/PIMTab";
const pimTab: PimTab = new PimTab();
import { faker } from "@faker-js/faker";

const logee: LoginPage = new LoginPage();
let userName = faker.internet.userName();
let password = "admin123";
let empNum = 0;
describe("Login Page", () => {
  beforeEach(() => {
    cy.visit("/web/index.php/auth/login");
  });
  it("Add Employee & Create Login Details then logout", () => {
    logee.login("admin", "admin123");

    cy.fixture("employee.json").then((employee) => {
      cy.api({
        method: "POST",
        url: "/web/index.php/api/v2/pim/employees",
        body: {
          lastName: employee.lastName,
          firstName: employee.firstName,
          middleName: employee.middleName,
          employeeId: employee.employeeId,
        },
      }).then((response) => {
        empNum = response.body.data.empNumber;
        cy.api({
          method: "POST",
          url: "/web/index.php/api/v2/admin/users",
          body: {
            username: userName,
            password: "admin123",
            status: true,
            userRoleId: 2,
            empNumber: empNum,
          },
        });
      });
    });
  });
  it("Login With new user", () => {
    logee.login(userName, password);
  });
});
