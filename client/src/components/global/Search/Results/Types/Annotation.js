import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import lh from "helpers/linkHandler";
import { Link } from "react-router-dom";

export default class SearchResultsTypeAnnotation extends PureComponent {
  static displayName = "Search.Results.Type.Annotation";

  static propTypes = {
    result: PropTypes.object,
  };

  render() {
    const { result } = this.props;
    const { annotation, textSection } = result.relationships;
    const { creator } = annotation.relationships;
    const url = lh.link(
      "readerSection",
      textSection.attributes.textSlug,
      textSection.id
    );
    const title = textSection.attributes.textTitle;
    const section = textSection.attributes.name;

    return (
      <li className="result-annotation" key={result.id}>
        <Link to={`${url}#annotation-${result.attributes.searchableId}`}>
          <div className="result">
            <Annotation.Meta
              subject={`Annotated "${section}" in ${title}`}
              annotation={annotation}
              creator={creator}
              showAnnotationLabel
            />
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
