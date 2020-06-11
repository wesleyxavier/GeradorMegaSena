import React from "react";
import { render } from "@testing-library/react";
import EntradaAnimada from "./EntradaAnimada";
describe("EntradaAnimada", () => {
  test("Existe Svg", () => {
    const { getSelection } = render(<EntradaAnimada />);
    const existeSvg = getSelection("svg");
    expect(!!existeSvg).toBeTruthy();
  });
});
