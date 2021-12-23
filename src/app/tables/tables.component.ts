import { AllData } from './../interfaces/all-data';
import { Pokemon } from './../interfaces/pokemon';
import { HomeServiceService } from './../services/home-service.service';
import { TableServiceService } from './../services/table-service.service';
import { PageEvent } from '@angular/material/paginator';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {
  pokeData: Pokemon[];
  allPokeData: AllData = {count: 0, type: [], pokemons: []};
  displayedColumnsData: string[] = ['name', 'url', 'types', 'weight'];
  allTypes: string[] = [];
  firstTime = false;

  constructor(private tableService: TableServiceService) { }

  ngOnInit() {
    this.getTypes();
    this.insertData();
    console.log(this.pokeData);

    console.log(HomeServiceService.data);
  }

  public changePage(page: PageEvent) {
    HomeServiceService.data.pageIndex = page.pageIndex;
    HomeServiceService.data.pageSize = page.pageSize;
    this.insertData();
  }

  filterData(){
    this.insertAllPokeData();

  }

  public insertAllPokeData(){
    this.tableService.getAllPokedata().subscribe((data: any) => {
      this.allPokeData.count = data.count;


      // data.types ---> loop --->insert into allPokeData

      data.results.map((result: any) => {
        this.tableService.getDetails(result.url).subscribe((data2: any) => {
          // console.log(data2);
          this.allPokeData.pokemons.push({name: data2.name,
             url: 'https://pokeapi.co/api/v2/pokemon/'+data2.name, types: data2.types,
              weight: data2.weight, count: data2.count});
        });
      });
      console.log(this.allPokeData);
      this.filterPokemons();
    });
  }

  public getTypes(){
    this.tableService.getAllTypes().subscribe((data: any) => {
      data.results.map((data2: any) => {
        this.allTypes.push(data2.name);
        // console.log(this.allTypes);
      });
    });
  }

  //datos paginados
  public insertData(){
    console.log('hola');

    this.tableService.getPokeData().subscribe((data: any) => {
      this.pokeData = data.results;
      this.pokeData.map((dato, index) =>{
        this.tableService.getDetails(dato.url).subscribe((data2: any) => {
          // console.log(this.pokeData[index]);
          this.pokeData[index].weight = data2.weight;
          this.pokeData[index].types = data2.types;
        });
      });
    });

  }

  filterPokemons(){
    this.allPokeData.pokemons.map((data3: any, index) => {
      // this.allPokeData.type=data3.type.name;
      // console.log(data3.type.name);
      if (!this.firstTime) {
        this.firstTime=true;
        data3.push({name: data3.name,
          url:  'https://pokeapi.co/api/v2/pokemon/'+data3.name, types: data3.types, weight: data3.weight,
           count: data3.count});
      } else {
        if(data3.type.name==='fire'){
          console.log('Los de fuego ');
          this.allPokeData.pokemons.push({name: data3.name,
             url:  'https://pokeapi.co/api/v2/pokemon/'+data3.name, types: data3.types, weight: data3.weight,
              count: data3.count});
            console.log(this.allPokeData);
          // this.pokeData = data.results;
          // this.pokeData[index].weight = data2.weight;
          // this.pokeData[index].types = data2.types;
        }
        console.log(data3.type.name);

      }
      // console.log(this.allPokeData);
    });
    console.log('hola');

  }
}
