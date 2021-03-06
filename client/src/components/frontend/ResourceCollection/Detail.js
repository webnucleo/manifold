import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Utility, ResourceList, ResourceCollection } from "components/frontend";

export default class ResourceCollectionDetail extends PureComponent {
  static displayName = "ResourceCollection.Detail";

  static propTypes = {
    collection: PropTypes.object,
    project: PropTypes.object,
    collectionUrl: PropTypes.string.isRequired,
    slideshowResources: PropTypes.array,
    slideshowPagination: PropTypes.object,
    collectionResources: PropTypes.array,
    collectionPagination: PropTypes.object,
    collectionPaginationHandler: PropTypes.func,
    dispatch: PropTypes.func,
    filterChange: PropTypes.func.isRequired,
    initialFilterState: PropTypes.object
  };

  render() {
    const project = this.props.project;
    const collection = this.props.collection;
    if (!project || !collection) return null;

    const attr = collection.attributes;
    const count = attr.collectionResourcesCount;
    return (
      <section>
        <div className="container flush-top flush-bottom">
          <div className="collection-detail">
            <ResourceCollection.Title collection={collection} showCreatedAt />
            <div className="collection-description">
              <p>{attr.description}</p>
            </div>
            <Utility.ShareBar url={this.props.collectionUrl} />
          </div>
        </div>
        <ResourceList.Slideshow
          collection={this.props.collection}
          collectionResources={this.props.slideshowResources}
          count={project.attributes.resourcesCount}
          pagination={this.props.slideshowPagination}
          dispatch={this.props.dispatch}
        />
        <div className="container flush-top">
          <ResourceList.Totals
            belongsTo="collection"
            count={count}
            project={project}
          />
          <ResourceList.Filters
            kinds={collection.attributes.resourceKinds}
            tags={collection.attributes.resourceTags}
            initialFilterState={this.props.initialFilterState}
            filterChangeHandler={this.props.filterChange}
          />
          <ResourceList.Cards
            collection={this.props.collection}
            project={this.props.project}
            resources={this.props.collectionResources}
            pagination={this.props.collectionPagination}
            paginationClickHandler={this.props.collectionPaginationHandler}
          />
        </div>
      </section>
    );
  }
}
