import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Comment as CommentContainer } from "containers/global";
import { Helper, Comment } from "components/global";
import classNames from "classnames";
import HigherOrder from "containers/global/HigherOrder";

export default class CommentDetail extends PureComponent {
  static displayName = "Comment.Detail";

  static propTypes = {
    subject: PropTypes.object.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleDestroy: PropTypes.func.isRequired,
    handleRestore: PropTypes.func.isRequired,
    handleFlag: PropTypes.func.isRequired,
    comment: PropTypes.object.isRequired,
    showLogin: PropTypes.func,
    handleUnflag: PropTypes.func,
    parent: PropTypes.object
  };

  constructor(props) {
    super(props);

    this.state = {
      editor: null
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.handleRestore = this.handleRestore.bind(this);
    this.handleDestroy = this.handleDestroy.bind(this);
    this.startEdit = this.startEdit.bind(this);
    this.startReply = this.startReply.bind(this);
    this.closeEditor = this.closeEditor.bind(this);
    this.handleFlag = this.handleFlag.bind(this);
    this.handleUnflag = this.handleUnflag.bind(this);
  }

  handleFlag(event) {
    this.props.handleFlag(event, this.props.comment);
  }

  handleUnflag(event) {
    this.props.handleUnflag(event, this.props.comment);
  }

  handleDelete(event) {
    this.props.handleDelete(event, this.props.comment);
  }

  handleRestore(event) {
    this.props.handleRestore(event, this.props.comment);
  }

  handleDestroy(event) {
    this.props.handleDestroy(event, this.props.comment);
  }

  startEdit() {
    this.setState(
      {
        editor: null
      },
      () => {
        this.setState({
          editor: "edit"
        });
      }
    );
  }

  startReply() {
    this.setState(
      {
        editor: null
      },
      () => {
        this.setState({
          editor: "reply"
        });
      }
    );
  }

  closeEditor() {
    this.setState({
      editor: null
    });
  }

  renderEditor() {
    if (!this.state.editor) return null;
    if (this.state.editor === "reply") return this.renderReplyEditor();
    if (this.state.editor === "edit") return this.renderEditEditor();
    return null;
  }

  renderReplyEditor() {
    return (
      <CommentContainer.Editor
        subject={this.props.subject}
        parentId={this.props.comment.id}
        cancel={this.closeEditor}
      />
    );
  }

  renderEditEditor() {
    return (
      <CommentContainer.Editor
        comment={this.props.comment}
        subject={this.props.subject}
        cancel={this.closeEditor}
      />
    );
  }

  renderComment() {
    const replyButtonClass = classNames({
      active: this.state.replying
    });
    const { comment, parent } = this.props;
    const { creator } = comment.relationships;

    return (
      <li className="annotation-comment">
        <Comment.Meta comment={comment} creator={creator} parent={parent} />
        <section className="body">
          <Helper.SimpleFormat text={comment.attributes.body} />
        </section>
        <HigherOrder.RequireKind requiredKind={"any"}>
          <nav className="utility">
            <ul>
              <li>
                <button className={replyButtonClass} onClick={this.startReply}>
                  {"Reply"}
                </button>
              </li>
              <HigherOrder.RequireAbility
                entity={comment}
                requiredAbility={"update"}
              >
                <li>
                  <button onClick={this.startEdit}>{"Edit"}</button>
                </li>
              </HigherOrder.RequireAbility>
              <HigherOrder.RequireAbility
                entity={comment}
                requiredAbility={"delete"}
              >
                {!comment.attributes.deleted ? (
                  <li>
                    <button onClick={this.handleDelete}>{"Delete"}</button>
                  </li>
                ) : null}
              </HigherOrder.RequireAbility>
              {comment.attributes.deleted ? (
                <li>
                  <button onClick={this.handleRestore}>{"Restore"}</button>
                </li>
              ) : null}
              {comment.attributes.deleted ? (
                <li>
                  <button onClick={this.handleDestroy}>{"Destroy"}</button>
                </li>
              ) : null}
              {comment.attributes.flagged ? (
                <li>
                  <button className="secondary" onClick={this.handleUnflag}>
                    {"Unflag"}
                  </button>
                </li>
              ) : (
                <li>
                  <button onClick={this.handleFlag}>{"Flag"}</button>
                </li>
              )}
            </ul>
            {this.renderEditor()}
          </nav>
        </HigherOrder.RequireKind>
        <HigherOrder.RequireKind requiredKind="unauthenticated">
          <nav className="utility">
            <ul>
              <li>
                <button onClick={this.props.showLogin}>
                  {"Login to reply"}
                </button>
              </li>
            </ul>
          </nav>
        </HigherOrder.RequireKind>
        <CommentContainer.Thread
          subject={this.props.subject}
          parent={this.props.comment}
          parentId={comment.id}
        />
      </li>
    );
  }

  render() {
    const { comment } = this.props;
    const { attributes } = comment;
    if (attributes.deleted && !attributes.abilities.readIfDeleted) {
      return <Comment.Deleted comment={comment} subject={this.props.subject} />;
    }
    return this.renderComment();
  }
}
