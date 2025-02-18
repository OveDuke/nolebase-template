以下是对问题的详细解答：

---

### **1. 短时傅里叶变换 (STFT) 的原理**

短时傅里叶变换 (Short-Time Fourier Transform, STFT) 是分析非平稳信号的重要方法，其核心思想是将信号分段处理，使得每一段信号可以近似为平稳信号，然后对这些分段进行傅里叶变换。

#### **原理**

- **全局傅里叶变换的问题**： 对于非平稳信号，其频率随时间变化，全局傅里叶变换无法反映信号的时频特性。
    
- **解决方法**： STFT 在时域中引入一个滑动窗口，提取信号的局部特性，然后对窗口内信号进行傅里叶变换：
    
![](assets/Pasted%20image%2020250114104536.png)

#### **特点**

- 时域分辨率和频域分辨率由窗口宽度 w(t) 决定：
    - 窗口宽：频域分辨率高，时域分辨率低。
    - 窗口窄：时域分辨率高，频域分辨率低。
- STFT 将信号分解为时间和频率的二维表示，适用于分析频率随时间变化的信号。
