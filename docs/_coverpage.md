# free2dev

> **“ work for liberal knowledge ”**

[start](README.md)

<style> 
  section.cover {
    background: 
    linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)), 
    /* 使用相對路徑引入你倉庫裏的圖片 */
    url('./assets/rainy-day-comfort.jpg') !important;
    background-position: center !important;
    background-size: cover !important;
    }

  .cover h1 a {
    color: #FFFFFF !important;
    font-size: 5.5rem !important; /* 极大字号 */
    font-weight: 900 !important;   /* 最粗字重 */
    letter-spacing: -3px !important; /* 紧凑间距更有视觉张力 */
    margin: 10px 0 !important;
    display: block;
    text-rendering: optimizeLegibility;
  }

  /* 3. 小字（副标题）：白而小 */
  .cover blockquote {
    color: rgba(255, 255, 255, 0.65) !important; /* 降低亮度，拉开层级 */
    font-size: 1.1rem !important;
    font-weight: 300 !important;  /* 极细，与大标题形成对比 */
    border-left: none !important; /* 移除 Docsify 默认引用线 */
    letter-spacing: 2px !important; /* 拉开间距，增加呼吸感 */
    margin-bottom: 2.5rem !important;
    text-transform: uppercase;   /* 可选：全大写更具设计感 */
  }

/* 4. 按钮：白底黑字 */
  .cover a.nav-link {
    background-color: #FFFFFF !important;
    color: #000000 !important;   /* 反色文字 */
    border: none !important;
    padding: 16px 45px !important;
    border-radius: 4px !important; /* 极简小圆角 */
    font-size: 1rem !important;
    font-weight: 700 !important;
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1) !important;
    box-shadow: 0 4px 20px rgba(255, 255, 255, 0.1); /* 微弱的白色光晕 */
  }

  /* 按钮悬停动画 */
  .cover a.nav-link:hover {
    background-color: #f0f0f0 !important;
    transform: scale(1.05);      /* 悬停轻微放大 */
    box-shadow: 0 6px 30px rgba(255, 255, 255, 0.2);
  }

/* 如果有第二个按钮（如 GitHub），设为镂空白框 */
  .cover a.nav-link:last-of-type {
    background-color: transparent !important;
    color: #FFFFFF !important;
    border: 1px solid rgba(255, 255, 255, 0.5) !important;
    margin-left: 15px;
  }
</style>
