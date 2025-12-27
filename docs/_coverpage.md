# free2dev

> **“ work for liberal knowledge ”**

[start](README.md)

<style>
  /* 背景設置 */
  section.cover {
    background: 
      linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), 
      url('./assets/rainy-day-comfort.jpg') !important; /* 確保圖片路徑正確 */
    background-position: center !important;
    background-size: cover !important;
  }

  /* 1. 標題改為純白 + 放大 + 強陰影 */
  section.cover h1 {
    border-left: none !important;
    color: rgba(255, 255, 255, 1) !important; /* 強制純白 */
    font-size: 5rem !important;
    font-weight: 300 !important;
    text-shadow: 0 2px 15px rgba(0,0,0,0.8) !important;
  }

  /* 2. 標題：超大純白，清晰硬朗 */
  section.cover h1 {
    color: #ffffff !important;
    font-size: 6rem !important; /* 再次加大 */
    font-weight: 800 !important;
    text-shadow: 0 4px 15px rgba(0,0,0,0.8);
    margin: 0.5rem 0 !important;
    letter-spacing: -1px;
  }

  /* 3. 引用文字：小白註解風（縮小、半透明、無邊框） */
  section.cover blockquote {
    border-left: none !important;
    color: rgba(255, 255, 255, 0.7) !important; /* 調低透明度像註解 */
    font-size: 1.1rem !important; /* 縮小字號 */
    font-weight: 300 !important;
    font-style: normal !important;
    text-shadow: 0 2px 8px rgba(0,0,0,0.6);
    margin-bottom: 3rem !important;
  }

  /* 4. 按鈕：回歸默認經典款（無毛玻璃，透明背景，白邊框） */
  section.cover a {
    border: 1px solid #ffffff !important;
    color: #ffffff !important;
    background: transparent !important; /* 完全透明 */
    transition: all 0.3s ease;
    border-radius: 2px !important; /* 回歸硬朗方框 */
    padding: 12px 35px !important;
    font-size: 1.1rem !important;
    text-decoration: none !important;
  }

  section.cover a:hover {
    background: #ffffff !important; /* 懸停變白底黑字，經典反差 */
    color: #000000 !important;
    border-color: #ffffff !important;
  }

  /* 5. 隱藏不必要的元素 */
  section.cover .cover-main > p:last-child {
    display: none !important; /* 隱藏向下箭頭 */
  }
</style>
