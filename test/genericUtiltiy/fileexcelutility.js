import excel from "exceljs"
class ReadandWriteDataFromExcelSheet{
    async readData(filepath,Sheetname,rownum,cellnum)
    {
        let book=new excel.Workbook();
        await book.xlsx.readFile(filepath)
             let sheet =book.getWorksheet(Sheetname);
           let   exceldata=sheet.getRow(rownum).getCell(cellnum);
           return exceldata;
    }

    async writeData(filepath,Sheetname,rownum,cellnum,val)
    {
        let book=new excel.Workbook();
        await book.xlsx.readFile(filepath);
              let   sheet=book.getWorksheet(Sheetname);
              sheet.getRow(rownum).getCell(cellnum).value=val;
              await book.xlsx.writeFile(filepath);

    }

}
