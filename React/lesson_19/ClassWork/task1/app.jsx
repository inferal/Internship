var elem = React.createElement('h1', null, 'Hello World!');
        // Функция render принимает два аргумента: виртуальный элемент и реальный узел DOM.
        // React берёт виртуальный элемент и добавляет его в указанный узел.
        ReactDOM.render(elem, document.getElementById('example'));
