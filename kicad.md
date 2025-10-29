

基本概念：

## 项目（Project）

**项目**是 KiCad 的核心工作单元，它把一个设计的相关文件组织在一起。一个项目通常包含：

- `.kicad_pro`：项目主文件。
- `.kicad_sch`：原理图文件。
- `.kicad_pcb`：PCB 布局文件。
- `.lib`、`.kicad_sym`、`.kicad_fpcm` 等：符号库、封装库等文件。



## 原理图（Schematic）

在 KiCad 中，你通过**原理图编辑器**（**Eeschema**）来创建它。它主要由以下元素构成：

- **元件符号（Symbol）**：代表一个真实的电子元件，如电阻、电容、IC 等。它只表示元件的功能和引脚，不包含物理尺寸信息。
- **导线（Wire）**：连接元件引脚，表示电气连接关系。
- **电源符号（Power Symbol）**：表示 VCC、GND 等电源连接。
- **网络（Net）**：由一条或多条导线连接在一起的所有引脚，它们在物理上是相连的。每个网络都有一个唯一的名称，比如 `Net-(R1-Pad1)` 或自定义名称 `VCC`。
- **网络标签（Net Label）**：给网络命名的工具，通常用于连接不同地方的导线。


## 封装（Footprint）

**封装**是元件的**物理表示**，它包含了在 PCB 上放置该元件所需的所有信息。它通常包括：

- **焊盘（Pads）**：用于焊接元件引脚的铜区域，有通孔（Through-hole）和表面贴装（SMT）两种。
- **丝印（Silkscreen）**：通常是白色线条，用于标示元件轮廓和引脚方向，方便组装。
- **3D 模型**：用于在 KiCad 的 3D 查看器中展示元件的立体效果，方便检查设计。

**注意** 一个元件符号可以对应多个不同的封装，例如一个电阻符号可以对应 0603、0805 或通孔封装。

## 元件库（Libraries）

KiCad 有两类主要的库：

- **符号库（Symbol Library）**：包含元件符号文件，用于原理图设计。
- **封装库（Footprint Library）**：包含元件封装文件，用于 PCB 布局。

KiCad 提供了大量的标准库，你也可以创建自己的库来管理自定义元件。


## PCB 布局（PCB Layout）

PCB 布局是**将原理图转换为物理电路板**的过程。在 KiCad 中，你使用 **PCB 编辑器**（**Pcbnew**）来完成这项工作。主要步骤和概念包括：

- **导入网络列表（Import Netlist）**：在开始布局前，你需要从原理图编辑器中生成并导入网络列表，它包含了元件和它们之间的连接关系。
- **布局（Placement）**：将所有封装放置到电路板的指定位置上。
- **布线（Routing）**：使用铜导线（**Track**）连接焊盘，实现电气连接。
- **过孔（Via）**：用于连接 PCB 不同层（Layer）的导线。
- **丝印层（Silkscreen Layer）**：用于印刷元件标识、文字和图形。
- **铜层（Copper Layers）**：用于布线的导电层。常见的有 F.Cu（正面铜层）和 B.Cu（背面铜层）。
- **铺铜（Copper Pour/Zone）**：在 PCB 上填充大片铜区域，通常用于地线（GND）或电源线（Power）。

```flowchart 
st=>start: Start 
op=>operation: My Operation 
cond=>condition: Yes or No? 
e=>end: End 
st->op->cond 
cond(yes)->e cond(no)->op 
```


开发流程
``` flowchart
    A[“原理图设计<br>（Schematic Capture）”] --> B[“原理图检查<br>（ERC）”]
    B --> C[“PCB布局<br>（Board Layout）”]
    C --> D{“布线是否<br>令人满意?”}
    D -- 否 --> C
    D -- 是 --> E[“设计规则检查<br>（DRC）”]
    E --> F{“DRC<br>通过?”}
    F -- 否 --> C
    F -- 是 --> G[“输出生产文件<br>（Gerber, 钻孔等）”]
    G --> H[“将文件发送给<br>板厂/贴片厂”]
```