# Axioma Studio

A high-end modern architectural portfolio and consultation platform designed to combine uncompromising aesthetic beauty with structural digital integrity. This application provides immersive 3D spatial showcases and a highly structured, seamless multi-step consultation funnel for architectural clients.

## Tech Stack & Architecture

### Core Framework
* **Next.js 16 (App Router)**: Utilizing advanced hybrid rendering, structured layouts, and optimized client-side routing.
* **React 19 & TypeScript**: Strict type safety, structured interfaces, and performance optimizations leveraging modern concurrent rendering features.

### Content Management & Real-time Data
* **Sanity CMS (`next-sanity`)**: Headless content management providing schema configurations for architectural portfolios, dynamic media structures, and real-time content delivery.
* **Sanity Image URL Builder**: Dynamic optimization, resizing, and rendering of architectural imagery.

### Immersive 3D Graphics
* **Three.js / React Three Fiber (`@react-three/fiber`)**: Declarative integration for rendering heavy-performance 3D components.
* **React Three Drei (`@react-three/drei`)**: Functional helpers and abstractions for advanced camera setups, shaders, and lightweight 3D architectural model views.

### Form Handling & Business Logic
* **Formik**: Structural multi-step form management ensuring strict state retention across client identity, scope, and vision steps.
* **Yup**: Robust, asynchronous schema validation layer ensuring precise error mapping for complex geographic, alphanumeric, and dimensional spatial inputs.
* **EmailJS Browser**: Secure, decoupled client-side notification routing to dispatch consolidated client architectural visions instantly upon submission.
* **React Phone Input 2**: Standardized and interactive telephone metadata validation across global regional formats.

### Interactive Components & Motion
* **Swiper**: Fluid, hardware-accelerated touch-responsive touch navigation for digital portfolios and interactive image carousels.
* **Framer Motion**: Smooth, low-overhead animation states, declarative layout updates, and context transitions during active step changes.
* **React Icons**: Modular integration of performance-optimized scalable vector graphics.

### Styling & Base Infrastructure
* **Tailwind CSS v4 & PostCSS**: Native custom utility execution, strict minimal design language implementation, and high-performance cross-device layout rendering.
* **Styled Components**: Scoped, component-level dynamic design structures integrated cleanly within layout variations.

## Getting Started

### Prerequisites
Ensure you have Node.js installed on your local system before proceeding with dependency allocation.

### Installation

1. Clone the digital repository:
    ```bash
    git clone [https://github.com/Mohamedt693/axioma.git]
    cd axioma
2. Allocate system dependencies:
    npm install
3. Configure Environment Variables:
    Create a `.env.local` file in the root directory and establish your secure client tokens:
    ```env
    NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
    NEXT_PUBLIC_SANITY_DATASET=production
    NEXT_PUBLIC_TEMPLATE_ID=your_emailjs_template_id
    NEXT_PUBLIC_SERVICE_ID=your_emailjs_service_id
    NEXT_PUBLIC_PUBLIC_KEY=your_emailjs_public_key

Scripts Execution - Development Server: Run a localized real-time environment with active hot-reloading:
    npm run dev

* **Production Compilation**: Optimize and build the application architecture for deployment:
    ```bash
    npm run build

Local Staging: Initialize the locally compiled production application:
    npm run start

* **Code Verification**: Audit the application structural codebase for compliance and performance standards:
    ```bash
    npm run lint
