const ItemCreater  = {

  create(...args) {
    let item = {};
    [item.name, item.category, item.quantity] = [...args];
    if (item.name.replace(' ', '').length < 5) {
      return false;
    } else if (item.category.length < 5 || item.category.match(/\s/)) {
      return false;
    } else if (item.quantity === undefined) {
      return false;
    }
    item.SKU = this.generateSKU(item.name, item.category);
    return item;
  },

  generateSKU(name, category) {
    let SKU = name.replace(' ', '').slice(0, 3);
    SKU += category.slice(0, 2);
    return SKU.toUpperCase();
  }
}


const ItemManager = {
  items : [],

  create(...args) {
    let item = ItemCreater.create(...args);
    if (item) {
      this.items.push(ItemCreater.create(...args))
    } else {
      return false;
    }

  },

  update(SKUcode, item) {
    let itemsToChange = this.items.find(locate => locate.SKU === SKUcode);
    Object.assign(itemsToChange, item);
  },

  delete(SKUCode) {
    let index = this.items.findIndex(locate => locate.SKU === SKUCode);
    this.items.splice(index, 1);
  },

  inStock() {
    return this.items.filter(locate => locate.quantity > 0);
  },

  itemsInCategory(category) {
    return this.items.filter(locate => locate.category === category)
  }

}

const ReportManager = {
  items,

  init(manager) {
    this.items = manager;
  }
}

ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item
// returns list with the 4 valid items

ItemManager.update('SOCSP', { quantity: 0 });

ItemManager.delete('SOCSP');

console.log(ItemManager.items);