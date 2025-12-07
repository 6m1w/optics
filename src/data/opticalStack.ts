export interface LayerData {
    id: string;
    displayName: string;
    description: string;
    examples: string[];
    coreCompanies: string[];
}

export interface OpticalStackData {
    title: string;
    subtitle: string;
    intro: string;
    layers: LayerData[];
}

export const opticalStackData: OpticalStackData = {
    title: "AI 光互连核心价值链",
    subtitle: "The High-Speed Optical Interconnect Stack Powering AGI",
    intro: "随着 AI 模型参数迈向万亿级，GPU 算力每两年翻 10 倍，但传统铜缆在 224Gbps 速率下面临严重的信号衰减与功耗墙（Copper Wall）。光互连凭借高带宽密度、低延时与低功耗特性，已成为突破 I/O 瓶颈、构建万卡级智算集群的唯一物理层解，是释放 AI 算力的关键「大动脉」。",
    layers: [
        {
            "id": "materials",
            "displayName": "基础材料与晶圆",
            "description": "光通信的物理基石，决定了光电转换效率与传输性能的上限。",
            "examples": [
                "InP (磷化铟) 衬底",
                "GaAs (砷化镓) 晶圆",
                "Thin-Film LiNbO3 (薄膜铌酸锂)",
                "SOI (绝缘体上硅)"
            ],
            "coreCompanies": [
                "Sumitomo Electric",
                "IQE",
                "AXT",
                "Sivers Photonics"
            ]
        },
        {
            "id": "optical_chips",
            "displayName": "光芯片 (PIC)",
            "description": "实现光电信号转换的核心器件，负责产生、调制与探测光信号。",
            "examples": [
                "100G/200G EML",
                "VCSEL 阵列",
                "CW Laser (大功率光源)",
                "SiPh MZM (硅光调制器)"
            ],
            "coreCompanies": [
                "Lumentum",
                "Coherent",
                "Broadcom",
                "Source Photonics (索尔思)",
                "Everest (源杰科技)"
            ]
        },
        {
            "id": "electrical_chips",
            "displayName": "电芯片 (IC)",
            "description": "光模块的大脑与肌肉，负责信号的数字处理、时钟恢复与驱动放大。",
            "examples": [
                "DSP (数字信号处理)",
                "LDO (电源管理)",
                "TIA (跨阻放大器)",
                "Driver (驱动芯片)"
            ],
            "coreCompanies": [
                "Marvell",
                "Broadcom",
                "Credo",
                "MaxLinear"
            ]
        },
        {
            "id": "modules",
            "displayName": "光引擎 / 光模块",
            "description": "光电集成的独立封装单元，是服务器与交换机之间的标准接口。",
            "examples": [
                "800G OSFP/QSFP-DD",
                "1.6T OSFP-XD",
                "LPO (线性驱动光模块)",
                "CPO Light Engine"
            ],
            "coreCompanies": [
                "Innolight (中际旭创)",
                "Coherent",
                "Eoptolink (新易盛)",
                "Fabrinet",
                "Accelink (光迅科技)"
            ]
        },
        {
            "id": "switching",
            "displayName": "交换芯片 & CPO",
            "description": "网络流量的调度枢纽，正向着光电共封装 (CPO) 的高集成度方向演进。",
            "examples": [
                "51.2T Switch ASIC",
                "CPO (Co-Packaged Optics)",
                "NPO (Near-Packaged Optics)",
                "Optical I/O Tile"
            ],
            "coreCompanies": [
                "Broadcom (Tomahawk)",
                "Nvidia (Spectrum)",
                "Cisco (Silicon One)",
                "Marvell (Teralynx)"
            ]
        },
        {
            "id": "fabric",
            "displayName": "光互连 Fabric",
            "description": "连接成千上万个计算节点的高速光网络架构，追求极致的无阻塞与低延时。",
            "examples": [
                "OCS (全光交换)",
                "MPO/MTP Cabling",
                "Hollow Core Fiber (空芯光纤)",
                "3D Torus Topology"
            ],
            "coreCompanies": [
                "Google (Apollo OCS)",
                "Corning",
                "YOFC (长飞光纤)",
                "Amphenol"
            ]
        },
        {
            "id": "ai_application",
            "displayName": "AI 智算集群",
            "description": "光互连技术的最终服务对象，通过高速网络将海量 GPU 聚合成超级计算机。",
            "examples": [
                "Nvidia HGX H100/B200 Cluster",
                "Google TPU Pod",
                "NVLink Switch System",
                "LLM Training/Inference"
            ],
            "coreCompanies": [
                "Nvidia",
                "Google",
                "Microsoft / OpenAI",
                "Meta",
                "ByteDance"
            ]
        }
    ]
};
