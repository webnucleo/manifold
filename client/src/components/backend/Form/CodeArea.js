import React, { Component } from "react";
import PropTypes from "prop-types";
import setter from "./setter";
import withDispatch from "containers/global/HigherOrder/withDispatch";
import { Form as GlobalForm } from "components/global";
import isString from "lodash/isString";
import { loadingActions } from "actions";

class FormCodeArea extends Component {
  static displayName = "Form.CodeArea";

  static propTypes = {
    label: PropTypes.string,
    dispatch: PropTypes.func.isRequired,
    value: PropTypes.string,
    instructions: PropTypes.string,
    errors: PropTypes.array,
    set: PropTypes.func,
    height: PropTypes.string,
    name: PropTypes.string,
    readOnly: PropTypes.bool,
    mode: PropTypes.oneOf(["css", "javascript", "html"]).isRequired
  };

  static defaultProps = {
    height: "200px",
    readOnly: false
  };

  constructor(props) {
    super(props);

    this.state = {
      Editor: null
    };
  }

  componentDidMount() {
    this.props.dispatch(loadingActions.start("code-area"));
    import(/* webpackChunkName: "ace-editor" */ "./CodeArea/Ace").then(ace => {
      const Editor = ace.default;
      this.props.dispatch(loadingActions.stop("code-area"));
      this.setState({ Editor });
    });
  }

  onChange = value => {
    this.props.set(value);
  };

  get value() {
    return this.props.value || "";
  }

  render() {
    const { Editor } = this.state;
    if (!Editor) return null;

    return (
      <div className="form-input">
        <GlobalForm.Errorable
          className="form-input"
          name={this.props.name}
          errors={this.props.errors}
          label={this.props.label}
        >
          <label>{this.props.label}</label>
          {isString(this.props.instructions) ? (
            <span className="instructions">{this.props.instructions}</span>
          ) : null}
          <Editor
            mode={this.props.mode}
            theme="idle_fingers"
            height={this.props.height}
            name={this.props.name}
            editorProps={{ $blockScrolling: true }}
            readOnly={this.props.readOnly}
            onChange={this.onChange}
            value={this.value}
            width="100%"
          />
        </GlobalForm.Errorable>
      </div>
    );
  }
}

export default setter(withDispatch(FormCodeArea));
