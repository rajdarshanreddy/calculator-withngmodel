import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator-withngModel';

  public primarynumber:number;
  public secondarynumber:number;
  public selectedoperator:string;
  public cal:number;
  public result:string;

  calculate(){
    if(this.selectedoperator == '+'){
      this.cal = this.primarynumber + this.secondarynumber;
      this.result = "= " + this.cal;
    }
    if(this.selectedoperator == '-'){
      this.cal = this.primarynumber - this.secondarynumber;
      this.result = "= " + this.cal;
    }
    if(this.selectedoperator == '*'){
      this.cal = this.primarynumber * this.secondarynumber;
      this.result = "= " + this.cal;
    }
    if(this.selectedoperator == '/'){
      this.cal = this.primarynumber / this.secondarynumber;
      this.result = "= " + this.cal;
    }
    
  }
}
