class likeButtonPage {
    selectorsList() {
        const selectors = {
            likeButton: "[data-cy='like']",
            LoginAlert: ".modal-container .open"
        }

        return selectors
    }

    LikeButton() {
        cy.get(this.selectorsList().likeButton).eq(1).click()
        cy.get(this.selectorsList().LoginAlert).should('be.visible')
    }
}

export default likeButtonPage