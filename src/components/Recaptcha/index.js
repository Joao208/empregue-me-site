import React, { Component } from 'react';
import Recaptcha from 'react-google-invisible-recaptcha';

class index extends Component {

    state = {
        messageSent: false
    }

    sendMessage = () => {
        this.recaptcha.execute();
    }

    onResolved = () => {
        this.setState({messageSent: true})
        // Process Data //
    }

    render() {
        return (
            <div>
                <Recaptcha
                        ref={ ref => this.recaptcha = ref }
                        sitekey="6LcBAqYZAAAAAIgecheCn5AHGEv_wkOqt3xKDsfo"
                        onResolved={ this.onResolved }
                    />
            </div>
        );
    }
}

export default index;