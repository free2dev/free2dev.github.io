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
    margin-bottom: 2.5rem !important;
  }

  /* 2. 引用文字改為純白（略帶透明感增加層次） */
  section.cover blockquote {
    border-left: none !important;
    color: rgba(255, 255, 255, 1) !important; /* 強制純白 */
    font-size: 1rem !important;
    font-weight: 300 !important;
    text-shadow: 0 2px 15px rgba(0,0,0,0.8) !important;
    margin-bottom: 2.5rem !important;
  }

  /* 3. 按鈕文字改為純白 + 毛玻璃 */
  section.cover a {
    border: 1px solid rgba(255, 255, 255, 0.8) !important; /* 白色邊框 */
    color: #ffffff !important; /* 按鈕文字白色 */
    background: rgba(255, 255, 255, 0.15) !important;
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    transition: all 0.3s ease;
    border-radius: 8px !important;
    padding: 14px 40px !important;
    font-size: 2rem !important;
    text-decoration: none !important;
  }

  /* 懸停時按鈕變為主題綠，文字維持白色 */
  section.cover a:hover {
    background: #42b983 !important;
    border-color: #42b983 !important;
    color: #ffffff !important;
    box-shadow: 0 0 25px rgba(66, 185, 131, 0.6);
    backdrop-filter: none;
  }

  /* 移除向下箭頭 */
  section.cover .cover-main > p:last-child {
    display: none !important;
  }
</style>
