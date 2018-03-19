import React, { PureComponent } from "react";
import PropTypes from "prop-types";

export default class SearchResultsTypeProject extends PureComponent {
  static displayName = "Search.Results.Type.Project";

  static propTypes = {
    result: PropTypes.object,
  };

  render() {
    const { result } = this.props;
    return (
      <li className="result-project" key={result.id}>
        This is a project
        {JSON.stringify(result)}
      </li>
    );
  }
}
