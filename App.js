const content = React.createElement(
    "div",
    { id: "container", className: "container" },
    [
        React.createElement(
            "div",
            { id: "card-1", className: "card", key: "card-1" },
            [
                React.createElement(
                    "h1",
                    { id: "head-1", className: "head", key: "head-1" },
                    "Hello Heading 1!"
                ),
                React.createElement(
                    "h2",
                    { id: "head-2", className: "head", key: "head-2" },
                    "Hello Heading 2!"
                ),
            ]
        ),
        React.createElement(
            "div",
            { id: "card-2", className: "card", key: "card-2" },
            [
                React.createElement(
                    "h1",
                    { id: "head-3", className: "head", key: "head-3" },
                    "Hello Heading 1!"
                ),
                React.createElement(
                    "h2",
                    { id: "head-4", className: "head", key: "head-4" },
                    "Hello Heading 2!"
                ),
            ]
        ),
    ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(content);