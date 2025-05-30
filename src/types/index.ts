
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  tags: string[];
  inStock: boolean;
  createdAt: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface AdminUser {
  id: string;
  email: string;
  isAdmin: boolean;
}
