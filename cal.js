const result = document.getElementById("rbox");
const nnn= document.getElementById("nnn");
  
    function add(input) {
      result.value += input ;
    }
  
    function calculate() {
  try{ result.value = eval(result.value).toFixed(2);}
      catch(error){result.value="error❌"}
    
    }
      
   function remove() {
 result.value = "" ;
}

    function del() {
    result.value = result.value.slice(0, -1);
}
  
  function pw(){
    const nnn= document.getElementById("nnn");
    if (nnn.style.display=="none") {
      nnn.style.display="flex";
      
    } else {
      nnn.style.display="none";
      
    }
    
    
  }
  const noty = document.getElementById("noty");
 
  function me() {
    const no= noty.value;
    result.value = Math.pow(result.value,no)
  }