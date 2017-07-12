import dispatcher from '../dispatcher'

export function changeStyle() {
    dispatcher.dispatch({
        type: 'CHANGE_STYLE'
    })
}