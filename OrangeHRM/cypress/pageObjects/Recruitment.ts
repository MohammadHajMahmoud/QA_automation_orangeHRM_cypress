export class Recruitment {
    verifyNumberOfRecruitmentRecoards(apiRecaords: number){
        cy.get('.oxd-table-body').children().should('have.length', apiRecaords)
    }
    }
