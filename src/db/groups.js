import { tool } from "../enums/tools";
import { client } from "../enums/clients";
import { getZapp, getNewID } from "../modules/helpers";

const groups = [
  {
    date: "2004/09/20",
    disabled: false,
    image: getZapp("img/preview/wide/itesa.jpg"),
    client: client.itesa,
    group: true,
    location: true,
    tools: [
      tool.html,
      tool.css,
      tool.javascript,
      tool.flash,
      tool.fireworks,
      tool.dreamweaver,
      tool.pascal,
      tool.c,
      tool.vb,
      tool.vfoxpro,
      tool.bash,
      tool.linux,
      tool.excel,
      tool.word,
      tool.powerpoint,
      tool.as2,
    ],
    children: [
      getNewID(client.itesa, "2005/09/28"),
      getNewID(client.itesa, "2005/10/01"),
      getNewID(client.itesa, "2005/10/02"),
      getNewID(client.itesa, "2005/10/03"),
      getNewID(client.itesa, "2005/10/04"),
      getNewID(client.itesa, "2005/10/05"),
      getNewID(client.itesa, "2006/01/05"),
      getNewID(client.itesa, "2007/09/04"),
      getNewID(client.itesa, "2008/05/16"),
      getNewID(client.itesa, "2008/05/17"),
      getNewID(client.itesa, "2008/05/18"),
      getNewID(client.itesa, "2008/11/11"),
      getNewID(client.itesa, "2008/12/05"),
    ],
    description: 'canvas.section.map.modal.itla.position',
    list: 'canvas.section.map.modal.itesa.summary',
    position: {
      x: -2269,
      y: -671,
    },
  },
  {
    date: "2015/05/13",
    group: true,
    disabled: true,
    client: client.codepen,
    tools: [
      tool.html,
      tool.slim,
      tool.haml,
      tool.pug,
      tool.css,
      tool.scss,
      tool.javascript,
      tool.jQuery,
      tool.vue,
      tool.three,
      tool.tweenMax,
    ],
    children: [
      getNewID(client.miguelRivas, "2015/05/14"),
      getNewID(client.miguelRivas, "2015/05/23"),
      getNewID(client.miguelRivas, "2015/05/25"),
      getNewID(client.miguelRivas, "2015/05/28"),
      getNewID(client.miguelRivas, "2017/02/20"),
      getNewID(client.miguelRivas, "2021/02/27"),
    ],
  },
  {
    date: "2009/09/01",
    image: getZapp("img/preview/wide/itla.jpg"),
    disabled: false,
    description: 'canvas.section.map.modal.itla.position',
    list: 'canvas.section.map.modal.itla.summary',
    position: {
      x: -2511,
      y: -806,
    },
    group: true,
    location: true,
    client: client.itla,
    tools: [
      tool.html,
      tool.css,
      tool.javascript,
      tool.php,
      tool.flash,
      tool.premiere,
      tool.afterEffects,
      tool.maya,
      tool.indesign,
      tool.inkscape,
      tool.illustrator,
      tool.photoshop,
      tool.fireworks,
      tool.dreamweaver,
      tool.as3,
    ],
    children: [
      getNewID(client.itla, "2010/07/07"),
      getNewID(client.itla, "2011/06/22"),
      getNewID(client.itla, "2011/02/22"),
      getNewID(client.itla, "2011/04/24"),
      getNewID(client.itla, "2011/04/25"),
      getNewID(client.itla, "2011/07/06"),
      getNewID(client.itla, "2011/07/25"),
      getNewID(client.itla, "2011/07/31"),
      getNewID(client.itla, "2011/08/03"),
      getNewID(client.itla, "2011/11/15"),
      getNewID(client.itla, "2011/11/18"),
      getNewID(client.itla, "2011/12/05"),
      getNewID(client.itla, "2012/04/16"),
      getNewID(client.itla, "2012/06/25"),
      getNewID(client.itla, "2012/07/24"),
      getNewID(client.itla, "2012/09/13"),
      getNewID(client.itla, "2012/10/12"),
      getNewID(client.itla, "2012/11/26"),
      getNewID(client.itla, "2013/03/21"),
    ],
  },
  {
    date: "2013/01/01",
    disabled: true,
    description: 'canvas.section.map.modal.several.position',
    location: true,
    tools: [
      tool.illustrator,
      tool.photoshop,
      tool.indesign,
    ],
    client: client.studioSeveral,
    list: 'canvas.section.map.modal.several.summary',
    position: {
      x: -1945,
      y: -1000,
    },
  },
  {
    date: "2013/05/01",
    image: getZapp("img/preview/wide/social-network.jpg"),
    disabled: false,
    description: 'canvas.section.map.modal.social.position',
    list: 'canvas.section.map.modal.social.summary',
    position: {
      x: -1945,
      y: -1000,
    },
    group: true,
    location: true,
    client: client.socialNetwork,
    tools: [
      tool.illustrator,
      tool.photoshop,
      tool.indesign,
    ],
    children: [
      getNewID(client.socialNetwork, "2013/08/03"),
      getNewID(client.tiempoExtra, "2013/07/06"),
      getNewID(client.homeGallery, "2013/07/05"),
      getNewID(client.sdq, "2013/07/05"),
      getNewID(client.harinaBlanquita, "2013/06/27"),
      getNewID(client.highschool, "2013/06/18"),
    ],
  },
  {
    date: "2014/06/01",
    image: getZapp("img/preview/wide/presidente.jpg"),
    disabled: false,
    group: true,
    client: client.presidente,
    tools: [
      tool.html,
      tool.css,
      tool.scss,
      tool.jQuery,
      tool.flash,
      tool.grunt,
      tool.php,
    ],
    children: [
      getNewID(client.presidente, "2014/06/02"),
      getNewID(client.presidente, "2014/06/16"),
      getNewID(client.presidente, "2014/10/18"),
      getNewID(client.presidente, "2014/11/05"),
      getNewID(client.presidente, "2015/03/30"),
      getNewID(client.presidente, "2015/04/18"),
      getNewID(client.presidente, "2015/10/23"),
      getNewID(client.presidente, "2015/12/16"),
    ],
  },
  {
    date: "2014/05/01",
    image: getZapp("img/preview/wide/capital.jpg"),
    disabled: false,
    description: 'canvas.section.map.modal.capital.position',
    list: 'canvas.section.map.modal.capital.summary',
    position: {
      x: -1380,
      y: -856,
    },
    group: true,
    location: true,
    client: client.capitalDBG,
    tools: [
      tool.html,
      tool.css,
      tool.pug,
      tool.scss,
      tool.grunt,
      tool.jQuery,
      tool.illustrator,
      tool.photoshop,
      tool.flash,
    ],
    children: [
      getNewID(client.presidente, "2014/06/02"),
      getNewID(client.presidente, "2014/06/16"),
      getNewID(client.presidente, "2015/04/18"),
      getNewID(client.capitalDBG, "2014/08/06"),
      getNewID(client.presidente, "2014/10/18"),
      getNewID(client.presidente, "2014/11/05"),
      getNewID(client.pepsi, "2015/03/24"),
      getNewID(client.presidente, "2015/03/30"),
      getNewID(client.redRock, "2015/05/20"),
      getNewID(client.orange, "2015/05/27"),
      getNewID(client.capitalDBG, "2015/08/03"),
      getNewID(client.presidente, "2015/10/23"),
      getNewID(client.apap, "2015/11/12"),
      getNewID(client.presidente, "2015/12/16"),
    ],
  },
  {
    date: "2016/01/01",
    image: getZapp("img/preview/wide/pixel.jpg"),
    disabled: false,
    description: 'canvas.section.map.modal.pixel.position',
    list: 'canvas.section.map.modal.pixel.summary',
    position: {
      x: -804,
      y: -1097,
    },
    group: true,
    location: true,
    client: client.pixelPerfectTree,
    tools: [
      tool.haml,
      tool.scss,
      tool.react,
      tool.jQuery,
      tool.illustrator,
      tool.photoshop,
      tool.rails,
      tool.bootstrap,
      tool.git,
    ],
    children: [
      getNewID(client.pixelPerfectTree, "2015/10/28"),
      getNewID(client.pixelPerfectTree, "2016/01/29"),
      getNewID(client.bprBank, "2016/02/18"),
      getNewID(client.pixelPerfectTree, "2016/06/16"),
      getNewID(client.voxel, "2016/06/24"),
      getNewID(client.voxel, "2016/06/30"),
      getNewID(client.drLogic, "2016/02/22"),
    ],
  },
  {
    date: "2013/07/15",
    image: getZapp("img/preview/wide/avante.jpg"),
    disabled: false,
    description: 'canvas.section.map.modal.avante.position',
    list: 'canvas.section.map.modal.avante.summary',
    position: {
      x: -1501,
      y: -1170,
    },
    group: true,
    location: true,
    client: client.avante,
    tools: [
      tool.php,
      tool.wordpress,
      tool.html,
      tool.css,
      tool.javascript,
      tool.jQuery,
      tool.illustrator,
      tool.photoshop,
    ],
    children: [
      getNewID(client.descubria, "2013/12/03"),
      getNewID(client.delJardin, "2013/12/06"),
      getNewID(client.descubria, "2014/01/14"),
    ],
  },
  {
    date: "2017/07/01",
    image: getZapp("img/preview/wide/plant-therapy.jpg"),
    disabled: false,
    description: 'canvas.section.map.modal.plantTherapy.position',
    list: 'canvas.section.map.modal.plantTherapy.summary',
    position: {
      x: -1230,
      y: -515,
    },
    group: true,
    location: true,
    client: client.plantTherapy,
    tools: [
      tool.php,
      tool.miva,
      tool.html,
      tool.css,
      tool.javascript,
      tool.jQuery,
      tool.illustrator,
      tool.photoshop,
    ],
    children: [
      getNewID(client.plantTherapy, "2017/08/04"),
      getNewID(client.plantTherapy, "2017/09/20"),
      getNewID(client.plantTherapy, "2017/12/01"),

    ],
  },
  // {
  //   date: "2021/03/29",

  //   disabled: false,
  //   description: 'canvas.section.map.modal.jellyfisposition',
  //   list: 'canvas.section.map.modal.jellyfissummary',
  //   position: {
  //     x: 0,
  //     y: 0,
  //   },
  //   group: true
  // location: true,
  //   client: client.jellyfish,
  //   tools: [
  //     tool.php,
  //     tool.wordpress,
  //     tool.html,
  //     tool.scss,
  //     tool.git,
  //     tool.grunt,
  //     tool.javascript,
  //     tool.jQuery,
  //   ],
  //   children: [
  //     getNewID(client.jellyfish, "2021/06/21"),
  //   ],
  // },
  {
    date: "2018/04/01",
    image: getZapp("img/preview/wide/enovational.jpg"),
    disabled: false,
    description: 'canvas.section.map.modal.enovational.position',
    list: 'canvas.section.map.modal.enovational.summary',
    position: {
      x: -2368,
      y: -299,
    },
    group: true,
    location: true,
    client: client.enovational,
    tools: [
      tool.html,
      tool.vue,
      tool.vueRouter,
      tool.vuex,
      tool.scss,
      tool.slim,
      tool.git,
      tool.rails,
      tool.bootstrap,
      tool.jQuery,
      tool.three,
      tool.svg,
      tool.illustrator,
      tool.photoshop,
      tool.tweenMax,
    ],
    children: [
      getNewID(client.enovational, "2018/05/01"),
      getNewID(client.enovational, "2018/06/25"),
      getNewID(client.enovational, "2018/09/04"),
      getNewID(client.enovational, "2019/01/01"),
    ],
  },
];

export { groups as groupsDB };