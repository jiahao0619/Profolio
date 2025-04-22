// 移除URL中的index.html
function removeIndexHtml() {
    // 检查URL是否直接包含index.html
    if (window.location.pathname.endsWith('/index.html')) {
        // 构建新的URL，去掉index.html
        var pathWithoutIndex = window.location.pathname.slice(0, -10); // 移除"/index.html"
        var newUrl = window.location.protocol + '//' + window.location.host + 
                     pathWithoutIndex + window.location.search + window.location.hash;
        
        // 使用replaceState修改URL而不刷新页面
        try {
            window.history.replaceState({}, document.title, newUrl);
        } catch (e) {
            // 如果replaceState失败，直接重定向
            window.location.replace(newUrl);
        }
    }
}

// 当页面加载时执行
window.addEventListener('load', removeIndexHtml);

// 当从历史记录导航时也执行
window.addEventListener('popstate', removeIndexHtml); 