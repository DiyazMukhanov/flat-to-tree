const flatToTree = (flatArr, id = null, link = 'parentId' ) =>
        flatArr
            .filter(item => item[link] === id)
            .map(item => ({...item, children: flatToTree(flatArr, item.id)})) // и item['parentId]' ребенка станет item.id то есть айдишником родителя




const flatArr = [
      { id: '1', name: 'name 1', parentId: null },
      { id: '2', name: 'name 2', parentId: null },
      { id: '2_1', name: 'name 2_1', parentId: '2' },
      { id: '2_2', name: 'name 2_2', parentId: '2' },
      { id: '3', name: 'name 3', parentId: null },
      { id: '4', name: 'name 4', parentId: null },
      { id: '5', name: 'name 5', parentId: null },
      { id: '6', name: 'name 6', parentId: null },
      { id: '7', name: 'name 7', parentId: null },
      { id: '1_1', name: 'name 1_1', parentId: '1' },
      { id: '1_2', name: 'name 1_2', parentId: '1' },
      { id: '1_3', name: 'name 1_3', parentId: '1' },
      { id: '1_4', name: 'name 1_4', parentId: '1' },
      { id: '1_5', name: 'name 1_5', parentId: '1' },
      { id: '2_1_1', name: 'name 2_1_1', parentId: '2_1' },
      { id: '2_1_2', name: 'name 2_1_2', parentId: '2_1' },
      { id: '2_1_3', name: 'name 2_1_3', parentId: '2_1' },
      { id: '2_1_4', name: 'name 2_1_4', parentId: '2_1' },
      { id: '2_1_5', name: 'name 2_1_5', parentId: '2_1' },
]


const treeArr = flatToTree(flatArr) 
console.log(treeArr)
