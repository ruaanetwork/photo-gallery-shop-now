
import { Product, Category } from '@/types';

export const categories: Category[] = [
  { id: '1', name: 'Electronics', description: 'Latest gadgets and electronics' },
  { id: '2', name: 'Clothing', description: 'Fashion and apparel' },
  { id: '3', name: 'Home & Garden', description: 'Home improvement and garden supplies' },
  { id: '4', name: 'Sports', description: 'Sports and fitness equipment' },
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Wireless Headphones',
    description: 'High-quality wireless headphones with noise cancellation',
    price: 99.99,
    images: ['https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500'],
    category: 'Electronics',
    tags: ['wireless', 'audio', 'bluetooth'],
    inStock: true,
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: 'Laptop Computer',
    description: 'Powerful laptop for work and gaming',
    price: 1299.99,
    images: ['https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500'],
    category: 'Electronics',
    tags: ['computer', 'laptop', 'work'],
    inStock: true,
    createdAt: '2024-01-16T10:00:00Z'
  },
  {
    id: '3',
    name: 'Cotton T-Shirt',
    description: 'Comfortable cotton t-shirt in various colors',
    price: 24.99,
    images: ['https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500'],
    category: 'Clothing',
    tags: ['cotton', 'casual', 'comfortable'],
    inStock: true,
    createdAt: '2024-01-17T10:00:00Z'
  },
  {
    id: '4',
    name: 'Running Shoes',
    description: 'Professional running shoes for athletes',
    price: 89.99,
    images: ['https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500'],
    category: 'Sports',
    tags: ['running', 'shoes', 'sports'],
    inStock: true,
    createdAt: '2024-01-18T10:00:00Z'
  }
];
