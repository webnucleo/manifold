import React from "react";
import renderer from "react-test-renderer";
import { ProjectWrapperContainer } from "../Wrapper";
import { wrapWithRouter } from "test/helpers/routing";
import { Provider } from "react-redux";
import build from "test/fixtures/build";

describe("Backend Project Wrapper Container", () => {
  const store = build.store();
  const project = build.entity.project("1", { abilities: { delete: true } });
  const user = build.entity.user("2", {
    kind: "admin",
    classAbilities: { permission: { create: true } }
  });
  const authentication = {
    authenticated: true,
    currentUser: user
  };

  const component = renderer.create(
    wrapWithRouter(
      <Provider store={store}>
        <ProjectWrapperContainer
          project={project}
          dispatch={store.dispatch}
          location={{ pathname: "/projects/1" }}
          authentication={authentication}
          route={{
            routes: []
          }}
          match={{
            params: {}
          }}
        />
      </Provider>
    )
  );

  it("renders correctly", () => {
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("doesn't render to null", () => {
    let tree = component.toJSON();
    expect(tree).not.toBe(null);
  });
});
