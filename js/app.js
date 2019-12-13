document.addEventListener("DOMContentLoaded", () => {
  const newItemForm = document.querySelector("#new-item-form");
  newItemForm.addEventListener("submit", handleNewItemFormSubmit);

  const deleteAllButton = document.querySelector("#delete-all");
  deleteAllButton.addEventListener("click", handleDeleteAllClick);
});

  const handleNewItemFormSubmit = function(event){
    event.preventDefault();

    const presentListItem = createPresentListItem(event.target);
    const presentList = document.querySelector("#present-list");
    presentList.appendChild(presentListItem);

    event.target.reset();
  }

  const createPresentListItem = function(form){
    const presentListItem = document.createElement("li");
    presentListItem.classList.add("present-list-item");

    const familyMember = document.createElement('h3');
    familyMember.textContent = form.familyMember.value;
    presentListItem.appendChild(familyMember);

    const present = document.createElement("p");
    present.textContent = form.present.value;
    presentListItem.appendChild(present);

    const shop = document.createElement("p");
    shop.textContent = form.shop.value;
    presentListItem.appendChild(shop);

    const cost = document.createElement("p");
    cost.textContent = form.cost.value;
    presentListItem.appendChild(cost);

    const buyStatus = document.createElement("p");
    buyStatus.textContent = form.buyStatus.value;
    presentListItem.appendChild(buyStatus);

    return presentListItem;
  }

  const handleDeleteAllClick = function(event){
    const presentList = document.querySelector("#present-list");
      presentList.innerHTML = "";
  }
