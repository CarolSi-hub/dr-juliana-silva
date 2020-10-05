$('#feed').instahistory({
    get: '@drajulianadasilva',
    imageSize: 240,
    limit: 3,
    template: '<div class="col"><a href="{{link}}" type="_blank"><img src="{{image}}"><span class="info">❤️ {{likes}} 💬 {{comments}}</span></a></div>'
});
