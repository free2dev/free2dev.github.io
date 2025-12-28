# free2dev

> **“ work for liberal knowledge ”**

[start](README.md)

<style> 
  /* 1. 背景层：强制覆盖并增加蒙版 */
  section.cover {
    background: 
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), 
    url('./assets/rainy-day-comfort.jpg') no-repeat center center !important;
    background-size: cover !important;
    display: flex !important;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  /* 2. 主标题修正：Docsify 的 h1 内部通常包含 a 标签 */
  section.cover h1, 
  section.cover h1 a {
    color: #FFFFFF !important;
    font-size: 5.5rem !important; /* 强制大字 */
    font-weight: 900 !important;
    letter-spacing: -3px !important;
    text-decoration: none !important;
    margin: 20px 0 !important;
    border: none !important;
  }

  /* 3. 小字（副标题） */
  section.cover blockquote {
    color: rgba(255, 255, 255, 0.8) !important;
    font-size: 1.2rem !important;
    border-left: none !important; /* 移除侧边线 */
    font-style: normal !important;
    margin: 0 0 40px 0 !important;
    padding: 0 !important;
  }

  /* 4. 按钮：白底黑字的关键修正 */
  /* Docsify 的按钮通常包裹在 p 标签里，我们需要精准定位 */
  section.cover .cover-main p a[href*="README.md"],
  section.cover a.nav-link {
    background-color: #FFFFFF !important;
    color: #000000 !important;
    padding: 14px 40px !important;
    border-radius: 4px !important;
    font-weight: 700 !important;
    font-size: 1.1rem !important;
    text-decoration: none !important;
    border: 1px solid #FFFFFF !important; /* 防止背景色失效 */
    transition: all 0.3s ease !important;
    display: inline-block !important;
  }

  /* 按钮悬停效果 */
  section.cover a.nav-link:hover {
    background-color: rgba(255, 255, 255, 0.9) !important;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.4);
  }

  /* 移除 Docsify 默认给 a 标签加的下划线和边框 */
  section.cover a {
    border: none !important;
  }
  
  @media (max-width: 600px) {
    section.cover h1, section.cover h1 a { font-size: 3rem !important; }
  }
</style>
