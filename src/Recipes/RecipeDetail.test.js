import { render, waitFor } from "@testing-library/react";
import RecipeDetail from "./RecipeDetail";
import { useRecipeDetails } from "./useRecipeDetails";
import { MemoryRouter, Route, Routes } from "react-router-dom";

// jest.mock("react-router-dom", () => ({
//   ...jest.requireActual("react-router-dom"),
//   useParams: () => ({
//     id: "123", // Mock ID for testing
//   }),
// }));

jest.mock("./useRecipeDetails", () => ({
  useRecipeDetails: (id) => ({
    recipe: {
      title: "pizza" + id,
      publisher: "The oven",
    },
    loading: false,
  }),
}));

describe("Recipe RecipeDetail", () => {
  it("should have all fields", async () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={["/recipe/123"]}>
        <Routes>
          <Route path="/recipe/:id" element={<RecipeDetail />} />
        </Routes>
      </MemoryRouter>
    );

    expect(getByText("pizza123")).toBeInTheDocument();
    expect(getByText("The oven")).toBeInTheDocument();
  });
});
