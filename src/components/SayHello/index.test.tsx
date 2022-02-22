import React from "react";
import { render } from "@testing-library/react";
import SayHello from "./index";

describe("SayHello", () => {
    test("renders the SayHello component", () => {
      render(<SayHello name="daniel" />);
    });
  });