![logo](https://docsify.js.org/_media/icon.svg)

# free2dev

> **“ work for liberal docs ”**

[开始阅读](#README)

<style>
  /* 1. 核心背景：纽约出租车街景 */
  section.cover {
    background: 
      linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), 
      url('http://googleusercontent.com/image_collection/image_retrieval/8545673591618893083_0') !important;
    background-position: center !important;
    background-size: cover !important;
  }

  /* 2. 移除自带的向下滚动箭头 */
  section.cover .cover-main > p:last-child {
    display: none !important;
  }

  /* 3. 标题：特大号、纯白色、无毛玻璃、增强阴影 */
  section.cover h1 {
    color: #ffffff !important;
    font-size: 5rem !important; /* 字号加大到 5rem */
    font-weight: 700 !important;
    text-shadow: 0 4px 20px rgba(0,0,0,0.8); /* 增强文字阴影确保清晰度 */
    margin: 1rem 0 !important;
    letter-spacing: -1px; /* 紧凑排版更有现代感 */
  }

  /* 4. 引用文字：调整对比度 */
  section.cover blockquote {
    border-left: none !important;
    color: rgba(255, 255, 255, 0.9) !important;
    font-size: 1.4rem !important;
    font-weight: 300 !important;
    text-shadow: 0 2px 10px rgba(0,0,0,0.7);
    margin-bottom: 2rem !important;
  }

  /* 5. 按钮：独享毛玻璃效果 */
  section.cover a {
    border: 1px solid rgba(255, 255, 255, 0.4) !important;
    color: #fff !important;
    background: rgba(255, 255, 255, 0.15) !important; /* 增加透明底色 */
    backdrop-filter: blur(10px); /* 仅在按钮上应用毛玻璃 */
    -webkit-backdrop-filter: blur(10px);
    transition: all 0.3s ease;
    border-radius: 6px !important;
    padding: 12px 35px !important;
    font-size: 1.1rem !important;
    text-decoration: none !important;
  }

  section.cover a:hover {
    background: #42b983 !important;
    border-color: #42b983 !important;
    box-shadow: 0 0 20px rgba(66, 185, 131, 0.5);
    backdrop-filter: none; /* 悬停时取消毛玻璃，增加交互感 */
  }

  /* 6. 移动端适配 */
  @media (max-width: 600px) {
    section.cover h1 {
      font-size: 3rem !important;
    }
  }
</style>
