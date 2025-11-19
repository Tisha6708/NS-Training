//CALLBACK CODE
function getUser(id, callback) {
  setTimeout(() => {
    callback({ id, name: "Tisha" });
  }, 1000);
}

getUser(1, (user) => {
  console.log(user);
});


//PROMISE CODE
function getUser(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id, name: "Tisha" });
    }, 1000);
  });
}

getUser(1).then((user) => console.log(user));


//ASYNC FUNCTION STIMULATING NETWORK REQUEST
function fakeApiFetch(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data) {
        resolve({ status: 200, message: "Success", result: data });
      } else {
        reject("No data provided");
      }
    }, 1200);
  });
}

async function makeRequest() {
  try {
    const response = await fakeApiFetch("User details");
    console.log("API Response:", response);
  } catch (error) {
    console.log("Error:", error);
  }
}

makeRequest();
