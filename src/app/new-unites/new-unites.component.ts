import { Component, OnInit } from '@angular/core';
import { UnitedeValeur } from '../model/UnitedeValeur';
import { UnitedeValeurService } from '../services/unitede-valeur.service';
import { CandidatService } from '../services/candidat.service';

@Component({
  selector: 'app-new-unites',
  templateUrl: './new-unites.component.html',
  styleUrls: ['./new-unites.component.css']
})
export class NewUnitesComponent implements OnInit {
  candidatData: Array<any>=[];

  constructor(private unitedeValeurService:UnitedeValeurService , private candidatService:CandidatService) { }
  addUnites:UnitedeValeur= {
    idCandidat:null,
    nom:null,
    credit:null,
    discipline:null
     }
  
  ngOnInit() {
    this.getAllCondidatss();
  }
  unitedeValeur: UnitedeValeur= new UnitedeValeur;

  saveUnites(){
    console.log("hedhaaa achh t3aabaaaa",this.addUnites)
    this.unitedeValeurService.saveUnites(this.addUnites)
    .subscribe( data=>{
      console.log(data)
    }, error=> {
      console.log(error)
    })
        //console.log(this.contact);
      }

      getAllCondidatss() {
        this.candidatService.getAllCandidat().subscribe( data => {
          console.log(' data ', data);
          this.candidatData=data.map(list => list.cin);
          console.log(' searchedData ', this.candidatData);
        }, error => {
          console.log('error', error);
        });
      }
}

      
    

