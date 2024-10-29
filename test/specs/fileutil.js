import fs from "fs"
        let data= fs.readFileSync("./test/testData/manufacturecredentials.json");
               let retailer=JSON.parse(data)

describe("file",()=>{
    it("filconn",async()=>{
      
      await browser.url("https://www.flipkart.com")
    })
})