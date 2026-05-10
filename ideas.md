# 设计方案 Brainstorm

## 项目背景
外贸工程机械与汽车配件展示网站，面向全球采购商，需要专业、可信赖的工业风格。

---

<response>
<probability>0.07</probability>
<idea>

**Design Movement**: 工业极简主义（Industrial Minimalism）

**Core Principles**:
1. 钢铁质感配色——深炭灰 + 亮橙色警示色，传递工程机械的力量感
2. 不对称布局——左侧重型导航栏，右侧内容区域错落排列
3. 数据密度优先——产品信息以表格+卡片混合呈现，信息量大但不杂乱
4. 全局英文主导——面向外贸，英文为主，中英双语切换

**Color Philosophy**:
- 主色：#1A1A2E（深海军蓝）
- 强调色：#F97316（工程橙）
- 背景：#F5F5F0（暖灰白）
- 文字：#1C1C1C（近黑）
- 传递：专业、可靠、力量

**Layout Paradigm**:
- 左侧固定品牌导航栏（宽220px），右侧内容区域
- 首页采用全屏英雄区域，大标题+机械背景图
- 产品页采用三列卡片网格，悬停展开详情

**Signature Elements**:
1. 橙色斜切分隔线（clip-path diagonal）
2. 品牌Logo以单色处理，悬停恢复彩色
3. 产品卡片左侧橙色竖条强调

**Interaction Philosophy**:
- 卡片悬停时轻微上浮+阴影加深
- 导航项激活时橙色左边框
- 页面切换时淡入动画

**Animation**:
- 入场：从下方淡入（translateY + opacity）
- 卡片悬停：scale(1.02) + shadow增强
- 导航：左边框从0宽度展开

**Typography System**:
- 标题：Barlow Condensed Bold（工业感强）
- 正文：Source Sans Pro Regular
- 数字/型号：Roboto Mono（等宽，专业感）

</idea>
</response>

<response>
<probability>0.06</probability>
<idea>

**Design Movement**: 重工业博物馆风（Heavy Industry Museum）

**Core Principles**:
1. 黑金配色——黑色背景+金色强调，奢华工业感
2. 大字排版——产品型号以超大字体展示
3. 全屏图片优先——每个品牌页以全屏机械图片开场
4. 极简导航——顶部细线导航，不遮挡内容

**Color Philosophy**:
- 主色：#0D0D0D（近黑）
- 强调色：#D4A017（工业金）
- 辅助：#2A2A2A（深灰）
- 文字：#E8E8E8（浅灰白）
- 传递：高端、稀缺、专业

**Layout Paradigm**:
- 全屏滚动式设计，每个品牌独占一屏
- 产品以横向滚动展示
- 大量留白，信息精炼

**Signature Elements**:
1. 金色细线分隔元素
2. 产品型号超大字体水印背景
3. 品牌页面独特色调（每个品牌一个主题色调）

**Interaction Philosophy**:
- 横向滚动产品展示
- 图片悬停时放大局部细节
- 滚动触发动画

**Animation**:
- 滚动视差效果
- 文字逐字出现
- 图片从灰度变彩色

**Typography System**:
- 标题：Oswald Bold
- 正文：Lato Light
- 型号：Space Mono

</idea>
</response>

<response>
<probability>0.05</probability>
<idea>

**Design Movement**: 技术蓝图风（Technical Blueprint）

**Core Principles**:
1. 蓝图美学——深蓝背景+白色线条，工程图纸感
2. 网格系统——严格的12列网格，精确对齐
3. 数据可视化——产品规格以图表形式展示
4. 专业权威——大量技术参数，建立专业信任

**Color Philosophy**:
- 主色：#0A2342（深蓝）
- 强调色：#00B4D8（亮蓝）
- 背景：#FFFFFF（白）
- 文字：#1A1A2E（深蓝黑）
- 传递：精确、技术、权威

**Layout Paradigm**:
- 顶部横向导航
- 产品页面左侧参数面板+右侧图片展示
- 蓝图风格装饰线条

**Signature Elements**:
1. 蓝图风格装饰线条和圆圈
2. 产品规格表格以技术图纸样式呈现
3. 坐标轴风格的页面装饰

**Interaction Philosophy**:
- 参数筛选实时过滤产品
- 图片点击放大查看细节
- 规格表格行悬停高亮

**Animation**:
- 线条绘制动画
- 数字滚动计数
- 淡入淡出

**Typography System**:
- 标题：Rajdhani Bold
- 正文：IBM Plex Sans
- 数据：IBM Plex Mono

</idea>
</response>

---

## 选定方案：工业极简主义（方案一）

选择理由：
- 橙色+深色的工业配色最符合工程机械行业调性
- 不对称布局在同类网站中具有差异化优势
- 信息密度设计适合展示大量产品型号和配件件号
- Barlow Condensed字体在工业类网站中辨识度高
