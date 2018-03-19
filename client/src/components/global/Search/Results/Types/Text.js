import React, { PureComponent } from "react";
import PropTypes from "prop-types";

export default class SearchResultsTypeText extends PureComponent {
  static displayName = "Search.Results.Type.Text";

  static propTypes = {
    result: PropTypes.object,
  };

  render() {
    const { result } = this.props;
    return (
      <li className="result-text" key={result.id}>
        This is a text
        {JSON.stringify(result)}
      </li>
    );
  }
}
