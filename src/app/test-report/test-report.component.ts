import { Component, Input, OnInit } from '@angular/core';
import  pdfMake from "pdfmake/build/pdfmake";
import  pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas'
import { Scholarship } from '../models/scholarship';


@Component({
  selector: 'app-test-report',
  templateUrl: './test-report.component.html',
  styleUrls: ['./test-report.component.css']
})
export class TestReportComponent implements OnInit {

  @Input() HtmlElementInput:HTMLElement;
  @Input() Lista:any[];



mostrar="Resultado de aplicar filtros, criterios cumplidos para:"



l=localStorage.getItem("ned")



  constructor() { }

  ngOnInit(): void {
    
  }

  


  async CreatePdfWhitHtmlElementInput(){

  console.log(this.Lista);



    const pdfdefinition:any={content:[ 

      {image: await this.getBase64ImageFromURL(),},


      {text:"INFORME PRELIMINAR DEL LEVANTAMIENTO DE LA CALIFICACIÓN DE LOS TRABAJADORES DEL GRUPO CUBANACAN  "+"\n "},

    {text:this.mostrar},
   { text:"\n "+
     this.CreateContentOfPdfReport()
    },

    {text:"para un total de: "+this.Lista.length}]}
    const pdf=pdfMake.createPdf(pdfdefinition);
    pdf.open();



    //const doc = new jsPDF();
    //doc.text('Hello world!', 10, 10);
    //doc.save('hello-world.pdf');




    /* const doc = new jsPDF('p', 'pt', 'a4');
      const options = {
        background: 'white',
        scale: 5
      };
      html2canvas(this.HtmlElementInput, options).then((canvas) => {

        const img = canvas.toDataURL('image/PNG');

        // Add image Canvas to PDF
        const bufferX = 15;
        const bufferY = 15;
        const imgProps = (doc as any).getImageProperties(img);
        const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');
        return doc;
      }).then((docResult) => {
        docResult.save(`${new Date().toISOString()}_Reporte.pdf`);
      });*/
  }

 CreateContentOfPdfReport():String{

  var result:String=
   "\n" +"----------------------------------------------------------------------------------------------------------------------------------------------------------"+"\n"

  this.Lista.forEach((worker)=>{ result+="ci:"+worker.ci+"«»"+worker.firstName+ " "+ worker.secondName+" "+worker.lastName+"«»"+worker.scholarShip.scholarName+ "«»"+worker.entidad.name + "\n-"
  +"----------------------------------------------------------------------------------------------------------------------------------------------------------"+"\n"})


   return result
 }




 getBase64ImageFromURL() {
  return new Promise((resolve, reject) => {
    var img = new Image();
    img.setAttribute("crossOrigin", "anonymous");

    img.onload = () => {
      var canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;

      var ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);

      var dataURL = canvas.toDataURL("image/jpg");

      resolve(dataURL);
    };

    img.onerror = error => {
      reject(error);
    };

    img.src =  "./assets/logo.jpg"
  });
}



  }




 
