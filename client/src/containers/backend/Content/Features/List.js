import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Dialog } from "components/backend";
import { Link } from "react-router-dom";
import lh from "helpers/linkHandler";
import { Resource } from "components/frontend";
import FormattedDate from "components/global/FormattedDate";
import { featuresAPI, requests } from "api";
import { notificationActions, entityStoreActions } from "actions";
import connectAndFetch from "utils/connectAndFetch";
import entityUtils from "utils/entityUtils";
import truncate from "lodash/truncate";

const { select } = entityUtils;
const { request } = entityStoreActions;

class ContentFeaturesList extends PureComponent {
  static displayName = "Content.Features.List";

  static mapStateToProps = state => {
    return {
      features: select(requests.beFeatures, state.entityStore)
    };
  };

  static propTypes = {
    features: PropTypes.array,
    dispatch: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.state = {
      confirmation: null
    };
  }

  componentDidMount() {
    this.fetchFeatures();
  }

  fetchFeatures() {
    const call = featuresAPI.index();
    const featuresRequest = request(call, requests.beFeatures);
    this.props.dispatch(featuresRequest);
  }

  handleDestroy = feature => {
    const heading = "Are you sure you want to delete this feature?";
    const message = "This action cannot be undone.";
    new Promise((resolve, reject) => {
      this.setState({
        confirmation: { resolve, reject, heading, message }
      });
    }).then(
      () => {
        this.doDestroy(feature);
        this.closeDialog();
      },
      () => {
        this.closeDialog();
      }
    );
  };

  closeDialog = () => {
    this.setState({ confirmation: null });
  };

  doDestroy = feature => {
    const call = featuresAPI.destroy(feature.id);
    const options = { removes: feature };
    const featureRequest = request(call, requests.beFeatureDestroy, options);
    this.props.dispatch(featureRequest).promise.then(() => {
      this.notifyDestroy(feature);
    });
  };

  notifyDestroy(feature) {
    const notification = {
      level: 0,
      id: `FEATURE_DESTROYED_${feature.id}`,
      heading: "The feature has been deleted.",
      body: `And we're sorry to see it go.`,
      expiration: 5000
    };
    this.props.dispatch(notificationActions.addNotification(notification));
  }

  handleMoveDown = (event, feature) => {
    event.preventDefault();
    this.updateFeaturePosition(feature, "down");
  };

  handleMoveUp = (event, feature) => {
    event.preventDefault();
    this.updateFeaturePosition(feature, "up");
  };

  updateFeaturePosition(feature, newPos) {
    const changes = {
      attributes: { position: newPos }
    };
    const call = featuresAPI.update(feature.id, changes);
    const featureRequest = request(call, requests.beFeatureUpdate);
    this.props.dispatch(featureRequest).promise.then(() => {
      this.fetchFeatures();
    });
  }

  render() {
    const { features } = this.props;
    if (!features) return null;

    return (
      <div>
        {this.state.confirmation ? (
          <Dialog.Confirm {...this.state.confirmation} />
        ) : null}

        <section className="text-category-list-secondary">
          <div className="text-category">
            <header>
              <h4 className="category-title highlight">Features</h4>
            </header>
            <div className="instructional-copy margin-top">
              <p>
                {`Features populate the featured content area at the top of the home
                  page. Click the button below to create a featured content element.`}
              </p>
            </div>

            <ul className="texts-group">
              {features.map((feature, index, collection) => {
                return (
                  <li key={feature.id}>
                    <div>
                      <Link
                        className="asset-thumb"
                        to={lh.link("backendContentFeature", feature.id)}
                      >
                        <figure className="asset-image">
                          <div className="asset-image-placeholder">
                            <Resource.Icon.Document />
                          </div>
                        </figure>
                        <div className="asset-description">
                          <h3 className="asset-title">
                            {truncate(
                              feature.attributes.header ||
                                `Untitled #${feature.attributes.position}`,
                              { length: 60 }
                            )}
                            <span className="subtitle" />
                          </h3>
                          <span className="asset-date">
                            <FormattedDate
                              prefix="Added"
                              format="MMMM, YYYY"
                              date={feature.attributes.createdAt}
                            />
                          </span>
                          {index === 0 ? (
                            <span className="asset-state">Live</span>
                          ) : null}
                        </div>
                      </Link>
                      <div className="text-category-list-utility">
                        <Link
                          className="button"
                          to={lh.link("backendContentFeature", feature.id)}
                        >
                          Edit
                        </Link>
                        {index !== 0 ? (
                          <button
                            onClick={event => {
                              this.handleMoveUp(event, feature);
                            }}
                          >
                            <i className="manicon manicon-arrow-up" />
                          </button>
                        ) : (
                          <button
                            style={{ visibility: "hidden" }}
                            onClick={event => {
                              this.handleMoveUp(event, feature);
                            }}
                          >
                            <i className="manicon manicon-arrow-up" />
                          </button>
                        )}
                        {index + 1 < collection.length ? (
                          <button
                            onClick={event => {
                              this.handleMoveDown(event, feature);
                            }}
                          >
                            <i className="manicon manicon-arrow-down" />
                          </button>
                        ) : (
                          <button
                            onClick={event => {
                              this.handleMoveDown(event, feature);
                            }}
                            style={{ visibility: "hidden" }}
                          >
                            <i className="manicon manicon-arrow-down" />
                          </button>
                        )}
                        <button
                          onClick={() => {
                            this.handleDestroy(feature);
                          }}
                        >
                          <i className="manicon manicon-x" />
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <div className="buttons-icon-horizontal">
          <Link
            className="button-icon-secondary"
            to={lh.link("backendContentFeatureNew")}
          >
            <i className="manicon manicon-plus" />
            Add a New Feature
          </Link>
        </div>
      </div>
    );
  }
}

export default connectAndFetch(ContentFeaturesList);
