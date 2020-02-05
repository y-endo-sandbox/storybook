import * as React from "react";
import { storiesOf } from "@storybook/react";

import Button from "../src/components/Button";

const components = storiesOf("Components", module);

components.add("Button", () => <Button />);
