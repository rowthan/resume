
document.querySelectorAll('a[link^="http"]').forEach(link => {
    const testLink = link.getAttribute('link')
    if (testLink) {
        // 使用 no-cors 模式避免跨域请求拦截，只需要检测是否能访问，不需要获取内容
        fetch(testLink, {
            method: 'HEAD',
            mode: 'no-cors',
            cache: 'no-cache',
        }).then(() => {
            // no-cors 模式下，只要请求成功（没有网络错误）就认为链接可访问
            // 更换 a 标签的链接地址 todo 这里值得研究一下。！！！
            // link.href = testLink;
            link.setAttribute('href', testLink);
            link.removeAttribute('link');
        }).catch(error => {
            // 网络错误或链接不可访问时，不设置 href
            console.warn(`链接不可访问: ${testLink}`, error)
        })
    }
})