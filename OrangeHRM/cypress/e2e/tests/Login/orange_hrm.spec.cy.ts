/// <reference types="cypress" />
import LoginPage from "../../../pageObjects/LoginPage"
import  {generateRandomName}  from "../../../modules/randomNameGen"
const validUsername = "admin";
const password = "admin123"
const randomName = generateRandomName();
const logee: LoginPage = new LoginPage();
let userId:number;
describe("Login Page", () => {
  beforeEach(() => {
    cy.visit(
      "/web/index.php/auth/login"
    );
    logee.login(validUsername,password)
  });

 //it('reset password',()=>{
  //  logee.forgotPassword('admin')
 //})
 //it.only('confirm employees locations',()=>{
  //cy.request('/web/index.php/api/v2/dashboard/employees/locations').then((response)=>{
  //  expect(response).property('status').to.equal(200)
 // })
 //})
 it.only('confirm emplyee addtion to the system api',()=>{
  cy.request({
    method: 'POST',
    url: '/web/index.php/api/v2/admin/users', 
    body: {
      username: "andomName",
      password: "admin123",
      status: true,
      userRoleId: 1,
      empNumber: 7
  },
  }).then((response) => {
    expect(response.status).to.equal(200); 
    userId = response.body.data.id
    console.log(userId)
  });
  
 })
 afterEach(() => {
  if(userId){
    cy.request({
      method: 'DELETE',
      url: '/web/index.php/api/v2/admin/users',
      body:{ids : [userId]}
    }).then((response) => {
      expect(response.status).to.equal(200); 
    });
  }
  });
});
