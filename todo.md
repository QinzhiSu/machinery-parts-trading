# Project TODO - Machinery Parts Trading

## Cummins 零件目录集成

- [x] 解析 Cummins 零件 Excel 数据 - 提取 35 个唯一 OEM 号
- [x] 为每个 OEM 号联网搜索产品图片 - 获得高质量产品图片
- [x] 上传所有 35 张零件图片到 S3 存储
- [x] 更新 products.ts 添加 35 个 Cummins 零件数据
- [x] 创建 SparePartDetailModal 组件 - 零件详情弹窗
- [x] 集成零件详情弹窗到 BrandPage
- [x] 支持按分类筛选零件（Engine System、Cooling System、Fuel System、Lubrication System）
- [x] 测试和验证零件目录显示 - 所有功能正常

## 零件数据统计

- **总零件数**：35 个
- **分类**：
  - Engine System（发动机系统）：活塞环、连杆瓦、连杆螺栓、气门油封等
  - Cooling System（冷却系统）：水泵、水泵密封圈、节温器等
  - Fuel System（燃油系统）：喷油器、燃油管、高压油管等
  - Lubrication System（润滑系统）：机油泵、机油冷却器、机油压力传感器等

## 功能特性

- ✅ 每个零件包含 OEM 号、中文名称、详细描述
- ✅ 每个零件配有搜索到的高质量产品图片
- ✅ 支持兼容车型和发动机型号信息
- ✅ 零件详情弹窗支持完整信息展示
- ✅ 一键发送询价请求
- ✅ 按分类筛选功能

## 后续可选功能

- [ ] 添加其他品牌的零件目录（可选）
- [ ] 实现零件搜索功能（可选）
- [ ] 添加零件库存管理（可选）
- [ ] 实现零件价格查询（可选）

## 项目完成状态

✅ **Cummins 零件目录集成已完成**
- 35 个 OEM 零件完整集成
- 所有零件图片正常显示
- 零件详情弹窗功能完整
- 分类筛选功能可用
- 一键询价功能可用


## 问题修复

- [x] 修复图片 URL 编码问题 - S3 URL 包含中文字符导致签名失败
- [x] 重新上传图片使用 ASCII 文件名
- [x] 更新 products.ts 中的所有图片 URL
- [x] 验证所有 35 个零件的图片正常显示
