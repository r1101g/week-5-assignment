//menu application that creates list, and add and deletes items from list
class List { // array to hold lists 
    constructor(name) {
      this.name = name;
      this.items = [];
    }
    
    addItem(name) { // adds items to list array
      const item = new Item(name);
      this.items.push(item);
    }
    
    removeItem(index) { // remove items from list array
      if (index > -1 && index < this.items.length) {
        this.items.splice(index, 1);
      }
    }
  }
  
  class Item {
    constructor(name) {
      this.name = name;
    }
  }
  
  class Menu { // main controll for application
    constructor() {
      this.lists = [];
    }
    
    start() {// application starts here
      while (true) {
        const selection = this.showMainMenu();
        if (selection === "0") {
          break;
        } else if (selection === "1") {
          this.createList();
        } else if (selection === "2") {
          this.viewLists();
        } else if (selection === "3") {
          this.deleteList();
        }
      }
      alert("Goodbye!"); // main prompt exit message
    }
    
    showMainMenu() { // displays main menu prompts
      return prompt(`Choose an option:
  1. Create a new list
  2. View existing lists
  3. Delete a list
  0. Exit`);
    }
    
    createList() {
      const name = prompt("Enter a name for the new list:");
      const list = new List(name);
      this.lists.push(list);
      this.showListMenu(list);
    }
    
    viewLists() {
      let listString = "";
      for (let i = 0; i < this.lists.length; i++) {
        listString += `${i}: ${this.lists[i].name}\n`;
      }
      alert(listString);
    }
    
    deleteList() {
      const index = prompt("Enter the index of the list you want to delete:");
      if (index > -1 && index < this.lists.length) {
        this.lists.splice(index, 1);
      }
    }
    
    showListMenu(list) {
      while (true) {
        const selection = this.showListMenuOptions(list);
        if (selection === "0") {
          break;
        } else if (selection === "1") {
          const itemName = prompt("Enter a name for the new item:");
          list.addItem(itemName);
        } else if (selection === "2") {
          const index = prompt("Enter the index of the item you want to delete:");
          list.removeItem(index);
        }
      }
    }
    
    showListMenuOptions(list) {
      return prompt(`Choose an option for list "${list.name}":
  1. Add an item
  2. Remove an item
  0. Back to main menu`);
    }
  }
  
  const menu = new Menu();
  menu.start(); // start application
  