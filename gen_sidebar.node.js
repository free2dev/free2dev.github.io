const fs = require('fs');
const path = require('path');

// 这里的目录改为 docs
const DOCS_DIR = path.join(__dirname, 'docs');
const IGNORE = ['_sidebar.md', '_navbar.md', 'README.md', '_coverpage.md'];

function generateSidebar(dir, space = '') {
    let content = '';
    if (!fs.existsSync(dir)) return '';
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        if (IGNORE.includes(file) || file.startsWith('.')) return;
        
        const filePath = path.join(dir, file);
        const stats = fs.statSync(filePath);

        if (stats.isDirectory()) {
            content += `${space}* **${file}**\n`;
            content += generateSidebar(filePath, space + '  ');
        } else if (file.endsWith('.md')) {
            const name = file.replace('.md', '');
            // 生成相对于 docs 目录的路径
            const relativePath = path.relative(DOCS_DIR, filePath).replace(/\\/g, '/');
            content += `${space}* [${name}](${relativePath})\n`;
        }
    });
    return content;
}

const header = '* [home](README.md)\n\n';
const sidebar = header + generateSidebar(DOCS_DIR);
fs.writeFileSync(path.join(DOCS_DIR, '_sidebar.md'), sidebar);
console.log('✅ Sidebar generated in /docs successfully!');
