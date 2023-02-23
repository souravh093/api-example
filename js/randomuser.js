const getUserInfo = () => {
    fetch('https://randomuser.me/api/?gender=female')
        .then(res => res.json())
        .then(data => showUserInfo(data))
}

const showUserInfo = (data) => {
    const cardContainer = document.getElementById('cardContainer');
    cardContainer.innerHTML = `
    <div class="avatar flex justify-center">
          <div class="w-24 rounded-full">
            <img src="${data.results[0].picture.large}" />
          </div>
        </div>
        <div class="card-body flex justify-center items-center">
            <div>
                  <div class="mb-4">
                      <div class="flex gap-4">
                        <h2 class="font-semibold text-xl">Name: </h2>
                        <p class="text-xl flex">${data.results[0].name.first} ${data.results[0].name.last}</p>
                      </div>
                      <div class="flex gap-4">
                        <h2 class="font-semibold text-xl">Date of Birth:</h2>
                        <p class="text-xl flex">${data.results[0].dob.date}</p>
                      </div>
                  </div>
                <div class="flex gap-4">
                    <h2 class="font-semibold text-xl">Email:</h2>
                    <p class="text-xl flex">${data.results[0].email}</p>
                </div>
              
                <div class="mt-4">
                    <div class="flex gap-4">
                        <h2 class="font-semibold text-xl">Address:</h2>
                        <p class="text-xl flex">${data.results[0].location.street.number} ${data.results[0].location.street.name}</p>
                    </div>
                    <div class="flex gap-4">
                        <h2 class="font-semibold text-xl">Number:</h2>
                        <p class="text-xl flex">+1${data.results[0].cell}</p>
                    </div>
                </div>
                <div class="mt-4">
                    <div class="flex gap-4">
                        <h2 class="font-semibold text-xl">Gender:</h2>
                        <p class="text-xl flex">${data.results[0].gender}</p>
                    </div>
                    <div class="flex gap-4">
                        <h2 class="font-semibold text-xl">Age:</h2>
                        <p class="text-xl flex">${data.results[0].dob.age}</p>
                    </div>
                    <div class="flex gap-4">
                        <h2 class="font-semibold text-xl">Country:</h2>
                        <p class="text-xl flex">${data.results[0].location.country}</p>
                    </div>
                </div>
            </div>
        </div>
    ` 
}


getUserInfo();