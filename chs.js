/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com
 @idle games : http://www.gityx.com
 @QQ Group : 627141737

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Achievement Gotten!": "成就达成！",
    "All spice production is boosted by unspent rainbow spice": "未用完的彩虹香料促进了所有香料的生产",
    "All spices boost the previous color based on that spice's amount": "所有香料都会根据香料的量来提升之前的颜色",
    "Auto-Prestige Goal (Color Boosts):": "自动声望目标（颜色提升）：",
    "Auto-Prestige Goal (Rainbow Spice):": "自动声望目标（彩虹香料）：",
    "Auto: OFF": "自动关闭",
    "Average rainbow spice gain: undefined": "平均彩虹香料增益：未定义",
    "B: Color shift/boost": "B：颜色偏移/增强",
    "blue spice": "蓝色香料",
    "Blue Spice Agency": "蓝色香料代理",
    "Blue Spice Factory": "蓝色香料厂",
    "Blue Spice Galaxy": "蓝色香料银河",
    "Blue Spice Harvester": "蓝色香料收割机",
    "Blue Spice Machine": "蓝色香料机",
    "Blue Spice Planet": "蓝色香料星球",
    "Blue Spice Strengthener": "蓝色香料强化剂",
    "Boost from buying 10 is squared": "购买 10 的提升是平方的",
    "boosting all normal spice generators 1.00x": "将所有普通香料发生器提升 1.00 倍",
    "boosting all red & yellow spice generators 1.00x": "将所有红色和黄色香料发生器提升 1.00 倍",
    "boosting all red spice generators 1.00x": "将所有红色香料发生器提升 1.00 倍",
    "boosting all red, yellow & green spice generators 1.00x": "将所有红色、黄色和绿色香料发生器提升 1.00 倍",
    "boosting all red, yellow, green & blue spice generators 1.00x": "将所有红色、黄色、绿色和蓝色香料发生器提升 1.00 倍",
    "boosting ALL spice generators 1.00x": "将所有香料发生器提升 1.00 倍",
    "boosting crystallized spice generators 1.00x": "提高结晶香料发生器 1.00 倍",
    "Buy one:": "买一个：",
    "Color boost 10 times to unlock Prestige": "颜色提升 10 倍以解锁声望",
    "Color boosts don't reset progress": "颜色提升不会重置进度",
    "Color Shift": "颜色偏移",
    "Coming soon...": "快来了...",
    "Condensed Generators": "浓缩发电机",
    "Crystal Infusion": "水晶灌注",
    "Crystal infusions also boost crystallized spice production 1.08x": "水晶灌注还可以将结晶香料的产量提高 1.08 倍",
    "CRYSTAL UPGRADES": "水晶升级",
    "crystallized spice": "结晶香料",
    "CRYSTALLIZED SPICE": "结晶香料",
    "Crystallized spice also boosts other colors by its amount": "结晶香料还通过其数量增强其他颜色",
    "Crystallized spice boosts pink spice by its amount": "结晶香料增加粉红色香料的量",
    "Crystallized Spice Furnace": "结晶香料炉",
    "Crystallized spice furnace multipliers are raised to the 1.25 power": "结晶香料炉乘数提高到 1.25 次方",
    "Crystallized spice furnaces produce pink galaxies": "结晶香料炉产生粉红色星系",
    "Crystallized Spice Headquarters": "结晶香料总部",
    "Crystallized Spice Industry": "结晶香料工业",
    "Crystallized Spice Intelligence": "结晶香料智能",
    "Crystallized spice production is boosted based on your color boosts": "结晶香料的产量会根据您的颜色提升而提高",
    "Crystallized spice production is boosted by unspent rainbow spice": "未用完的彩虹香料促进了结晶香料的生产",
    "Crystallized Spice Refinery": "结晶香料精炼厂",
    "Crystallized Spice Singularity": "结晶香料奇点",
    "Crystallized Spice Strengthener": "结晶香料强化剂",
    "DELETE SAVE": "删除保存",
    "DISABLED": "已禁用",
    "EXP Simulator": "经验模拟器",
    "EXPORT": "导出",
    "green spice": "绿色香料",
    "Green Spice Agency": "绿色香料局",
    "Green Spice Factory": "绿色香料厂",
    "Green Spice Galaxy": "绿色香料银河",
    "Green Spice Harvester": "绿色香料收割机",
    "Green Spice Machine": "绿色香料机",
    "Green Spice Planet": "绿色香料星球",
    "Green Spice Strengthener": "绿色香料强化剂",
    "Harvesters produce galaxies of the previous color": "收割机产生以前颜色的星系",
    "Hotkeys:": "快捷键：",
    "I: Buy crystal infusion": "一：买水晶输液",
    "IMPORT": "导入",
    "Increase boost from strengtheners/boosts": "增加强化剂/助推器的助推力",
    "Increase boost from strengtheners/shifts": "增加强化剂/班次的推动力",
    "Last 10 prestiges:": "最后10个声望：",
    "LOCKED": "锁定",
    "M: Max all": "M: 最多",
    "Made by Zakuro": "扎库罗制作",
    "Max All": "最大全部",
    "Mode: BOOSTS": "模式：提升",
    "Notation": "符号",
    "P: Prestige": "P：声望",
    "PAST PRESTIGES": "过去的声望",
    "pink spice": "粉红香料",
    "Pink Spice Agency": "粉红香料代理",
    "Pink Spice Factory": "粉红香料厂",
    "Pink Spice Galaxy": "粉红香料银河",
    "Pink Spice Harvester": "粉红香料收割机",
    "Pink Spice Machine": "粉红香料机",
    "Pink Spice Planet": "粉红香料星球",
    "Pink Spice Strengthener": "粉红香料强化剂",
    "PRESTIGE UPGRADES": "声望升级",
    "PRESTIGE!": "声望！",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "By Jacorb90": "By Jacorb90",
    "content_copy": "content_copy",
    "library_books": "library_books",
    "discord": "discord",
    "drag_handle": "drag_handle",
    "edit": "edit",
    "forum": "forum",
    "content_paste": "content_paste",
    "delete": "delete",
    "info": "info",
    "settings": "settings",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    'x': 'x',
    'QQ群号:': 'QQ群号:',
    '* 启用后台游戏': '* 启用后台游戏',
    '更多同类游戏:': '更多同类游戏:',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "\n": "",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": " ",
    "\n": "",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^\(([\d\.]+)\%\)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)K$/,
    /^([\d\.]+)M$/,
    /^([\d\.]+)B$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^\+([\d\.,]+)$/,
    /^\-([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.,]+) \/ ([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^You have (.+) blue spice agencies,$/, '你有 $1 蓝色 香料代理'],
    [/^You have (.+) green spice agencies,$/, '你有 $1 绿色 香料代理'],
    [/^You have (.+) pink spice agencies,$/, '你有 $1 粉色 香料代理'],
    [/^You have (.+) red spice agencies,$/, '你有 $1 红色 香料代理'],
    [/^You have (.+) yellow spice agencies,$/, '你有 $1 黄色 香料代理'],
    [/^You have (.+) blue spice factories,$/, '你有 $1 蓝色 香料工厂'],
    [/^You have (.+) green spice factories,$/, '你有 $1 绿色 香料工厂'],
    [/^You have (.+) pink spice factories,$/, '你有 $1 粉色 香料工厂'],
    [/^You have (.+) red spice factories,$/, '你有 $1 红色 香料工厂'],
    [/^You have (.+) yellow spice factories,$/, '你有 $1 黄色 香料工厂'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
    [/^producing (.+) green spice agencies\/sec$/, '每秒产生 $1 个绿色 香料代理'],
    [/^producing (.+) blue spice agencies\/sec$/, '每秒产生 $1 个蓝色 香料代理'],
    [/^producing (.+) pink spice agencies\/sec$/, '每秒产生 $1 个粉色 香料代理'],
    [/^producing (.+) red spice agencies\/sec$/, '每秒产生 $1 个红色 香料代理'],
    [/^producing (.+) yellow spice agencies\/sec$/, '每秒产生 $1 个黄色 香料代理'],
    [/^producing (.+) g blue spice\/sec$/, '每秒产生 $1 克 蓝色 香料'],
    [/^producing (.+) g pink spice\/sec$/, '每秒产生 $1 克 粉色 香料'],
    [/^producing (.+) g red spice\/sec$/, '每秒产生 $1 克 红色 香料'],
    [/^producing (.+) g yellow spice\/sec$/, '每秒产生 $1 克 黄色 香料'],
    [/^producing (.+) g green spice\/sec$/, '每秒产生 $1 克 绿色 香料'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);