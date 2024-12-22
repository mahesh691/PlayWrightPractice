import { Page } from "@playwright/test";
// import HomePage from "./homepage";

export default class LoginPage {
    private readonly userInputSelector = "//input[@name='username']";
    private readonly passwordInputSelector = "//input[@name='password']";
    private readonly loginBtnSelector = "//button[@type='submit']";

    // Username : Admin

    // Password : admin123
    constructor(private page: Page) {


    }

    async navigateToLoginPage() {
        await this.page.goto("/");
    }

    async fillUserName(userName: string) {
        await this.page.locator(this.userInputSelector).fill(userName);
    }

    async fillPassword(password: string) {
        await this.page.locator(this.passwordInputSelector).fill(password);
    }
    async clickOnLoginBtn() {
        await this.page
            .locator(this.loginBtnSelector)
            .click()
            .catch((error) => {
                console.error('Error : ${error}');
                throw error;
            });
    }

}