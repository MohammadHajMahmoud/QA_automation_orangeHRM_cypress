import { Employee } from './employeeInterface/employee'
class PIMTab{
    elements={
        martialStatusDropDown : () => cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input'),
       martialStatusDropDownOpions :()=> cy.get('.oxd-select-dropdown'),
       dateOfBirth :()=> cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input'),
       maleRadioInput :()=> cy.get(':nth-child(1) > :nth-child(2) > .oxd-radio-wrapper > label > .oxd-radio-input'),
       femaleRadioInput:()=> cy.get(':nth-child(2) > :nth-child(2) > .oxd-radio-wrapper > label > .oxd-radio-input'),
       smokeCheckBox:()=> cy.get(':nth-child(2) > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon'),
       savePersonalInfoButton :()=> cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button'),
       tableRow:()=> cy.get('.oxd-table-body > :nth-child(1) > .oxd-table-row'),
       employeeIdCell:()=> cy.get('.oxd-table-body > :nth-child(1) > .oxd-table-row > :nth-child(2)'),
       employeefirstAndMiddleNameCell :()=> cy.get('.oxd-table-body > :nth-child(1) > .oxd-table-row > :nth-child(3)'),
       employeeLastNameCell :()=> cy.get('.oxd-table-body > :nth-child(1) > .oxd-table-row > :nth-child(4)'),
       employeeIdInput:()=>cy.get(':nth-child(2) > .oxd-input'),
       searchEmployeeButton:()=>cy.get('.oxd-form-actions > .oxd-button--secondary')
    }
    
    insertEmployeeInfo(martialStatus: string,birthday:string,gender : Number,smoker: boolean){
        this.elements.martialStatusDropDown().click({force: true})
        this.elements.martialStatusDropDownOpions().contains(martialStatus).click({force: true})
        this.elements.dateOfBirth().type(birthday)
        this.elements.dateOfBirth().should('have.value', birthday);
        if(gender == 1){
            this.elements.maleRadioInput().click({force: true})
        }else if(gender==2){
            this.elements.femaleRadioInput().click({force: true})
        }
        if(smoker){
            this.elements.smokeCheckBox().click({force: true})
        }
        this.elements.savePersonalInfoButton().click()
    }
    searchForAddedEmployeeById(employeeData : Employee){
        this.elements.employeeIdInput().type(employeeData.employeeId)
       this.elements.searchEmployeeButton().click({force: true});
       this.elements.employeeIdCell().should('contain',employeeData.employeeId)
       this.elements.employeefirstAndMiddleNameCell().should('contain',`${employeeData.firstName} ${employeeData.middleName}`)
       this.elements.employeeLastNameCell().should('contain',employeeData.lastName)

    }
}
export default PIMTab
