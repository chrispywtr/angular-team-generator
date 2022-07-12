import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-angular';
  newDriverName = "";
  drivers: string[] = [];
  errorMessage = '';
  numberOfTeams: number | "" = "";
  teams: string[][] = [];

  onInput(driver: string) {
    this.newDriverName = driver
  }
  addDriver() {
    if(!this.newDriverName) {
      this.errorMessage = "Name can't be empty"
      return
    } 
    this.drivers.push(this.newDriverName)
    console.log(this.drivers)
    this.newDriverName = ""
    this.errorMessage = ""
  }

  onNumberOfTeamsInput(value: string) {
    this.numberOfTeams = Number(value)
  }

  generateTeams() {
    if(!this.numberOfTeams || this.numberOfTeams <= 0){
      this.errorMessage = "Invalid number of teams"
      return
    }
    if(this.drivers.length < this.numberOfTeams){
      this.errorMessage = "Not enough drivers for amount of teams"
      return
    }
    const allDrivers = [...this.drivers]
    while(allDrivers.length){
      for(let i = 0; i < this.numberOfTeams; i++) {
        const randomIndex = Math.floor(Math.random() * allDrivers.length)
        const driver = allDrivers.splice(randomIndex, 1)[0];
        if(!driver)break;
        if (this.teams[i]) {
         this.teams[i].push(driver)
        } else {
         this.teams[i] = [driver]
        }
     }
    }
    console.log(this.teams)
    this.drivers = []
    this.numberOfTeams = ""
  }
}
