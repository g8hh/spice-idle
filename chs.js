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
    "Blue Spice Strengthener": "蓝色香料增强剂",
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
    "Crystallized Spice Strengthener": "结晶香料增强剂",
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
    "Green Spice Strengthener": "绿色香料增强剂",
    "Harvesters produce galaxies of the previous color": "收割机产生以前颜色的星系",
    "Hotkeys:": "快捷键：",
    "I: Buy crystal infusion": "一：买水晶输液",
    "IMPORT": "导入",
    "Increase boost from strengtheners/boosts": "增加增强剂/助推器的助推力",
    "Increase boost from strengtheners/shifts": "增加增强剂/班次的推动力",
    "Last 10 prestiges:": "最后10个声望：",
    "LOCKED": "未解锁",
    "M: Max all": "M: 最多",
    "Made by Zakuro": "作者：Zakuro",
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
    "Pink Spice Strengthener": "粉红香料增强剂",
    "PRESTIGE UPGRADES": "声望升级",
    "PRESTIGE!": "声望！",
    "Yellow Spice Machine": "黄色香料机",
    "Yellow Spice Planet": "黄色香料星球",
    "Yellow Spice Strengthener": "黄色香料增强剂",
    "1-6: Buy until X of generator": "1-6：购买直到发电机的X",
    "10 color boosts required": "需要 10 次颜色增强",
    "ENABLED": "已启用",
    "Mode: SPICE": "模式：香料",
    "rainbow spice": "彩虹香料",
    "RED": "红色",
    "red spice": "红色香料",
    "Red Spice Agency": "红色香料代理",
    "Red spice boosts every other color by its amount": "红色香料通过其数量增强了其他所有颜色",
    "Red Spice Factory": "红色香料厂",
    "Red Spice Galaxy": "红色香料银河",
    "Red Spice Harvester": "红香料收割机",
    "Red Spice Machine": "红色香料机器",
    "Red Spice Planet": "红色香料星球",
    "Red Spice Strengthener": "红色香料增强剂",
    "Reduce the strengthener price scaling": "减少增强剂价格缩放",
    "Requires 50 red spice galaxies": "需要 50 个红色香料星系",
    "Reset for a new spice color": "重置为新的香料颜色",
    "S: Buy strengthener": "S：购买增强剂",
    "SAVE": "保存",
    "SCIENTIFIC": "科学计数法",
    "SETTINGS": "设置",
    "Shift+1-6: Buy 1 of generator": "Shift+1-6：购买1台发电机",
    "SPICES": "香料",
    "STATISTICS": "统计",
    "Strengtheners also boost the next color": "增强剂也增强了下一种颜色",
    "Times Prestiged stat boosts all spice production": "声望次数 统计数据提高了所有香料的产量",
    "Unlocks automation for color boosts": "解锁自动化以增强色彩",
    "Unlocks automation for crystal infusions": "解锁水晶灌注自动化",
    "Unlocks automation for red spice": "解锁红色香料的自动化",
    "Unlocks crystallized spice": "解锁结晶香料",
    "Unlocks prestige automation": "解锁声望自动化",
    "YELLOW": "黄色",
    "yellow spice": "黄色香料",
    "Yellow Spice Agency": "黄色香料代理",
    "Yellow Spice Factory": "黄色香料工厂",
    "Yellow Spice Galaxy": "黄色香料星系",
    "Yellow Spice Harvester": "黄色香料收割机",
    "Auto: ON": "自动: 已开启",
    "Auto: OFF": "自动: 已关闭",
    "BASE64": "BASE64",
    "CANCER": "癌症",
    "ENGINEERING": "工程",
    "INFINITY": "无限",
    "LETTERS": "字母",
    "LOGARITHM": "对数",
    "MIXED ENGINEERING": "混合工程",
    "MIXED SCIENTIFIC": "混合科学",
    "ROMAN": "罗马",
    "STANDARD": "标准",
    "All spice production is boosted based on unspent rainbow spice": "所有香料的生产都基于未使用的彩虹香料",
    "PRESTIGE": "声望",
    "Unlocks automation for yellow spice": "解锁黄色香料的自动化",
    "BLUE": "蓝色",
    "GREEN": "绿色",
    "PINK": "粉色",
    "Color Boost": "颜色提升",
    "Reset for a spice boost": "重置以提升香料 ",
    "Unlocks automation for pink spice": "解锁粉红色香料的自动化",
    "Boost from buying 10 is raised to the fifth power": "购买 10 的 提升 提高到五次方",
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
    "Spice Idle v1.0.1": "香料放置 v1.0.1",
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
    "Your blue spice agencies are currently being boosted ": "您的 蓝色 香料代理当前提升了 ",
    "Your blue spice galaxies are currently being boosted ": "您的 蓝色 香料星系当前提升了 ",
    "Your blue spice harvesters are currently being boosted ": "您的 蓝色 香料收割机当前提升了 ",
    "Your blue spice machines are currently being boosted ": "您的 蓝色 香料机器当前提升了 ",
    "Your blue spice planets are currently being boosted ": "您的 蓝色 香料星球当前提升了 ",
    "Your blue spice factories are currently being boosted ": "您的 蓝色 香料工厂当前提升了 ",
    "Your red spice agencies are currently being boosted ": "您的 红色 香料代理当前提升了 ",
    "Your red spice galaxies are currently being boosted ": "您的 红色 香料星系当前提升了 ",
    "Your red spice harvesters are currently being boosted ": "您的 红色 香料收割机当前提升了 ",
    "Your red spice machines are currently being boosted ": "您的 红色 香料机器当前提升了 ",
    "Your red spice planets are currently being boosted ": "您的 红色 香料星球当前提升了 ",
    "Your red spice factories are currently being boosted ": "您的 红色 香料工厂当前提升了 ",
    "Your yellow spice agencies are currently being boosted ": "您的 黄色 香料代理当前提升了 ",
    "Your yellow spice galaxies are currently being boosted ": "您的 黄色 香料星系当前提升了 ",
    "Your yellow spice harvesters are currently being boosted ": "您的 黄色 香料收割机当前提升了 ",
    "Your yellow spice machines are currently being boosted ": "您的 黄色 香料机器当前提升了 ",
    "Your yellow spice planets are currently being boosted ": "您的 黄色 香料星球当前提升了 ",
    "Your yellow spice factories are currently being boosted ": "您的 黄色 香料工厂当前提升了 ",
    "Your green spice agencies are currently being boosted ": "您的 绿色 香料代理当前提升了 ",
    "Your green spice galaxies are currently being boosted ": "您的 绿色 香料星系当前提升了 ",
    "Your green spice harvesters are currently being boosted ": "您的 绿色 香料收割机当前提升了 ",
    "Your green spice machines are currently being boosted ": "您的 绿色 香料机器当前提升了 ",
    "Your green spice planets are currently being boosted ": "您的 绿色 香料星球当前提升了 ",
    "Your green spice factories are currently being boosted ": "您的 绿色 香料工厂当前提升了 ",
    "Your pink spice agencies are currently being boosted ": "您的 粉色 香料代理当前提升了 ",
    "Your pink spice galaxies are currently being boosted ": "您的 粉色 香料星系当前提升了 ",
    "Your pink spice harvesters are currently being boosted ": "您的 粉色 香料收割机当前提升了 ",
    "Your pink spice machines are currently being boosted ": "您的 粉色 香料机器当前提升了 ",
    "Your pink spice planets are currently being boosted ": "您的 粉色 香料星球当前提升了 ",
    "Your pink spice factories are currently being boosted ": "您的 粉色 香料工厂当前提升了 ",
    "(Currently: ": "(当前: ",
    "boosting ALL spice generators ": "提升所有香料生成器 ",
    "boosting all red spice generators ": "提升所有 红 色香料生成器 ",
    "boosting all blue spice generators ": "提升所有 蓝 色香料生成器 ",
    "boosting all pink spice generators ": "提升所有 粉 色香料生成器 ",
    "boosting all yellow spice generators ": "提升所有 黄 色香料生成器 ",
    "boosting all green spice generators ": "提升所有 绿 色香料生成器 ",
    "boosting all red & yellow spice generators ": "提升所有红色和黄色香料生成器 ",
    "Your crystallized spice furnaces are currently being boosted ": "您的结晶香料 熔炉 当前提升了 ",
    "Your crystallized spice headquarters are currently being boosted ": "您的结晶香料 总部 当前提升了 ",
    "Your crystallized spice industries are currently being boosted ": "您的结晶香料 工业 当前提升了 ",
    "Your crystallized spice intelligences are currently being boosted ": "您的结晶香料 智能 当前提升了 ",
    "Your crystallized spice refineries are currently being boosted ": "您的结晶香料 精炼厂 当前提升了 ",
    "Your crystallized spice singularities are currently being boosted ": "您的结晶香料 奇点 当前提升了 ",
    "Your green spice is boosting yellow spice production ": "你的绿色香料正在促进黄色香料的生产 ",
    "Your pink spice is boosting blue spice production ": "你的粉红色香料正在促进蓝色香料的生产 ",
    "Your red spice is boosting yellow, green, blue, & pink spice production ": "您的红色香料正在促进黄色、绿色、蓝色和粉色香料的生产 ",
    "Your yellow spice is boosting red spice production ": "你的黄色香料正在促进红色香料的生产 ",
    "Your crystallized spice is boosting pink spice production ": "您的结晶香料正在促进粉红色香料的生产 ",
    "and boosting red, yellow, green & blue spice production ": "并促进红色、黄色、绿色和蓝色香料的生产 ",
    "boosting all red, yellow & green spice generators ": "提升所有红色、黄色和绿色香料生成器 ",
    "boosting all red, yellow, green & blue spice generators ": "提升所有红色、黄色、绿色和蓝色的香料生成器 ",
    "Your blue spice is boosting green spice production ": "您的蓝色香料正在促进绿色香料的生产 ",
    "boosting all crystallized spice generators ": "提升所有结晶香料生成器 ",
    "boosting all normal spice generators ": "提升所有普通的香料发生器 ",
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
    /^你有(.+)$/,
    /^([\d\.,]+) \/ ([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x,$/,
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
    [/^You have (.+) color boosts,$/, '你有 $1 颜色提升,'],
    [/^Average rainbow spice gain: \+(.+) μg rainbow spice\/hour$/, '平均彩虹香料增益：\+$1 μg 彩虹香料\/小时'],
    [/^Average rainbow spice gain: \+(.+) μg rainbow spice\/min$/, '平均彩虹香料增益：\+$1 μg 彩虹香料\/分钟'],
    [/^You have Prestiged (.+) time.$/, '你声望了 $1 次。'],
    [/^You have Prestiged (.+) times.$/, '你声望了 $1 次。'],
    [/^\#(.+) took (.+) and gave (.+) μg rainbow spice. \+(.+) μg rainbow spice\/hour$/, '\#$1 花费 $2 并给予 $3 μg 彩虹香料。 \+$4 微克彩虹香料\/小时'],
    [/^\#(.+) took (.+) and gave (.+) μg rainbow spice. \+(.+) μg rainbow spice\/min$/, '\#$1 花费 $2 并给予 $3 μg 彩虹香料。 \+$4 微克彩虹香料\/分钟'],
    [/^You have done (.+) color shifts.$/, '您已经完成了 $1 次颜色偏移。'],
    [/^You have done (.+) color boosts.$/, '您已经完成了 $1 次颜色提升。'],
    [/^and (.+) g yellow spice.$/, '和 $1 克 黄色 香料。'],
    [/^and (.+) g pink spice.$/, '和 $1 克 粉色 香料。'],
    [/^and (.+) g blue spice.$/, '和 $1 克 蓝色 香料。'],
    [/^and (.+) g red spice.$/, '和 $1 克 红色 香料。'],
    [/^and (.+) g green spice.$/, '和 $1 克 绿色 香料。'],
    [/^Requires (.+) bought blue spice galaxies$/, '需要 $1 已购买 蓝色 香料星系'],
    [/^Requires (.+) bought pink spice galaxies$/, '需要 $1 已购买 粉色 香料星系'],
    [/^Requires (.+) bought red spice galaxies$/, '需要 $1 已购买 红色 香料星系'],
    [/^Requires (.+) bought green spice galaxies$/, '需要 $1 已购买 绿色 香料星系'],
    [/^Requires (.+) bought yellow spice galaxies$/, '需要 $1 已购买 黄色 香料星系'],
    [/^Requires (.+) blue spice galaxies$/, '需要 $1 蓝色 香料星系'],
    [/^Requires (.+) pink spice galaxies$/, '需要 $1 粉色 香料星系'],
    [/^Requires (.+) red spice galaxies$/, '需要 $1 红色 香料星系'],
    [/^Requires (.+) green spice galaxies$/, '需要 $1 绿色 香料星系'],
    [/^Requires (.+) yellow spice galaxies$/, '需要 $1 黄色 香料星系'],
    [/^You have (.+) crystallized spice strengtheners,$/, '你有 $1 结晶香料增强剂,'],
    [/^You have (.+) crystallized spice furnaces,$/, '你有 $1 结晶香料熔炉,'],
    [/^You have (.+) crystallized spice headquarters,$/, '你有 $1 结晶香料总部,'],
    [/^You have (.+) crystallized spice industries,$/, '你有 $1 结晶香料工业,'],
    [/^You have (.+) crystallized spice intelligences,$/, '你有 $1 结晶香料智能,'],
    [/^You have (.+) crystallized spice refineries,$/, '你有 $1 结晶香料精炼厂,'],
    [/^You have (.+) crystallized spice singularities,$/, '你有 $1 结晶香料奇点,'],
    [/^You have (.+) g red spice$/, '你有 $1 克 红色 香料'],
    [/^You have (.+) g blue spice$/, '你有 $1 克 蓝色 香料'],
    [/^You have (.+) g pink spice$/, '你有 $1 克 粉色 香料'],
    [/^You have (.+) g yellow spice$/, '你有 $1 克 黄色 香料'],
    [/^You have (.+) g green spice$/, '你有 $1 克 绿色 香料'],
    [/^You have (.+) g red spice.$/, '你有 $1 克 红色 香料.'],
    [/^You have (.+) g blue spice.$/, '你有 $1 克 蓝色 香料.'],
    [/^You have (.+) g pink spice.$/, '你有 $1 克 粉色 香料.'],
    [/^You have (.+) g yellow spice.$/, '你有 $1 克 黄色 香料.'],
    [/^You have (.+) g green spice.$/, '你有 $1 克 绿色 香料.'],
    [/^You have (.+) g crystallized spice.$/, '你有 $1 克 结晶 香料.'],
    [/^You have (.+) μg rainbow spice.$/, '你有 $1 微克 彩虹 香料.'],
    [/^You start with (.+) color shift$/, '您开始时有 $1 颜色偏移'],
    [/^You start with (.+) color shifts$/, '您开始时有 $1 颜色偏移'],
    [/^You get (.+) free crystal infusions$/, '您将获得 $1 次免费水晶灌注'],
    [/^You have played for a total of (.+) hour, (.+) minutes, (.+) seconds.$/, '您总共玩了 $1 小时， $2 分钟，$3 秒。'],
    [/^You have played for a total of (.+) hour, (.+) minute, (.+) seconds.$/, '您总共玩了 $1 小时， $2 分钟，$3 秒。'],
    [/^You have played for a total of (.+) hours, (.+) minute, (.+) seconds.$/, '您总共玩了 $1 小时， $2 分钟，$3 秒。'],
    [/^You have played for a total of (.+) hours, (.+) minutes, (.+) seconds.$/, '您总共玩了 $1 小时， $2 分钟，$3 秒。'],
    [/^You have played for a total of (.+) minutes, (.+) seconds.$/, '您总共玩了 $1 分，$2 秒.'],
    [/^You have played for a total of (.+) minutes$/, '您总共玩了 $1 分.'],
    [/^You have played for a total of (.+) seconds$/, '您总共玩了 $1 秒'],
    [/^You have spent (.+) minutes, (.+) seconds in this Prestige.$/, '您在此 声望 中花费了 $1 分 $2 秒。'],
    [/^You have spent (.+) hour, (.+) minutes, (.+) seconds in this Prestige.$/, '您在此 声望 中花费了 $1 小时, $2 分 ，$3 秒。'],
    [/^You have spent (.+) hour, (.+) minute, (.+) seconds in this Prestige.$/, '您在此 声望 中花费了 $1 小时, $2 分 ，$3 秒。'],
    [/^You have spent (.+) hours, (.+) minutes, (.+) seconds in this Prestige.$/, '您在此 声望 中花费了 $1 小时, $2 分 ，$3 秒。'],
    [/^You have spent (.+) hours, (.+) minute, (.+) seconds in this Prestige.$/, '您在此 声望 中花费了 $1 小时, $2 分 ，$3 秒。'],
    [/^You have spent (.+) minutes this Prestige.$/, '您在此 声望 中花费了 $1 分。'],
    [/^You have spent (.+) seconds this Prestige.$/, '您在此 声望 中花费了 $1 秒。'],
    [/^You have accumulated a total of (.+) g spice$/, '您总共累积了 $1 克香料'],
    [/^You have accumulated a total of (.+) g spice.$/, '您总共累积了 $1 克香料.'],
    [/^and producing (.+) yellow spice galaxies\/sec$/, '并产生 $1 黄色香料 星系\/秒'],
    [/^and producing (.+) red spice galaxies\/sec$/, '并产生 $1 红色香料 星系\/秒'],
    [/^and producing (.+) blue spice galaxies\/sec$/, '并产生 $1 蓝色香料 星系\/秒'],
    [/^and producing (.+) green spice galaxies\/sec$/, '并产生 $1 绿色香料 星系\/秒'],
    [/^and producing (.+) pink spice galaxies\/sec$/, '并产生 $1 粉色香料 星系\/秒'],
    [/^You have (.+) color shifts,$/, '你有 $1 颜色偏移，'],
    [/^You have (.+) crystal infusions,$/, '你有 $1 水晶灌注，'],
    [/^You have (.+) crystallized spice strenghteners,$/, '你有 $1 结晶香料增强剂，'],
    [/^You have (.+) blue spice strengtheners,$/, '你有 $1 蓝色 香料增强剂，'],
    [/^You have (.+) green spice strengtheners,$/, '你有 $1 绿色 香料增强剂，'],
    [/^You have (.+) pink spice strengtheners,$/, '你有 $1 粉色 香料增强剂，'],
    [/^You have (.+) red spice strengtheners,$/, '你有 $1 红色 香料增强剂，'],
    [/^You have (.+) yellow spice strengtheners,$/, '你有 $1 黄色 香料增强剂，'],
    [/^You have (.+) blue spice agencies,$/, '你有 $1 蓝色 香料代理，'],
    [/^You have (.+) green spice agencies,$/, '你有 $1 绿色 香料代理，'],
    [/^You have (.+) pink spice agencies,$/, '你有 $1 粉色 香料代理，'],
    [/^You have (.+) red spice agencies,$/, '你有 $1 红色 香料代理，'],
    [/^You have (.+) yellow spice agencies,$/, '你有 $1 黄色 香料代理，'],
    [/^You have (.+) blue spice factories,$/, '你有 $1 蓝色 香料工厂，'],
    [/^You have (.+) green spice factories,$/, '你有 $1 绿色 香料工厂，'],
    [/^You have (.+) pink spice factories,$/, '你有 $1 粉色 香料工厂，'],
    [/^You have (.+) red spice factories,$/, '你有 $1 红色 香料工厂，'],
    [/^You have (.+) yellow spice factories,$/, '你有 $1 黄色 香料工厂，'],
    [/^You have (.+) blue spice galaxies,$/, '你有 $1 蓝色 香料星系，'],
    [/^You have (.+) green spice galaxies,$/, '你有 $1 绿色 香料星系，'],
    [/^You have (.+) pink spice galaxies,$/, '你有 $1 粉色 香料星系，'],
    [/^You have (.+) red spice galaxies,$/, '你有 $1 红色 香料星系，'],
    [/^You have (.+) yellow spice galaxies,$/, '你有 $1 黄色 香料星系，'],
    [/^You have (.+) blue spice machines,$/, '你有 $1 蓝色 香料机器，'],
    [/^You have (.+) green spice machines,$/, '你有 $1 绿色 香料机器，'],
    [/^You have (.+) pink spice machines,$/, '你有 $1 粉色 香料机器，'],
    [/^You have (.+) red spice machines,$/, '你有 $1 红色 香料机器，'],
    [/^You have (.+) yellow spice machines,$/, '你有 $1 黄色 香料机器，'],
    [/^You have (.+) blue spice planets,$/, '你有 $1 蓝色 香料星球，'],
    [/^You have (.+) green spice planets,$/, '你有 $1 绿色 香料星球，'],
    [/^You have (.+) pink spice planets,$/, '你有 $1 粉色 香料星球，'],
    [/^You have (.+) red spice planets,$/, '你有 $1 红色 香料星球，'],
    [/^You have (.+) yellow spice planets,$/, '你有 $1 黄色 香料星球，'],
    [/^You have (.+) blue spice harvesters,$/, '你有 $1 蓝色 香料收割机，'],
    [/^You have (.+) green spice harvesters,$/, '你有 $1 绿色 香料收割机，'],
    [/^You have (.+) pink spice harvesters,$/, '你有 $1 粉色 香料收割机，'],
    [/^You have (.+) red spice harvesters,$/, '你有 $1 红色 香料收割机，'],
    [/^You have (.+) yellow spice harvesters,$/, '你有 $1 黄色 香料收割机，'],
    [/^You have (.+) blue spice strenghteners,$/, '你有 $1 蓝色 香料增强剂，'],
    [/^You have (.+) green spice strenghteners,$/, '你有 $1 绿色 香料增强剂，'],
    [/^You have (.+) pink spice strenghteners,$/, '你有 $1 粉色 香料增强剂，'],
    [/^You have (.+) red spice strenghteners,$/, '你有 $1 红色 香料增强剂，'],
    [/^You have (.+) yellow spice strenghteners,$/, '你有 $1 黄色 香料增强剂，'],
    [/^You have (.+) blue spice planets \((.+) bought\),$/, '你有 $1 蓝色 香料星球 （$2 已购买），'],
    [/^You have (.+) green spice planets \((.+) bought\),$/, '你有 $1 绿色 香料星球 （$2 已购买），'],
    [/^You have (.+) pink spice planets \((.+) bought\),$/, '你有 $1 粉色 香料星球 （$2 已购买），'],
    [/^You have (.+) red spice planets \((.+) bought\),$/, '你有 $1 红色 香料星球 （$2 已购买），'],
    [/^You have (.+) yellow spice planets \((.+) bought\),$/, '你有 $1 黄色 香料星球 （$2 已购买），'],
    [/^You have (.+) blue spice galaxies \((.+) bought\),$/, '你有 $1 蓝色 香料星系 （$2 已购买），'],
    [/^You have (.+) green spice galaxies \((.+) bought\),$/, '你有 $1 绿色 香料星系 （$2 已购买），'],
    [/^You have (.+) pink spice galaxies \((.+) bought\),$/, '你有 $1 粉色 香料星系 （$2 已购买），'],
    [/^You have (.+) red spice galaxies \((.+) bought\),$/, '你有 $1 红色 香料星系 （$2 已购买），'],
    [/^You have (.+) yellow spice galaxies \((.+) bought\),$/, '你有 $1 黄色 香料星系 （$2 已购买），'],
    [/^You have (.+) blue spice harvesters \((.+) bought\),$/, '你有 $1 蓝色 香料收割机 （$2 已购买），'],
    [/^You have (.+) green spice harvesters \((.+) bought\),$/, '你有 $1 绿色 香料收割机 （$2 已购买），'],
    [/^You have (.+) pink spice harvesters \((.+) bought\),$/, '你有 $1 粉色 香料收割机 （$2 已购买），'],
    [/^You have (.+) red spice harvesters \((.+) bought\),$/, '你有 $1 红色 香料收割机 （$2 已购买），'],
    [/^You have (.+) yellow spice harvesters \((.+) bought\),$/, '你有 $1 黄色 香料收割机 （$2 已购买），'],
    [/^You have (.+) blue spice machines \((.+) bought\),$/, '你有 $1 蓝色 香料机器 （$2 已购买），'],
    [/^You have (.+) green spice machines \((.+) bought\),$/, '你有 $1 绿色 香料机器 （$2 已购买），'],
    [/^You have (.+) pink spice machines \((.+) bought\),$/, '你有 $1 粉色 香料机器 （$2 已购买），'],
    [/^You have (.+) red spice machines \((.+) bought\),$/, '你有 $1 红色 香料机器 （$2 已购买），'],
    [/^You have (.+) yellow spice machines \((.+) bought\),$/, '你有 $1 黄色 香料机器 （$2 已购买），'],
    [/^You have (.+) blue spice factories \((.+) bought\),$/, '你有 $1 蓝色 香料工厂 （$2 已购买），'],
    [/^You have (.+) green spice factories \((.+) bought\),$/, '你有 $1 绿色 香料工厂 （$2 已购买），'],
    [/^You have (.+) pink spice factories \((.+) bought\),$/, '你有 $1 粉色 香料工厂 （$2 已购买），'],
    [/^You have (.+) red spice factories \((.+) bought\),$/, '你有 $1 红色 香料工厂 （$2 已购买），'],
    [/^You have (.+) yellow spice factories \((.+) bought\),$/, '你有 $1 黄色 香料工厂 （$2 已购买），'],
    [/^You have (.+) blue spice agencies \((.+) bought\),$/, '你有 $1 蓝色 香料代理 （$2 已购买），'],
    [/^You have (.+) green spice agencies \((.+) bought\),$/, '你有 $1 绿色 香料代理 （$2 已购买），'],
    [/^You have (.+) pink spice agencies \((.+) bought\),$/, '你有 $1 粉色 香料代理 （$2 已购买），'],
    [/^You have (.+) red spice agencies \((.+) bought\),$/, '你有 $1 红色 香料代理 （$2 已购买），'],
    [/^You have (.+) yellow spice agencies \((.+) bought\),$/, '你有 $1 黄色 香料代理 （$2 已购买），'],
    [/^You have (.+) crystallized spice furnaces \((.+) bought\),$/, '你有 $1 结晶香料 熔炉 （$2 已购买），'],
    [/^You have (.+) crystallized spice refineries \((.+) bought\),$/, '你有 $1 结晶香料 精炼厂 （$2 已购买），'],
    [/^You have (.+) crystallized spice headquarters \((.+) bought\),$/, '你有 $1 结晶香料 总部 （$2 已购买），'],
    [/^You have (.+) crystallized spice intelligences \((.+) bought\),$/, '你有 $1 结晶香料 智能 （$2 已购买），'],
    [/^You have (.+) crystallized spice industries \((.+) bought\),$/, '你有 $1 结晶香料 工业 （$2 已购买），'],
    [/^You have (.+) crystal infusions \((.+) free\),$/, '你有 $1 水晶灌注 （$2 免费），'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
    [/^producing (.+) crystallized spice furnaces\/sec$/, '每秒产生 $1 结晶香料熔炉'],
    [/^producing (.+) crystallized spice headquarters\/sec$/, '每秒产生 $1 结晶香料总部'],
    [/^producing (.+) crystallized spice industries\/sec$/, '每秒产生 $1 结晶香料工业'],
    [/^producing (.+) crystallized spice intelligences\/sec$/, '每秒产生 $1 结晶香料智能'],
    [/^producing (.+) crystallized spice refineries\/sec$/, '每秒产生 $1 结晶香料精炼厂'],
    [/^producing (.+) crystallized spice singularities\/sec$/, '每秒产生 $1 结晶香料奇点'],
    [/^producing (.+) green spice agencies\/sec$/, '每秒产生 $1 个绿色 香料代理'],
    [/^producing (.+) blue spice agencies\/sec$/, '每秒产生 $1 个蓝色 香料代理'],
    [/^producing (.+) pink spice agencies\/sec$/, '每秒产生 $1 个粉色 香料代理'],
    [/^producing (.+) red spice agencies\/sec$/, '每秒产生 $1 个红色 香料代理'],
    [/^producing (.+) yellow spice agencies\/sec$/, '每秒产生 $1 个黄色 香料代理'],
    [/^producing (.+) green spice factories\/sec$/, '每秒产生 $1 个绿色 香料工厂'],
    [/^producing (.+) blue spice factories\/sec$/, '每秒产生 $1 个蓝色 香料工厂'],
    [/^producing (.+) pink spice factories\/sec$/, '每秒产生 $1 个粉色 香料工厂'],
    [/^producing (.+) red spice factories\/sec$/, '每秒产生 $1 个红色 香料工厂'],
    [/^producing (.+) yellow spice factories\/sec$/, '每秒产生 $1 个黄色 香料工厂'],
    [/^producing (.+) green spice harvesters\/sec$/, '每秒产生 $1 个绿色 香料收割机'],
    [/^producing (.+) blue spice harvesters\/sec$/, '每秒产生 $1 个蓝色 香料收割机'],
    [/^producing (.+) pink spice harvesters\/sec$/, '每秒产生 $1 个粉色 香料收割机'],
    [/^producing (.+) red spice harvesters\/sec$/, '每秒产生 $1 个红色 香料收割机'],
    [/^producing (.+) yellow spice harvesters\/sec$/, '每秒产生 $1 个黄色 香料收割机'],
    [/^producing (.+) green spice machines\/sec$/, '每秒产生 $1 个绿色 香料机器'],
    [/^producing (.+) blue spice machines\/sec$/, '每秒产生 $1 个蓝色 香料机器'],
    [/^producing (.+) pink spice machines\/sec$/, '每秒产生 $1 个粉色 香料机器'],
    [/^producing (.+) red spice machines\/sec$/, '每秒产生 $1 个红色 香料机器'],
    [/^producing (.+) yellow spice machines\/sec$/, '每秒产生 $1 个黄色 香料机器'],
    [/^producing (.+) green spice planets\/sec$/, '每秒产生 $1 个绿色 香料星球'],
    [/^producing (.+) blue spice planets\/sec$/, '每秒产生 $1 个蓝色 香料星球'],
    [/^producing (.+) pink spice planets\/sec$/, '每秒产生 $1 个粉色 香料星球'],
    [/^producing (.+) red spice planets\/sec$/, '每秒产生 $1 个红色 香料星球'],
    [/^producing (.+) yellow spice planets\/sec$/, '每秒产生 $1 个黄色 香料星球'],
    [/^producing (.+) green spice galaxies\/sec$/, '每秒产生 $1 个绿色 香料星系'],
    [/^producing (.+) blue spice galaxies\/sec$/, '每秒产生 $1 个蓝色 香料星系'],
    [/^producing (.+) pink spice galaxies\/sec$/, '每秒产生 $1 个粉色 香料星系'],
    [/^producing (.+) red spice galaxies\/sec$/, '每秒产生 $1 个红色 香料星系'],
    [/^producing (.+) yellow spice galaxies\/sec$/, '每秒产生 $1 个黄色 香料星系'],
    [/^producing (.+) g blue spice\/sec$/, '每秒产生 $1 克 蓝色 香料'],
    [/^producing (.+) g pink spice\/sec$/, '每秒产生 $1 克 粉色 香料'],
    [/^producing (.+) g red spice\/sec$/, '每秒产生 $1 克 红色 香料'],
    [/^producing (.+) g yellow spice\/sec$/, '每秒产生 $1 克 黄色 香料'],
    [/^producing (.+) g green spice\/sec$/, '每秒产生 $1 克 绿色 香料'],
    [/^producing (.+) g blue spice\/sec,$/, '每秒产生 $1 克 蓝色 香料，'],
    [/^producing (.+) g pink spice\/sec,$/, '每秒产生 $1 克 粉色 香料，'],
    [/^producing (.+) g red spice\/sec,$/, '每秒产生 $1 克 红色 香料，'],
    [/^producing (.+) g yellow spice\/sec,$/, '每秒产生 $1 克 黄色 香料，'],
    [/^producing (.+) g crystallized spice\/sec,$/, '每秒产生 $1 克 结晶 香料，'],
    [/^producing (.+) g green spice\/sec,$/, '每秒产生 $1 克 绿色 香料，'],
    [/^\-(.+) g blue spice$/, '\-$1 克 蓝色 香料'],
    [/^\-(.+) g pink spice$/, '\-$1 克 粉色 香料'],
    [/^\-(.+) g red spice$/, '\-$1 克 红色 香料'],
    [/^\-(.+) g yellow spice$/, '\-$1 克 黄色 香料'],
    [/^\-(.+) g green spice$/, '\-$1 克 绿色 香料'],
    [/^(.+) μg rainbow spice$/, '$1 微克 彩虹 香料'],
    [/^(.+) g crystallized spice$/, '$1 克 结晶 香料'],
    [/^(.+) g blue spice\/sec$/, '每秒 $1 克 蓝色 香料'],
    [/^(.+) g pink spice\/sec$/, '每秒 $1 克 粉色 香料'],
    [/^(.+) g red spice\/sec$/, '每秒 $1 克 红色 香料'],
    [/^(.+) g yellow spice\/sec$/, '每秒 $1 克 黄色 香料'],
    [/^(.+) g green spice\/sec$/, '每秒 $1 克 绿色 香料'],
    [/^(.+) g crystallized spice\/sec$/, '每秒 $1 克 结晶 香料'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) g$/, '$1 克'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e([\d\.,]+) g$/, '$1e$2 克'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.]+)e([\d\.,]+) g green spice,$/, '$1e$2 g 绿色 香料,'],
    [/^([\d\.]+)e([\d\.,]+) g yellow spice,$/, '$1e$2 g 黄色 香料,'],
    [/^([\d\.]+)e([\d\.,]+) g blue spice,$/, '$1e$2 g 蓝色 香料,'],
    [/^([\d\.]+)e([\d\.,]+) g pink spice,$/, '$1e$2 g 粉色 香料,'],
    [/^([\d\.]+)e([\d\.,]+) g red spice,$/, '$1e$2 g 红色 香料,'],
    [/^([\d\.,]+) g$/, '$1 克'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^Buy until ([\d\.,]+):$/, '购买单位 $1：'],
    [/^\#([\d\.,]+) \(no data\)$/, '\#$1（无数据）'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);