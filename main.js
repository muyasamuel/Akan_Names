
const dateBorn = document.querySelector("#date-born");
const monthBorn = document.querySelector("#month-born");
const yearBorn = document.querySelector("#year-born");
const form = document.getElementById("form");
const btn = document.getElementById("submit");


btn.addEventListener("click", validate);





function validate(e) {
       e.preventDefault()
    const dateInput = dateBorn.value;
    const monthInput = monthBorn.value;
    const yearInput = yearBorn.value;

    


    if(dateInput =="" ||monthInput =="" || yearInput ==""){
        alert("fill in the required spaces!!!")
    }

    else if(dateInput == ""){
        alert("please fill in your date section");
    }else if ( dateInput < 1  || dateInput > 31){
        alert("put a valid date!!!")

    }else if(monthInput == ""){
        alert("Please fill in the month section");
    }else if(monthInput < 1 || monthInput > 12){
        alert("please put a valid month");

    }else if(yearInput == ""){
        alert("Please fill in the year section");
    }else if(yearInput.length < 4 || yearInput.length > 4){
        alert("please put a valid year");
    }
    else if (female.checked !=true && male.checked !=true  ){
        alert("Please pick your gender");
    }
   

}
 


    
    
  
  


 
    

 
