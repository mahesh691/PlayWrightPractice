import { Page, expect } from "@playwright/test";

export default class HomePage {
    private readonly dashBoard = "//h6[text()='Dashboard']";

    constructor(private page: Page) {


    }

    async expectedDashboardVisile() {
        // await expect(this.page.ge)
        console.log("We are in home page class")
    }
}