import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import connectAndFetch from "utils/connectAndFetch";
import { entityStoreActions } from "actions";
import {
  List,
  Project,
  Dashboard as DashboardComponents
} from "components/backend";
import { HigherOrder } from "containers/global";
import { select, meta } from "utils/entityUtils";
import { projectsAPI, statisticsAPI, requests } from "api";
import debounce from "lodash/debounce";
import lh from "helpers/linkHandler";
import UserAbilities from "helpers/userAbilities";
import get from "lodash/get";

const { request } = entityStoreActions;

const perPage = 5;

export class DashboardsAdminContainer extends PureComponent {
  static mapStateToProps = state => {
    return {
      statistics: select(requests.beStats, state.entityStore),
      projects: select(requests.beProjects, state.entityStore),
      projectsMeta: meta(requests.beProjects, state.entityStore),
      recentProjects: select(requests.beRecentProjects, state.entityStore),
      currentUser: get(state, "authentication.currentUser")
    };
  };

  static propTypes = {
    projects: PropTypes.array,
    statistics: PropTypes.object,
    dispatch: PropTypes.func,
    projectsMeta: PropTypes.object,
    recentProjects: PropTypes.array,
    currentUser: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = { filter: { order: "sort_title ASC" } };
    this.userAbilities = new UserAbilities(props.currentUser);
    this.filterChangeHandler = this.filterChangeHandler.bind(this);
    this.updateHandlerCreator = this.updateHandlerCreator.bind(this);
    this.updateResults = debounce(this.updateResults.bind(this), 250);
  }

  componentWillMount() {
    const projectsRequest = request(
      projectsAPI.index(
        this.buildFetchFilter(this.props, { order: "sort_title ASC" }),
        { size: perPage }
      ),
      requests.beProjects
    );
    const recentProjectsRequest = request(
      projectsAPI.index(
        this.buildFetchFilter(this.props, { order: "updated_at DESC" }),
        { size: 2 }
      ),
      requests.beRecentProjects
    );
    const statsRequest = request(statisticsAPI.show(), requests.beStats);

    const { promise: one } = this.props.dispatch(projectsRequest);
    const { promise: two } = this.props.dispatch(recentProjectsRequest);
    const promises = [one, two];

    if (this.userAbilities.hasClassAbility("statistics", "read")) {
      const { promise: three } = this.props.dispatch(statsRequest);
      promises.push(three);
    }
    return Promise.all(promises);
  }

  buildFetchFilter = (props, base) => {
    const out = Object.assign({}, base);
    const currentUser = props.currentUser;
    if (!currentUser) return out;
    if (currentUser.attributes.abilities.viewDrafts) return out;
    out.permitted_user = currentUser.id;
    return out;
  };

  updateResults(eventIgnored = null, page = 1) {
    const pagination = { number: page, size: perPage };
    const action = request(
      projectsAPI.index(this.state.filter, pagination),
      requests.beProjects
    );
    this.props.dispatch(action);
  }

  filterChangeHandler(filter) {
    this.setState({ filter }, () => {
      this.updateResults();
    });
  }

  updateHandlerCreator(page) {
    return event => {
      this.updateResults(event, page);
    };
  }

  render() {
    return (
      <div>
        <section>
          <div className="container">
            <section className="backend-dashboard">
              <div className="left">
                <header className="section-heading-secondary">
                  <h3>
                    {"Projects"} <i className="manicon manicon-stack" />
                  </h3>
                </header>
                {this.props.projects && this.props.projectsMeta ? (
                  <List.Searchable
                    newButton={{
                      path: lh.link("backendProjectsNew"),
                      text: "Add a New Project",
                      authorizedFor: "project"
                    }}
                    entities={this.props.projects}
                    singularUnit="project"
                    pluralUnit="projects"
                    pagination={this.props.projectsMeta.pagination}
                    paginationClickHandler={this.updateHandlerCreator}
                    entityComponent={Project.ListItem}
                    filterChangeHandler={this.filterChangeHandler}
                  />
                ) : null}
              </div>

              <div className="right">
                <nav className="vertical-list-primary flush">
                  {this.props.recentProjects ? (
                    <List.SimpleList
                      entities={this.props.recentProjects}
                      entityComponent={Project.ListItem}
                      title={"Recently Updated"}
                      icon={"manicon-stack"}
                      listClasses={"flush"}
                    />
                  ) : null}
                </nav>
                <HigherOrder.RequireAbility
                  entity="statistics"
                  requiredAbility={"read"}
                >
                  <section>
                    <header className="section-heading-secondary">
                      <h3>
                        {"Activity"}{" "}
                        <i className="manicon manicon-pulse-small" />
                      </h3>
                    </header>
                    <DashboardComponents.Activity
                      statistics={this.props.statistics}
                    />
                  </section>
                </HigherOrder.RequireAbility>
              </div>
            </section>
          </div>
        </section>
      </div>
    );
  }
}

export default connectAndFetch(DashboardsAdminContainer);