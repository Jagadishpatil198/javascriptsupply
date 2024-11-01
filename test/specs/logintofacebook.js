describe("login to facebook",()=>{
    it("login ",async()=>{
        await browser.maximizeWindow();
        await browser.url("https://www.facebook.com/");

        await browser.implicitWait(3000);

        await browser.waitUntil(3000);

    })
})