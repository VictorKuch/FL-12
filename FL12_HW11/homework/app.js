const structure = [{
    'folder': true,
    'title': 'Films',
    'children': [{
        'title': 'Iron Man.avi'
      },
      {
        'folder': true,
        'title': 'Fantasy',
        'children': [{
            'title': 'The Lord of the Rings.avi'
          },
          {
            'folder': true,
            'title': 'New folder 1',
            'children': false
          }
        ]
      }
    ]
  },
  {
    'folder': true,
    'title': 'Documents',
    'children': [{
      'folder': true,
      'title': 'EPAM Homework answers',
      'children': null
    }]
  }
];

const rootNode = document.getElementById('root');

function dom(domTree) {
  let container = document.createElement('ul');

  for (let i = 0; i < domTree.length; i++) {
    let li = document.createElement('li'),
        image = document.createElement('i'),
        text = document.createElement('div');

    li.classList.add('items');
    image.classList.add('material-icons');
    text.innerHTML = domTree[i].title;

    container.appendChild(li);
    li.appendChild(image);
    li.appendChild(text);

    if (domTree[i].folder) {
      let folderItems = document.createElement('div');
      folderItems.classList.add('folder_items', 'hide');
      container.appendChild(folderItems);

      image.innerHTML = 'folder';
      image.classList.add('folder-img');

      li.addEventListener('click', () => {
        if (image.innerHTML === 'folder') {
          image.innerHTML = 'folder_open';
          folderItems.classList.remove('hide');
        } else {
          image.innerHTML = 'folder';
          folderItems.classList.add('hide');
        }
      });

      if (domTree[i].children) {
        folderItems.appendChild(dom(domTree[i].children));
      } else {
        let div = document.createElement('div');
        div.innerHTML = 'Folder is empty';
        folderItems.appendChild(div);
      }
    } else {
      image.innerHTML = 'insert_drive_file';
      image.classList.add('file-img');
    }
  }

  return container;
}

rootNode.appendChild(dom(structure));