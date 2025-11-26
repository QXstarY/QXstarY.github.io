/* =============================================================================
   Xingyu Qian 个人学术主页配置文件 (Config File)
   
   使用说明：
   1. 请保留此文件为 "config.js"，并与 "index.html" 放在同一目录下。
   2. 修改以下变量中的内容，保存后刷新网页即可看到变化。
   3. 请注意保持 JavaScript 语法格式（引号、逗号等）。
   =============================================================================
*/

// === 1. 基础信息设置 ===
const emailConfig = { 
    user: "qianxingyu2025",           // 邮箱用户名 (例如: tom)
    domain: "ia.ac.cn"     // 邮箱域名 (例如: gmail.com)
};

// === 2. 语言与文本内容 (中英双语) ===
const translations = {
    en: {
        name: "Xingyu Qian",
        nav_home: "Home",
        nav_education: "Education",
        nav_experience: "Experience",
        nav_honors: "Honors & Awards",
        nav_publications: "Publications",
        nav_contact: "Contact",
        
        hero_role: "Master Student @ CASIA",
        hero_bio: "Currently a Master's student at the <strong>Institute of Automation, Chinese Academy of Sciences (CASIA)</strong>, studying in the <strong>3D Vision Group</strong> of the <strong>CAS Engineering Laboratory for Intelligent Industrial Vision</strong>. My research interests lie in <strong>3D Vision</strong>, <strong>Computer Vision</strong>, and <strong>SLAM</strong>.",
        
        section_education: "Education",
        section_experience: "Research Experience",
        section_honors: "Honors & Awards",
        section_publications: "Publications",
        section_contact: "Contact",
        
        location: "Haidian District, Beijing, China",
        
        coming_soon_title: "Research in Progress",
        coming_soon_desc: "Detailed publication list is coming soon.",
        
        supervisor_label: "Supervisor",
        lab_label: "Lab",

        lang_btn: "EN"
    },
    zh: {
        name: "钱星宇",
        nav_home: "首页",
        nav_education: "教育经历",
        nav_experience: "研究经历",
        nav_honors: "荣誉奖项",
        nav_publications: "论文成果",
        nav_contact: "联系方式",
        
        hero_role: "硕士研究生 @ 中国科学院自动化研究所",
        hero_bio: "目前是<strong>中国科学院自动化研究所 (CASIA)</strong> 的硕士研究生，在<strong>中国科学院智能工业视觉工程实验室</strong>的<strong>三维视觉组</strong>学习。我的研究兴趣包括 <strong>三维视觉</strong>、<strong>计算机视觉</strong> 和 <strong>SLAM</strong>。",
        
        section_education: "教育经历",
        section_experience: "研究经历",
        section_honors: "荣誉奖项",
        section_publications: "论文发表",
        section_contact: "联系我",
        
        location: "中国 北京市 海淀区",
        
        coming_soon_title: "研究进行中",
        coming_soon_desc: "论文列表即将更新。",
        
        supervisor_label: "导师",
        lab_label: "实验室",

        lang_btn: "中"
    }
};

// === 3. 研究方向 (Bento Grid) ===
// icon: 使用 FontAwesome 图标代码 (如 fa-cube, fa-eye)
const researchInterests = [
    { id: "3dv", icon: "fa-cube", en: "3D Vision", zh: "三维视觉" },
    { id: "cv", icon: "fa-eye", en: "Computer Vision", zh: "计算机视觉" },
    { id: "slam", icon: "fa-map-marked-alt", en: "SLAM", zh: "SLAM" },
    { id: "recon", icon: "fa-building", en: "3D Reconstruction", zh: "三维重建" }
];

// === 4. 教育经历 ===
// logos: 对应图片文件名
const educationData = [
    {
        year: "2025.9 - Present",
        school: { en: "Institute of Automation, Chinese Academy of Sciences (CASIA)", zh: "中国科学院自动化研究所" },
        degree: { en: "M.S. in Artificial Intelligence", zh: "人工智能 硕士" },
        // url: "http://www.ia.cas.cn/", // (已移除点击跳转，如需可重新启用)
        desc: {
            en: "Focus on 3D Vision.",
            zh: "研究方向：三维视觉。"
        },
        logos: [
            { src: "image/CASIA.png", href: "http://www.ia.cas.cn/" }, 
            { src: "image/UCAS.png", href: "https://www.ucas.ac.cn/" }
        ]
    },
    {
        year: "2021.9 - 2025.6",
        school: { en: "Central South University (CSU)", zh: "中南大学" },
        degree: { en: "B.E. in Automation", zh: "自动化 学士" },
        // url: "https://www.csu.edu.cn/",
        desc: {
            en: "GPA Rank: 1/247.",
            zh: "专业排名: 1/247."
        },
        logos: [
            { src: "image/CSU.png", href: "https://www.csu.edu.cn/" }
        ]
    }
];

// === 5. 研究经历 ===
const experienceData = [
    {
        year: "2025.2 - Present",
        role: { en: "Graduate Research Learning", zh: "研究生科研学习" },
        institution: { en: "Institute of Automation, CAS", zh: "中国科学院自动化研究所" }, 
        supervisor: { 
            en: "Assoc. Prof. Supervisor Hainan Cui", 
            zh: "崔海楠 副研究员", 
            url: "https://people.ucas.ac.cn/~cuihainan" // 导师主页链接，留空则不可点击
        },
        lab: { 
            en: "3D Vision Group @ CASIA", 
            zh: "三维视觉研究组", 
            url: "http://3dv.ac.cn" // 实验室链接
        },
        desc: {
            en: "Research on 3D reconstruction.",
            zh: "主要研究三维重建。"
        }
    },
    {
        year: "2023.10 - 2025.3",
        role: { en: "Undergraduate Research Intern", zh: "本科生科研实习" },
        institution: { en: "Central South University", zh: "中南大学" }, 
        supervisor: { 
            en: "Lecturer Supervisor Feifei Hou", 
            zh: "侯斐斐 讲师", 
            url: "https://faculty.csu.edu.cn/houfeifei" 
        },
        desc: {
            en: "Participated in the research of GPR image inversion based on Generative Adversarial Networks (GANs).",
            zh: "参与研究基于生成对抗网络的GPR图像反演课题。"
        }
    }
];

// === 6. 荣誉奖项 ===
const honorsData = [
    { name: { en: "National Scholarship", zh: "国家奖学金" }, year: ["2022","2023"] },
    { name: { en: "University-level Special Scholarship (Top 1%)", zh: "校级特等奖学金（前1%）" }, year: ["2022","2023"] },
    { name: { en: "Outstanding Graduate of Hunan Province", zh: "湖南省优秀毕业生" }, year: "2025" }
];

// === 7. 论文发表 (JSON 格式) ===
// 如果暂无论文，保持数组为空 []
const publicationsData = [
    {
        title: "Multi-scale GAN-driven GPR data inversion for monitoring urban road substructure",
        authors: { 
            en: "Feifei Hou, <b>Xingyu Qian</b>, Qiwen Meng, Jian Dong, Fei Lyu", 
            zh: "Feifei Hou, <b>Xingyu Qian</b>, Qiwen Meng, Jian Dong, Fei Lyu" 
        },
        venue: { 
            en: "Automation in Construction, 2025", 
            zh: "Automation in Construction, 2025" 
        },
        link: "https://www.sciencedirect.com/science/article/abs/pii/S0926580525001803",
        code: "", // 如果有代码链接，请填入，例如 "https://github.com/..."
        // ▼▼▼ 在这里添加图片路径 (如果没有图片，可以删掉这行) ▼▼▼
        image: "image/pub1.png" // 这是一个占位图，请替换为您真实的图片路径
        // 例如: image: "images/paper_teaser.png"
    }
];