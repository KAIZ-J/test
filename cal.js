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
 result.value = Number("") ;
}

    function del() {
    result.value = Number(result.value.slice(0, -1));
}
  
  function pw(){
    nnn.style.display="flex";
    
  }
  const noty = document.getElementById("noty");
 
  function me() {
    const no= noty.value;
    result.value = Math.pow(result.value,no)
  }