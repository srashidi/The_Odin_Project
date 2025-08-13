class TodoList {
    constructor(items, sortOptions) {
        this._items = items;
        this._sortOptions = sortOptions;
    }

    get items() {
        return this._items;
    }

    addItem(item) {
        this._items.push(item);
    }

    removeItem(id) {
        this._items = this._items.filter(item => item.id !== id);
    }

    // get sortedItems() {
    //     if (this._items.length <= 1 || Object.keys(this._sortOptions).length === 0) {
    //         return this._items;
    //     }
    //
    //     return this._items.toSorted();
    // }
}