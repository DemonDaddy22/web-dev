// cookies
document.cookie = "max-age=86400"; // expires in UTC time and max-age in seconds
console.log(document.cookie);

// local storage
localStorage.setItem("name", "John");
localStorage.setItem("age", 24);
console.log(localStorage.getItem("name"));
console.log(localStorage.getItem("age"));
localStorage.removeItem("name");
localStorage.clear();

// session storage
sessionStorage.setItem("name", "Doe");
sessionStorage.setItem("age", 30);
console.log(sessionStorage.getItem("name"));
console.log(sessionStorage.getItem("age"));
sessionStorage.removeItem("name");
sessionStorage.clear();

// indexedDB
const request = indexedDB.open("MyDatabase", 1);

request.onupgradeneeded = function (event) {
  const db = event.target.result;
  const objectStore = db.createObjectStore("MyObjectStore", { keyPath: "id" });
  objectStore.createIndex("name", "name", { unique: false });
  console.log("Object store created");
};

request.onerror = function (event) {
  console.log("Error opening database:", event.target.errorCode);
};

request.onsuccess = function (event) {
  const db = event.target.result;
  console.log("Database opened successfully");

  const transaction = db.transaction(["MyObjectStore"], "readwrite");
  const objectStore = transaction.objectStore("MyObjectStore");

  const addRequest = objectStore.add({ id: 1, name: "Alice" });
  objectStore.add({ id: 2, name: "Mark" })
  // objectStore.delete(2)

  addRequest.onsuccess = function () {
    console.log("Data added to the object store");
  };

  addRequest.onerror = function (event) {
    console.log("Error adding data:", event.target.errorCode);
  };

  const getRequest = objectStore.get(1);

  getRequest.onsuccess = function () {
    console.log("Data retrieved from the object store:", getRequest.result);
  };

  getRequest.onerror = function (event) {
    console.log("Error retrieving data:", event.target.errorCode);
  };
};