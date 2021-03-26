export default class ReportInquiry {
    constructor(id, userId, title, category, email, dateCreated, lastUpdated, status, listOfDetails) {
        this.id = id
        this.userId = userId
        this.title = title
        this.category = category
        this.email = email
        this.dateCreated = dateCreated
        this.lastUpdated = lastUpdated
        this.status = status
        this.listOfDetails = listOfDetails
    }
}
