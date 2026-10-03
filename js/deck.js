/* 瞳伴 22 页幻灯片（山区扩展版数据图）—— 依据原始演示文稿信息结构重建 */

window.DECK = [
  /* 1 封面 */
  {
    layout: 'cover',
    title: '视习夹产品与眼视光护理服务',
    sub: '瞳伴 · 山区扩展版数据图',
    brand: '脉动未来团队 · TONG BAN PROJECT TEAM',
    meta: ['2026.09.28', '李能　文洪森　朱俊全　赵强', 'NANJING MEDICAL UNIVERSITY TEAM']
  },
  /* 2 目录 */
  {
    layout: 'toc',
    title: '目录 CONTENTS',
    sub: '四章结构：从需求到产品，再到验证与山区扩展',
    items: [
      { num: '01', cn: '项目背景与需求', en: 'PROJECT NEEDS' },
      { num: '02', cn: '产品与服务方案', en: 'PRODUCT AND SERVICE' },
      { num: '03', cn: '验证与商业模式', en: 'VALIDATION AND MODEL' },
      { num: '04', cn: '实施与山区扩展', en: 'EXECUTION AND RURAL EXPANSION' }
    ]
  },
  /* 3 章节页 */
  { layout: 'part', part: 'PART 01', title: '项目背景与需求', en: 'PROJECT NEEDS' },
  /* 4 */
  {
    layout: 'content', kicker: '项目背景与需求 · PROJECT NEEDS', title: '四个需要被打通的环节',
    sub: '国家近视防控资料强调定期检查、日间户外活动和良好读写姿势；瞳伴拟检验四个具体断点。',
    note: '这些环节说明行动方向，但不能直接证明家长需要购买新硬件。',
    items: [
      { num: '01', title: '结果理解', text: '家长需理解筛查与确诊的区别，以及下一步检查建议。' },
      { num: '02', title: '家庭行动', text: '孩子需要把户外活动与读写习惯落实到日常。' },
      { num: '03', title: '持续随访', text: '一次筛查后，家庭仍需要提醒、反馈和目标调整。' },
      { num: '04', title: '异常衔接', text: '发现视力下降或视觉异常时，应及时到医疗机构检查。' }
    ]
  },
  /* 5 */
  {
    layout: 'content', kicker: '项目背景与需求 · PROJECT NEEDS', title: '三类直接参与者',
    sub: '学生、家长与合作方各自要拿到什么。',
    items: [
      { num: '学生', title: '学习时获得温和提醒', text: '参与可执行的家庭行动。' },
      { num: '家长', title: '看懂筛查结果', text: '记录行动并反馈孩子的佩戴体验。' },
      { num: '合作方', title: '组织合规服务', text: '学校或社区可组织合规健康教育与随访服务。' }
    ]
  },
  /* 6 */
  {
    layout: 'content', kicker: '项目背景与需求 · PROJECT NEEDS', title: '四方分工',
    sub: '各环节仍须由相应资质人员承担。',
    items: [
      { num: '01', title: '眼视光专业', text: '审核结果解释与转诊规则。' },
      { num: '02', title: '护理团队', text: '制定行动卡，跟进家庭执行与复查。' },
      { num: '03', title: '监护人', text: '陪伴孩子执行目标，反馈提醒是否合适。' },
      { num: '04', title: '医疗机构', text: '承担进一步检查、诊断与治疗。' }
    ]
  },
  /* 7 */
  {
    layout: 'content', kicker: '项目背景与需求 · PROJECT NEEDS', title: '从筛查到行动',
    sub: '瞳伴把规范筛查后的结果解释、家庭行动、护理随访和异常转诊连接起来。视习夹提供行为线索，不能替代医学检查。',
    note: '各环节仍须由相应资质人员承担。',
    items: [
      { num: '01', title: '结果解释', text: '解释筛查含义与边界。' },
      { num: '02', title: '行动卡', text: '家庭执行可落地目标。' },
      { num: '03', title: '护理随访', text: '反馈与调整执行安排。' },
      { num: '04', title: '异常转诊', text: '就医衔接，不作诊断。' }
    ]
  },
  /* 8 */
  {
    layout: 'content', kicker: '项目背景与需求 · PROJECT NEEDS', title: '家庭行动卡：五环节协同',
    sub: '目标由家长与护理人员共同确定，帮助家庭把筛查结果转化为行动。',
    note: '只展示已录入信息，不自动判断近视；异常及时就医，设备记录不作诊断。',
    items: [
      { title: '结果解释', text: '查看专业机构录入的检查记录。' },
      { title: '家庭目标', text: '沟通行动阻碍和复查安排。' },
      { title: '视习夹提醒', text: '记录提醒时段与佩戴反馈。' },
      { title: '随访反馈', text: '讨论误提醒与执行障碍。' },
      { title: '复查提醒', text: '按建议提醒复查与就诊衔接。' }
    ]
  },
  /* 9 章节页 */
  { layout: 'part', part: 'PART 02', title: '产品与服务方案', en: 'PRODUCT AND SERVICE' },
  /* 10 */
  {
    layout: 'content', kicker: '产品与服务方案 · PRODUCT AND SERVICE', title: '视习夹与家长端',
    sub: '硬件只提供行为线索，服务负责解释、行动与随访。',
    figure: {
      src: 'assets/img/product-concept.png',
      alt: '瞳伴视习夹产品概念图：可拆卸镜腿夹与头带适配',
      caption: '产品概念示意，并非实物样机；传感精度与舒适性仍待样机验证。'
    },
    items: [
      { num: '视习夹', title: '可拆卸镜腿夹 + 头带适配', text: '家庭学习时拟对持续低头、长时间近距离用眼等行为线索作轻微提醒。' },
      { num: '家长端', title: '提醒时段 · 行动卡 · 复查安排', text: '家长可反馈误提醒或佩戴不适，供护理人员在随访中讨论。' }
    ]
  },
  /* 11 近视率图表 */
  {
    layout: 'content', kicker: '产品与服务方案 · MYOPIA BY SCHOOL STAGE', title: '不同学段近视率',
    sub: '数据：国家疾控局 2022 年全国儿童青少年近视监测。',
    chart: '<div class="slchart"><div class="slbar"><span class="slbar__v">36.7%</span><div class="slbar__f" style="--h:37%"></div><span class="slbar__l">小学</span></div><div class="slbar"><span class="slbar__v">71.4%</span><div class="slbar__f" style="--h:71%"></div><span class="slbar__l">初中</span></div><div class="slbar"><span class="slbar__v">81.2%</span><div class="slbar__f" style="--h:81%"></div><span class="slbar__l">高中</span></div></div>',
    note: '全国数据，非“瞳伴”试点成效。该数据只说明防控需求的普遍性，不构成对本项目有效性的证明。',
    items: []
  },
  /* 12 */
  {
    layout: 'content', kicker: '产品与服务方案 · PRODUCT AND SERVICE', title: '四个服务部件',
    sub: '产品和服务共享行动卡与随访记录，避免设备记录与专业服务各自孤立。',
    items: [
      { num: '行动卡', title: '只选一至两个家庭可执行的用眼目标', text: '目标由家长与护理人员共同确定。' },
      { num: '视习夹', title: '记录提醒时段与佩戴反馈', text: '不测视力、不诊断近视。' },
      { num: '护理随访', title: '根据家庭反馈调整行动目标', text: '每周打卡、每月随访。' },
      { num: '异常转诊', title: '视力下降或视觉异常时引导就医', text: '设备记录不用于推迟就诊。' }
    ]
  },
  /* 13 */
  {
    layout: 'content', kicker: '产品与服务方案 · PRODUCT AND SERVICE', title: '服务链条六环节',
    sub: '筛查 → 解释 → 行动 → 提醒 → 随访 → 转诊。',
    items: [
      { num: '专业解释', title: '眼视光人员审核模板', text: '审核筛查结果解释模板与异常转诊规则。' },
      { num: '家庭执行', title: '家长和孩子使用行动卡', text: '设备只提供学习时的提醒线索。' },
      { num: '持续护理', title: '护理人员随访执行困难', text: '并按建议提醒复查。' }
    ]
  },
  /* 14 章节页 */
  { layout: 'part', part: 'PART 03', title: '验证与商业模式', en: 'VALIDATION AND MODEL' },
  /* 15 */
  {
    layout: 'content', kicker: '验证与商业模式 · VALIDATION AND MODEL', title: '四步验证，逐步加压',
    sub: '先验证服务与佩戴体验，再谈规模化。',
    items: [
      { num: '01', title: '需求访谈', text: '访谈家长、学校或社区人员及眼视光护理人员。' },
      { num: '02', title: '佩戴访谈', text: '用不通电模型了解眼镜与头带适配、舒适性及接受度。' },
      { num: '03', title: '样机试用', text: '观察误提醒、有效佩戴时段、暂停和故障反馈。' },
      { num: '04', title: '八周试点', text: '在合作与授权齐备后，验证家庭行动与护理随访。' }
    ]
  },
  /* 16 */
  {
    layout: 'content', kicker: '验证与商业模式 · VALIDATION AND MODEL', title: '评价指标：只评价能被记录的东西',
    sub: '试点先验证服务与佩戴体验，不宣称降低近视度数。所有指标同时报告缺失、退出和未联系情况。',
    items: [
      { num: '结果理解', title: '家长能否解释筛查局限及下一步', text: '第 0 周记录理解度与行动目标。' },
      { num: '行动执行', title: '按周记录行动卡完成及退出原因', text: '第 1—7 周家庭打卡。' },
      { num: '随访完成', title: '记录按期联系、反馈和目标调整', text: '每月一次护理随访。' },
      { num: '佩戴体验', title: '记录舒适性、误提醒与有效使用', text: '第 8 周回收结束反馈与专业工时。' }
    ]
  },
  /* 17 */
  {
    layout: 'content', kicker: '验证与商业模式 · VALIDATION AND MODEL', title: '青少年服务假设测算',
    sub: '以下为青少年服务假设测算；视习夹与山区站点成本尚无报价，均未计入。',
    items: [
      { num: '服务收入', title: '100 人 × 120 元／期', text: '示例收入 12 000 元。' },
      { num: '直接成本', title: '护理、眼视光、运营与材料', text: '合计 8 200 元；示例毛结余 3 800 元。' },
      { num: '硬件成本', title: '研发、制造、维护和损耗', text: '需另行核算，未计入本测算。' },
      { num: '采购验证', title: '访谈机构的预算、合同主体与支付意愿', text: '家庭独立购买硬件仅作为访谈问题。' }
    ],
    note: '该测算未计税费、获客、管理和审批成本，不包含任何视习夹支出，不代表整合项目盈利。'
  },
  /* 18 章节页 */
  { layout: 'part', part: 'PART 04', title: '实施与山区扩展', en: 'EXECUTION AND RURAL EXPANSION' },
  /* 19 */
  {
    layout: 'content', kicker: '实施与山区扩展 · EXECUTION AND RURAL EXPANSION', title: '四个实施阶段',
    sub: '第 1 月访谈与低保真模型；第 2 月合作与授权文本；第 3—4 月八周试点；第 5 月复盘决策。',
    items: [
      { num: '阶段一', title: '访谈家庭，验证青少年服务需求', text: '访谈家长、学校或社区人员及专业人员。' },
      { num: '阶段二', title: '试用视习夹与家庭行动卡', text: '制作可试用样机，观察误提醒与佩戴体验。' },
      { num: '阶段三', title: '模拟儿童与老人共用的语音自助站', text: '无设备条件下的可用性验证，不是医学筛查结果。' },
      { num: '阶段四', title: '取得设备及医疗合作后开展真实试点', text: '进入真实试点前须满足全部门槛条件。' }
    ]
  },
  /* 20 */
  {
    layout: 'content', kicker: '山区双人群流程 · RURAL SELF SERVICE', title: '山区无人站概念：同站两条路径',
    sub: '儿童由监护人授权陪同；老年人使用大字、慢速语音。仅采集经验证可自助的项目；采集失败时提示预约人工服务。',
    figure: {
      src: 'assets/img/rural-station-concept.png',
      alt: '偏远山区无人值守眼健康站点概念流程：身份与授权、语音引导采集、数据质控与分级、复核与转诊',
      caption: '概念流程图，尚无真实山区站点、合作医院或试点数据。'
    },
    items: [
      { num: '儿童', title: '监护人授权并陪同', text: '语音与图示引导完成经自助可用性验证的视力与屈光初筛。' },
      { num: '老人', title: '本人确认授权', text: '先了解眼镜使用、视物模糊、眼痛等情况，再完成适合自助的基础视力检查。' }
    ],
    note: '“无人值守”指站点使用过程中不安排固定专业人员在现场，不等于无人承担医疗责任。'
  },
  /* 21 */
  {
    layout: 'content', kicker: '设备分级与 AI · EQUIPMENT AND AI', title: '三档设备配置与 AI 边界',
    sub: '自助模块：标准视力表、经验证可自定位的电脑验光仪；专业人员模块：眼轴仪、裂隙灯、眼底相机、眼压计；医院／科研模块：OCT、视野计、角膜地形图。',
    items: [
      { num: '①', title: '校园／社区基础筛查包', text: '标准视力表、电脑验光仪、眼轴仪、手持检眼镜。无人站首期只启用经验证可自助的项目。' },
      { num: '②', title: '完整眼健康筛查包', text: '增加裂隙灯、免散瞳眼底相机和非接触眼压计，面向具备人员与医疗合作的场景。' },
      { num: '③', title: '科研高级配置', text: '增加角膜地形图、睑板腺干眼分析、OCT 及视功能检查，放在合作医院或研究场景。' },
      { num: 'AI', title: '语音引导 · 数据质控 · 辅助分级', text: '异常由合作医生复核并引导线下就医；AI 不测出球镜、轴位、眼轴等数值，也不输出诊断或配镜处方。' }
    ],
    note: '设备与医院合作尚未落实，本页为概念方案；三档均为规划清单，没有采购、性能和价格承诺。'
  },
  /* 22 结尾 */
  {
    layout: 'cover',
    title: '谢谢观看',
    sub: '视习夹产品与眼视光护理服务 · 山区扩展版数据图',
    brand: '脉动未来团队 · TONG BAN PROJECT TEAM',
    meta: ['2026.09.28', '李能　文洪森　朱俊全　赵强', 'NANJING MEDICAL UNIVERSITY TEAM']
  }
];
