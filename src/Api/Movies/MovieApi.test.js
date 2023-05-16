import { apiGet } from "../StandardApi";
import { getAllMovies } from "./MovieApi";

describe("getAllMovies", () => {
    it("should call apiGet with the correct API endpoint when title and sortBy are provided", async () => {
      const title = "exampleTitle";
      const sortBy = "exampleSortBy";
      const expectedApi = `movies?query=${title}&sortBy=${sortBy}`;
      apiGet.mockResolvedValue(`movies?query=exampleTitle&sortBy=exampleSortBy`); // Mock the apiGet function
  
      const result = await getAllMovies(title, sortBy);
  
      expect(apiGet).toHaveBeenCalledWith(expectedApi);
      expect(result).toBe(expectedResult);
    });
  });
  