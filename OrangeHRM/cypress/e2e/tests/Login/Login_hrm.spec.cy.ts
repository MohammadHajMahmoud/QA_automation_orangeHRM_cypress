import LoginPage from "../../../pageObjects/LoginPage";
const logee: LoginPage = new LoginPage();
describe("Login page", () => {
  beforeEach(() => {
    cy.visit("/web/index.php/auth/login");
  });

  it("Check valid username and password", () => {
    cy.fixture("loginData.json").then((loginData) => {
      logee.login(loginData.userName.valid, loginData.password.valid);
      logee.successfullLogin();
    });
  });
  it("Check invalid uername and valid password", () => {
    cy.fixture("loginData.json").then((loginData) => {
      logee.login(loginData.userName.invalid, loginData.password.valid);
      logee.errorMessageLoginFailed(loginData.errorMsg.invalidLogin);
    });
  });
  it("Check invalid username and invalid password", () => {
    cy.fixture("loginData.json").then((loginData) => {
      logee.login(loginData.userName.invalid, loginData.password.valid);
      logee.errorMessageLoginFailed(loginData.errorMsg.invalidLogin);
    });
  });
  it("Check valid username and invalid password", () => {
    cy.fixture("loginData.json").then((loginData) => {
      logee.login(loginData.userName.valid, loginData.password.invalid);
      logee.errorMessageLoginFailed(loginData.errorMsg.invalidLogin);
    });
  });
  it("Check empty username and an empty password", () => {
    cy.fixture("loginData.json").then((loginData) => {
      logee.login(loginData.empty, loginData.empty);
      logee.errorMessageEmpty(loginData.errorMsg.fieldRequired);
    });
  });
  it("Check valid username and an empty password", () => {
    cy.fixture("loginData.json").then((loginData) => {
      logee.login(loginData.userName.valid, loginData.empty);
      logee.errorMessageEmpty(loginData.errorMsg.fieldRequired);
    });
  });
  it("Check empty username and an valid password", () => {
    cy.fixture("loginData.json").then((loginData) => {
      logee.login(loginData.empty, loginData.password.valid);
      logee.errorMessageEmpty(loginData.errorMsg.fieldRequired);
    });
  });
  it("Check invalid username and an empty password", () => {
    cy.fixture("loginData.json").then((loginData) => {
      logee.login(loginData.userName.invalid, loginData.empty);
      logee.errorMessageEmpty(loginData.errorMsg.fieldRequired);
    });
  });
  it("Check empty username and an invalid password", () => {
    cy.fixture("loginData.json").then((loginData) => {
      logee.login(loginData.empty, loginData.password.invalid);
      logee.errorMessageEmpty(loginData.errorMsg.fieldRequired);
    });
  });
  it("check password visibility", () => {
    logee.validatePassHidden();
  });
  it("Check username sensitivty UpperCase", () => {
    cy.fixture("loginData.json").then((loginData) => {
      logee.login(
        loginData.userName.valid.toUpperCase(),
        loginData.password.valid
      );
      logee.successfullLogin();
    });
  });
  it("Check username sensitivty lowerCase", () => {
    cy.fixture("loginData.json").then((loginData) => {
      logee.login(
        loginData.userName.valid.toLowerCase(),
        loginData.password.valid
      );
      logee.successfullLogin();
    });
  });
  it("check for password sensitivty", () => {
    cy.fixture("loginData.json").then((loginData) => {
      logee.checkForPasswordSensitivity(
        loginData.userName.valid,
        loginData.password.valid
      );
      logee.errorMessageLoginFailed(loginData.errorMsg.invalidLogin);
    });
    
  });
});
