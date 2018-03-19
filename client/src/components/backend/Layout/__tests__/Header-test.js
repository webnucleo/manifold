jest.mock("containers/global/Notifications", () => "notifications");
import React from "react";
import renderer from "react-test-renderer";
import Header from "../Header";
import build from "test/fixtures/build";
import { Provider } from "react-redux";
import { wrapWithRouter, renderWithRouter } from "test/helpers/routing";

describe("Backend.Layout.Header component", () => {
  const settings = build.entity.settings();
  const toggleOverlayMock = jest.fn();
  const togglerUserPanelMock = jest.fn();
  const startLogoutMock = jest.fn();
  const currentUser = build.entity.user("1", { kind: "admin", classAbilities: { user: { read: true }, settings: { read: true } } });

  it("renders correctly", () => {
    const component = renderer.create(
      wrapWithRouter(
        <Provider store={build.store()}>
          <Header
            authentication={{
              authenticated: true,
              currentUser: currentUser
            }}
            notifications={{ notifications: {} }}
            location={{}}
            visibility={{ uiPanels: {} }}
            settings={settings}
            commonActions={{
              toggleSignInUpOverlay: toggleOverlayMock,
              toggleUserPanel: togglerUserPanelMock,
              logout: startLogoutMock
            }}
          />
        </Provider>
      )
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
