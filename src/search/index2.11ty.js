class SearchIndex {
    data() {
        return {
            permalink: "/search/index2.json"
        };
    }

    render(data) {
        let index = [];

        data.collections.pages.forEach(function (page) {
            index.push({
                url: page.url,
                content: page.templateContent
            });
        });

        return JSON.stringify(index);
    }
}

module.exports = SearchIndex;
