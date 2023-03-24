import React from "react";
import { Component } from "react";
import BasicInfo from "./components/BasicInfo";

// Very Easy:
// class App extends Component {
//   render() {
//     return (
//       <div>
//         <h1>Junior Leon</h1>
//         <h3>+1(704) 996-9460</h3>
//         <h3>Date of Birth: Mar 29, 2002</h3>
//       </div>
//     );
//   };
// };

// Easy:
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       person: {

//       }
//     }
//   }

//   render() {
//     return (
//       <div>
//         <h1>Junior Leon</h1>
//         <h3>+1(704) 996-9460</h3>
//         <h3>Date of Birth: Mar 29, 2002</h3>
//       </div>
//     );
//   };
// };

// Medium
// class App extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       person: {
//         name: 'Junior Leon',
//         number: '+1(704) 996-9460',
//         DOB: 'March 29, 2002'
//       }
//     }
//   }
//   render(){
//     return(
//       <BasicInfo person={this.state.person} />
//     )
//   }
// }

// // Hard
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: [
        {
          name: "Junior Leon",
          number: "+1(704) 996-9460",
          DOB: "Mar 29, 2002",
        },
        {
          name: "Andres Barreras",
          number: "+1(704) 779-4672",
          DOB: "July 9, 2000",
        },
        {
          name: "Diana Capellan",
          number: "+1(704) 849-9171",
          DOB: "July 30, 1997",
        },
        {
          name: "Sincere Legere",
          number: "+1(123) 456-7890",
          DOB: "N/A",
        },
        {
          name: "Ruth Camarillo",
          number: "+1(123) 456-7890",
          DOB: "N/A",
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <BasicInfo person={this.state.person[0]} />
        <BasicInfo person={this.state.person[1]} />
        <BasicInfo person={this.state.person[2]} />
        <BasicInfo person={this.state.person[3]} />
        <BasicInfo person={this.state.person[4]} />
      </div>
    );
  }
}

export default App;
