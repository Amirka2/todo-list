import {TodoItemProps} from "../../../entities/TodoItem/ui/TodoItem";

export function AddTodoItem(props: TodoItemProps, addTodoItem: (itemProps: TodoItemProps) => void) {
    addTodoItem(props);
}