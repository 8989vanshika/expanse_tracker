// import React,{Component} from 'react';
// import './Login.css';
// import fire from '../../config/Fire';
// class Register extends Component{
//    state={
//     email:'',
//     password:'',
//     displayName:'',
//     fireErrors:''
//    }
// handleChange =e=>{
//     this.setState({
//         [e.target.name]:e.target.value
//     })
// }
// register = e => {
//     e.preventDefault();
//     fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((user) => {
//         var currentUser = fire.auth().currentUser;
//         currentUser.updateProfile({
//             displayName: this.state.displayName
//         })
//     })
//     .catch((error) => {
//         this.setState({fireErrors: error.message})
//     });
// }



//    render() {
//     return (
//         <>
//         <form className="form">
//             <input type="text"
//             className="regField"
//             placeholder="Your Name"
//             onChange={this.handleChange}
//             value={this.state.displayName}
//             name="displayName" />

//              <input type="text"
//             className="regField"
//             placeholder="Email"
//             onChange={this.handleChange}
//             value={this.state.email}
//             name="email" />


            
//             <input type="text"
//             className="regField"
//             placeholder="Password"
//             onChange={this.handleChange}
//             value={this.state.password}
//             name="password" />
// <input onClick={this.register}  type="submit" className="submitBtn" value="REGISTER" />


//             </form>
//             </>
//     );
//    }
// }
// export default Register;




import React, {Component} from 'react';
import fire from '../../config/Fire';


class Register extends Component {
    state = {
        email: '',
        password: '',
        displayName: '',
        fireErrors: ''
    }

    register = e => {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((user) => {
            var currentUser = fire.auth().currentUser;
            currentUser.updateProfile({
                displayName: this.state.displayName
            })
        })
        .catch((error) => {
            this.setState({fireErrors: error.message})
        });
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {

        let errorNotification = this.state.fireErrors ? 
            ( <div className="Error"> {this.state.fireErrors} </div> ) : null;

        
        return (
            <>
                {errorNotification}
                <form>
                    <input type="text"
                        className="regField"
                        placeholder="Your Name"
                        value={this.state.displayName} 
                        onChange={this.handleChange}
                        name="displayName"
                        />
                    <input type="text"
                        className="regField"
                        placeholder="Email"
                        value={this.state.email} 
                        onChange={this.handleChange}
                        name="email"
                        />
                    <input
                        className="regField"
                        placeholder="Pasword"
                        value={this.state.password} 
                        onChange={this.handleChange}
                        name="password"
                        type="password"
                    />
                    <input className="submitBtn" type="submit" onClick={this.register} value="REGISTER" />
                </form>
            </>
        );
    }
}
export default Register;