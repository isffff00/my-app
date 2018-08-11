// import React, { component } from 'react';

// class MyComponent extends Component {
//     render() {
//         return(
//             <div>Hello universe!</div>
//         )
//     }
// };

import React from 'react';

const MyComponent = (props) => (
    <div>Hello, {props.name}!</div>
);

export default MyComponent;