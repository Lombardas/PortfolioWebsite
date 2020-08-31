import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

	public title: string;
	public subtitle : string;
	public email: string;
  public linkedin: string;
  public gitHub: string;

  constructor() {

  	this.title= "Anastasio Almansa";
  	this.subtitle= "Web developer";
  	this.email= "at.almansa@gmail.com";
    this.linkedin= "https://www.linkedin.com/in/anastasio-almansa-8baa5747/";
    this.gitHub= "https://github.com/Lombardas?tab=repositories";
   }

  ngOnInit(): void {
  }

}
