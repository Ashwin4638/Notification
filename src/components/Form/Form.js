import React from 'react';
import { connect } from "react-redux";
import {hideNotification, showNotification} from '../../redux/action'


export class Form extends React.Component {
    state = {
        name: '',
        email: '',
        number: '',
        city: '',
        isVisile: false,
    }

    onNameChange = (event) => {
        this.setState({ name: event.target.value})
    }
    onEmailChange = (event) => {
        this.setState({ email: event.target.value})
    }
    onNumberChange = (event) => {
        this.setState({ number: event.target.value})
    }
    onCityChange = (event) => {
        this.setState({ city: event.target.value})
    }

    handleSubmit = (event) => {
        // Prevent page reload
        event.preventDefault();
        const allList = {...this.state};
        console.log('getstat',allList );
        const { onShowNotification, onHideNotification  } = this.props;
        this.setState({ isVisible: true});
        // generate a unique id for the notification
        const id = new Date().getTime(); 
        const message = allList;
        const notification = { id, message };
        console.log('notification', notification)
        onShowNotification(notification)
        setTimeout(() => {
            this.setState({ isVisible: false });
            onHideNotification(notification)
        }, 3000)
        this.setState({
            name: '',
            email: '',
            number: '',
            city: ''
        })
      };

      renderMessage() {
        const { notificaionsMessage } = this.props;

        return (
            <div className="notification">
            {notificaionsMessage.map(notification => (
                <div key={notification.id}>
                {notification.message.name}
                {notification.message.email}
                {notification.message.number}
                {notification.message.city}
                </div>
            ))}
            </div>
        )
       
    }

      renderForm() {
        return (
            <div className='Form'>
                <form onSubmit={ this.handleSubmit}>
             <label>Name </label>
             <input type="text"  required value={ this.state.name} onChange={ this.onNameChange} />
             <label> Email</label>
             <input type="email"  required value={ this.state.email} onChange={ this.onEmailChange}/>
             <label>Number </label>
             <input type="number"  required value={ this.state.number} onChange={ this.onNumberChange}/>
             <label>City </label>
             <input type="text"  required  value={ this.state.city} onChange={ this.onCityChange}/>
             <input type="submit" />
             </form>                    
            </div>
            )
      }

    render () {
        return (
            <div className='Form'>
                { this.renderForm() }
                { this.state.isVisible && this.renderMessage() }
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        notificaionsMessage: state.notifications
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    onHideNotification: (notification) => {
        dispatch(hideNotification(notification));
    },
    onShowNotification: (notification) => {
        dispatch(showNotification(notification))
    }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Form);




           
