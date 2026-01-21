import axios from "axios";
const ENDPOINT = "https://dummyjson.com/users";

// const handleSuccess = (response: any) => {
//   console.log(response.data);
// };

// axios
//   .get(ENDPOINT)
//   .then(handleSuccess)
//   .catch((error) => {});

const getOrLoadFromLS = async () => {
  const users = localStorage.getItem("users");
  if (users) {
    return JSON.parse(users);
  }

  const response = await axios.get(ENDPOINT);
  localStorage.setItem("users", JSON.stringify(response.data.users));
  return response.data.users;
};

const makeRequest = async () => {
  try {
    const users = await getOrLoadFromLS();

    const usersThatStartWithLi = users.filter((user: any) => {
      return user.firstName.startsWith("Li");
    });

    // storeFilteredUsers in LS

    // Render each user name
    usersThatStartWithLi.forEach((user: any) => {
      const userPElement = document.createElement("p");
      userPElement.textContent = user.firstName;

      const userBankElement = document.createElement("p");
      userBankElement.textContent = user.bank.cardType;

      document.body.appendChild(userPElement);
      document.body.appendChild(userBankElement);
    });
  } catch (error) {
    console.log(error);
  }
};

makeRequest();
