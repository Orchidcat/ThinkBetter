#电路 #project/键盘 


DTS :**Device Tree Source**（设备树源文件）

设备树文件类型：
board.overlay          # 主设备树覆盖文件
shield.overlay         # 键盘 shield 定义
xyz.keymap              # 键位映射（基于 DTS 语法）
behaviors.dtsi        # 行为定义

设备树结构
```java
// 节点定义
/ {                                      // 根节点
    chosen {                             // 系统选择节点
        zmk,kscan = &kscan0;            // 属性：指向扫描器
    };

    kscan0: kscan {                     // 标签:节点 定义
        compatible = "zmk,kscan-gpio-matrix";  // 驱动匹配
        label = "KSCAN";                // 标签名称
        row-gpios = <...>;              // GPIO 数组
    };
};
```


DTS 语法元素详解
```java
node_label: node_name@address {    // 节点标签:名称@地址
    compatible = "vendor,driver";  // 兼容性属性
    label = "Human Readable Name"; // 标签属性
    #address-cells = <1>;          // 子节点地址单元数
    #size-cells = <0>;             // 子节点大小单元数
    
    child_node {                   // 子节点
        property = <value>;        // 属性
    };
};
```

数据类型和语法
```java
// 字符串属性
compatible = "zmk,kscan-gpio-matrix";

// 整数属性（单元格）
tapping-term-ms = <200>;          // 单个整数
row-gpios = <1 2 3>;              // 整数数组

// 字符串列表  
pinctrl-names = "default", "sleep";

// 二进制数据
initial-data = [01 02 03 ff];

// 引用其他节点
zmk,kscan = &kscan0;              // 节点引用
bindings = <&kp>, <&mo>;          // 句柄引用
```









层次结构
应用层（keymaps)、行为层（behaviors)、设备层（devices)、驱动层（Drivers)、硬件层（Hardware）





文件结构
![[Pasted image 20251120124522.png]]

### 硬件定义
```java
/ {
    chosen {
        // 系统选择
        zmk,kscan = &matrix_scanner;      // 按键扫描
        zmk,matrix-transform = &layout;   // 物理布局
        zmk,point-device = &trackpoint;   // 指针设备
    };

    // 1. 矩阵扫描器
    matrix_scanner: kscan {
        compatible = "zmk,kscan-gpio-matrix";
        diode-direction = "col2row";
        row-gpios = /* 行引脚 */;
        col-gpios = /* 列引脚 */;
    };

    // 2. 布局转换
    layout: keymap_transform {
        compatible = "zmk,matrix-transform";
        map = < /* 物理到逻辑位置映射 */ >;
    };

    // 3. 外设设备
    trackpoint: trackpoint {
        compatible = "zmk,input-point-device-ps2";
        ps2-device = &ps2_controller;
    };
};
```

### 功能配置 Kconfig
```java
# 核心功能
CONFIG_ZMK_USB=y              # USB 支持
CONFIG_ZMK_BLE=y              # 蓝牙支持
CONFIG_ZMK_EXT_POWER=y        # 外部电源

# 输入设备
CONFIG_ZMK_INPUT_POINTER_DEVICE=y    # 指针设备
CONFIG_PS2=y                         # PS/2 协议

# 电源管理  
CONFIG_ZMK_SLEEP=y
CONFIG_ZMK_IDLE_SLEEP_TIMEOUT=900000

# 显示功能
CONFIG_ZMK_DISPLAY=y
CONFIG_ZMK_WIDGET_BATTERY_STATUS=y
```

### 行为层（behaviors)

```java
/ {
    behaviors {
        // 基础按键行为
        key_press: kp { ... };           // 普通按键
        modifier_key: sk { ... };        // 修饰键
        
        // 层操作行为  
        momentary_layer: mo { ... };     // 瞬时层
        toggle_layer: tog { ... };       // 切换层
        layer_tap: lt { ... };           // 层点击
        
        // 修饰键行为
        mod_tap: mt { ... };            // 修饰点击
        left_mod_tap: lmt { ... };      // 左修饰点击
        
        // 高级行为
        macro: macro { ... };           // 宏
        behavior_param_value: param { ... }; // 参数设置
    };
};
```


### 键位映射层（keymaps）
```java
/ {
    keymap {
        compatible = "zmk,keymap";
        
        // 层定义
        base_layer {
            bindings = <
                // 按键矩阵布局
                &kp Q &kp W &kp E &kp R &kp T
                &kp A &kp S &kp D &kp F &kp G
                &mo 1 &mt LSHIFT TAB   // 层切换和修饰键
            >;
        };
        
        function_layer {
            bindings = <
                // 功能键布局
                &kp F1 &kp F2 &kp F3 &kp F4 &kp F5
                &kp EXCL &kp AT &kp HASH &kp DLLR &kp PERC
                &to 0 &trans &trans    // 返回基础层
            >;
        };
    };
};
```


### 构建系统层
```yaml
# build.yaml
include:
  - board: nice_nano_v2    # 主控板
    shield: corne_left     # 键盘 shield
    keymap: default        # 键位映射
    
  - board: nice_nano_v2
    shield: corne_right
    keymap: default
```


### 数据流逻辑
![[Pasted image 20251120125054.png]]


### 配置继承关系
![[Pasted image 20251120125130.png]]

### 外设集成模式
```dts
// 指针设备
trackpoint: trackpoint {
    compatible = "zmk,input-point-device-ps2";
    ps2-device = &ps2;
    status = "okay";
};

// 显示设备
display: display {
    compatible = "ssd1306";
    label = "DISPLAY";
    width = <128>;
    height = <32>;
};
```

### 电源管理逻辑
![[Pasted image 20251120125341.png]]


### 调试和开发
```java
CONFIG_LOG=y
CONFIG_ZMK_LOG_LEVEL_DBG=y
CONFIG_PS2_LOG_LEVEL_DBG=y
```


















