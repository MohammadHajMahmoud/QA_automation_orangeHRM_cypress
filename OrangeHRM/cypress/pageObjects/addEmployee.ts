class addEmployee
{
    elements={
        MainMenuItems: () => cy.get('.oxd-sidepanel-body'),
        AddEmp: () => cy.get('.oxd-button--secondary'),
        EmployeeInputName: () => cy.get('.--name-grouped-field'),
        saveNewEmp: () => cy.get('button[type="submit"]'),
        //CreateLoginDetailsItems : ()=> ,
        CreateLoginDetailsSwitch:()=>cy.get('.oxd-switch-wrapper')
        

    }
    

    addNewEmployee(firstName:string, MiddleName:string, LastName:string){
     this.elements.MainMenuItems().contains('PIM').click();
     this.elements.AddEmp().eq(1).click()
     this.elements.EmployeeInputName().children().eq(0).type(firstName)
     this.elements.EmployeeInputName().children().eq(1).type(MiddleName)
     this.elements.EmployeeInputName().children().eq(2).type(LastName)
     this.elements.CreateLoginDetailsSwitch().click()
    }
 
}
export default addEmployee;