export const URLs = {
    recruitment: 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/recruitment/candidates?limit=50&offset=0&model=list&sortField=candidate.dateOfApplication&sortOrder=DESC'
}
export default class getRecruitments{
    static getRecruitmentsViaAPI(){
        cy.getRecruitmentList(URLs.recruitment)
    }
}