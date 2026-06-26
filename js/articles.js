// 文章数据 - CJH 的技术博客
const articles = [
  {
    title: "微软Copilot高危漏洞CVE-2026-42824全解析",
    date: "2026-06-20",
    category: "AI安全",
    summary: "2026年6月微软Copilot曝出严重级漏洞CVE-2026-42824（代号SearchLeak），攻击者只需诱骗用户点击链接，即可窃取2FA验证码、邮件内容、会议详情等敏感数据。同时一项研究显示Copilot医疗建议中42%可能导致伤害。本文从技术视角深度解析漏洞原理与防御策略。",
    url: "https://blog.csdn.net/qq_68725483/article/details/162168299"
  },
  {
    title: "用5个国产大模型帮你选大学",
    date: "2026-06-17",
    category: "AI",
    summary: "2026年高考季，国产大模型集体涌入志愿填报赛道。本文实测智谱GLM 5、Deepseek V4 Pro、Qwen3.6、小米MIMO V2.5 Pro、MiniMax M3五大模型，从准确性、易用性、功能全面性、信息来源可靠性四个维度横向对比，帮高考生和家长找到最适合的AI志愿助手。",
    url: "https://blog.csdn.net/qq_68725483/article/details/162078200"
  },
  {
    title: "2026国产大模型API选购指南",
    date: "2026-06-17",
    category: "AI",
    summary: "2026年国产大模型百花齐放，本文横向对比智谱GLM、通义千问、Deepseek、MiniMax、小米MIMO、Kimi六大主流模型API，从价格、性能、生态、稳定性、易用性五个维度全面评测，帮你找到最适合自己的那一个。",
    url: "https://blog.csdn.net/qq_68725483/article/details/162078158"
  },
  {
    title: "免费开源国产：小米MiMo Code首日GitHub爆火",
    date: "2026-06-11",
    category: "AI",
    summary: "2026年6月11日，小米MiMo Code V0.1.0以MIT协议开源，GitHub首日爆火，Hacker News获426分。这款终端原生AI编程Agent内嵌免费多模态模型，跑分超Claude Code。本文深度解析MiMo Code的技术架构，实测对比Claude Code和Trae，探讨国产AI编程工具的未来。",
    url: "https://blog.csdn.net/qq_68725483/article/details/162016315"
  },
  {
    title: "上线仅72小时被强制下架：Claude Fable 5 的短命",
    date: "2026-06-13",
    category: "AI",
    summary: "2026年6月9日，Anthropic发布号称\"地表最强商用AI\"的Claude Fable 5，仅3天后美国政府以\"国家安全\"为由强制全球下架。从发布到禁用，72小时内完成了一场完整的\"神坛坠落\"。本文从技术视角深度解读事件始末，分析对开发者生态的影响及背后的战略博弈。",
    url: "https://blog.csdn.net/qq_68725483/article/details/161961836"
  },
  {
    title: "大模型的\"越狱\"之路：从DAN到多模态注入，AI安全边界正在崩塌",
    date: "2026-06-08",
    category: "AI安全",
    summary: "从早期的DAN角色扮演到2026年的ForgeDAN进化式越狱框架，再到多模态视频模态注入，大模型越狱攻击正在从\"简单粗暴\"走向\"系统化、隐蔽化\"。本文系统梳理越狱攻击的演进脉络，拆解ForgeDAN、视频模态越狱等真实案例，分析攻击原理，提供从模型层到输出层的多级防御方案。",
    url: "https://blog.csdn.net/qq_68725483/article/details/161904080"
  },
  {
    title: "科创比赛答辩实战教程",
    date: "2026-06-09",
    category: "教程",
    summary: "以陕西省第二十六届学生数字素养实践活动省赛一等奖第一名的答辩经验为基础，从PPT结构设计、时间分配、现场问答到准备清单，系统梳理科创比赛答辩实战技巧，为准备科创比赛答辩的同学提供全方位指导。",
    url: "https://blog.csdn.net/qq_68725483/article/details/161821269"
  },
  {
    title: "免费Token随便用！Agnes模型接入Trae IDE完整教程",
    date: "2026-06-02",
    category: "AI",
    summary: "2026年6月1日起，Agnes AI宣布旗下文本、图像、视频全系列模型API无限期免费开放。本文详细体验Agnes 2.0 Flash模型在Trae SOLO中的实际表现，并提供完整的自定义模型接入教程，全程无广，Token随便用。",
    url: "https://blog.csdn.net/qq_68725483/article/details/161806485"
  },
  {
    title: "AI Agent 安全危机：当你的\"智能助手\"变成攻击者的\"远程武器\"",
    date: "2026-06-01",
    category: "AI安全",
    summary: "2026年AI Agent成为最热技术话题，但其安全风险被严重低估。本文以开源AI Agent OpenClaw为切入点，系统分析Agent架构的核心安全威胁——从CVE-2026-25253远程代码执行漏洞到Skill供应链投毒，提供攻击原理剖析、PoC代码复现与多层次防御策略。",
    url: "https://blog.csdn.net/qq_68725483/article/details/161802965"
  },
  {
    title: "【AI安全】大模型安全威胁：Prompt注入与模型防御策略",
    date: "2026-05-28",
    category: "AI安全",
    summary: "随着大语言模型在各类应用中的广泛部署，Prompt注入攻击已成为AI安全领域最突出的威胁之一。本文从开发者视角出发，系统梳理Prompt注入的攻击原理与典型场景，提供可复现的攻击示例代码，深入探讨从输入层到输出层的多级防御策略，并介绍主流开源防御工具。",
    url: "https://blog.csdn.net/qq_68725483/article/details/161774380"
  },
  {
    title: "【春笋计划复盘02】答辩PPT是怎么炼成的？——从内容设计到现场呈现 实战分析",
    date: "2026-05-27",
    category: "教程",
    summary: "春笋计划复盘系列第二篇，详细拆解市级现场答辩（3分钟PPT展示+3分钟提问）的实战经验。内容包括11页PPT的结构设计与时间分配、三大关键决策（证书背书、视频演示、类比降门槛）、评委4类典型问题及考察点、回答技巧等。",
    url: "https://blog.csdn.net/qq_68725483/article/details/161766946"
  },
  {
    title: "【春笋计划复盘01】我为什么要做AI钓鱼网站检测？",
    date: "2026-05-25",
    category: "网络安全",
    summary: "2025年AI兴起后，身边多位同学遭遇钓鱼网站诈骗的真实经历，萌生了用AI对抗AI生成钓鱼网站的想法。凭借对CNN卷积神经网络和网络安全技术的双重兴趣，独立完成了《AI钓鱼网站动态识别及防护软件》项目。本文介绍西安市春笋计划的选拔流程，分享选题思路与项目历程。",
    url: "https://blog.csdn.net/qq_68725483/article/details/161746660"
  },
  {
    title: "从快手\"12·22\"直播攻击事件看：一次教科书式的业务层饱和攻击",
    date: "2025-12-23",
    category: "网络安全",
    summary: "深度剖析2025年快手平台遭遇的大规模业务层饱和攻击事件，揭示攻击者如何利用僵尸网络与自动化工具组合，绕过传统DDoS防护，瘫痪平台核心业务流程，为直播平台安全防御提供全新视角。",
    url: "https://blog.csdn.net/qq_68725483/article/details/156206753"
  },
  {
    title: "【技术实战】基于CNN的AI钓鱼网站动态识别与防护插件开发",
    date: "2025-11-09",
    category: "网络安全",
    summary: "基于卷积神经网络实现钓鱼网站的动态识别，通过分析URL结构特征与网页视觉元素，构建轻量化检测模型，并开发浏览器插件将AI检测与传统黑白名单结合，形成双保险防御体系。",
    url: "https://blog.csdn.net/qq_68725483/article/details/154583424"
  },
  {
    title: "AI写作的字数谜题：Token机制与指令遵循的双重困境",
    date: "2025-10-28",
    category: "AI",
    summary: "揭示大语言模型字数控制的技术瓶颈：Token机制导致中文字数换算失真，主流模型长度指令遵循达标率仅15%。通过精准提示词设计与分段生成策略，可将字数达标率从60%提升至95%。",
    url: "https://blog.csdn.net/qq_68725483/article/details/153925309"
  },
  {
    title: "AI驱动的Web异常流量检测实战：基于LSTM-Transformer的入侵行为智能分析",
    date: "2025-06-27",
    category: "网络安全",
    summary: "构建LSTM-Transformer混合模型实现Web异常流量智能检测，涵盖39维特征工程、BERT语义解析与模型蒸馏优化，解决传统WAF面对0day攻击的滞后性，捕获慢速CC攻击等长周期威胁。",
    url: "https://blog.csdn.net/qq_68725483/article/details/148954333"
  },
  {
    title: "Wireshark网络抓包工具基础使用教程",
    date: "2025-05-02",
    category: "系统工具",
    summary: "Wireshark多平台网络抓包工具入门指南，涵盖实时捕获、深度解析网络数据包的核心操作，适用于网络故障排查、安全分析与协议学习场景。",
    url: "https://blog.csdn.net/qq_68725483/article/details/147668820"
  },
  {
    title: "在Kali Linux上安装GNOME桌面环境完整教程",
    date: "2025-05-02",
    category: "系统工具",
    summary: "Kali Linux默认使用Xfce桌面，本文手把手教你安装GNOME桌面环境，包括依赖安装、显示管理器配置及常见问题排查，让Kali拥有更现代的图形界面体验。",
    url: "https://blog.csdn.net/qq_68725483/article/details/147666992"
  },
  {
    title: "Trae-中国首款免费AI原生IDE",
    date: "2025-03-30",
    category: "系统工具",
    summary: "国内首个AI编程IDE深度体验：内置顶尖AI模型，支持中文需求理解，自动写代码、改Bug，实测开发速度翻倍，尤其适合新手入门和重复性编码工作。",
    url: "https://blog.csdn.net/qq_68725483/article/details/146768903"
  },
  {
    title: "AI PPT制作神器Kimi",
    date: "2025-02-21",
    category: "AI",
    summary: "Kimi AI PPT制作工具使用指南：输入内容一键生成专业演示文稿，支持模板选择与编辑优化，适用于职场汇报、学术演讲与教学演示，大幅提升PPT制作效率。",
    url: "https://blog.csdn.net/qq_68725483/article/details/145783959"
  },
  {
    title: "网络安全：挑战与防御技术",
    date: "2025-02-18",
    category: "网络安全",
    summary: "全面梳理数字化时代网络安全核心挑战，从黑客攻击、数据泄露到勒索软件威胁，深入探讨防御技术与企业安全策略，展望AI与IoT时代的安全发展趋势。",
    url: "https://blog.csdn.net/qq_68725483/article/details/145715013"
  },
  {
    title: "如何实现更高效的多模态融合",
    date: "2025-02-16",
    category: "AI",
    summary: "多模态融合技术通过整合不同模态数据提升AI系统性能，本文分析融合方法选择、模态互补性与计算成本的权衡，展望更通用的多模态预训练模型与高效融合架构方向。",
    url: "https://blog.csdn.net/qq_68725483/article/details/145665661"
  },
  {
    title: "DeepSeek、Kimi、文心一言、ChatGPT 你更适合用哪个？各大AI使用体验与功能区别",
    date: "2025-02-16",
    category: "AI",
    summary: "四大主流AI助手全面横评：从技术背景、功能特点到用户体验逐一对比DeepSeek、Kimi、文心一言与ChatGPT，帮你找到最适合自己需求的AI工具。",
    url: "https://blog.csdn.net/qq_68725483/article/details/145662905"
  },
  {
    title: "Deepseek本地部署超详细教程 不联网就能使用",
    date: "2025-02-01",
    category: "AI",
    summary: "国产AI大模型DeepSeek本地部署完整指南，使用Ollama框架实现离线运行，避免网络波动与攻击导致的服务中断，附常见问题排查与硬件配置建议。",
    url: "https://blog.csdn.net/qq_68725483/article/details/145411273"
  },
  {
    title: "怎么用CSS画一个爱心？",
    date: "2024-03-02",
    category: "前端开发",
    summary: "利用CSS伪元素与动画属性绘制爱心形状，通过旋转与定位组合两个圆角矩形，实现纯CSS心形图案，适合CSS入门练手。",
    url: "https://blog.csdn.net/qq_68725483/article/details/136422226"
  },
  {
    title: "HTML超链接去下划线",
    date: "2024-03-02",
    category: "前端开发",
    summary: "使用CSS的text-decoration: none属性去除HTML超链接默认下划线，同时可配合颜色与hover效果优化链接样式，提升页面美观度。",
    url: "https://blog.csdn.net/qq_68725483/article/details/136422012"
  },
  {
    title: "HTML板块左右排列布局——左侧DIV固定宽度，右侧DIV自适应宽度",
    date: "2024-02-18",
    category: "前端开发",
    summary: "利用CSS float属性实现经典两栏布局：左侧固定宽度侧边栏 + 右侧自适应内容区，是前端页面布局的基础模式之一。",
    url: "https://blog.csdn.net/qq_68725483/article/details/136157517"
  },
  {
    title: "HTML动态彩虹字",
    date: "2024-02-16",
    category: "前端开发",
    summary: "纯CSS实现文字彩虹渐变动画效果，通过background-clip与animation属性让文字颜色流动变幻，为网页增添视觉趣味。",
    url: "https://blog.csdn.net/qq_68725483/article/details/136129498"
  },
  {
    title: "HTML单击图片独立放大",
    date: "2024-02-16",
    category: "前端开发",
    summary: "使用JavaScript实现点击图片弹出模态框放大查看效果，包含遮罩层、居中显示与点击关闭交互，适用于图片展示类页面。",
    url: "https://blog.csdn.net/qq_68725483/article/details/136126922"
  },
  {
    title: "HTML基本结构",
    date: "2023-12-30",
    category: "前端开发",
    summary: "HTML文档基本骨架详解：DOCTYPE声明、html/head/body标签结构、meta字符集设置与标题标签，前端入门必备知识。",
    url: "https://blog.csdn.net/qq_68725483/article/details/135302266"
  },
  {
    title: "我的创作纪念日",
    date: "2023-11-17",
    category: "其他",
    summary: "CSDN创作历程回顾：从第一篇博客到获得创作勋章，记录在技术写作中收获的成长与成就感，坚持分享优质知识与资源。",
    url: "https://blog.csdn.net/qq_68725483/article/details/134467642"
  },
  {
    title: "CMD常用网络命令汇总",
    date: "2023-11-11",
    category: "网络安全",
    summary: "Windows CMD网络诊断命令大全：ping、netstat、tracert、nbtstat等常用命令参数详解，网络故障排查与安全分析必备工具集。",
    url: "https://blog.csdn.net/qq_68725483/article/details/134347142"
  },
  {
    title: "Win10想用Win11图标？一招教你解决",
    date: "2023-10-28",
    category: "系统工具",
    summary: "Windows 10更换Win11图标教程，使用第三方工具一键替换系统图标，让Win10拥有Win11的视觉风格。",
    url: "https://blog.csdn.net/qq_68725483/article/details/134095251"
  },
  {
    title: "大咖云集，智慧碰撞 第18届中国Linux内核开发者大会线上直播预约开启！",
    date: "2023-10-27",
    category: "系统工具",
    summary: "第18届CLK中国Linux内核开发者大会预告，由清华、华为、阿里云等企业发起，聚焦开源技术推广，线下参会近500人，是国内Linux内核领域影响力峰会。",
    url: "https://blog.csdn.net/qq_68725483/article/details/134081429"
  },
  {
    title: "Python爬虫之爬取整个网页（最简单的爬虫）",
    date: "2023-10-22",
    category: "系统工具",
    summary: "Python urllib库实现最简网页爬虫：从设置User-Agent请求头到发送请求获取响应，逐步解析爬虫基本原理与实现流程。",
    url: "https://blog.csdn.net/qq_68725483/article/details/133968281"
  },
  {
    title: "如何用Python进行DDOS攻击？【网络攻防篇】",
    date: "2023-10-21",
    category: "网络安全",
    summary: "Python实现DDoS攻击原理演示，从网络攻防角度理解拒绝服务攻击的技术机制，强调防御意识与合法测试的重要性。",
    url: "https://blog.csdn.net/qq_68725483/article/details/133967092"
  },
  {
    title: "Win10想用Win11任务栏？Start11帮你解决【Windows美化】",
    date: "2023-10-21",
    category: "系统工具",
    summary: "使用Stardock Start11工具将Win10任务栏替换为Win11风格，简单几步完成Windows桌面美化改造。",
    url: "https://blog.csdn.net/qq_68725483/article/details/133965906"
  }
];

// 分类列表
const categories = ["全部", "网络安全", "AI", "前端开发", "系统工具", "其他"];

// 当前状态
let currentCategory = "全部";
let currentSearchQuery = "";

// ===== 安全工具函数 =====
function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function sanitizeUrl(url) {
  try {
    const parsed = new URL(url);
    if (["https:", "http:"].includes(parsed.protocol)) {
      return parsed.href;
    }
  } catch (_) { /* invalid URL */ }
  return "";
}

// ===== 搜索高亮（XSS 安全）=====
function highlightText(text, query) {
  if (!query) return escapeHtml(text);
  const escaped = escapeHtml(text);
  const safeQuery = escapeHtml(query);
  const regex = new RegExp(`(${safeQuery.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
  return escaped.replace(regex, '<span class="search-highlight">$1</span>');
}

// ===== 渲染文章列表（XSS 安全）=====
function renderArticles(filter, searchQuery) {
  const container = document.getElementById("article-list");
  if (!container) return;

  filter = filter || currentCategory;
  searchQuery = (searchQuery !== undefined) ? searchQuery : currentSearchQuery;

  let filtered = filter === "全部"
    ? articles
    : articles.filter(a => a.category === filter);

  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    filtered = filtered.filter(a =>
      a.title.toLowerCase().includes(q) ||
      a.summary.toLowerCase().includes(q) ||
      a.category.toLowerCase().includes(q)
    );
  }

  if (filtered.length === 0) {
    container.innerHTML = '<div class="no-results"><div class="no-results-icon">\uD83D\uDD0D</div><p>未找到相关文章</p></div>';
    return;
  }

  container.innerHTML = filtered.map((article, index) => {
    const safeUrl = sanitizeUrl(article.url);
    const titleHtml = highlightText(article.title, searchQuery);
    const summaryHtml = highlightText(article.summary, searchQuery);
    const categoryHtml = highlightText(article.category, searchQuery);

    return `<article class="article-card" style="animation-delay:${index * 0.05}s">
      <div class="article-meta">
        <span class="article-category">${categoryHtml}</span>
        <time class="article-date">${escapeHtml(article.date)}</time>
      </div>
      <h3 class="article-title">${titleHtml}</h3>
      <p class="article-summary">${summaryHtml}</p>
      <a class="article-link" href="${safeUrl}" target="_blank" rel="noopener noreferrer">
        阅读全文 <span class="link-arrow">&rarr;</span>
      </a>
    </article>`;
  }).join("");
}

// ===== 渲染分类标签 =====
function renderCategories() {
  const container = document.getElementById("category-tags");
  if (!container) return;

  container.innerHTML = categories.map(cat => {
    return `<button class="category-tag ${cat === currentCategory ? "active" : ""}" data-category="${escapeHtml(cat)}">
      ${escapeHtml(cat)}
    </button>`;
  }).join("");

  container.addEventListener("click", (e) => {
    const btn = e.target.closest(".category-tag");
    if (!btn) return;

    container.querySelectorAll(".category-tag").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    currentCategory = btn.dataset.category;
    renderArticles(currentCategory, currentSearchQuery);
  });
}

// ===== 搜索执行函数（供 main.js 调用）=====
function performSearch(query) {
  currentSearchQuery = query;
  renderArticles(currentCategory, currentSearchQuery);
}

// 初始化
document.addEventListener("DOMContentLoaded", () => {
  renderCategories();
  renderArticles();
});
