import { nanoid } from 'nanoid'

//todo item class
class TodoItem {

    constructor(title) {
        this.title = title;
        this.id = nanoid();
        this.createdAt = new Date();
        this.isDone = false;
    }
}
export default TodoItem;