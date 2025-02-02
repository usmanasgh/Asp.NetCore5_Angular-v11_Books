import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { genreCreationDTO } from '../genres.model';

@Component({
  selector: 'app-edit-genre',
  templateUrl: './edit-genre.component.html',
  styleUrls: ['./edit-genre.component.css']
})


export class EditGenreComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute){}
  
  model : genreCreationDTO = {name : 'Titanic'};

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      //alert(params.id); 
    });
  }

saveChanges(genreCreationDTO : genreCreationDTO){
  console.log(genreCreationDTO);
  //this.router.navigate(['/genres'])
}

}
