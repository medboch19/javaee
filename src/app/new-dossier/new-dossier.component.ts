import { Component, OnInit } from '@angular/core';
import { Dossier } from '../model/Dossier';
import { DossierService } from '../services/dossier.service';

@Component({
  selector: 'app-new-dossier',
  templateUrl: './new-dossier.component.html',
  styleUrls: ['./new-dossier.component.css']
})
export class NewDossierComponent implements OnInit {

  constructor(private dossierService:DossierService) { }
  
  addDossier:Dossier={
    dateLimite:null,
    existanceFormulaire:false,
    existanceADSA: false ,
  existanceATGC: false,
  existanceCD: false,
    existanceRDEC: false,
    existancePhoto: false,
  existanceCIN: false,
    existanceEnveloppe: false,
   }
  ngOnInit() {
  }
  dossier: Dossier= new Dossier;

  saveDossier(){
    console.log("this.addDossier",this.addDossier)
    this.dossierService.saveDossier(this.addDossier)
      .subscribe( data=>{
        alert("le numéro de votre dossier : "+data.idDossier);
    }, error=> {
      console.log(error)
    })
        //console.log(this.contact);
      }


      
    
}
