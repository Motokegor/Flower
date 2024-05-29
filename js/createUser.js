const btnSendFormServer = document.querySelector(".btn-edit-item");
const naming = document.querySelector(".naming");
const UNP = document.querySelector(".UNP");
const postCode = document.querySelector(".postCode");
const CurrentAccount = document.querySelector(".CurrentAccount");
const contactFace = document.querySelector(".contactFace");
const bankCode = document.querySelector(".bankCode");
const tell = document.querySelector(".tell");
const applications = document.querySelector(".applications");
const bouquetPrice = document.querySelector(".bouquetPrice");
const adress = document.querySelector(".adress");

btnSendFormServer.addEventListener("click", getValueINputSendServerForm);

async function getValueINputSendServerForm(e) {
  const obj = {
    naming: naming.value,
    UNP: UNP.value,
    postCode: postCode.value,
    CurrentAccount: CurrentAccount.value,
    contactFace: contactFace.value,
    bankCode: bankCode.value,
    tell: tell.value,
    applications: applications.value,
    bouquetPrice: bouquetPrice.value,
    adress: adress.value,
  };

  const result = await fetch("http://localhost:3001/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(obj),
  });
}
