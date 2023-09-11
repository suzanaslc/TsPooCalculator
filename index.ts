import { CalcExtension } from "./CalcExtension";

let calc = new CalcExtension();
calc.calculate(1,"+",2);
calc.showValue();

calc.calculate(10,"-",5);
calc.showValue();

calc.calculate(2,"x",5);
calc.showValue();

calc.calculate(10,"/",5);
calc.showValue();


