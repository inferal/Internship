import dispatcher from '../dispatcher'

export function getStart() {
    dispatcher.dispatch({
        type: 'START'
    })
}

export function getClear() {
    dispatcher.dispatch({
        type: 'CLEAR'
    })
}