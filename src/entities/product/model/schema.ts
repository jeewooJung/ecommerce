import { z } from 'zod';

// 제품 스키마 정의
export const ProductSchema = z.object({
  id: z.string(),
  title: z.string().min(1, '제품 이름은 필수입니다').max(100, '제품 이름은 100자를 초과할 수 없습니다'),
  description: z.string().min(1, '제품 설명은 필수입니다'),
  price: z.number().positive('가격은 양수여야 합니다'),
  discountPercentage: z.number().min(0).max(100).optional(),
  rating: z.number().min(0).max(5).optional(),
  stock: z.number().int().nonnegative('재고는 음수일 수 없습니다'),
  brand: z.string().min(1, '브랜드는 필수입니다'),
  category: z.string().min(1, '카테고리는 필수입니다'),
  thumbnail: z.string().url('썸네일은 유효한 URL이어야 합니다'),
  images: z.array(z.string().url('이미지는 유효한 URL이어야 합니다')),
});

// 제품 생성/수정을 위한 스키마
export const CreateProductSchema = ProductSchema.omit({ id: true });
export const UpdateProductSchema = CreateProductSchema.partial();

// 타입 추출
export type ProductSchemaType = z.infer<typeof ProductSchema>;
export type CreateProductSchemaType = z.infer<typeof CreateProductSchema>;
export type UpdateProductSchemaType = z.infer<typeof UpdateProductSchema>;