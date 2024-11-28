export default class CarCarCategoriesService {
  static async getCarCategories(): Promise<string[]> {
    const response = await fetch('http://localhost:8080/api/v1/carcategories');
    if (!response.ok) {
      throw new Error('Failed to fetch car categories');
    }
    const data = await response.json();
    return data.map((category: { name: string }) => category.name);
  }
}