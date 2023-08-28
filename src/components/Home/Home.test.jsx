import React from "react";
import { create } from "react-test-renderer";
import Home from "./Home";

describe("Home (Component)", () => {
  it("should render the filter by title", async () => {
    const wrapper = await create(<Home />);
    const instance = wrapper.root;
    expect(instance.findByType("h3").children).toContain("Filter By");
  });
});
