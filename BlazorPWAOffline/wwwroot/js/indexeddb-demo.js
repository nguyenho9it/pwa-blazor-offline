
//prefixes of implementation that we want to test
window.indexedDB = window.indexedDB || window.mozIndexedDB ||
    window.webkitIndexedDB || window.msIndexedDB;

//prefixes of window.IDB objects
window.IDBTransaction = window.IDBTransaction ||
    window.webkitIDBTransaction || window.msIDBTransaction;
window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange ||
    window.msIDBKeyRange

if (!window.indexedDB) {
    console.log("Your browser doesn't support a stable version of IndexedDB.")
  
} else {
    console.log("Your browser support a stable version of IndexedDB.");
    window.indexedDB.openDB = async function () {
        const request = indexedDB.open('BlazorPwa', 1);

        request.onupgradeneeded = function (event) {
            const db = event.target.result;
            const objectStore = db.createObjectStore('users', { keyPath: 'id', autoIncrement: true });
            objectStore.createIndex('name', 'name', { unique: false });
            objectStore.createIndex('email', 'email', { unique: false });
        };

        return request;
    };
}

window.indexedDB.loadUsers = async function () {
    const requestDB = await window.indexedDB.openDB();
    let db;
    requestDB.onsuccess = function (event) {
        db = event.target.result;
        console.log("success: " + db);
    };

    const tx = db.transaction('users', 'readonly');
    const store = tx.objectStore('users');
    const request = store.getAll();

    return new Promise((resolve, reject) => {
        request.onsuccess = function (event) {
            const users = event.target.result;
            resolve(users);
        };
        request.onerror = function (event) {
            reject(event);
        };
    });
};


//var db;
//var request = window.indexedDB.open("BlazorPwa", 1);

//request.onerror = function (event) {
//    console.log("error: ");
//};

//request.onsuccess = function (event) {
//    db = request.result;
//    console.log("success: " + db);
//};

//request.onupgradeneeded = function (event) {
//    var db = event.target.result;
//    var objectStore = db.createObjectStore("employee", { keyPath: "id" });

//    //for (var i in employeeData) {
//    // objectStore.add(employeeData[i]);
//    //}
//}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function read() {
    var transaction = db.transaction(["employee"]);
    var objectStore = transaction.objectStore("employee");
    var request = objectStore.get("01");

    request.onerror = function (event) {
        alert("Unable to retrieve daa from database!");
    };

    request.onsuccess = function (event) {
        // Do something with the request.result!
        if (request.result) {
            alert("Name: " + request.result.name + ",Age: " + request.result.age + ", Email: " + request.result.email);
        } else {
            alert("Sachin couldn't be found in your database!");
        }
    };
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function readAll() {
    var objectStore = db.transaction("employee").objectStore("employee");
    var request = objectStore.getAll();
    return new Promise((resolve, reject) => {
        request.onsuccess = function (event) {
            const users = event.target.result;
            resolve(users);
        };
        request.onerror = function (event) {
            reject(event);
        };
    });

    //objectStore.openCursor().onsuccess = function (event) {
    //    var cursor = event.target.result;

    //    if (cursor) {
    //        alert("Name for id " + cursor.key + " is " + cursor.value.name + ",Age: " + cursor.value.age + ", Email: " + cursor.value.email);
    //        cursor.continue();
    //    } else {
    //        alert("No more entries!");
    //    }
    //};
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function add(employee) {
    db.users.add(employee);
    //var request = db.transaction(["employee"], "readwrite")
    //    .objectStore("employee")
    //    .add(employee);

    //request.onsuccess = function (event) {
    //    alert("sachin has been added to your database.");
    //};

    //request.onerror = function (event) {
    //    alert("Unable to add data\r\nsachin is aready exist in your database! ");
    //}
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function remove() {
    var request = db.transaction(["employee"], "readwrite")
        .objectStore("employee")
        .delete("01");

    request.onsuccess = function (event) {
        alert("Sachin's entry has been removed from your database.");
    };
}