document.addEventListener("DOMContentLoaded", () => {
  const newItemForm = document.querySelector("#new-item-form");
  newItemForm.addEventListener("submit", handleNewItemFormSubmit);

  const deleteItem = document.querySelector("#present-list");
  deleteItem.addEventListener("click", handleDeleteItem);

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
    presentListItem.id = form.familyMember.value;

    const familyMember = document.createElement('h3');
    familyMember.textContent = form.familyMember.value;
    presentListItem.appendChild(familyMember);

    const present = document.createElement("p");
    present.textContent = `Present: ${form.present.value}`;
    presentListItem.appendChild(present);

    const shop = document.createElement("p");
    shop.textContent = `Shop: ${form.shop.value}`;
    presentListItem.appendChild(shop);

    const cost = document.createElement("p");
    cost.textContent = `Cost: ${form.cost.value}`;
    presentListItem.appendChild(cost);

    const buyStatus = document.createElement("p");
      if (form.buyStatus.value === "purchased"){
        buyStatus.textContent = "Purchased: \u2714";
      } else {
        buyStatus.textContent = "Purchased: \u274C";
      }
      presentListItem.appendChild(buyStatus);

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.id = "delete-button";
    presentListItem.appendChild(deleteButton);

    return presentListItem;
  }

  const handleDeleteItem = function(event){
    listItem = event.target.parentNode
      listItem.remove();
  }

  const handleDeleteAllClick = function(event){
    const presentList = document.querySelector("#present-list");
      presentList.innerHTML = "";
  }
