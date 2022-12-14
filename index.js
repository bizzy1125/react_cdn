var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// 1. Hello World
var root1 = ReactDOM.createRoot(document.getElementById('root1'));
console.log(document.getElementById('hello_world'));
root1.render(React.createElement(
    'h1',
    null,
    'Hello, React!!!'
));

// 2, JSX
function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

var user = {
    firstName: 'Qurious',
    lastName: 'Park'
};

var element = React.createElement(
    'h1',
    null,
    'Hello, ',
    formatName(user),
    '!'
);
var root2 = ReactDOM.createRoot(document.getElementById('root2'));
root2.render(element);

// 3. 엘리먼트 렌더링
function tick() {
    var element = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Hello, Qurious!'
        ),
        React.createElement(
            'h2',
            null,
            'It is ',
            new Date().toLocaleTimeString(),
            '.'
        )
    );
    root3.render(element);
}
var root3 = ReactDOM.createRoot(document.getElementById('root3'));
root3.render(element);
setInterval(tick, 1000);

// 4. Component, Props
function formatDate(date) {
    return date.toLocaleDateString();
}

function Avatar(props) {
    return React.createElement('img', { className: 'Avatar',
        src: props.user.avatarUrl,
        alt: props.user.name });
}

function UserInfo(props) {
    return React.createElement(
        'div',
        { className: 'UserInfo' },
        React.createElement(Avatar, { user: props.user }),
        React.createElement(
            'div',
            { className: 'UserInfo-name' },
            props.user.name
        )
    );
}

function Comment(props) {
    return React.createElement(
        'div',
        { className: 'Comment' },
        React.createElement(UserInfo, { user: props.author }),
        React.createElement(
            'div',
            { className: 'Comment-text' },
            props.text
        ),
        React.createElement(
            'div',
            { className: 'Comment-date' },
            formatDate(props.date)
        )
    );
}

var comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
        name: 'Hello Kitty',
        avatarUrl: 'http://placekitten.com/g/64/64'
    }
};

var root4 = ReactDOM.createRoot(document.getElementById('root4'));
root4.render(React.createElement(Comment, {
    date: comment.date,
    text: comment.text,
    author: comment.author }));

// 5. State, Lifecycle
function FormattedDate(props) {
    return React.createElement(
        'h2',
        null,
        'It is ',
        props.date.toLocaleTimeString(),
        '.'
    );
}

var Clock = function (_React$Component) {
    _inherits(Clock, _React$Component);

    function Clock(props) {
        _classCallCheck(this, Clock);

        var _this = _possibleConstructorReturn(this, (Clock.__proto__ || Object.getPrototypeOf(Clock)).call(this, props));

        _this.state = { date: new Date() };
        return _this;
    }
    // Clock이 처음 DOM에 렌더링 될 때마다 타이머를 설정, Mount


    _createClass(Clock, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            this.timerID = setInterval(function () {
                return _this2.tick();
            }, 1000);
        }
        // Clock에 의해 생성된 DOM이 삭제될 때마다 타이머를 해제, Unmount

    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            clearInterval(this.timerID);
        }
    }, {
        key: 'tick',
        value: function tick() {
            this.setState({ date: new Date() });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    'Hello, world!'
                ),
                React.createElement(FormattedDate, { date: this.state.date })
            );
        }
    }]);

    return Clock;
}(React.Component);

function App() {
    return React.createElement(
        'div',
        null,
        React.createElement(Clock, null),
        React.createElement(Clock, null),
        React.createElement(Clock, null)
    );
}

var root5 = ReactDOM.createRoot(document.getElementById('root5'));
root5.render(React.createElement(App, null));

// 6. Event

var Toggle = function (_React$Component2) {
    _inherits(Toggle, _React$Component2);

    function Toggle(props) {
        _classCallCheck(this, Toggle);

        var _this3 = _possibleConstructorReturn(this, (Toggle.__proto__ || Object.getPrototypeOf(Toggle)).call(this, props));

        _this3.state = { isToggleOn: true };

        // 콜백에서 `this`가 작동하려면 아래와 같이 바인딩 해주어야 합니다.
        _this3.handleClick = _this3.handleClick.bind(_this3);
        return _this3;
    }

    _createClass(Toggle, [{
        key: 'handleClick',
        value: function handleClick() {
            this.setState(function (prevState) {
                return {
                    isToggleOn: !prevState.isToggleOn
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'button',
                { onClick: this.handleClick },
                this.state.isToggleOn ? 'ON' : 'OFF'
            );
        }
    }]);

    return Toggle;
}(React.Component);

var root6 = ReactDOM.createRoot(document.getElementById('root6'));
root6.render(React.createElement(Toggle, null));

// 7. Conditional Rendering
function WarningBanner(props) {
    if (!props.warn) {
        return null;
    }

    return React.createElement(
        'div',
        { className: 'warning' },
        'Warning!'
    );
}

var Page = function (_React$Component3) {
    _inherits(Page, _React$Component3);

    function Page(props) {
        _classCallCheck(this, Page);

        var _this4 = _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).call(this, props));

        _this4.state = { showWarning: true };
        _this4.handleToggleClick = _this4.handleToggleClick.bind(_this4);
        return _this4;
    }

    _createClass(Page, [{
        key: 'handleToggleClick',
        value: function handleToggleClick() {
            this.setState(function (prevState) {
                return {
                    showWarning: !prevState.showWarning
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(WarningBanner, { warn: this.state.showWarning }),
                React.createElement(
                    'button',
                    { onClick: this.handleToggleClick },
                    this.state.showWarning ? 'Hide' : 'Show'
                )
            );
        }
    }]);

    return Page;
}(React.Component);

var root7 = ReactDOM.createRoot(document.getElementById('root7'));
root7.render(React.createElement(Page, null));