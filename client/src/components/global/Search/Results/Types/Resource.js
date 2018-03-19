import React, { PureComponent } from "react";
import PropTypes from "prop-types";

export default class SearchResultsTypeResource extends PureComponent {
  static displayName = "Search.Results.Type.Resource";

  static propTypes = {
    result: PropTypes.object,
  };

  render() {
    const { result } = this.props;
    return (
      <li className="result-resource" key={result.id}>
        This is a resource
        {JSON.stringify(result)}
      </li>
    );
  }
}
