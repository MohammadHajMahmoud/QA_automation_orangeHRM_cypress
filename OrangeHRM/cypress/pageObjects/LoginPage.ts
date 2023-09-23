class LoginPage {
  elements = {
    userName: () => cy.get('input[name="username"]'),
    password: () => cy.get('input[name="password"]'),
    loginBtn: () => cy.get("button"),
    forgotPassBtn: () => cy.get(".orangehrm-login-forgot-header"),
    resetPassBtn: () => cy.getByClass("orangehrm-forgot-password-button").eq(1),
    successMessage: () =>
      cy
        .get(".orangehrm-forgot-password-title")
        .should("contain.text", "Reset Password link sent successfully"),
    loginFailedMessage: () => cy.get(".oxd-alert-content > .oxd-text"),
    emptyFieldMessage: () => cy.get(".oxd-input-group > .oxd-text"),
    passwordField: () =>
      cy.get(":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input"),
  };
  login(userName: string, password: string) {
    if (userName) {
      this.elements.userName().type(userName);
    }
    if (password) {
      this.elements.password().type(password);
    }
    this.elements.loginBtn().click();
  }

  forgotPassword(userName: string) {
    this.elements.forgotPassBtn().click();
    this.elements.userName().type(userName);
    this.elements.resetPassBtn().click();
    this.elements.successMessage();
  }
  errorMessageEmpty(message: String) {
    cy.url().should(
      "not.eq",
      "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"
    );
    this.elements
      .emptyFieldMessage()
      .should("be.visible")
      .should("contain", message);
  }
  errorMessageLoginFailed(message: String) {
    cy.url().should(
      "not.eq",
      "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"
    );
    this.elements
      .loginFailedMessage()
      .should("be.visible")
      .should("contain", message);
  }

  successfullLogin() {
    cy.url().should(
      "eq",
      "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"
    );
  }
  validatePassHidden() {
    this.elements.passwordField().should("have.attr", "type", "password");
  }

  checkForPasswordSensitivity(userName: string, password: string) {
    this.login(
      userName,
      password.charAt(0).toUpperCase() + password.slice(1).toLowerCase()
    );
    cy.url().should(
      "not.eq",
      "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"
    );
  }
}
export default LoginPage;
