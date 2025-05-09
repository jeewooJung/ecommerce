# E-commerce 애플리케이션

본 프로젝트는 React, TypeScript 및 Vite를 기반으로 구축된 현대적인 이커머스 애플리케이션으로, Feature-Sliced Design 아키텍처 원칙을 따르며 AI 통합을 위한 Model-Context Protocol(MCP)을 활용합니다.

## 프로젝트 구조

프로젝트는 Feature-Sliced Design(FSD) 아키텍처를 따르며 다음과 같은 계층으로 구성됩니다:

### 1. Application Layer (`src/app/`)
애플리케이션 진입점, 글로벌 프로바이더, 스타일 및 라우팅 설정을 포함합니다.
- `routes.tsx`: 애플리케이션 라우팅 구성
- `providers/`: React 컨텍스트 프로바이더
- `styles/`: 전역 스타일

### 2. Pages Layer (`src/pages/`)
라우트를 나타내는 페이지 컴포넌트를 포함합니다.
- `HomePage/`: 랜딩 페이지
- `ProductDetailPage/`: 상품 정보 페이지
- `CartPage/`: 장바구니 페이지
- `NotFoundPage/`: 404 오류 페이지

### 3. Widgets Layer (`src/widgets/`)
엔티티와 기능을 결합한 복잡한 구성 블록을 포함합니다.
- `MainLayout/`: 애플리케이션 레이아웃 래퍼
- `ProductList/`: 상품 목록 컴포넌트

### 4. Features Layer (`src/features/`)
사용자 시나리오와 관련된 비즈니스 로직을 포함합니다.
- `cart/`: 장바구니 기능
  - `model/`: 장바구니 상태 관리
  - `ui/`: AddToCart 버튼과 같은 장바구니 UI 컴포넌트

### 5. Entities Layer (`src/entities/`)
애플리케이션의 비즈니스 엔티티를 포함합니다.
- `product/`: 상품 엔티티
  - `model/`: 상품 데이터 모델 및 타입
  - `ui/`: 상품 관련 컴포넌트

### 6. Shared Layer (`src/shared/`)
비즈니스 로직에 대한 지식이 없는 재사용 가능한 인프라를 포함합니다.
- `api/`: API 클라이언트 설정 및 엔드포인트
- `config/`: 설정 파일
- `lib/`: 유틸리티 함수 및 래퍼
- `ui/`: 재사용 가능한 UI 컴포넌트

## Model-Context Protocol(MCP) 통합

이 프로젝트는 AI 통합을 위해 Model-Context Protocol을 사용하여 개발자 경험을 향상시키고 AI 기반 기능을 활성화합니다.

### MCP 설정

MCP 설정은 `.vscode/mcp.json`에 저장되어 있으며 다음을 포함합니다:

- **Models**: 개발 및 생성에 사용되는 AI 모델
- **Agents**: 프로젝트에서 사용하도록 구성된 외부 서비스
- **Servers**: AI 기능을 갖춘 개발용 로컬 서버

### 사용 가능한 MCP 서버

1. **Playwright Agent**: 브라우저 자동화 및 테스트에 사용됩니다.
   ```
   Command: npx @playwright/mcp@latest
   ```

2. **Figma Agent**: Figma 디자인을 개발 워크플로우와 통합합니다.
   ```
   Command: npx figma-developer-mcp --stdio
   ```
   - 참고: Figma API 키는 별도의 환경 변수나 설정 파일에서 관리해야 합니다.

## 코딩 규칙

### 일반 규칙

1. **파일 구조**:
   - 컴포넌트는 진입점으로 `index.tsx` 파일이 있는 자체 폴더에 구성해야 합니다.
   - 컴포넌트 파일 및 폴더에는 PascalCase를 사용합니다(예: `ProductCard/`).
   - 유틸리티 파일에는 camelCase를 사용합니다(예: `api-client.ts`).

2. **TypeScript**:
   - 명시적 타이핑을 사용하고 `any` 타입을 피합니다.
   - 인터페이스 및 타입은 별도의 `.ts` 파일에 정의합니다.
   - 공유 타입은 관련 계층의 `types.ts` 파일에 배치합니다.

3. **컴포넌트 구조**:
   - 훅을 사용한 함수형 컴포넌트를 사용합니다.
   - 컴포넌트를 명명된 내보내기로 정의합니다.
   - 컴포넌트별 파일(스타일, 테스트 등)을 컴포넌트 폴더에 함께 배치합니다.

4. **상태 관리**:
   - 전역 상태에는 React 컨텍스트를 사용합니다.
   - UI 관련 상태에는 로컬 컴포넌트 상태를 사용합니다.
   - 비즈니스 로직은 모델 폴더에 유지합니다.

### 코드 스타일

1. **임포트 순서**:
   - 외부 라이브러리를 먼저 작성합니다.
   - 내부 모듈은 계층별로 작성합니다(shared → entities → features → widgets → pages).
   - 상대 임포트는 마지막에 작성합니다.

2. **명명 규칙**:
   - 변수, 함수 및 컴포넌트에 설명적인 이름을 사용합니다.
   - React 컴포넌트 및 인터페이스에는 PascalCase를 사용합니다.
   - 변수 및 함수에는 camelCase를 사용합니다.

3. **오류 처리**:
   - 비동기 작업에는 try/catch 블록을 사용합니다.
   - 페이지 수준에서 적절한 오류 경계를 구현합니다.

4. **주석**:
   - 복잡한 로직 및 중요한 비즈니스 규칙에 주석을 추가합니다.
   - 공개 API 및 공유 함수에는 JSDoc 주석을 사용합니다.

## 시작하기

### 필수 조건

- Node.js (v16+)
- pnpm

### 설치

```bash
# 종속성 설치
pnpm install

# 개발 서버 시작
pnpm dev

# 프로덕션 빌드
pnpm build

# 테스트 실행
pnpm test
```

## ESLint 설정

이 프로젝트는 코드 품질을 위해 TypeScript 통합이 포함된 ESLint를 사용합니다. 더 엄격한 타입 검사를 활성화하려면 ESLint 구성을 다음과 같이 업데이트하세요:

```js
export default tseslint.config({
  extends: [
    ...tseslint.configs.recommendedTypeChecked,
    ...tseslint.configs.strictTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```
