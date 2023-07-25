//* lấy dữ liệu từ localstorage

function getDataFromLocal(key) {
  const data = JSON.parse(localStorage.getItem(key));
  return data;
}

//* update dữ liệu xuống local storage

function setDataToLocal(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function navigate(path) {
  window.location = path;
}

function searchItem(key, words){
     
  const foodDB = getDataFromLocal(`${key}`);

  const search = document.getElementById("searchTerm");

  const searchItem = foodDB.filter(item => item[words].toLowerCase().includes(search.value.trim().toLowerCase()));

  return searchItem

}

function outData(key){
  window.localStorage.removeItem(key);
}

function findId(key){
  const findId = key.find((item) => item.id === id);
}

function validatePhoneNumber() {
        const phoneNumberInput = document.getElementById("phoneNumber");
        const phoneNumberError = document.getElementById("phoneNumberError");
        const phoneNumber = phoneNumberInput.value.trim();
        const phoneRegex = /^[0-9]{10,}$/;

        if (!phoneRegex.test(phoneNumber) || phoneNumber.length > 10) {
          phoneNumberError.style.display = "block";
        } else {
          phoneNumberError.style.display = "none";
        }
      }

function getValueFromSelect(key) {
   const selectElement = document.getElementById(key);
   return selectElement.value;
} 