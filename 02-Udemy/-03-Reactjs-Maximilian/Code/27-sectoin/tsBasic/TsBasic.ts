let num: number;
num = 43;
let myName: string;
myName = 'dfs';

let key: boolean;
key = true;
key = false;
//////
type CharModal={
    name:string;
    age:number;
    married:boolean;
}
//array of string
let names: string[];

//
let anyvalue = 'forgiving';

//object with typescript
//define structre of object
let character: CharModal;
//follow structre
character = {
  name: 'yousef',
  age: 34,
  married: true,
};

///array of structred object
let arrOfUser: {
  name: string;
  age: number;
  married: boolean;
}[];
arrOfUser = [
  {
    name: 'yousef',
    age: 34,
    married: true,
  },
  {
    name: 'menna',
    // age: "18",//error here beacuse age defined as number not string
    age:18,
    married: false,
    //should object follow structre {naem:string,age:number ,married:boolean}
  },
];

//Type inference 
let myCourse="React -the complete Guited";

// myCourse=34 error 

///store your Name ro id Number
//Union type is type definition allow more than one type
let idIdentifer:string|number="Yasser yassen"
idIdentifer=84686848644; //Valid
//////

// Function and Types
function subtract(number1:number,number2:number):string{
    const result=number1+number2;

    return `the result of operaion is ${result}`;
    //specify the tyepe of return  of funciton
}

function print(vlaue:any):void{
    console.log(vlaue)
    
}

function insertAtBeginning(arr:any[],value:any){
    const newArray=[value,...arr];
    return newArray;
}

insertAtBeginning([2,3,5,2],"fdsf")//not ts support

function push<G>(arr: G[], value: G) {
  const newArray = [value, ...arr];
  return newArray;
}
// push([54,45,43,2],"sfdfsd");//cause error beacuse second paramter be number


