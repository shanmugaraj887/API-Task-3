let rowDog = document.getElementById("row-dog");
let selectOption = document.getElementById("dd-selected");

let contain = document.getElementById("container-dog")
///////////// CODE TO FETCH THE LIST OF BREEDS//////////////
async function coffees(){  
    let dogs = await fetch("https://dog.ceo/api/breeds/list/all")
    let dogsData = await dogs.json()
    try {
        if (Response==200){
                throw new Error ("NOT FOUND")
        }
/////////////LOOP TO CREATE THE OPTION TAG//////////////////////////
        for(let key in dogsData.message){
            let optionBreed = document.createElement("option");
            optionBreed.setAttribute("class","inside-select")
            optionBreed.setAttribute("value",key);
            optionBreed.innerHTML=key
    
            selectOption.append(optionBreed);
        }
    } catch (error) {
        console.log(error)
    }
let select = document.getElementById("select") ;
select.append(selectOption) 
contain.before(select)
};
coffees();



function getOption() {
    let dogName = (document.getElementById('dd-selected').value);


//////////// FETCHING THE IMAGE CLAIMING THE VALUE FROM THE OPTION ///////////////////
    async function coffee(){
   
        let dogs = await fetch(`https://dog.ceo/api/breed/${dogName}/images/random`)
        let dogsData = await dogs.json();
    try {
        if (Response < 400){
            throw new Error("NOT FOUND")
        }let colDog=document.createElement("div");
        colDog.setAttribute("class","col-md-12");
        colDog.innerHTML=`
        <h3>${dogName.toUpperCase()}</h3>
        <div class="dog-image">
        <img src="${dogsData.message}">
        </div>
        `
        /////////// TO CLEAR THE PREVIOUS DISPLAYED IMAGE/////////////
        let col = document.querySelectorAll(".col-md-12")
        if (col.length == 1){
            col[0].remove()
        }
        
        rowDog.append(colDog)
    } catch (error) {
        console.log(error)
    }
    
    }
    coffee();
  }



