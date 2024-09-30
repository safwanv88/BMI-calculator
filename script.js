function search(){
    const age = document.getElementById('age').value;
    const high = document.getElementById('high').value;
    const weight = document.getElementById('weight').value;

    if(age == "" || high == "" || weight == ""){
        alert("fill the colomns")
    }else{
        const bmi = Math.ceil(weight / ((high / 100) ** 2));

        if (bmi < 18.5){
            answer.innerHTML=`
           <h2 class=" text-center text-danger">${bmi}kg</h2> <h3 class="text-center text-primary"> under weight</h3>

            `
        }
        else if(bmi <25){
            answer.innerHTML=`<h2 class=" text-center text-danger">${bmi}kg</h2> <h3 class="text-center text-success"> normel weight</h3> `
        }
        else if(bmi <35){
            answer.innerHTML=`<h2 class=" text-center text-danger">${bmi}kg</h2> <h3 class="text-center text-danger"> over weight</h3>`
        }
        else{
            answer.innerHTML=`<h2 class=" text-center text-danger">${bmi}kg</h2> <h3 class="text-center text-danger"> obes </h3>`

        }
    }

}

function allclear(){


const age = document.getElementById('age').value = ""
const high = document.getElementById('high').value = ""
const weight = document.getElementById('weight').value = ""
answer.innerHTML= ""

}