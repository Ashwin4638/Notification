import React, { Component} from "react";
import Notification from './Notification';
import { connect } from "react-redux";
import {hideNotification, showNotification} from '../redux/action'

class NotificationList extends Component {
    render() {
        const { onShowNotification, onHideNotification, notificaionsMessage  } = this.props;
        return (
            <div className="NotificationList">
                { Object.keys(notificaionsMessage).map((id) => (
                    <Notification
                      key={ id }
                      notificationId={ id }
                      notification={ notificaionsMessage[id] }
                      onShowNotification={onShowNotification}
                      onHideNotification={ onHideNotification }
                    />
                )) }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        notificaionsMessage: state.msgText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    onHideNotification: (id) => {
        dispatch(hideNotification(id));
    },
    onShowNotification: (message) => {
        dispatch(showNotification(message))
    }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(NotificationList);