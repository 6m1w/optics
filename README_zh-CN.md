# AI 光互连核心价值链 🌐✨

> **赋能 AGI 的高速光互连技术栈**

**🇨🇳 中文** | [🇺🇸 English](./README.md)

### 🔗 在线演示: [https://6m1w.github.io/optics/](https://6m1w.github.io/optics/)

## 📖 项目介绍

随着 AI 模型参数迈向万亿级，GPU 算力每两年翻 10 倍，但传统铜缆在 224Gbps 速率下面临严重的信号衰减与功耗墙（Copper Wall）。

**AI 光互连（Optical Interconnect）** 凭借高带宽密度、低延时与低功耗特性，已成为突破 I/O 瓶颈、构建万卡级智算集群的唯一物理层解，是释放 AI 算力的关键「大动脉」。本项目通过交互式 3D 爆炸图，可视化展示了从基础材料到 AI 智算集群的完整价值链。

## 🚀 功能特性 

- **交互式 3D 爆炸图**: 参考小米 CyberGear 风格，层层拆解光互连技术栈。
- **深度解析**: 点击任意组件（晶圆、光芯片、电芯片、光模块、CPO、光纤网络、智算集群），可查看详细信息。
- **产业全景**: 包含典型器件示例（如 EML, 硅光）及行业核心代表公司。
- **响应式设计**: 专为桌面端探索打造的深色科技感界面。

## 🛠️ 技术栈

- **框架**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **3D 引擎**: [Three.js](https://threejs.org/) via [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
- **工具库**: [Drei](https://github.com/pmndrs/drei) (环境、控制器、文本)
- **语言**: TypeScript

## 📦 安装与运行

1. **克隆仓库**
   ```bash
   git clone https://github.com/your-username/ai-optical-interconnect.git
   cd ai-optical-interconnect
   ```

2. **安装依赖**
   ```bash
   npm install
   ```

3. **启动开发服务器**
   ```bash
   npm run dev
   ```

4. **构建生产版本**
   ```bash
   npm run build
   ```

## 📂 项目结构

```
src/
├── components/
│   ├── OpticalInterconnectScene.tsx  # 核心 3D 场景逻辑
│   └── LayerInfoPanel.tsx            # 信息展示面板
├── data/
│   └── opticalStack.ts               # 结构化数据 (JSON)
├── App.tsx                           # 主布局
└── main.tsx                          # 入口文件
```

## 🎨 设计理念

本项目旨在打造「高端科技」的视觉体验：
- **深色模式**: 深蓝与黑色基调，减少视觉疲劳，提升科技感。
- **悬浮几何**: 3D 组件轻微悬浮旋转，象征光信号的灵动。
- **数据为本**: 在视觉酷炫的同时，核心在于清晰传达光互连层级的逻辑关系。

## 📄 许可证

MIT License. 欢迎用于教育目的或作为您自己的 3D 可视化项目的模板。

---


