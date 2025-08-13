

class TodoItem {
    constructor(title, description, dueDate, priority, notes, isChecked) {
        this._id = Date.now();
        this._title = title;
        this._description = description;
        this._dueDate = dueDate;
        this._priority = priority;
        this._notes = notes;
        this._isChecked = isChecked;
        this._updatedAt = Date.now();
    }

    get preview() {
        return {
            id: this._id,
            title: this._title,
            dueDate: this._dueDate,
            priority: this._priority,
            isChecked: this._isChecked,
            updatedAt: this._updatedAt
        }
    }

    get details() {
        return {
            id: this._id,
            title: this._title,
            description: this._description,
            dueDate: this._dueDate,
            priority: this._priority,
            notes: this._notes,
            isChecked: this._isChecked
        }
    }

    set details(obj) {
        this._title = obj.title;
        this._description = obj.description;
        this._dueDate = obj.dueDate;
        this._priority = obj.priority;
        this._notes = obj.notes;
        this._isChecked = obj.isChecked;
        this._updatedAt = Date.now();
    }

    set isChecked(isChecked) {
        this._isChecked = isChecked;
        this._updatedAt = Date.now();
    }
}