#电路 #project/键盘 


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





























