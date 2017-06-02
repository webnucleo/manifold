import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';

export default class Splash extends Component {

  static displayName = "Layout.Splash";

  static propTypes = {
    authenticated: PropTypes.bool,
    toggleSignInUpOverlay: PropTypes.func
  };

  constructor() {
    super();
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  handleSignUp(event) {
    event.preventDefault();
    this.props.toggleSignInUpOverlay();
  }

  render() {
    return (
      <section className="bg-accent-primary bg-accent-primary-cornell">
        <div className="container rel">
          <div className="splash-50">
            <div className="left">
              <h2 className="heading-primary">
                {'Cornell Global Perspectives'}
              </h2>
              <p>
                {'An imprint of Cornell University Press, curated by the Mario Einaudi ' +
                'Center for International Studies.'}
              </p>
              <nav className="buttons">
                <a
                  href="http://einaudi.cornell.edu"
                  target="blank"
                  className="button-bare-primary"
                >
                  {'Learn More'}
                </a>
                {!this.props.authenticated ?
                  <Link
                    to="#"
                    onClick={this.handleSignUp}
                    target="blank"
                    className="button-bare-primary"
                  >
                    {'Sign Up'}
                  </Link> : null
                }
              </nav>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
