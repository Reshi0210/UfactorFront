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

  CreatePdfWhitHtmlElementInput(){



      const pdfdefinition:any={content:[{text:"Detalles del Trabajador: " +this.CreateContentOfPdfReport()}]}
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
      result+="CI:"+this.workerInput.ci +" \n";
      result+="Nombre:"+this.workerInput.firstName +" \n";
      result+="Apellidos:"+this.workerInput.secondName +"";
      result+=this.workerInput.lastName+" \n";
      result+="Sexo:"+this.workerInput.sex+" \n";
      result+="Raza:"+this.workerInput.race+" \n";
      result+="Lugar Defensa:"+this.workerInput.defensePlace+" \n\n";
      result+="Integraciones politicas:\n"
      this.workerInput.politiclist.forEach(p =>result+="-"+p.organ+"\n")
      result+="\n"
      result+="Escolaridades:\n"
      this.workerInput.scholarShiplist.forEach(s=>result+="-"+s.scholarName+":"+s.scholarLevel+"\n")
      result+="\n"
      result+="Cargo:"+this.workerInput.position.positionName+" \n";
      result+="Grupo Escala:"+this.workerInput.position.scaleGroup.scale+" \n";
      result+="Departamento:"+this.workerInput.department.departamentName+" \n";
      result+="Cargo:"+this.workerInput.active+" \n";



       return result
     }


}
