import React, { PureComponent, PropTypes } from 'react';
import { Form } from 'components/backend';
import { Form as FormContainer } from 'containers/backend';
import update from 'immutability-helper';
import set from 'lodash/set';
import { textsAPI } from 'api';

export default class TextDetailGeneralContainer extends PureComponent {

  static displayName = "TextDetail.General";
  static activeNavItem = "general";

  static propTypes = {
    route: PropTypes.object,
    text: PropTypes.object,
    dispatch: PropTypes.func,
    editSession: PropTypes.object
  };

  constructor(props) {
    super(props);
  }

  render() {
    // See https://github.com/ReactTraining/react-router/issues/3753
    return (
      <section>
        <FormContainer.Form
          route={this.props.routes[this.props.routes.length - 1]}
          model={this.props.text}
          name="backend-text-general"
          update={textsAPI.update}
          create={textsAPI.create}
          className="form-secondary"
        >
          <Form.TextInput
            label="Title"
            name="attributes[title]"
            placeholder="Enter Project Title"
          />
          <Form.Save text="Save Text" />
        </FormContainer.Form>
      </section>
    );
  }
}
