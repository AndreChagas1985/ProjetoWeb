const ID_eNotas = document.querySelector("#id")

const showData = (result) =>{
  for(const campo in result){
    if(document.querySelector("#"+campo)){
      document.querySelector("#"+campo).value = result[campo]      
    }    
    
  }
  if(result["status"] == "Habilitada"){
    $('#toggle-one').bootstrapToggle('off'),
    document.querySelector("#status").backgroundcolor = "green"
  }
  else{
    $('#toggle-one').bootstrapToggle('on'),
    document.querySelector("#status").backgroundcolor = "green";
  }
}

ID_eNotas.addEventListener("blur",(e)=>{
  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: 'Basic ',
      mode: 'cors',
      cache: 'default'
    }
  };
  
    fetch(`https://api.enotasgw.com.br/v1/empresas/${ID_eNotas.value}/`, options)
    .then(response => response.json())
    //.then(response => console.log(response))
    .then(response => showData(response))
    .catch(err => console.error(err));
}) 

$('#toggle1 input:checkbox').change(function(){
  console.log("toogle-one:", this.checked);
  
  if(this.checked == true){
    console.log("Chamar o método para habilitar a Empresa")
  }
  else{
    console.log("Chamar o método para desabilitar a Empresa")
  }

})

