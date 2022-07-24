const treeArr: any = (items: TocItem[], uuid = null, link = 'parentUuid' ) =>
        items
            .filter(item => item[link] === uuid)
            .map(item => ({...item, children: treeArr(items, item.uuid)}))