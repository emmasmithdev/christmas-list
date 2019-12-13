document.addEventListener("DOMContentLoaded", () => {
  const newItemForm = document.querySelector("#new-item-form");
  newItemForm.addEventListener("submit", handleNewItemFormSubmit);

  const deleteItem = document.querySelector("#present-list");
  deleteItem.addEventListener("click", handleDeleteItem);

  const filter = document.querySelector("#filter");
  filter.addEventListener("change", handleFilter);

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
        buyStatus.classList.add("purchased");
      } else {
        buyStatus.textContent = "Purchased: \u274C";
        buyStatus.classList.add("not-purchased");
      }
      presentListItem.appendChild(buyStatus);

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.id = "delete-button";
    presentListItem.appendChild(deleteButton);

    return presentListItem;
  }

  const handleFilter = function(event){
    const presentList = document.querySelector("#present-list");
    let listItems = presentList.getElementsByTagName("li");
    if (event.target.value === "purchased"){
      for (let item of listItems){
        if (item.lastChild.previousElementSibling.className === "not-purchased"){
          item.classList.add("hide");
        } else if (item.lastChild.previousElementSibling.className === "purchased"){
          item.classList.remove("hide");
        }
      }
    } else if (event.target.value === "notYetPurchased"){
      for (let item of listItems){
        if (item.lastChild.previousElementSibling.className === "purchased"){
          item.classList.add("hide");
        } else if (item.lastChild.previousElementSibling.className === "not-purchased"){
          item.classList.remove("hide");
        }
      }
    } else if (event.target.value === "All"){
      for (let item of listItems){
        item.classList.remove("hide");
      }
    }
  }

  const handleDeleteItem = function(event){
    listItem = event.target.parentNode
      listItem.remove();
  }

  const handleDeleteAllClick = function(event){
    const presentList = document.querySelector("#present-list");
      presentList.innerHTML = "";
  }
