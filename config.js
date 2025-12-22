// ==========================================
// 个人学术主页配置文件
// 修改此处内容即可实时更新主页信息
// ==========================================
const config = {
    // --- 个人基本信息 ---
    profile: {
        name: "Qian Xingyu",
        role: "Master Student @ CASIA",
        // 支持 HTML 标签，如 <br> 换行，<strong> 加粗
        bio: "Currently a Master's student at the <strong>Institute of Automation, Chinese Academy of Sciences (CASIA)</strong>, studying in the <strong>3D Vision Group</strong> of the CAS Engineering Laboratory for Intelligent Industrial Vision.<br><br>Research interests: <strong>3D Vision</strong>, <strong>Computer Vision</strong>, and <strong>SLAM</strong>.",
        avatar: "image/headimg.PNG", // 头像链接
        email: "qianxingyu2025@ia.ac.cn",
        location: "Haidian District, Beijing, China",
        social: [
            { 
                name: "Email", 
                icon: "fa-solid fa-envelope", 
                link: "mailto:qianxingyu2025@ia.ac.cn", 
                style: "bg-white text-black hover:bg-gray-200" 
            },
            { 
                name: "GitHub", 
                icon: "fa-brands fa-github", 
                link: "https://github.com/QXstarY", 
                style: "bg-[#333] text-white hover:bg-[#444]" 
            },
            { 
                name: "Scholar", 
                icon: "fa-solid fa-graduation-cap", 
                link: "https://scholar.google.com/citations?user=abnQoAQAAAAJ", 
                style: "bg-[#4285F4] text-white hover:bg-[#5295ff]" 
            }
        ]
    },

    // --- 顶部 Hero 区域 ---
    hero: {
        title: "Hi, I'm Qian Xingyu.",
        subtitle: "Welcome to My Page.",
        desc: "Master Student at CASIA. Specializing in 3D Vision, Computer Vision, and SLAM.",
        status: "Open to Collaboration"
    },

    // --- 教育经历 ---
    education: [
        {
            logos: [
                { src: "image/CASIA.png", link: "http://www.ia.cas.cn/", alt: "CASIA" },
                { src: "image/UCAS.png", link: "https://www.ucas.ac.cn/", alt: "UCAS" }
            ],
            time: "2025.9 - Present",
            school: "Institute of Automation, Chinese Academy of Sciences (CASIA)",
            degree: "M.S. in Artificial Intelligence",
            desc: "Focus on 3D Vision."
        },
        {
            logos: [
                { src: "image/CSU.png", link: "https://www.csu.edu.cn/", alt: "CSU" }
            ],
            time: "2021.9 - 2025.6",
            school: "Central South University (CSU)",
            degree: "B.E. in Automation",
            desc: "GPA Rank: 1/247."
        }
    ],

    // --- 研究经历 ---
    research: [
        {
            title: "Graduate Research Learning",
            institution: "Institute of Automation, CAS",
            time: "2025.2 - Present",
            desc: "Research on 3D reconstruction.",
            tags: [
                // 如无具体链接，link 可留空或填 #
                { icon: "fa-solid fa-user", text: "Supervisor: Assoc. Prof. Hainan Cui", link: "https://people.ucas.ac.cn/~cuihainan" }, 
                { icon: "fa-solid fa-flask", text: "Lab: 3D Vision Group @ CASIA", link: "http://3dv.ac.cn/" }
            ]
        },
        {
            title: "Undergraduate Research Intern",
            institution: "Central South University",
            time: "2023.10 - 2025.3",
            desc: "Participated in the research of GPR image inversion based on Generative Adversarial Networks (GANs).",
            tags: [
                { icon: "fa-solid fa-user", text: "Supervisor: Lecturer Feifei Hou", link: "https://faculty.csu.edu.cn/houfeifei" }
            ]
        }
    ],

    // --- 论文发表 ---
    publications: [
        {
            type: "In Progress",
            typeClass: "tag-blue", // 标签颜色样式
            title: "Latest Research Progress",
            authors: "<strong>Qian Xingyu</strong>, et al.",
            venue: "Updating in progress. Stay tuned...",
            abstract: "More details will be updated soon as the project progresses.",
            keywords: ["3D Vision", "Line Mapping"],
            isLink: false, // 是否包含可跳转链接
            url: "#",
            image: "https://via.placeholder.com/340x224?text=Coming+Soon", // 占位图
            imageMode: "abstract" // 'abstract' (显示动态几何图形) 或 'image' (显示具体图片)
        },
        {
            type: "Conference Paper",
            typeClass: "tag-purple",
            title: "RaftNR-SLAM: A Non-Rigid SLAM System Based on RAFT Optical Flow Estimation",
            authors: "<strong>Xingyu Qian</strong>, Hainan Cui, Shuhan Shen",
            venue: "The IEEE International Conference on Ubiquitous Positioning, Indoor Navigation and Location-Based Services, <strong>UPINLBS</strong> 2025",
            abstract: "Monocular deformable visual simultaneous localization and mapping (V-SLAM) is increasingly used in minimally invasive surgery (MIS) endoscopic systems to provide dense 3D reconstruction and robust camera tracking for navigation and intra-operative guidance. However, in complex dynamic endoscopic scenes with strong soft-tissue deformation, weak textures, and specular highlights, conventional methods that rely on traditional sparse optical flow often yield unreliable correspondences, leading to tracking failures and degraded reconstruction accuracy. To address these challenges, RaftNR-SLAM is proposed as a non-rigid monocular V-SLAM framework that integrates deep-learning-based RAFT optical flow for short-term data association and introduces an adaptive thresholding strategy, driven by the motion patterns of map points, to manage the dynamic deformation graph. These designs provide more robust and accurate correspondence information and enable more coherent regularization between map points, thereby stabilizing tracking in highly dynamic, non-rigid environments. Experiments on multiple medical datasets show that RaftNR-SLAM consistently outperforms existing monocular deformable V-SLAM systems in both reconstruction accuracy and tracking stability, indicating its potential for advancing medical automation and image-guided interventions.",
            keywords: ["SLAM", "3D Deformable Reconstruction", "Non-Rigid System"],
            isLink: false,
            url: "#",
            image: "image/pub2.png", // 请替换为实际论文图片链接
            imageMode: "image"
        },
        {
            type: "Journal Paper",
            typeClass: "tag-orange",
            title: "Multi-scale GAN-driven GPR data inversion for monitoring urban road substructure",
            authors: "Feifei Hou, <strong>Xingyu Qian</strong>, Qiwen Meng, Jian Dong, Fei Lyu",
            venue: "<strong>Automation in Construction</strong>, 2025",
            abstract: "Accurate monitoring and visualization of urban road substructure and targets are impeded by challenges in inverting Ground Penetrating Radar (GPR) data, especially under multiple inversion objectives and complex road conditions. To address this challenge, a deep learning-based multi-scale inversion approach, termed MSInv-GPR, is proposed, which builds on the Pix2pix Generative Adversarial Network (Pix2pixGAN) framework. This approach introduces dual-channel inputs to improve inversion accuracy, integrates a multi-scale convolution module along with an Efficient Multi-scale Attention (EMA) module to better capture characteristic waveforms, and incorporates a loss function strategy to strengthen adversarial training and accelerate convergence. Ablation studies validate that MSInv-GPR achieves Structural Similarity Index (SSIM) of 99.75 %, Peak Signal-to-Noise Ratio (PSNR) of 47.9014, and Mean Squared Error (MSE) of 12.5825 for 8-bit images, with 51.69 % improvement in Power Supply Modulation Ratio (PSMR) and an increase in discriminator loss from 0.1132 to 1.1603 compared to a baseline.",
            keywords: ["GAN", "GPR Inversion", "Urban Monitoring"],
            isLink: true,
            url: "https://www.sciencedirect.com/science/article/abs/pii/S0926580525001803",
            image: "image/pub1.png", // 请替换为实际论文图片链接
            imageMode: "image"
        }
    ],

    // --- 荣誉奖项 ---
    honors: [
        {
            icon: "fa-solid fa-award",
            iconColor: "text-yellow-500",
            title: "National Scholarship",
            issuer: "Ministry of Education, China",
            tags: [
                { text: "2023", class: "bg-yellow-500/20 text-yellow-300" },
                { text: "2022", class: "bg-yellow-500/20 text-yellow-300" }
            ]
        },
        {
            icon: "fa-solid fa-star",
            iconColor: "text-yellow-500",
            title: "University-level Special Scholarship",
            issuer: "Top 1%",
            tags: [
                { text: "2023", class: "bg-white/10 text-gray-300" },
                { text: "2022", class: "bg-white/10 text-gray-300" }
            ]
        },
        {
            icon: "fa-solid fa-medal",
            iconColor: "text-yellow-500",
            title: "Outstanding Graduate",
            issuer: "Hunan Province",
            tags: [
                { text: "2025", class: "bg-blue-500/20 text-blue-300" }
            ]
        }
    ]
};
