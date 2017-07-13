import dispatcher from '../dispatcher'

// Создать элемент
export function createItem(item) {
    dispatcher.dispatch({
        type: 'CREATE_ITEM',
        item
    })
}

// Удалить элемент
export function removeItem(id) {
    dispatcher.dispatch({
        type: 'REMOVE_ITEM',
        id
    })
}

export function search(string) {
    dispatcher.dispatch({
        type:'SEARCH',
        searchString:string
    })
}