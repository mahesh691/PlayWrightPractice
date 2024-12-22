import{test} from "@playwright/test";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";

test("test", async ({page})=>{

const loginPage=new LoginPage(page);
await loginPage.navigateToLoginPage();
await loginPage.fillUserName("Admin");
await loginPage.fillPassword("admin123");
await loginPage.clickOnLoginBtn();
const homePage=new HomePage(page);
await homePage.expectedDashboardVisile();
await page.close();

});