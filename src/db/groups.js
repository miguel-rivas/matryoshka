import { tool, toolEnum } from "@/enums/tools";
import { client } from "@/enums/clients";
import { Group, Children, Position, Preview } from "@/classes/project";

const groups = [
  new Group(
    "2004/09/20",
    client.itesa,
    [
      toolEnum.html,
      toolEnum.css,
      toolEnum.javascript,
      toolEnum.flash,
      toolEnum.fireworks,
      toolEnum.dreamweaver,
      toolEnum.pascal,
      toolEnum.c,
      toolEnum.vb,
      toolEnum.vfoxpro,
      toolEnum.bash,
      toolEnum.linux,
      toolEnum.excel,
      toolEnum.word,
      toolEnum.powerpoint,
      toolEnum.as2,
    ],
    new Preview("itesa"),
    [
      new Children(client.itesa, "2005/09/28"),
      new Children(client.itesa, "2005/10/01"),
      new Children(client.itesa, "2005/10/02"),
      new Children(client.itesa, "2005/10/03"),
      new Children(client.itesa, "2005/10/04"),
      new Children(client.itesa, "2005/10/05"),
      new Children(client.itesa, "2006/01/05"),
      new Children(client.itesa, "2007/09/04"),
      new Children(client.itesa, "2008/05/16"),
      new Children(client.itesa, "2008/05/17"),
      new Children(client.itesa, "2008/05/18"),
      new Children(client.itesa, "2008/11/11"),
      new Children(client.itesa, "2008/12/05"),
    ],
    ["group", "location"],
    "Computer Science, Highschool",
    new Position(-2269, -671),
    [
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
  ),

  new Group(
    "2015/05/13",
    client.codepen,
    [
      toolEnum.html,
      toolEnum.slim,
      toolEnum.haml,
      toolEnum.pug,
      toolEnum.css,
      toolEnum.scss,
      toolEnum.javascript,
      toolEnum.jQuery,
      toolEnum.vue,
      toolEnum.three,
      toolEnum.tweenMax,
    ],
    undefined,
    [
      new Children(client.miguelRivas, "2015/05/14"),
      new Children(client.miguelRivas, "2015/05/23"),
      new Children(client.miguelRivas, "2015/05/25"),
      new Children(client.miguelRivas, "2015/05/28"),
      new Children(client.miguelRivas, "2017/02/20"),
      new Children(client.miguelRivas, "2021/02/27"),
    ],
    ["group", "no-listing"],
    undefined,
    undefined
  ),

  new Group(
    "2009/09/01",
    client.itla,
    [
      toolEnum.html,
      toolEnum.css,
      toolEnum.javascript,
      toolEnum.php,
      toolEnum.flash,
      toolEnum.premiere,
      toolEnum.afterEffects,
      toolEnum.maya,
      toolEnum.indesign,
      toolEnum.inkscape,
      toolEnum.illustrator,
      toolEnum.photoshop,
      toolEnum.fireworks,
      toolEnum.dreamweaver,
      toolEnum.as3,
    ],
    new Preview("itla"),
    [
      new Children(client.itla, "2010/07/07"),
      new Children(client.itla, "2011/06/22"),
      new Children(client.itla, "2011/02/22"),
      new Children(client.itla, "2011/04/24"),
      new Children(client.itla, "2011/04/25"),
      new Children(client.itla, "2011/07/06"),
      new Children(client.itla, "2011/07/25"),
      new Children(client.itla, "2011/07/31"),
      new Children(client.itla, "2011/08/03"),
      new Children(client.itla, "2011/11/15"),
      new Children(client.itla, "2011/11/18"),
      new Children(client.itla, "2011/12/05"),
      new Children(client.itla, "2012/04/16"),
      new Children(client.itla, "2012/06/25"),
      new Children(client.itla, "2012/07/24"),
      new Children(client.itla, "2012/09/13"),
      new Children(client.itla, "2012/10/12"),
      new Children(client.itla, "2012/11/26"),
      new Children(client.itla, "2013/03/21"),
    ],
    ["group", "location", "resume"],
    'Asociates of Art, Multimedia',
    new Position(-2511, -806),
    [
      "Digital Illustration",
      "Visual Communication",
      "Bitmap Graphics",
      "Vector Graphics",
      "Desktop Publishing",
      "Digital Video",
      "Website Creation",
      "Flash Animation with Action Script",
      "3D Graphics & Animation",
      "Digital Audio",
      "Branding",
    ]
  ),

  new Group(
    "2013/01/01",
    client.studioSeveral,
    [
      toolEnum.illustrator,
      toolEnum.photoshop,
      toolEnum.indesign,
    ],
    new Preview("social-network"),
    [
      new Children(client.itla, "2010/07/07"),
      new Children(client.itla, "2011/06/22"),
      new Children(client.itla, "2011/02/22"),
      new Children(client.itla, "2011/04/24"),
      new Children(client.itla, "2011/04/25"),
      new Children(client.itla, "2011/07/06"),
      new Children(client.itla, "2011/07/25"),
      new Children(client.itla, "2011/07/31"),
      new Children(client.itla, "2011/08/03"),
      new Children(client.itla, "2011/11/15"),
      new Children(client.itla, "2011/11/18"),
      new Children(client.itla, "2011/12/05"),
      new Children(client.itla, "2012/04/16"),
      new Children(client.itla, "2012/06/25"),
      new Children(client.itla, "2012/07/24"),
      new Children(client.itla, "2012/09/13"),
      new Children(client.itla, "2012/10/12"),
      new Children(client.itla, "2012/11/26"),
      new Children(client.itla, "2013/03/21"),
    ],
    ["group", "location", "no-listing"],
    "Graphic Designer",
    new Position(-1945, -1000),
    [
      `Retouch pictures with ${tool.photoshop}`,
      `Design yearbooks with ${tool.indesign} and ${tool.photoshop}`,
    ],
  ),

  new Group(
    "2013/05/01",
    client.socialNetwork,
    [
      toolEnum.illustrator,
      toolEnum.photoshop,
      toolEnum.indesign,
    ],
    new Preview("social-network"),
    [
      new Children(client.socialNetwork, "2013/08/03"),
      new Children(client.tiempoExtra, "2013/07/06"),
      new Children(client.homeGallery, "2013/07/05"),
      new Children(client.sdq, "2013/07/05"),
      new Children(client.harinaBlanquita, "2013/06/27"),
      new Children(client.highschool, "2013/06/18"),
    ],
    ["group", "location"],
    "Web Designer",
    new Position(-1945, -1000),
    [
      `Design applications UI with ${tool.illustrator}.`,
      `Design social media assets with ${tool.illustrator}, ${tool.photoshop} and ${tool.indesign}.`,
    ],
  ),

  new Group(
    "2013/01/01",
    "Several Solutions",
    [
      toolEnum.illustrator,
      toolEnum.photoshop,
      toolEnum.indesign,
    ],
    new Preview("social-network"),
    [
      new Children(client.itla, "2010/07/07"),
      new Children(client.itla, "2011/06/22"),
      new Children(client.itla, "2011/02/22"),
      new Children(client.itla, "2011/04/24"),
      new Children(client.itla, "2011/04/25"),
      new Children(client.itla, "2011/07/06"),
      new Children(client.itla, "2011/07/25"),
      new Children(client.itla, "2011/07/31"),
      new Children(client.itla, "2011/08/03"),
      new Children(client.itla, "2011/11/15"),
      new Children(client.itla, "2011/11/18"),
      new Children(client.itla, "2011/12/05"),
      new Children(client.itla, "2012/04/16"),
      new Children(client.itla, "2012/06/25"),
      new Children(client.itla, "2012/07/24"),
      new Children(client.itla, "2012/09/13"),
      new Children(client.itla, "2012/10/12"),
      new Children(client.itla, "2012/11/26"),
      new Children(client.itla, "2013/03/21"),
      new Children(client.socialNetwork, "2013/08/03"),
      new Children(client.tiempoExtra, "2013/07/06"),
      new Children(client.homeGallery, "2013/07/05"),
      new Children(client.sdq, "2013/07/05"),
      new Children(client.harinaBlanquita, "2013/06/27"),
      new Children(client.highschool, "2013/06/18"),
    ],
    ["resume", "no-listing"],
    "Graphic Designer / Web Designer",
    undefined,
    [
      `Retouch pictures with ${tool.photoshop}`,
      `Design yearbooks with ${tool.indesign} and ${tool.photoshop}`,
      `Design applications UI with ${tool.illustrator}.`,
      `Design social media assets with ${tool.illustrator}, ${tool.photoshop} and ${tool.indesign}.`,
    ],
  ),

  new Group(
    "2014/06/01",
    client.presidente,
    [
      toolEnum.html,
      toolEnum.css,
      toolEnum.scss,
      toolEnum.jQuery,
      toolEnum.flash,
      toolEnum.grunt,
      toolEnum.php,
    ],
    new Preview("presidente"),
    [
      new Children(client.presidente, "2014/06/02"),
      new Children(client.presidente, "2014/06/16"),
      new Children(client.presidente, "2014/10/18"),
      new Children(client.presidente, "2014/11/05"),
      new Children(client.presidente, "2015/03/30"),
      new Children(client.presidente, "2015/04/18"),
      new Children(client.presidente, "2015/10/23"),
      new Children(client.presidente, "2015/12/16"),
    ],
    ["group"],
    undefined,
    new Position(-1945, -1000),
  ),

  new Group(
    "2014/05/01",
    client.capitalDBG,
    [
      toolEnum.html,
      toolEnum.css,
      toolEnum.pug,
      toolEnum.scss,
      toolEnum.grunt,
      toolEnum.jQuery,
      toolEnum.illustrator,
      toolEnum.photoshop,
      toolEnum.flash,
    ],
    new Preview("capital"),
    [
      new Children(client.presidente, "2014/06/02"),
      new Children(client.presidente, "2014/06/16"),
      new Children(client.presidente, "2015/04/18"),
      new Children(client.capitalDBG, "2014/08/06"),
      new Children(client.presidente, "2014/10/18"),
      new Children(client.presidente, "2014/11/05"),
      new Children(client.pepsi, "2015/03/24"),
      new Children(client.presidente, "2015/03/30"),
      new Children(client.redRock, "2015/05/20"),
      new Children(client.orange, "2015/05/27"),
      new Children(client.capitalDBG, "2015/08/03"),
      new Children(client.presidente, "2015/10/23"),
      new Children(client.apap, "2015/11/12"),
      new Children(client.presidente, "2015/12/16"),
    ],
    ["group", "location", "resume"],
    "Frontend Developer",
    new Position(-1380, -856),
    [
      `Build applications with ${tool.pug}, ${tool.sass}, ${tool.jQuery} on a ${tool.php} environment with ${tool.grunt}.`,
      `Create wireframes and users flow with ${tool.illustrator}.`,
      `Collaborate with Backend Developers, Designers and Project Managers to improve usability.`,
      `Animate ad banners for websites with ${tool.flash}.`,
      `Create motion graphics for social media with ${tool.flash}.`,
    ],
  ),

  new Group(
    "2016/01/01",
    client.pixelPerfectTree,
    [
      toolEnum.haml,
      toolEnum.scss,
      toolEnum.react,
      toolEnum.jQuery,
      toolEnum.illustrator,
      toolEnum.photoshop,
      toolEnum.rails,
      toolEnum.bootstrap,
      toolEnum.git,
    ],
    new Preview("pixel"),
    [
      new Children(client.pixelPerfectTree, "2015/10/28"),
      new Children(client.pixelPerfectTree, "2016/01/29"),
      new Children(client.bprBank, "2016/02/18"),
      new Children(client.pixelPerfectTree, "2016/06/16"),
      new Children(client.voxel, "2016/06/24"),
      new Children(client.voxel, "2016/06/30"),
      new Children(client.drLogic, "2016/02/22"),
    ],
    ["group", "location", "resume"],
    "Frontend Developer",
    new Position(-804, -1097),
    [
      `Design and develop applications with ${tool.haml}, ${tool.sass}, ${tool.bootstrap}, ${tool.jQuery}/${tool.react} on a ${tool.rails} environment with ${tool.webpack}.`,
      `Collaborate with Full Stack Developers and Project Managers to improve usability.`,
    ],
  ),

  new Group(
    "2013/07/15",
    client.avante,
    [
      toolEnum.php,
      toolEnum.wordpress,
      toolEnum.html,
      toolEnum.css,
      toolEnum.javascript,
      toolEnum.jQuery,
      toolEnum.illustrator,
      toolEnum.photoshop,
    ],
    new Preview("avante"),
    [
      new Children(client.descubria, "2013/12/03"),
      new Children(client.delJardin, "2013/12/06"),
      new Children(client.descubria, "2014/01/14"),
    ],
    ["group", "location", "resume"],
    "Web Designer",
    new Position(-1501, -1170),
    [
      `Design and build applications with ${tool.html}, ${tool.css}, ${tool.jQuery} on a ${tool.php} environment.`,
    ],
  ),

  new Group(
    "2017/07/01",
    client.plantTherapy,
    [
      toolEnum.php,
      toolEnum.miva,
      toolEnum.html,
      toolEnum.css,
      toolEnum.javascript,
      toolEnum.jQuery,
      toolEnum.illustrator,
      toolEnum.photoshop,
    ],
    new Preview("plant-therapy"),
    [
      new Children(client.plantTherapy, "2017/08/04"),
      new Children(client.plantTherapy, "2017/09/20"),
      new Children(client.plantTherapy, "2017/12/01"),
    ],
    ["group", "location", "resume"],
    "Graphic Web Designer",
    new Position(-1230, -515),
    [
      `Build prototypes and landing pages with ${tool.pug}, ${tool.sass}, ${tool.jQuery} and ${tool.miva}.`,
      `Maintain and optimize the website.`,
      `Create wireframes and users flow with ${tool.illustrator}.`,
    ],
  ),

  new Group(
    "2021/03/29",
    client.jellyfish,
    [
      toolEnum.php,
      toolEnum.wordpress,
      toolEnum.html,
      toolEnum.scss,
      toolEnum.git,
      toolEnum.grunt,
      toolEnum.javascript,
      toolEnum.jQuery,
    ],
    new Preview("plant-therapy"),
    [
      new Children(client.jellyfish, "2021/06/21"),
    ],
    ["group", "no-listing"],
    'jellyfish',
    new Position(0, 0),
  ),

  new Group(
    "2018/04/01",
    client.enovational,
    [
      toolEnum.html,
      toolEnum.vue,
      toolEnum.vueRouter,
      toolEnum.vuex,
      toolEnum.scss,
      toolEnum.slim,
      toolEnum.git,
      toolEnum.rails,
      toolEnum.bootstrap,
      toolEnum.jQuery,
      toolEnum.three,
      toolEnum.svg,
      toolEnum.illustrator,
      toolEnum.photoshop,
      toolEnum.tweenMax,
    ],
    new Preview("enovational"),
    [
      new Children(client.enovational, "2018/05/01"),
      new Children(client.enovational, "2018/06/25"),
      new Children(client.enovational, "2018/09/04"),
      new Children(client.enovational, "2019/01/01"),
    ],
    ["group", "location", "resume"],
    "Frontend Developer",
    new Position(-2368, -299),
    [
      `Build government apps with ${tool.html}/${tool.slim}, ${tool.sass}, ${tool.bootstrap} and ${tool.jQuery}/${tool.vue} on a ${tool.rails} environment with ${tool.webpack}.`,
      `Make sure applications are following conventions and extending them according to the complexity of the project and frameworks being used.`,
      `Collaborate with UI/UX Designers, Full Stack Developers, Project Managers, QA Testers and Business Analysts to improve usability.`,
    ],
  ),

  new Group(
    "2022/09/19",
    client.teamUp,
    [
      toolEnum.html,
      toolEnum.vue,
      toolEnum.vueRouter,
      toolEnum.vuex,
      toolEnum.scss,
      toolEnum.git,
      toolEnum.rails,
      toolEnum.unoCss,
      toolEnum.storybook,
      toolEnum.figma,
    ],
    new Preview("teamup"),
    [],
    ["group", "location", "resume"],
    "Frontend Developer",
    undefined,
    [
      `Develop tools that improve frontend development productivity and minimize developer friction.`,
    ],
  ),
];

export { groups as groupsDB };