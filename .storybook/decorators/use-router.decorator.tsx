import {MemoryRouter} from "react-router-dom";
import type {DecoratorFn} from "@storybook/react";

export const withRouter: DecoratorFn = (storyFn) =>
    <MemoryRouter initialEntries={['/']}>
      {storyFn()}
    </MemoryRouter>;
