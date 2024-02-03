import React from "react";

class Item extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { name, age, status } = this.props.content;

        return (
            <>
            <h2>{name}</h2>
            <p>age:{age}</p>
            <p>status:{status}</p>
            
            </>
        );
    }
}

export default Item