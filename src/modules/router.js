import Vue from 'vue';
import VueRouter from 'vue-router';

import ContactWorkareaView from '@/views/contact-workarea.vue';

import helloView from '@/views/others/hello.vue';
import hello2View from '@/views/others/hello2.vue';
import OthersNavbarView from '@/views/others/navbar.vue';
import tetravexView from '@/views/others/tetravex.vue';
import SoundboardWorkareaView from '@/views/others/soundboard-workarea.vue';
import EvolutionWorkareaView from '@/views/others/evolution.vue';
import DescubriaView from '@/views/others/descubria.vue';
import CapitalView from '@/views/others/capital.vue';
import HtmlView from '@/views/others/html.vue';
import FlatView from '@/views/others/flat.vue';
import voxelView from '@/views/others/voxel.vue';
import StargazerWorkareaView from '@/views/others/stargazer-workarea.vue';
import StargazerPanelView from '@/views/others/stargazer-panel.vue';
import ApapWorkareaView from '@/views/others/mineros.vue';
import cssStudyView from '@/views/others/css-study.vue';
import journeyView from '@/views/others/journey.vue';
// import homeView from '@/views/others/home.vue';

import ColorsWorkareaView from '../views/popkern/colors-workarea.vue';
import IconsWorkareaView from '../views/popkern/icons-workarea.vue';
import IconsPanelView from '../views/popkern/icons-panel.vue';
import PopkernHomeView from '../views/popkern/home.vue';
import PopkernNavbar from '../views/popkern/navbar.vue';
import PopkernLinksView from '../views/popkern/links.vue';
import PopkernRulerView from '../views/popkern/ruler.vue';

import ProjectsWorkareaView from '@/views/2022/projects-workarea.vue';
import StatisticsWorkareaView from '@/views/2022/statistics-workarea.vue';
import ResumeWorkareaView from '@/views/2022/resume-workarea.vue';
import P2022NavbarView from '@/views/2022/navbar.vue';
import ImagesWorkareaView from '@/views/2022/images-workarea.vue';
import ImagesPanelView from '@/views/2022/images-panel.vue';
import VideosWorkareaView from '@/views/2022/video-workarea.vue';
import LocationsPanelView from '@/views/canvas/locations-panel.vue';
import LocationsWorkareaView from '@/views/canvas/locations-workarea.vue';

import CanvasNavbarView from '@/views/canvas/navbar.vue';
import GearWorkareaView from '@/views/canvas/gear-workarea.vue';
import GearPanelView from '@/views/canvas/gear-panel.vue';
import WheelWorkareaView from '@/views/canvas/wheel-workarea.vue';
import WheelPanelView from '@/views/canvas/wheel-panel.vue';
import AvatarWorkareaView from '@/views/canvas/avatar-workarea.vue';
import AvatarPanelView from '@/views/canvas/avatar-panel.vue';
import PixelWorkareaView from '@/views/canvas/pixel-workarea.vue';
import PixelPanelView from '@/views/canvas/pixel-panel.vue';
import DollhouseWorkareaView from '@/views/canvas/dollhouse-workarea.vue';
import DollhousePanelView from '@/views/canvas/dollhouse-panel.vue';
import GameWorkareaView from '@/views/canvas/game-workarea.vue';
import CubeWorkareaView from '@/views/canvas/cube-workarea.vue';
import CubePanelView from '@/views/canvas/cube-panel.vue';
import ThreePanelView from '@/views/canvas/three-panel.vue';
import ThreeWorkareaView from '@/views/canvas/three-workarea.vue';
import FlipbookWorkareaView from '@/views/canvas/flipbook-workarea.vue';
import FlipbookPanelView from '@/views/canvas/flipbook-panel.vue';

import CSSNavbarView from '@/views/css/navbar.vue';
import HouseWorkareaView from '@/views/css/house-workarea.vue';
import WindowWorkareaView from '@/views/css/window-workarea.vue';
import MinivanWorkareaView from '@/views/css/minivan-workarea.vue';
import PillsWorkareaView from '@/views/css/pills-workarea.vue';

import Form401WorkareaView from '@/views/formability/401.vue';
import Form404WorkareaView from '@/views/formability/404.vue';
import Form500WorkareaView from '@/views/formability/500.vue';
import FormDemoWorkareaView from '@/views/formability/demo.vue';
import FormNavbarWorkareaView from '@/views/formability/navbar.vue';

import P2014HomeView from '@/views/2014/home.vue';
import P2014ProjectsView from '@/views/2014/projects.vue';
import P2014ContactView from '@/views/2014/contact.vue';
import P2014NavbarView from '@/views/2014/navbar.vue';

import P2016WorkareaView from '@/views/2016/index.vue';
import P2016NavbarView from '@/views/2016/navbar.vue';

import P2018HomeView from '@/views/2018/home.vue';
import P2018DrLogicView from '@/views/2018/drlogic.vue';
import P2018ApapView from '@/views/2018/apap.vue';
import P2018BPRBankView from '@/views/2018/bpr.vue';
import P2018PresidenteView from '@/views/2018/presidente.vue';
import P2018NavbarView from '@/views/2018/navbar.vue';

import DrlogicNavbarView from '@/views/drlogic/navbar.vue';
import DrlogicHomeView from '@/views/drlogic/index.vue';
import DrlogicTeamView from '@/views/drlogic/team.vue';
import DrlogicTestimonialsView from '@/views/drlogic/testimonials.vue';
import DrlogicContactView from '@/views/drlogic/contact.vue';
import DrlogicServicesView from '@/views/drlogic/services.vue';
import DrlogicSupportView from '@/views/drlogic/support.vue';
import Drlogic404View from '@/views/drlogic/404.vue';

import presidenteNavbarView from '@/views/presidente/navbar.vue';
import presidenteFilterView from '@/views/presidente/carnaval-filter.vue';
import presidenteLoaderView from '@/views/presidente/verano-loader.vue';
import presidenteCarnavalLoaderView from '@/views/presidente/carnaval-loader.vue';
import presidenteCarnavalView from '@/views/presidente/carnaval-home.vue';
import presidenteVeranoFilterView from '@/views/presidente/verano-filter.vue';
import presidenteDestapaView from '@/views/presidente/destapa.vue';
import presidenteRetrobrindisView from '@/views/presidente/retrobrindis.vue';

import pixelptNavbarView from '@/views/ppt/navbar.vue';
import pixelpt404View from '@/views/ppt/404.vue';
import pixelpt500View from '@/views/ppt/500.vue';

import nanogridNavbarView from '@/views/nanogrid/navbar.vue';
import nanogridHomeView from '@/views/nanogrid/home.vue';
import nanogridTestsView from '@/views/nanogrid/tests.vue';
import nanogridDocumentationView from '@/views/nanogrid/documentation.vue';

// import familyWorkareaView from '@/views/others/family-workarea.vue';
// import familyPanelView from '@/views/others/family-panel.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/map',
  },
  // {
  //   name: 'family',
  //   path: '/family',
  //   components: {
  //     workarea: familyWorkareaView,
  //     panel: familyPanelView,
  //     navbar: OthersNavbarView,
  //   },
  // },
  // {
  //   name: 'weather',
  //   path: '/weather',
  //   components: {
  //     workarea: homeView,
  //     navbar: OthersNavbarView,
  //   },
  // },
  {
    name: 'hello',
    path: '/hello',
    components: {
      workarea: helloView,
      navbar: OthersNavbarView,
    },
  },
  {
    name: 'hello2',
    path: '/hello2',
    components: {
      workarea: hello2View,
      navbar: OthersNavbarView,
    },
  },
  {
    name: 'links',
    path: '/links',
    components: {
      workarea: ContactWorkareaView,
    },
  },
  {
    name: 'nanogrid-documentation',
    path: '/nanogrid-documentation',
    components: {
      workarea: nanogridDocumentationView,
      navbar: nanogridNavbarView,
    },
  },
  {
    name: 'nanogrid-home',
    path: '/nanogrid-home',
    components: {
      workarea: nanogridHomeView,
      navbar: nanogridNavbarView,
    },
  },
  {
    name: 'nanogrid-tests',
    path: '/nanogrid-tests',
    components: {
      workarea: nanogridTestsView,
      navbar: nanogridNavbarView,
    },
  },
  {
    name: 'voxel',
    path: '/voxel',
    components: {
      workarea: voxelView,
      navbar: OthersNavbarView,
    },
  },
  {
    name: 'tetravex',
    path: '/tetravex',
    components: {
      workarea: tetravexView,
      navbar: OthersNavbarView,
    },
  },
  {
    name: 'flat',
    path: '/flat',
    components: {
      workarea: FlatView,
      navbar: OthersNavbarView,
    },
  },
  {
    name: 'html',
    path: '/html',
    components: {
      workarea: HtmlView,
      navbar: OthersNavbarView,
    },
  },
  {
    name: 'capital',
    path: '/capital',
    components: {
      workarea: CapitalView,
      navbar: OthersNavbarView,
    },
  },
  {
    name: 'descubria',
    path: '/descubria',
    components: {
      workarea: DescubriaView,
      navbar: OthersNavbarView,
    },
  },
  {
    name: 'evolution',
    path: '/evolution',
    components: {
      workarea: EvolutionWorkareaView,
      navbar: OthersNavbarView,
    },
  },
  {
    name: 'soundboard',
    path: '/soundboard',
    components: {
      workarea: SoundboardWorkareaView,
      navbar: OthersNavbarView,
    },
  },

  {
    name: 'popkern-home',
    path: '/popkern-home',
    components: {
      workarea: PopkernHomeView,
      navbar: PopkernNavbar,
    },
  },
  {
    name: 'popkern-links',
    path: '/popkern-links',
    components: {
      workarea: PopkernLinksView,
      navbar: PopkernNavbar,
    },
  },
  {
    name: 'popkern-colors',
    path: '/popkern-colors',
    components: {
      workarea: ColorsWorkareaView,
      navbar: PopkernNavbar,
    },
  },
  {
    name: 'popkern-icons',
    path: '/popkern-icons',
    components: {
      workarea: IconsWorkareaView,
      panel: IconsPanelView,
      navbar: PopkernNavbar,
    },
  },
  {
    name: 'popkern-ruler',
    path: '/popkern-ruler',
    components: {
      workarea: PopkernRulerView,
      navbar: PopkernNavbar,
    },
  },

  {
    name: 'pixelpt-404',
    path: '/pixelpt-404',
    components: {
      workarea: pixelpt404View,
      navbar: pixelptNavbarView,
    },
  },
  {
    name: 'pixelpt-500',
    path: '/pixelpt-500',
    components: {
      workarea: pixelpt500View,
      navbar: pixelptNavbarView,
    },
  },
  {
    name: 'presidente-destapa',
    path: '/presidente-destapa',
    components: {
      workarea: presidenteDestapaView,
      navbar: presidenteNavbarView,
    },
  },
  {
    name: 'presidente-retrobrindis',
    path: '/presidente-retrobrindis',
    components: {
      workarea: presidenteRetrobrindisView,
      navbar: presidenteNavbarView,
    },
  },
  {
    name: 'presidente-verano-loader',
    path: '/presidente-verano-loader',
    components: {
      workarea: presidenteLoaderView,
      navbar: presidenteNavbarView,
    },
  },
  {
    name: 'presidente-carnaval-loader',
    path: '/presidente-carnaval-loader',
    components: {
      workarea: presidenteCarnavalLoaderView,
      navbar: presidenteNavbarView,
    },
  },
  {
    name: 'presidente-verano-filter',
    path: '/presidente-verano-filter',
    components: {
      workarea: presidenteVeranoFilterView,
      navbar: presidenteNavbarView,
    },
  },
  {
    name: 'presidente-carnaval-filter',
    path: '/presidente-carnaval-filter',
    components: {
      workarea: presidenteFilterView,
      navbar: presidenteNavbarView,
    },
  },
  {
    name: 'presidente-carnaval-home',
    path: '/presidente-carnaval-home',
    components: {
      workarea: presidenteCarnavalView,
      navbar: presidenteNavbarView,
    },
  },
  {
    name: 'drlogic-home',
    path: '/drlogic-home',
    components: {
      workarea: DrlogicHomeView,
      navbar: DrlogicNavbarView,
    },
  },
  {
    name: 'drlogic-team',
    path: '/drlogic-team',
    components: {
      workarea: DrlogicTeamView,
      navbar: DrlogicNavbarView,
    },
  },
  {
    name: 'drlogic-testimonials',
    path: '/drlogic-testimonials',
    components: {
      workarea: DrlogicTestimonialsView,
      navbar: DrlogicNavbarView,
    },
  },
  {
    name: 'drlogic-contact',
    path: '/drlogic-contact',
    components: {
      workarea: DrlogicContactView,
      navbar: DrlogicNavbarView,
    },
  },
  {
    name: 'drlogic-404',
    path: '/drlogic-404',
    components: {
      workarea: Drlogic404View,
      navbar: DrlogicNavbarView,
    },
  },
  {
    name: 'drlogic-services',
    path: '/drlogic-services',
    components: {
      workarea: DrlogicServicesView,
      navbar: DrlogicNavbarView,
    },
  },
  {
    name: 'drlogic-support',
    path: '/drlogic-support',
    components: {
      workarea: DrlogicSupportView,
      navbar: DrlogicNavbarView,
    },
  },


  {
    name: '2014-home',
    path: '/2014-home',
    components: {
      workarea: P2014HomeView,
      navbar: P2014NavbarView,
    },
  },
  {
    name: '2014-projects',
    path: '/2014-projects',
    components: {
      workarea: P2014ProjectsView,
      navbar: P2014NavbarView,
    },
  },
  {
    name: '2014-contact',
    path: '/2014-contact',
    components: {
      workarea: P2014ContactView,
      navbar: P2014NavbarView,
    },
  },


  {
    name: '2016-home',
    path: '/2016-home',
    components: {
      workarea: P2016WorkareaView,
      navbar: P2016NavbarView,
    },
  },


  {
    name: '2018-home',
    path: '/2018-home',
    components: {
      workarea: P2018HomeView,
      navbar: P2018NavbarView,
    },
  },
  {
    name: '2018-drlogic',
    path: '/2018-drlogic',
    components: {
      workarea: P2018DrLogicView,
      navbar: P2018NavbarView,
    },
  },
  {
    name: '2018-apap',
    path: '/2018-apap',
    components: {
      workarea: P2018ApapView,
      navbar: P2018NavbarView,
    },
  },
  {
    name: '2018-presidente',
    path: '/2018-presidente',
    components: {
      workarea: P2018PresidenteView,
      navbar: P2018NavbarView,
    },
  },
  {
    name: '2018-bpr',
    path: '/2018-bpr',
    components: {
      workarea: P2018BPRBankView,
      navbar: P2018NavbarView,
    },
  },


  {
    name: '2022-resume',
    path: '/2022-resume',
    components: {
      workarea: ResumeWorkareaView,
      navbar: P2022NavbarView,
    },
  },
  {
    name: '2022-projects',
    path: '/2022-projects',
    components: {
      workarea: ProjectsWorkareaView,
      navbar: P2022NavbarView,
    },
  },
  {
    name: '2022-statistics',
    path: '/2022-statistics',
    components: {
      workarea: StatisticsWorkareaView,
      navbar: P2022NavbarView,
    },
  },
  {
    name: '2022-images',
    path: '/2022-images',
    components: {
      workarea: ImagesWorkareaView,
      panel: ImagesPanelView,
      navbar: P2022NavbarView,
    },
  },
  {
    name: '2022-videos',
    path: '/2022-videos',
    components: {
      workarea: VideosWorkareaView,
      navbar: P2022NavbarView,
    },
  },

  {
    name: 'stargazer',
    path: '/stargazer',
    components: {
      workarea: StargazerWorkareaView,
      panel: StargazerPanelView,
      navbar: OthersNavbarView,
    },
  },


  {
    name: 'formability-401',
    path: '/formability-401',
    components: {
      workarea: Form401WorkareaView,
      navbar: FormNavbarWorkareaView,
    },
  },
  {
    name: 'formability-404',
    path: '/formability-404',
    components: {
      workarea: Form404WorkareaView,
      navbar: FormNavbarWorkareaView,
    },
  },
  {
    name: 'formability-500',
    path: '/formability-500',
    components: {
      workarea: Form500WorkareaView,
      navbar: FormNavbarWorkareaView,
    },
  },
  {
    name: 'formability-demo',
    path: '/formability-demo',
    components: {
      workarea: FormDemoWorkareaView,
      navbar: FormNavbarWorkareaView,
    },
  },

  {
    name: 'journey',
    path: '/journey',
    components: {
      workarea: journeyView,
      navbar: OthersNavbarView,
    },
  },
  {
    name: 'css-study',
    path: '/css-study',
    components: {
      workarea: cssStudyView,
      navbar: OthersNavbarView,
    },
  },
  {
    name: 'mineros',
    path: '/mineros',
    components: {
      workarea: ApapWorkareaView,
      navbar: OthersNavbarView,
    },
  },
  {
    name: 'dollhouse',
    path: '/dollhouse',
    components: {
      workarea: DollhouseWorkareaView,
      panel: DollhousePanelView,
      navbar: CanvasNavbarView,
    },
  },
  {
    name: 'map',
    path: '/map',
    components: {
      workarea: LocationsWorkareaView,
      panel: LocationsPanelView,
      navbar: P2022NavbarView,
    },
  },
  {
    name: 'game',
    path: '/game',
    components: {
      workarea: GameWorkareaView,
      navbar: CanvasNavbarView,
    },
  },
  {
    name: 'avatar',
    path: '/avatar',
    components: {
      workarea: AvatarWorkareaView,
      panel: AvatarPanelView,
      navbar: CanvasNavbarView,
    },
  },
  {
    name: 'gear',
    path: '/gear',
    components: {
      workarea: GearWorkareaView,
      panel: GearPanelView,
      navbar: CanvasNavbarView,
    },
  },
  {
    name: 'wheel',
    path: '/wheel',
    components: {
      workarea: WheelWorkareaView,
      panel: WheelPanelView,
      navbar: CanvasNavbarView,
    },
  },
  {
    name: 'pixel',
    path: '/pixel',
    components: {
      workarea: PixelWorkareaView,
      panel: PixelPanelView,
      navbar: CanvasNavbarView,
    },
  },

  {
    name: 'cube',
    path: '/cube',
    components: {
      workarea: CubeWorkareaView,
      panel: CubePanelView,
      navbar: CanvasNavbarView,
    },
  },
  {
    name: 'spirit',
    path: '/spirit',
    components: {
      workarea: Vue.extend({
        props: {
          mesh: {
            default: "spirit"
          },
          minDistance: {
            default: 7.5,
          },
          maxDistance: {
            type: Number,
            default: 25,
          },
        },
        extends: ThreeWorkareaView,
      }),
      panel: ThreePanelView,
      navbar: CanvasNavbarView,
    },
  },
  {
    name: 'drakkar',
    path: '/drakkar',
    components: {
      workarea: Vue.extend({
        props: {
          mesh: {
            default: "drakkar"
          },
          minDistance: {
            default: 65,
          },
          maxDistance: {
            type: Number,
            default: 75,
          },
        },
        extends: ThreeWorkareaView,
      }),
      panel: ThreePanelView,
      navbar: CanvasNavbarView,
    },
  },
  {
    name: 'portfolio2017',
    path: '/portfolio2017',
    components: {
      workarea: Vue.extend({
        props: {
          book: {
            default: "art"
          },
          pages: {
            default: 14
          }
        },
        extends: FlipbookWorkareaView,
      }),
      panel: FlipbookPanelView,
      navbar: CanvasNavbarView,
    },
  },
  {
    name: 'audio2',
    path: '/audio2',
    components: {
      workarea: Vue.extend({
        props: {
          book: {
            default: "audio"
          },
          pages: {
            default: 12
          }
        },
        extends: FlipbookWorkareaView,
      }),
      panel: FlipbookPanelView,
      navbar: CanvasNavbarView,
    },
  },
  {
    name: 'car',
    path: '/car',
    components: {
      workarea: Vue.extend({
        props: {
          mesh: {
            default: "car"
          },
          minDistance: {
            default: 55,
          },
          maxDistance: {
            type: Number,
            default: 75,
          },
        },
        extends: ThreeWorkareaView,
      }),
      panel: ThreePanelView,
      navbar: CanvasNavbarView,
    },
  },
  {
    name: 'xwing',
    path: '/xwing',
    components: {
      workarea: Vue.extend({
        props: {
          mesh: {
            default: "xwing"
          },
          minDistance: {
            default: 35,
          },
          maxDistance: {
            type: Number,
            default: 55,
          },
        },
        extends: ThreeWorkareaView,
      }),
      panel: ThreePanelView,
      navbar: CanvasNavbarView,
    },
  },


  {
    name: 'house',
    path: '/house',
    components: {
      workarea: HouseWorkareaView,
      navbar: CSSNavbarView,
    },
  },
  {
    name: 'window',
    path: '/window',
    components: {
      workarea: WindowWorkareaView,
      navbar: CSSNavbarView,
    }
  },
  {
    name: 'pills',
    path: '/pills',
    components: {
      workarea: PillsWorkareaView,
      navbar: CSSNavbarView,
    }
  },
  {
    name: 'minivan',
    path: '/minivan',
    components: {
      workarea: MinivanWorkareaView,
      navbar: CSSNavbarView,
    }
  },
  {
    path: '*',
    redirect: '/'
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router;