import { Component, Input, OnInit } from '@angular/core';
import  pdfMake from "pdfmake/build/pdfmake";
import  pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas'
import { Worker } from '../models/worker';

@Component({
  selector: 'app-worker-detail-report',
  templateUrl: './worker-detail-report.component.html',
  styleUrls: ['./worker-detail-report.component.css']
})
export class WorkerDetailReportComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {}

  @Input() HtmlElementInput:HTMLElement;
  @Input() workerInput:Worker;

  async CreatePdfWhitHtmlElementInput(){

    

      const pdfdefinition:any={content:[
        
        {image: await this.getBase64ImageFromURL(),},
        {text:"INFORME PRELIMINAR DEL TRABAJADOR Y SU PLAN DE CARRERAS" +this.CreateContentOfPdfReport()},

        {text: 'REGISTRO DE CALIFICACIÓN', margin: [0, 20, 0, 8]},
        {
          style: 'tableExample',
          table: {
            body: [
              ['CALIFICACIÓN ALCANZADA', 'CALIFICACIÓN ACTUAL', 'PLAN DE CARRERAS'],
              ['Doctorado: '+this.workerInput.careerPlan.doctorado.scholarName, 'Doctorado: '+this.workerInput.careerPlan.doctoradoP.scholarName, 'Doctorado: '+this.workerInput.careerPlan.doctoradoF.scholarName],
              ['Master:'+this.workerInput.careerPlan.master.scholarName, 'Master: '+this.workerInput.careerPlan.masterP.scholarName, 'Master: '+this.workerInput.careerPlan.masterF.scholarName],
              ['Postgrado1:'+this.workerInput.careerPlan.posgrado1.scholarName, 'Postgrado1: '+this.workerInput.careerPlan.posgrado1P.scholarName, 'Postgrado1: '+this.workerInput.careerPlan.posgrado1F.scholarName],
              ['Postgrado2:'+this.workerInput.careerPlan.posgrado2.scholarName, 'Postgrado1: '+this.workerInput.careerPlan.posgrado2P.scholarName, 'Postgrado1: '+this.workerInput.careerPlan.posgrado2F.scholarName],
              ['F Piramidal:'+this.workerInput.careerPlan.formacionPiramidal.scholarName, 'F Piramidal:'+this.workerInput.careerPlan.formacionPiramidalP.scholarName, 'F Piramidal:'+this.workerInput.careerPlan.formacionPiramidalF.scholarName],
              ['Idioma óptimo:'+this.workerInput.careerPlan.idiomaOptimo.scholarName, 'Idioma óptimo:'+this.workerInput.careerPlan.idiomaOptimoP.scholarName, 'Idioma óptimo:'+this.workerInput.careerPlan.idiomaOptimoF.scholarName],
              ['Idioma elemental:'+this.workerInput.careerPlan.idiomaelemental.scholarName, 'Idioma elemental:'+this.workerInput.careerPlan.idiomaelementalP.scholarName, 'Idioma elemental:'+this.workerInput.careerPlan.idiomaelementalF.scholarName],
            ]
          },
          layout: {
            fillColor: function (rowIndex, node, columnIndex) {
              return (rowIndex % 2 === 0) ? '#CCCCCC' : null;
            }
          }
        },
      
    
    
    ]}
      
      const pdf=pdfMake.createPdf(pdfdefinition);
      pdf.open();







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

      var result:string="\n \n"
      result+="»CI:"+this.workerInput.ci +" \n";
      result+="»Nombre:"+this.workerInput.firstName +" \n";
      result+="»Apellidos:"+this.workerInput.secondName +"";
      result+=this.workerInput.lastName+" \n";
      result+="»Sexo:"+this.workerInput.sex+" \n";
      result+="»Raza:"+this.workerInput.race+" \n";
      result+="»Lugar Defensa:"+this.workerInput.defensePlace+" \n";
      result+="»Cargo:"+this.workerInput.scholarShip.scholarLevel+" \n";
      result+="»Cargo:"+this.workerInput.scholarShip.scholarName+" \n";
      result+="»Cargo:"+this.workerInput.position.positionName+" \n";
      result+="»Grupo Escala:"+this.workerInput.position.scaleGroup.scale+" \n";
      result+="»Departamento:"+this.workerInput.department.departamentName+" \n";
      result+="»Cargo:"+this.workerInput.active+" \n\n";

      result+="»Direccion :"+this.workerInput.adress.province.name+"/"+this.workerInput.adress.municipality.name+"/"+this.workerInput.adress.street+"/"+
      this.workerInput.adress.numberOrPlace+" \n\n";





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
