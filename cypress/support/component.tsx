import React from "react";
import "./commands";
import "@cypress/code-coverage/support";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { MemoryRouterProps, MemoryRouter } from "react-router";
import { mount, MountOptions, MountReturn } from "cypress/react";

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Mounts a React node
       * @param component React Node to mount
       * @param options Additional options to pass into mount
       */
      mount(
        component: React.ReactNode,
        options?: MountOptions & { routerProps?: MemoryRouterProps }
      ): Cypress.Chainable<MountReturn>;
    }
  }
}

Cypress.Commands.add(
  "mount",
  (component, { routerProps = {}, ...options } = {}) => {
    return mount(
      <MemoryRouter {...routerProps}>
        {component}
        <ToastContainer />
      </MemoryRouter>,
      options
    );
  }
);
