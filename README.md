# AI Optical Interconnect Visualization 🌐✨

> **The High-Speed Optical Interconnect Stack Powering AGI**

[🇨🇳 中文](./README_zh-CN.md) | **🇺🇸 English**

### 🔗 Live Demo: [https://6m1w.github.io/optics/](https://6m1w.github.io/optics/)


## 📖 Introduction

As AI model parameters scale towards trillions and GPU compute power doubles every two years, traditional copper interconnects are hitting the "Copper Wall"—facing severe signal attenuation and power consumption issues at 224Gbps.

**AI Optical Interconnect** is the critical "artery" releasing the full potential of AI computing. This project visualizes the entire value chain, from raw materials to the massive AI clusters, using an interactive 3D exploded view.

## 🚀 Features

- **Interactive 3D Exploded View**: Explore the optical stack layer by layer with a "CyberGear-inspired" aesthetic.
- **Detailed Insights**: Click on any component (Wafer, PIC, EIC, Module, CPO, Fabric, Cluster) to see deep-dive information.
- **Real-world Context**: Includes typical examples (e.g., EML, Silicon Photonics) and core companies driving the industry.
- **Responsive Design**: Built for desktop exploration with a cinematic dark mode interface.

## 🛠️ Tech Stack

- **Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **3D Engine**: [Three.js](https://threejs.org/) via [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
- **Helpers**: [Drei](https://github.com/pmndrs/drei) for environment, controls, and text.
- **Language**: TypeScript

## 📦 Installation & Run

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/ai-optical-interconnect.git
   cd ai-optical-interconnect
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 📂 Project Structure

```
src/
├── components/
│   ├── OpticalInterconnectScene.tsx  # Core 3D Scene Logic
│   └── LayerInfoPanel.tsx            # UI Overlay for Details
├── data/
│   └── opticalStack.ts               # Structured Data (JSON)
├── App.tsx                           # Main Layout
└── main.tsx                          # Entry Point
```

## 🎨 Design Philosophy

The visualization aims for a "Premium Tech" feel:
- **Dark Mode**: Deep blues and blacks to minimize eye strain and enhance contrast.
- **Floating Geometry**: 3D elements float and rotate gently, signifying the dynamic nature of light.
- **Focus on Data**: While visually rich, the primary goal is to convey the hierarchy and importance of each layer in the optical stack.

## 📄 License

MIT License. Feel free to use this for educational purposes or as a template for your own 3D visualizations.

---

