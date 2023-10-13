const exploredata = 
    {
      id: 1,
      name: "root",
      isFolder: true,
      items: [
        {
          id: 2,
          name: "Public",
          isFolder: true,
          items: [
            {
              id: 4,
              name: "publicnested1",
              items: [
                {
                  id: 11,
                  name: "index.html",
                  isFolder: false
                },
                {
                  id: 12,
                  name: "hello.html",
                  isFolder: false
                }
              ]
            },
            {
              id: 5,
              name: "publicnested2",
              isFolder: false
            }
          ]
        },
        {
          id: 7,
          name: "Src",
          isFolder: true,
          items: [
            { id: 8, name: "App.js", isFolder: false },
            { id: 9, name: "index.js", isFolder: false },
            {
              id: 10,
              name: "style.css",
              isFolder: false
            }
          ]
        },
        {
          id: 3,
          name: "Package.json",
          isFolder: false
        }
      ]
    }
  ;
  export default exploredata;
  