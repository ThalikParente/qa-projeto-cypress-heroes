class CreateHeroPage {
    selectorsList() {
        const selectors = {
            createHeroButton: "[href='/heroes/new'] button",
            nameField: "[data-cy='nameInput']",
            priceField: "[data-cy='priceInput']",
            fansField: "[data-cy='fansInput']",
            savesField: "[data-cy='savesInput']",
            powerSelector: "[data-cy=powersSelect]",
            submitButton: "button.text-white"
        }

        return selectors
    }

    createHero() {
        cy.get(this.selectorsList().createHeroButton).click()
    }

    registerInformation(username, price, fans, saves) {
        cy.get(this.selectorsList().nameField).type(username)
        cy.get(this.selectorsList().priceField).type(price)
        cy.get(this.selectorsList().fansField).type(fans)
        cy.get(this.selectorsList().savesField).type(saves)
        cy.get(this.selectorsList().powerSelector).select('6')
        cy.get(this.selectorsList().submitButton).eq(1).click()
    }
}

export default CreateHeroPage