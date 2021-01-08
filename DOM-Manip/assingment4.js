//q1
function imRight(){ 
    let text = document.getElementById('q1')
    text.innerText = "Im Right"
}

 function noImRight(){
    let text = document.getElementById('q1')
    text.innerText = "No Im Right"
 }

//q2
/*let hovering = document.getElementById("hovering")
hovering.addEventListener("mouseenter", function(event){ 
    alert("Hey, I told you not to hover over me!")
})
*/
//q3
//Done in html


//q4
function passwordCheck(){
    let password = document.getElementById('password')
    let pswd = 12345678
    if(password.value.match(pswd)){
      alert("Correct Password")
    } else {
      alert("Incorrect password!");
    }
  }


//q5
//assignment4.css

//q6
function sphere(){ 
    let radius = document.getElementById('radius').value
    let volume = document.getElementById('result')
    //console.log(radius)

    soln = (4/3) * Math.PI * Math.pow(radius,3)
    volume.innerText = "Volume: " + soln 

}