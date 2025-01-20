### Dirichlet函数的特性

Dirichlet函数（也称为周期sinc函数）定义为：

$D_N(x)=sin⁡(Nx/2)/Nsin(x/2)​$

其中 N 是周期数。对于整数 N，Dirichlet函数在区间 `[−π,π]` 内有 N 个主瓣，并且在 x=0 处达到最大值。
当 N 是偶数时，它会在x=±π 处通过零点；当 N是奇数时，则不会。

### 你的代码解释
```octave
function [ output_args ] = example2_8( input_args )
clc;
clear;
% 设置采样频率为1000Hz (每秒1000个样本)
fs = 1000; % 采样频率
% 定义时间向量 t，确保覆盖至少一个完整的2π区间
T = 2*pi; % 周期长度
t = linspace(-T, T, 2*fs); % 生成从-T到T的时间向量，2*fs确保足够的分辨率
% 使用 diric 函数计算 Dirichlet 函数值
% 这里使用了10作为参数N，意味着函数在区间[-T, T]内有10个周期
y = diric(t, 10);
% 绘制 Dirichlet 函数图像
plot(t, y);
xlabel('时间t/s');
ylabel('幅值');
title('Dirichlet函数 (N=10)');
grid on;
end
```
![[Pasted image 20250116173411.png|400]]

在你的代码中，时间向量 `t` 定义为从 `-1` 到 `1` 秒，采样频率为 `fs = 1000 Hz`。因此，`t` 实际上覆盖了一个2秒的时间窗口，而 `diric(t, 10)` 将在这个窗口内计算Dirichlet函数。

但是，Dirichlet函数的一个完整周期是根据其参数 N 和输入变量 x 的比例来确定的。对于 N=10，这意味着在一个完整的 2π 区间内会有10个主瓣。换句话说，为了看到10个周期，你需要确保时间向量 `t` 覆盖了至少一个完整的 2π区间。