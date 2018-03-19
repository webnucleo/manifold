import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import lh from "helpers/linkHandler";
import { Link } from "react-router-dom";

export default class SearchResultsTypeAnnotation extends PureComponent {
  static displayName = "Search.Results.Type.SearchableNode";

  static propTypes = {
    result: PropTypes.object,
  };

  render() {
    const { result } = this.props;
    const { textSection } = result.relationships;
    const url = lh.link(
      "readerSection",
      textSection.attributes.textSlug,
      textSection.id
    );
    return (
      <li className="result-text" key={result.id}>
        <Link to={`${url}#node-${result.attributes.nodeUuid}`}>
          <div className="result">
            <h5>
              {textSection.attributes.textTitle}: {textSection.attributes.name}
            </h5>
            <p
              className="with-highlights"
              dangerouslySetInnerHTML={{
                __html: `\u2026 ${result.attributes.highlightedBody}\u2026`
              }}
            />
          </div>
        </Link>
      </li>
    );
  }
}
