import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Form } from "components/backend";

export default class ResourceFormKindFile extends PureComponent {
  static displayName = "Resource.Form.Kind.File";

  static propTypes = {};

  render() {
    return (
      <Form.Upload
        layout="square"
        label="File"
        accepts="all"
        readFrom="attributes[attachmentFileName]"
        name="attributes[attachment]"
        remove="attributes[removeAttachment]"
        {...this.props}
      />
    );
  }
}
