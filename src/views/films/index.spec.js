import { mount } from "enzyme"
import toJson from "enzyme-to-json"
import Films from "./index";
import { makeMountRender, reduxify, snapshotify } from "../../test-utils/index";

describe("Fetching Actions from Starwars", () => {
  it("Fetch films from the starwars API", () => {
    const wrapper = makeMountRender(reduxify(Films))()
    expect(snapshotify(wrapper)).toMatchSnapshot();
  });
});