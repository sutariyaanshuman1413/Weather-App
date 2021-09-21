const cityName = document.getElementById('cityName');
const submitbtn = document.getElementById('submitbtn');
const city_name = document.getElementById('city_name');
const temp_real_val = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');
const datahide = document.querySelector('.middle_layer');
const getInfo = async(event)=>{
    event.preventDefault();
    let cityval = cityName.value;

    if(cityval === ""){
          city_name.innerText = `please write the name before search` ;
          datahide.classList.add('data_hide'); 
    }else{
          try{
               let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=c4c86653cf2d78c3d98a9d418db47238`
               const response = await fetch(url);
               const data = await response.json();
               const arrData = [data];
               temp_real_val.innerText = arrData[0].main.temp;
               city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`;
               const  tempMood = arrData[0].weather[0].main;

               if (tempMood == "Clear") {
                    temp_status.innerHTML =
                        "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
                    } else if (tempMood == "Clouds") {
                    temp_status.innerHTML =
                        "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
                    } else if (tempMood == "Rain") {
                    temp_status.innerHTML =
                        "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
                    } else {
                    temp_status.innerHTML =
                        "<i class='fas  fa-cloud' style='color:#f1f2f6;'></i>";      
                    }
               
                datahide.classList.remove('data_hide');
                cityval = ""; 
                    
          }catch{
               cityval = " ";
               datahide.classList.add("data_hide");
               city_name.innerText =  `please enter the proper city name`;
               console.log('please add the proper city name');
          }

    }
}
submitbtn.addEventListener('click',getInfo);