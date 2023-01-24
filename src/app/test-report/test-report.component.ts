import { Component, OnInit } from '@angular/core';
import  pdfMake from "pdfmake/build/pdfmake";
import  pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-test-report',
  templateUrl: './test-report.component.html',
  styleUrls: ['./test-report.component.css']
})
export class TestReportComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  pdf(){
    const pdfdefinition:any={
      content:[{text:"hola soy tu primer reporte"}]
    }

    const pdf=pdfMake.createPdf(pdfdefinition);
    pdf.open();

  }


}
