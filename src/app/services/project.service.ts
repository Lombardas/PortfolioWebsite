import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'; //para hacer petciones AJAX
import {Observable} from 'rxjs/Observable'; //problema
import {Project} from '../models/project'; //nuestro modelo para Project.
import {Global} from './global'; //fichero de conf global.

@Injectable()
export class ProjectService{

	public url: string;

	constructor(
		private _http: HttpClient
		){
		this.url = Global.url;
	};

	testService()
	{
		return 'Servicio corriendo correctamente en angular';

	}

	saveProject(project:Project): Observable<any>
	{
		let params = JSON.stringify(project);
		let headers = new HttpHeaders().set('Content-Type','application/json');

		return this._http.post(this.url+'save-project',params,{headers: headers});
	}

	getProjects():Observable<any>
	{
		let headers = new HttpHeaders().set('Content-Type','application/json');
		return this._http.get(this.url+'projects',{headers:headers});

	}
}//end class