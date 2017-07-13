import { EventEmitter } from 'events';
import dispatcher from '../dispatcher'

class AppStore extends EventEmitter{

    constructor(){
        super();

        this.count = 0;
    }

    getInitialCount(){
        return this.count;
    }

    counterStart(){
        this.count++;
        return this.count;
    }

    countFun(){
        this.count++;
        return this.count;
    }

    countClearFun(){
        this.count = 0;
    }

    handleActions(action){

        switch (action.type){

            case "START": {
                this.emit('countStart');
                break;
            }
            case "CLEAR": {
                this.emit('countClear');
                break;
            }
        }
    }

}





const appStore = new AppStore();

dispatcher.register(appStore.handleActions.bind(appStore));

module.exports = appStore;