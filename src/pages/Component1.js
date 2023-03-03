import React, { Component} from "react";
import { connect } from "react-redux";
import {hideNotification, showNotification} from '../redux/action'

class Component1 extends Component {

    state = {
        count: 0,
        isVisible: false,
        onHover: false,
    }

     timer = null;   

    onHandleButtonClick = () => {
        const { onShowNotification, onHideNotification  } = this.props;
        this.setState({ isVisible: true});
        // generate a unique id for the notification
        const id = new Date().getTime(); 
        const message = "Hello World";
        const notification = { id, message };
        console.log('notification', notification)
        onShowNotification(notification)
        this.timer = setTimeout(() => {
            this.setState({ isVisible: false });
            onHideNotification(notification)
        }, 3000)
    }

    onHandleMouseOver = (e) => {
        e.preventDefault();
        this.setState({ onHover: true });
        clearTimeout(this.timer)
    }

    onHandleMouseLeave = (e) => {
        e.preventDefault();
        this.setState({ onHover: false})

        this.timer = setTimeout(() => {
            this.setState({ isVisible: false });
        }, 3000)
    }

    renderMessage() {
        const { notificaionsMessage } = this.props;

        console.log('notificaionsMessage', notificaionsMessage)

        if (!notificaionsMessage.length) {
            return;
        }

        return (
            <div className="notification" onMouseOver={ this.onHandleMouseOver} onMouseLeave={ this.onHandleMouseLeave}>
            {notificaionsMessage.map(notification => (
                <div key={notification.id}>
                {notification.message}
                </div>
            ))}
            </div>
        )
       
    }
    render() {
        return (
            <div className="Component1">
                <button onClick={ this.onHandleButtonClick } className="ToastButton">Toast</button>
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
  )(Component1);