const API_BASE_URL = "https://v2.api.noroff.dev";

export async function getOnlineShopProducts<T>(): Promise<T> {
  const response = await fetch(`${API_BASE_URL}/online-shop`);

  if (!response.ok) {
    throw new Error(`Failed to fetch products: ${response.status}`);
  }

  return (await response.json()) as T;
}

export async function getOnlineShopProductById<T>(id: string): Promise<T> {
  const response = await fetch(`${API_BASE_URL}/online-shop/${id}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch product ${id}: ${response.status}`);
  }

  return (await response.json()) as T;
}
