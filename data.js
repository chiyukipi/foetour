var APP_DATA = {
  "scenes": [
    {
      "id": "0-along-engineering-drive-1",
      "name": "Along Engineering Drive 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.35243137790407886,
        "pitch": 0.009404452530974439,
        "fov": 1.510284771193917
      },
      "linkHotspots": [
        {
          "yaw": 0.16129617190980738,
          "pitch": -0.20851765558798263,
          "rotation": 25.918139392115812,
          "target": "1-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.8417524599950585,
          "pitch": 0.12877123223181286,
          "title": "Welcome to the Faculty of Engineering",
          "text": "This is where engineers are made!"
        }
      ]
    },
    {
      "id": "1-engineering-auditorium",
      "name": "Engineering Auditorium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.013990268692923635,
        "pitch": -0.14236290876007196,
        "fov": 1.510284771193917
      },
      "linkHotspots": [
        {
          "yaw": 0.0971033440529201,
          "pitch": 0.061961169511016934,
          "rotation": 0,
          "target": "2-engineering-auditorium-atrium"
        },
        {
          "yaw": -1.779938799401366,
          "pitch": -0.1054812559256888,
          "rotation": 3.9269908169872414,
          "target": "0-along-engineering-drive-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.224044886303572,
          "pitch": 0.006443920603850017,
          "title": "Striving",
          "text": "This is a public art sculpture"
        }
      ]
    },
    {
      "id": "2-engineering-auditorium-atrium",
      "name": "Engineering Auditorium Atrium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -1.1176684881732086,
        "pitch": 0.06808271418193357,
        "fov": 1.510284771193917
      },
      "linkHotspots": [
        {
          "yaw": -3.091793490429385,
          "pitch": -0.02671385127115755,
          "rotation": 10.210176124166829,
          "target": "1-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.1850493628371677,
          "pitch": -0.2718494047537483,
          "title": "Where be Spinelli?",
          "text": "This cafe has been replaced. :("
        },
        {
          "yaw": 0.849857977694807,
          "pitch": -0.2051665647153964,
          "title": "Place to study",
          "text": "Air-conditioned!"
        }
      ]
    }
  ],
  "name": "Faculty of Engineering",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
