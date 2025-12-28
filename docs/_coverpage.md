# free2dev

> **“ work for liberal knowledge ”**

[start](README.md)

<style> 
  /* 1. 背景层：增加蒙版深度，确保文字不被图片背景干扰 */
  section.cover {
    background: 
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), 
    url('./assets/rainy-day-comfort.jpg') !important;
    background-position: center !important;
    background-size: cover !important;
    background-color: #000 !important; /* 图片加载前的底色 */
  }

  /* 2. 主标题：free2dev */
  .cover h1 a {
    color: #FFFFFF !important;
    font-size: 5.5rem !important; 
    font-weight: 900 !important;
    letter-spacing: -3px !important;
    margin: 10px 0 !important;
    text-decoration: none !important; /* 去掉可能的下划线 */
  }

  /* 3. 小字：blockquote 样式彻底重置 */
  .cover blockquote {
    color: rgba(255, 255, 255, 0.7) !important;
    font-size: 1.1rem !important;
    font-weight: 300 !important;
    border-left: none !important; /* 必须删掉左侧竖线 */
    margin: 0 !important;
    padding: 0 !important;
    letter-spacing: 1px !important;
    font-style: normal !important; /* 去掉默认斜体 */
  }

  /* 4. 按钮：纯白底黑字 */
  .cover-main p a.nav-link {
    background-color: #FFFFFF !important;
    color: #000000 !important;
    border: none !important; /* 强制去掉默认边框 */
    padding: 12px 35px !important;
    border-radius: 4px !important;
    font-size: 1.1rem !important;
    font-weight: 700 !important;
    text-decoration: none !important;
    transition: all 0.3s ease !important;
    display: inline-block; /* 确保间距生效 */
    margin-top: 30px !important;
  }

  /* 按钮悬停效果 */
  .cover-main p a.nav-link:hover {
    background-color: #e0e0e0 !important;
    color: #000000 !important;
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.3);
  }

  /* 针对 Docsify 渲染出的特殊处理：清除默认包裹按钮的样式 */
  .cover-main ul {
    display: none; /* 如果有默认导航列表则隐藏 */
  }

  @media (max-width: 600px) {
    .cover h1 a { font-size: 3rem !important; }
  }
</style>
