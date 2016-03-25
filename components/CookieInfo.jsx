import React, {PropTypes, Component} from 'react';

const DefaultCookieInfo = (props) => (
    <div className="container">
        <div className="row">
            <div className="col-xs-10 pull-left">This site uses cookies. By continuing to browse the site you are agreeing to our use of cookies. <a href="/cookies">Find out more here</a>.</div>
            <div className="col-xs-2 pull-right">
                <a href="#" onClick={e => {e.preventDefault(); props.onConsent();}}>
                    <span>Dismiss</span>
                </a>
            </div>
        </div>
    </div>
);

export default class CookieInfo extends Component {
    constructor () {
        super();
        this.state = {
            hide: !!window.localStorage.getItem('universe:cookie-nag-hide')
        };
    }

    handleConsent () {
        window.localStorage.setItem('universe:cookie-nag-hide', true);

        this.setState({
            hide: true
        });
    }

    render () {
        if (this.state.hide) {
            return <div></div>;
        }

        const onConsent = this.handleConsent.bind(this);

        return (
            <div className={this.props.clearStyle ? '' : 'universe-cookie-info'}>
                {
                    this.props.children
                        ? React.cloneElement(this.props.children, {onConsent})
                        : <DefaultCookieInfo onConsent={onConsent} />
                }
            </div>
        );
    }
};

CookieInfo.propTypes = {
    children: PropTypes.element
};