/*
 * Class Work
 *
 * ### Задача 1
 *
 * СИспользуя flux архитектуру:
 *  * Создайте React компонент, содержащий кнопку и элемент div
 *  * При клике по кнопке присвойте элементу div произвольные стили.
 */




import React, { Component } from 'react';

import { Dispatcher } from 'flux';
import { EventEmitter } from 'events';

class App extends Component{

    render(){
        return(
            <div>
                <button>Нажми меня</button>
            </div>
        )
    }
}

export default App;