
  let arr =[  "name": {
    "common": "Turks and Caicos Islands",
    "official": "Turks and Caicos Islands",
    "nativeName": {
    "eng": {
    "official": "Turks and Caicos Islands",
    "common": "Turks and Caicos Islands"
    }
    }
    },
    "tld": [
    ".tc"
    ]
]

for(let i = 0; i < json.length; i++) {
    let obj = json[i];

    console.log(obj.name)

    let arr =[  "name": {
        "common": "Turks and Caicos Islands",
        "official": "Turks and Caicos Islands",
        "nativeName": {
        "eng": {
        "official": "Turks and Caicos Islands",
        "common": "Turks and Caicos Islands"
        }
        }
        },
        "tld": [
        ".tc"
        ]
    ]

    for (var key in data) {
        if (data.hasOwnProperty(key)) {
           console.log(data[key].id)
        }
     }

 let arr =[  "name": {
        "common": "Turks and Caicos Islands",
        "official": "Turks and Caicos Islands",
        "nativeName": {
        "eng": {
        "official": "Turks and Caicos Islands",
        "common": "Turks and Caicos Islands"
        }
        }
        },
        "tld": [
        ".tc"
        ]
    ]

    
    for (var key of data) {
        if (data.hasOwnProperty(key)) {
           console.log(data[key].id)
        }
     }

    
     let arr =[  "name": {
        "common": "Turks and Caicos Islands",
        "official": "Turks and Caicos Islands",
        "nativeName": {
        "eng": {
        "official": "Turks and Caicos Islands",
        "common": "Turks and Caicos Islands"
        }
        }
        },
        "tld": [
        ".tc"
        ]
    ]

    json.forEach((item) => {
        console.log('name: ' + item.name)
        console.log('common: ' + item.coomon)
        console.log('NativeName: ' + item.NativeName)
        console.log('tid: ' + item.tid)
      })