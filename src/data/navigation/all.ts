/*
 * @Author: Vir
 * @Date: 2021-11-15 16:06:48
 * @Last Modified by: Vir
 * @Last Modified time: 2022-01-30 12:05:21
 */

import { Website } from './interface';

// 所有网站数据，根据 classify 配置分类
const allWebsites: Website[] = [
  {
    id: '4e1c3a03242b4361a22a4daf8ced88bf',
    name: '新浪微博',
    url: 'https://www.weibo.com/',
    intro: '随时随地发现新鲜事',
    icon: 'weibo',
    color: '#ff8140',
    classify: ['social', 'common'],
  },
  {
    id: '68178f885c7b44e78ddc0be67b478644',
    name: '百度贴吧',
    url: 'https://tieba.baidu.com/',
    intro: '全球领先的中文社区',
    icon: 'tieba',
    color: '#3385ff',
    classify: ['common', 'social'],
  },
  {
    id: '854c6ae11b334bdbb0cd6c71c8598533',
    name: '简书',
    url: 'https://www.jianshu.com/',
    intro: '创作你的创作',
    icon: 'jianshu',
    color: '#ea6f5a',
    classify: ['social'],
  },
  {
    id: 'f24d86cb6b9d44c5a2b9cf5bc7f4ee1e',
    name: '知乎',
    url: 'https://www.zhihu.com/',
    intro: '有问题，就会有答案',
    icon: 'zhihu',
    color: '#0084ff',
    classify: ['common', 'social'],
  },
  {
    id: '210638b8452c4163a34ea3b62f41ff51',
    name: 'Facebook',
    url: 'https://www.facebook.com/',
    intro: 'Facebook，讓你與親朋好友保持聯繫，隨時分享生活精彩點滴。',
    icon: 'facebook',
    color: '#4267b2',
    classify: ['social'],
  },
  {
    id: '7e99a1ce468943c8bfb27421b7015022',
    name: 'Twitter',
    url: 'https://twitter.com/',
    intro: '聚焦当下',
    icon: 'twitter',
    color: 'rgb(29, 161, 242)',
    classify: ['social'],
  },
  {
    id: '3238186bed334acaab3868275204ffaa',
    name: '淘宝',
    url: 'https://www.taobao.com/',
    intro: '淘！我喜欢',
    icon: 'taobao',
    color: '#FF5502',
    classify: ['common', 'shopping'],
  },
  {
    id: '96837d86dd784f59bffb6b137663113e',
    name: '京东',
    url: 'https://www.jd.com/',
    intro: '正品低价、品质保障、配送及时、轻松购物！',
    icon: 'jd',
    color: '#DE281F',
    classify: ['common', 'shopping'],
  },
  {
    id: '39e282377aa748d18a9c4673a47f0750',
    name: '天猫',
    url: 'https://www.tmall.com/',
    intro: '理想生活上天猫',
    icon: 'tmall',
    color: '#FF0036',
    classify: ['common', 'shopping'],
  },
  {
    id: '53a8556e6a6540739981fac260245801',
    name: '小米商城',
    url: 'https://www.mi.com/',
    intro: '让全球每个人都能享受到科技带来的美好生活',
    icon: 'mistore',
    color: '#FF6A00',
    classify: ['shopping'],
  },
  {
    id: '62d4349dae7441d19022a2dcc39e869d',
    name: '小米有品',
    url: 'https://www.xiaomiyoupin.com/',
    intro: '科技让生活更有品',
    icon: 'xiaomiyoupin',
    color: '#9F8052',
    classify: ['shopping'],
  },
  {
    id: '09fe742f7ebc43bb8012682c8a53093b',
    name: '华为商城',
    url: 'https://www.vmall.com/',
    intro: '华为商城VMALL-华为手机、笔记本、平板、穿戴、官网正品保障',
    icon: 'vmall',
    color: '#D11636',
    classify: ['shopping'],
  },
  {
    id: '1e8cc25c39a94d499b3ca0abcd5e5be8',
    name: 'QQ邮箱',
    url: 'https://mail.qq.com/',
    intro: 'QQ邮箱，常联系！',
    icon: 'qqemail',
    color: '#279BDF',
    classify: ['common', 'email'],
  },
  {
    id: '107d2cb69be04ae38d7fa66b7cad84de',
    name: '网易邮箱',
    url: 'https://mail.163.com/',
    intro: '中文邮箱第一品牌',
    icon: '163email',
    color: '#CE0326',
    classify: ['email'],
  },
  {
    id: '620f38307ad24ec28ace2d7e8a1c095b',
    name: 'Gmail',
    url: 'https://mail.google.com/',
    intro: '',
    icon: 'gmail',
    color: '#FBBC04',
    classify: ['email'],
  },
  {
    id: '895b4c0a9cee4eaeaeeafdbc97f4924a',
    name: 'Outlook',
    url: 'https://outlook.live.com/',
    intro: '',
    icon: 'outlook',
    color: '#0078D4',
    classify: ['email'],
  },
  {
    id: 'aacdc4b5794949fb8ad888446049bea8',
    name: '新华网',
    url: 'http://www.xinhuanet.com/',
    intro: '让新闻离你更近',
    icon: 'xinhuanet',
    color: '#083B90',
    classify: ['news', 'common'],
  },
  {
    id: 'c71edd4daad34f4bb51438d33b27c950',
    name: '中国日报',
    url: 'http://cn.chinadaily.com.cn/',
    intro: '传播中国，影响世界',
    icon: 'chinadaily',
    color: '#083961',
    classify: ['news', 'common'],
  },
  {
    id: 'ecfbad28800f42c686e46c9616cacb65',
    name: '环球网',
    url: 'https://www.huanqiu.com/',
    intro: '全球生活新门户',
    icon: 'huanqiu',
    color: '#90080E',
    classify: ['news', 'common'],
  },
  {
    id: 'a0629197d9b34b4f99f19cad0904ab1d',
    name: '央视网',
    url: 'https://www.cctv.com/',
    intro: '世界就在眼前',
    icon: 'cctv',
    color: '#BF0614',
    classify: ['news'],
  },
  {
    id: '05ec015eefa44e3eb1e157e7f3d07f85',
    name: '观察者网',
    url: 'https://www.guancha.cn/',
    intro: '为全球华人读者提供集新鲜、热点、深度、趣味于一体的时政资讯。',
    icon: 'guancha',
    color: '#BD0509',
    classify: ['news'],
  },
  {
    id: '099a7ead0c524d32930c9beb4916c663',
    name: '腾讯网',
    url: 'https://www.qq.com/',
    icon: 'guancha',
    color: '#1479D7',
    classify: ['news', 'common'],
  },
  {
    id: '6ef1b75ca1514e38bb5e5eddc0f6e0ea',
    name: '网易',
    url: 'https://www.163.com/',
    icon: '163',
    color: '#E10000',
    classify: ['news', 'common'],
  },
  {
    id: '2e1b53aff19941abb4de1438692cf799',
    name: 'YouTube',
    url: 'https://www.youtube.com/',
    intro:
      'Enjoy the videos and music you love, upload original content, and share it all with friends.',
    icon: 'youtube',
    color: '#FF0000',
    classify: ['video'],
  },
  {
    id: 'c4d166f506fe4f38aa7a33141d957a5f',
    name: 'bilibili',
    url: 'https://bilibili.com',
    intro: '哔哩哔哩 (゜-゜)つロ 干杯~',
    icon: 'bilibili',
    color: '#00A1D6',
    classify: ['video'],
  },
  {
    id: '322ac9b788c64d02bb28b158c14ea17c',
    name: 'IT之家',
    url: 'https://www.ithome.com/',
    intro: '爱科技，爱这里',
    icon: 'ithome',
    color: '#D22222',
    classify: ['digital', 'news'],
  },
  {
    id: 'cac91d6480324410a661730bca0288db',
    name: '中关村在线',
    url: 'https://www.zol.com.cn/',
    intro: '大中华区专业IT网站',
    icon: 'zol',
    color: '#3686F1',
    classify: ['digital', 'news'],
  },
  {
    id: 'b5fdb91ab4cb4ce79abf483c07b80187',
    name: '少数派',
    url: 'https://sspai.com/',
    intro: '高效工作，品质生活',
    icon: 'sspai',
    color: '#751617',
    classify: ['digital', 'news'],
  },
  {
    id: '65fb7df831234b4d886ae117b5682853',
    name: '快科技',
    url: 'https://www.mydrivers.com/',
    intro: '科技改变未来',
    icon: 'mydrivers',
    color: '#FF902C',
    classify: ['digital', 'news'],
  },
  {
    id: '980359e6eeb84962b51240dfbe6de012',
    name: '数字尾巴',
    url: 'https://www.dgtle.com/',
    intro: '分享美好数字生活',
    icon: 'dgtle',
    color: '#9A9A9A',
    classify: ['digital', 'news'],
  },
  {
    id: '56e0023b3fb94387b28f5827ba21b2b8',
    name: '爱范儿',
    url: 'https://www.ifanr.com/',
    intro: '让未来触手可及',
    icon: 'ifanr',
    color: '#B52C02',
    classify: ['digital', 'news'],
  },
  {
    id: '5683720e54e44d50a27a8f2e0f2687c5',
    name: '充电头网',
    url: 'https://www.chongdiantou.com/',
    intro: '我们只谈充电',
    icon: 'chongdiantouCC',
    color: '#23499E',
    classify: ['digital', 'news'],
  },
  {
    id: '86dd7950cc984c1194358346bb408608',
    name: '天空之城',
    url: 'https://www.skypixel.com/',
    intro: '全球航拍爱好者和专业摄影师的作品社区',
    icon: 'skypixel',
    color: '#000000',
    classify: ['picture'],
  },
  {
    id: 'ad91019e59ad447ab2c91d85c35bf841',
    name: '极像素',
    url: 'https://www.sigoo.com/',
    intro: '高像素看世界',
    icon: 'sigoo',
    color: '#C24422',
    classify: ['picture'],
  },
  {
    id: '16ccfaced7b04cb28d24d069679fc05a',
    name: 'CNU',
    url: 'http://www.cnu.cc/',
    icon: 'cnu',
    color: '#CC0000',
    classify: ['picture'],
  },
  {
    id: '9583b9a849834c56b85c1c1050e2cfb1',
    name: 'Pexels',
    url: 'https://www.pexels.com/zh-cn/',
    intro: '才华横溢的摄影作者在这里免费分享最精彩的素材图片和视频。',
    icon: 'pexels',
    color: '#05A081',
    classify: ['picture'],
  },
  {
    id: 'dc820c3149aa4b0e8a070605264457a8',
    name: '图虫',
    url: 'https://tuchong.com/',
    intro: '优质摄影师交流社区',
    icon: 'tuchong',
    color: '#FF328C',
    classify: ['picture'],
  },
  {
    id: '038ce5a511564b74a02b566e1ad02e61',
    name: 'React',
    url: 'https://react.docschina.org/',
    intro: '用于构建用户界面的 JavaScript 库',
    icon: 'react',
    color: '#61DAFB',
    classify: ['develop', 'front-end'],
  },
  {
    id: '553324cb3a614441b23ae13082412d45',
    name: 'VusJs',
    url: 'https://v3.cn.vuejs.org/',
    intro: '渐进式 JavaScript 框架',
    icon: 'vuejs',
    color: '#41B883',
    classify: ['develop', 'front-end'],
  },
  {
    id: 'a0383758c5ec46f0a24d913e6929872f',
    name: 'AngularJS',
    url: 'https://www.angularjs.net.cn/',
    intro: '一个开发动态Web应用的框架。',
    icon: 'angularjs',
    color: '#E23237',
    classify: ['develop', 'front-end'],
  },
  {
    id: '8d34bc84c31048a8beb9b0f144f3fa5e',
    name: 'Flutter中文网',
    url: 'https://flutterchina.club/',
    intro: '极速构建漂亮的原生应用。',
    icon: 'flutterchina',
    color: '#0091EA',
    classify: ['develop', 'front-end', 'mobile terminal'],
  },
  {
    id: '879a26836b83420898d1e4daf45b5035',
    name: 'FlutterCN',
    url: 'https://flutter.cn/',
    intro:
      'Flutter 是 Google 开源的 UI 工具包，帮助开发者通过一套代码库高效构建多平台精美应用，支持移动、Web、桌面和嵌入式平台。',
    icon: 'fluttercn',
    color: '#ED4845',
    classify: ['develop', 'front-end', 'mobile terminal'],
  },
  {
    id: '82d5e217d8fb4906a8b818e2052a0130',
    name: 'Flutter Gallery',
    url: 'https://gallery.flutter.dev/#/',
    intro:
      'Flutter Gallery is a resource to help developers evaluate and use Flutter',
    icon: 'fluttergallery',
    color: '#FF8383',
    classify: ['develop'],
  },
  {
    id: '8a03034d7cb246f5bb9a77a435e6e772',
    name: 'NodeJs',
    url: 'https://nodejs.org/zh-cn/',
    intro: 'Node.js® 是一个基于 Chrome V8 引擎 的 JavaScript 运行时环境。',
    icon: 'nodejs',
    color: '#3E863D',
    classify: ['develop', 'rear-end'],
  },
  {
    id: '6864605527e74850ac7a62d5605891b4',
    name: 'Webpack',
    url: 'https://www.webpackjs.com/',
    intro: '让一切变得简单',
    icon: 'webpackjs',
    color: '#55A7DD',
    classify: ['develop', 'front-end'],
  },
  {
    id: '2e33301054214c98997b8b273a7a41b9',
    name: 'UmiJs',
    url: 'https://umijs.org/zh-CN',
    intro: '插件化的企业级前端应用框架。',
    icon: 'umijs',
    color: '#1890FF',
    classify: ['develop', 'front-end'],
  },
  {
    id: 'fae86853bc2147298985b624f0222b66',
    name: 'Electron',
    url: 'http://www.electronjs.org/',
    intro: '使用 JavaScript，HTML 和 CSS 构建跨平台的桌面应用程序',
    icon: 'electronjs',
    color: '#9FEAF9',
    classify: ['develop', 'front-end'],
  },
  {
    id: 'c62839ace4d74d6e9f9ac4096e30a85a',
    name: 'React Native',
    url: 'https://reactnative.cn/',
    intro: '使用 React 来创建 Android 和 iOS 的原生应用',
    icon: 'reactnative',
    color: '#61DAFB',
    classify: ['develop', 'front-end'],
  },
  {
    id: '2d07a5cfbf5440fa83e615d2a5bccc11',
    name: 'Uni App',
    url: 'https://uniapp.dcloud.io/',
    intro: '基于VueJs的多端开发框架',
    icon: 'uniapp',
    color: '#2A9938',
    classify: ['develop', 'front-end'],
  },
  {
    id: '26b9fc15b3c643f98ec3a31a76ca86c0',
    name: 'npm',
    url: 'https://www.npmjs.com/',
    intro: 'build amazing things',
    icon: 'uniapp',
    color: '#CB0303',
    classify: ['develop', 'front-end'],
  },
  {
    id: 'f2aedbbbcf844badad3dff3b3d965001',
    name: 'Tailwind CSS',
    url: 'https://www.tailwindcss.cn/',
    intro: '无需离开您的HTML，即可快速建立现代网站。',
    icon: 'tailwindcss',
    color: '#06B6D4',
    classify: ['develop', 'front-end'],
  },
  {
    id: 'afc961364c5144689866add534c6719c',
    name: 'Vite',
    url: 'https://cn.vitejs.dev/',
    intro: '下一代前端开发与构建工具',
    icon: 'vitejs',
    color: '#646CFF',
    classify: ['develop', 'front-end'],
  },
  {
    id: '8adc9d543405497b95279847ef9db1d4',
    name: 'Amp What',
    url: 'http://www.amp-what.com/',
    intro: 'Discover your character',
    icon: 'amp-what',
    color: '#333333',
    classify: ['develop'],
  },
  {
    id: '464583eeb36d4e488ce0dbfd55f24757',
    name: 'GitHub',
    url: 'https://github.com/',
    intro: '全球最大的开源技术社区',
    icon: 'github',
    color: '#2D333B',
    classify: ['community', 'develop'],
  },
  {
    id: 'c8647d41918e491d96ecf951ec2ed158',
    name: '掘金',
    url: 'https://juejin.cn/',
    intro: '代码不止，掘金不停',
    icon: 'juejin',
    color: '#1E80FF',
    classify: ['community', 'develop'],
  },
  {
    id: 'e984ca4cfb934a2d9848a5101641ef81',
    name: 'CSDN',
    url: 'https://www.csdn.net/',
    intro: '专业开发者社区',
    icon: 'csdn',
    color: '#FC5531',
    classify: ['community', 'develop'],
  },
  {
    id: 'd8795f22326d4bbeaf58004f57de9eed',
    name: 'Segmentfault CN',
    url: 'https://segmentfault.com/',
    intro: '检索，交流和分享任何技术编程相关的问题及知识。',
    icon: 'segmentfault',
    color: '#39B95C',
    classify: ['community', 'develop'],
  },
  {
    id: '52f700fa8bc7411cbfc86bf7f572ee80',
    name: 'InfoQ',
    url: 'https://www.infoq.cn/',
    intro: '促进软件开发及相关领域知识与创新的传播',
    icon: 'infoq',
    color: '#0B76DB',
    classify: ['community', 'develop'],
  },
  {
    id: '94356aa909ab47fb86a45c5850bd1aaf',
    name: '极客学院Wiki',
    url: 'https://wiki.jikexueyuan.com/',
    intro: 'IT技术图文教程库',
    icon: 'jikexueyuan',
    color: '#39B95C',
    classify: ['community'],
  },
  {
    id: '7c0daf094bdc4fa7936981f3a07617c8',
    name: '开源中国',
    url: 'https://www.oschina.net/',
    intro: '中文开源技术交流社区',
    icon: 'oschina',
    color: '#21B351',
    classify: ['community', 'develop'],
  },
  {
    id: 'd380fc254f0b4428a7359c2ac654fc75',
    name: '博客园',
    url: 'https://www.cnblogs.com/',
    intro: '开发者的网上家园',
    icon: 'cnblogs',
    color: '#2E7ACC',
    classify: ['community', 'develop'],
  },
  {
    id: '0237ea70b65b4facbce9d286030aee88',
    name: 'Stackoverflow',
    url: 'https://stackoverflow.com/',
    intro: 'Where Developers Learn, Share, & Build Careers',
    icon: 'stackoverflow',
    color: '#F48024',
    classify: ['community', 'develop'],
  },
  {
    id: 'ebc0a7c723224376a7a20016351c706b',
    name: '链滴',
    url: 'https://ld246.com/',
    intro: '记录生活，连接点滴',
    icon: 'ld246',
    color: '#D23F31',
    classify: ['community'],
  },
  {
    id: '75f6ae67b74a4457bb91edc58654ade1',
    name: 'Font Awesome',
    url: 'https://fontawesome.com/',
    intro:
      "Get vector icons and social logos on your website with Font Awesome, the web's most popular icon set and toolkit.",
    icon: 'fontawesome',
    color: '#183153',
    classify: ['design', 'icons'],
  },
  {
    id: '1ab297fb419642f0adfa8e1d304daa6f',
    name: 'Icon Font',
    url: 'https://www.iconfont.cn/',
    icon: 'iconfont',
    color: '#183153',
    classify: ['design', 'icons'],
  },
  {
    id: '18bcd286eaf942829a2e6322084ab679',
    name: 'Material Icons',
    url: 'https://fonts.google.com/icons',
    intro:
      'Material Icons are available in five styles and a range of downloadable sizes and densities. The icons are based on the core Material Design principles and metrics.',
    icon: 'materialicons',
    color: '#BDBDBD',
    classify: ['design', 'icons'],
  },
  {
    id: 'fcdfc66efc524d73849c6cbc52fa10a5',
    name: 'Simple Icons',
    url: 'https://simpleicons.org/',
    intro: 'Free SVG icons for popular brands',
    icon: 'simpleicons',
    color: '#222222',
    classify: ['design', 'icons'],
  },
  {
    id: '47e97fedff2d40779e072dc6ee7ddd16',
    name: 'VS Code',
    url: 'https://code.visualstudio.com/',
    intro: 'Code editing. Redefined.',
    icon: 'vscode',
    color: '#22A5F1',
    classify: ['tools', 'software'],
  },
  {
    id: '5e5f263d87564a8289a111cd7113ba00',
    name: 'Jetbrains',
    url: 'https://www.jetbrains.com/',
    intro: 'Essential tools for software developers and teams',
    icon: 'jetbrains',
    color: '#080809',
    classify: ['tools', 'software'],
  },
  {
    id: '26701f2812b54667afe396e80e522d05',
    name: 'Atom',
    url: 'https://atom.io/',
    intro: 'A hackable text editor for the 21st Century',
    icon: 'atom',
    color: '#E0AD38',
    classify: ['tools', 'software'],
  },
  {
    id: '7ceff82cbfc7472687e3bf637107ebfb',
    name: 'HBuilderX',
    url: 'https://www.dcloud.io/hbuilderx.html',
    intro: 'HBuilderX 是轻如编辑器、强如IDE的合体版本。',
    icon: 'hubilderx',
    color: '#1A9F35',
    classify: ['tools', 'software'],
  },
  {
    id: '83b6b56394114522be7c36d8c2a6bd2d',
    name: 'uTools',
    url: 'https://u.tools/',
    intro: '你的生产力工具集',
    icon: 'utools',
    color: '#172B4D',
    classify: ['tools', 'software'],
  },
  {
    id: '42a414464d7847d586bd58ee6c83a147',
    name: 'typora',
    url: 'https://typora.io/',
    intro: 'A TRULY MINIMAL MARKDOWN EDITOR.',
    icon: 'typora',
    color: '#999999',
    classify: ['tools', 'software'],
  },
  {
    id: 'ae2689493e4a42d896b4867ad75fa605',
    name: 'PicGo',
    url: 'https://picgo.github.io/PicGo-Doc/zh/',
    intro: '图片上传、管理新体验',
    icon: 'picgo',
    color: '#4CA4E3',
    classify: ['tools', 'software'],
  },
  {
    id: '0f2d7d7a0529413d8af90c16c3e41336',
    name: '思源笔记',
    url: 'https://b3log.org/siyuan/',
    intro:
      '思源笔记是一款本地优先的个人知识管理系统，支持完全离线使用，同时也支持端到端加密同步。融合块、大纲和双向链接，构建你永恒的数字花园。',
    icon: 'siyuan',
    color: '#D23E31',
    classify: ['tools', 'software'],
  },
  {
    id: '98be956869b8407883f3ab690a541069',
    name: 'RunJs',
    url: 'https://runjs.app/',
    intro: 'The JavaScript playground for your desktop',
    icon: 'runjs',
    color: '#F7DF1E',
    classify: ['tools', 'software'],
  },
  {
    id: 'd7d5fa1b79384985bf7dd449a0f41303',
    name: 'Sourcetree',
    url: 'https://www.sourcetreeapp.com/',
    intro: 'Simplicity and power in a beautiful Git GUI',
    icon: 'sourcetreeapp',
    color: '#2684FF',
    classify: ['tools', 'software'],
  },
  {
    id: 'dc14fce2bc1e4b4faaeb8f02a5ef1c98',
    name: 'Apifox',
    url: 'https://www.apifox.cn/',
    intro: 'API 文档、调试、Mock、测试一体化协作平台',
    icon: 'apifox',
    color: '#F65150',
    classify: ['tools', 'software'],
  },
  {
    id: 'd1474b8bf88a4f33b33c54c26bd2479f',
    name: 'Figma',
    url: 'https://www.figma.com/',
    intro: 'The collaborative interface design tool.',
    icon: 'figma',
    color: '#A259FF',
    classify: ['tools', 'software', 'onlineTools'],
  },
  {
    id: 'ee6806d9d0db413482c387649d7146e5',
    name: 'ShareX',
    url: 'https://getsharex.com/',
    intro: 'Screen capture, file sharing and productivity tool',
    icon: 'sharex',
    color: '#313642',
    classify: ['tools', 'software'],
  },
  {
    id: '551d2ced5e4a4e7eba712fb0e512ff32',
    name: 'EmojiAll官方网站',
    url: 'https://www.emojiall.com/',
    intro: 'Emoji大全 | Emoji表情符号字典',
    icon: 'emojiall',
    color: '#FD5D3B',
    classify: [],
  },
  {
    id: 'df30201ec4764704b3c6d42edd4af4dc',
    name: 'gitmoji',
    url: 'https://gitmoji.dev/',
    intro: 'An emoji guide for your commit messages',
    icon: 'gitmoji',
    color: '#FFDD67',
    classify: [],
  },
  {
    id: 'cab0470e567445e6832971fdf9aefd73',
    name: '老孟 Flutter',
    url: 'http://laomengit.com/',
    intro: '所有Flutter控件的详细用法、介绍、使用场景及注意问题',
    icon: 'laomengit',
    color: '#01B895',
    classify: ['develop', 'mobile terminal', 'document', 'flutter'],
  },
  {
    id: '8848034ad35f479798745b949169ab62',
    name: 'Flutter 实战 第二版',
    url: 'https://book.flutterchina.club/',
    intro: '由浅入深的介绍了Flutter技术和开发流程。',
    icon: 'bookflutterchina',
    color: '#2C3E50',
    classify: ['develop', 'flutter', 'document', 'mobile terminal'],
  },
  {
    id: 'bcef02d38bad4bd4b9498e669c139d4b',
    name: 'dayjs',
    url: 'https://www.npmjs.com/package/dayjs',
    intro:
      'Day.js 是一个轻量的处理时间和日期的 JavaScript 库，和 Moment.js 的 API 设计保持完全一样. 如果您曾经用过 Moment.js, 那么您已经知道如何使用 Day.js',
    icon: 'dayjs',
    color: '#FF5F4C',
    classify: ['develop', 'npm', 'package'],
  },
  {
    id: '7b51bd4d0c454217b6a32b62fb94ff56',
    name: 'Moment.js',
    url: 'https://www.npmjs.com/package/moment',
    intro: '用于解析、验证、操作和格式化日期的JavaScript日期库。',
    icon: 'moment',
    color: '#5E8381',
    classify: ['develop', 'package', 'npm'],
  },
  {
    id: 'e192d3f5c99f46488c47b09ee9593ad9',
    name: 'PowerToys',
    url: 'https://github.com/microsoft/PowerToys',
    intro: 'Windows系统实用程序，最大限度地提高生产力',
    icon: 'powertoys',
    color: '#F2E6CA',
    classify: ['tools', 'software'],
  },
  {
    id: '56f690d4574047bfbc83fc1dd9665717',
    name: '划水摸鱼',
    url: 'https://huashuimoyu.com/',
    intro: '',
    icon: 'huashuimoyu',
    color: '#FE6A4D',
    classify: ['common', 'news'],
  },
  {
    id: '4fcb3ac90a42440a886eebe1d82bc309',
    name: 'Oeasy',
    url: 'http://oeasy.org/',
    intro: 'oeasy，会玩才会学。',
    icon: 'oeasy',
    color: '#2C1D00',
    classify: ['develop', 'blog'],
  },
  {
    id: '37b8e1c3ede1435da1f6a9bcb9bb6eaf',
    name: '张鑫旭',
    url: 'https://www.zhangxinxu.com/',
    intro: '鑫空间，鑫生活',
    icon: 'zhangxinxu',
    color: '#3B598F',
    classify: ['develop', 'blog'],
  },
  {
    id: 'c422390a9fe14899bf216abe74f2d667',
    name: '廖雪峰的官方网站',
    url: 'https://www.liaoxuefeng.com/',
    intro: '',
    icon: 'liaoxuefeng',
    color: '#0593D3',
    classify: ['develop', 'blog'],
  },
  {
    id: 'da030715f6f34b5eb80221b18139fee2',
    name: '阮一峰的网络日志',
    url: 'http://www.ruanyifeng.com/blog/',
    intro: '',
    icon: 'ruanyifengblog',
    color: '#F5F5D5',
    classify: ['develop', 'blog'],
  },
  {
    id: '0e772096babc44f1935b6265f65cb6f2',
    name: 'Gitee',
    url: 'https://gitee.com/',
    intro:
      '代码托管·协作开发平台，开发者超过 600 万，托管项目超过 1500 万，汇聚几乎所有本土原创开源项目，并于 2016 年推出企业版，提供企业级代码托管服务，成为开发领域领先的 SaaS 服务提供商。',
    icon: 'gitee',
    color: '#C71D23',
    classify: ['develop', 'community'],
  },
  {
    id: 'cb14868f569642d3896fc2c5e4dd1735',
    name: 'Notion',
    url: 'https://www.notion.so/product',
    intro: 'The most flexible tool for managing all your work',
    icon: 'notion',
    color: '#000000',
    classify: ['software', 'tools'],
  },
  {
    id: '975c566fa1da4082920488e57f2b812e',
    name: 'README',
    url: 'https://readme.so/',
    intro: '快速编写README文件',
    icon: 'readme',
    color: '#37CA99',
    classify: ['develop', 'tools', 'onlineTools'],
  },
  {
    id: 'b99c088df8664298993e7b81b6278928',
    name: 'TDesign',
    url: 'https://tdesign.tencent.com/',
    intro: '开源的企业级设计体系',
    icon: 'tdesign',
    color: '#0052D9',
    classify: ['design', 'develop', 'front-end'],
  },
  {
    id: '486b61d5a6654602945b3de0114d3dfc',
    name: 'Microsoft Store - Generation Project',
    url: 'https://store.rg-adguard.net/',
    intro: '下载Microsoft Store应用离线包',
    icon: 'store.rg-adguard',
    color: '#007098',
    classify: ['tools', 'onlineTools'],
  },
  {
    id: '328b94f1aa634f1eb3dc3482d42b8d2f',
    name: 'use-deep-compare-effect',
    url: 'https://www.npmjs.com/package/use-deep-compare-effect',
    intro: '代替 React useEffect hook，实现深度比较',
    icon: 'use-deep-compare-effect',
    color: '#00A6ED',
    classify: ['develop', 'npm', 'package'],
  },
  {
    id: '469c98ed1f7b4b8f97c762e7c934a31f',
    name: 'TinyPng',
    url: 'https://tinypng.com/',
    intro: '智能WebP, PNG和JPEG压缩工具',
    icon: 'tinypng',
    color: '#83C12E',
    classify: ['tools', 'onlineTools'],
  },
  {
    id: '3e8be4406e4947a2bfe553890ae6db1a',
    name: 'shields',
    url: 'https://shields.io/',
    intro: '开源项目的高质量元数据徽章生成工具',
    icon: 'shields',
    color: '#000000',
    classify: ['tools', 'onlineTools'],
  },
  {
    id: '1c583f13f9aa4918b9bdf646f13b536b',
    name: '分流抢票',
    url: 'https://www.bypass.cn/',
    intro:
      '分流抢票，是以用户为中心、人性化的抢票软件。不做广告、不做推广、不携带病毒、不收集隐私信息，并接受各方技术评测，全心全意为用户打造一款属于自己的抢票软件',
    icon: 'bypass',
    color: '#3186D6',
    classify: ['tools', 'software'],
  },
  {
    id: '87c0a383527f4cadb552bb58f7ed4006',
    name: 'FlowUs',
    url: 'https://flowus.cn/product',
    intro:
      '个人及团队的新一代生产力工具，让复杂的信息管理更轻松、自由、充满创意。',
    icon: '',
    color: '#000000',
    classify: ['tools', 'software', 'onlineTools'],
  },
  {
    id: '4866f6b2bfcd4c0b9f4cb851f3a4066b',
    name: 'Public APIs',
    url: 'https://devresourc.es/',
    intro: '公开的api分享',
    icon: 'devresourc',
    color: '#0A0B0D',
    classify: ['develop'],
  },
  {
    id: '641a965adcb44f8a87d79e9a52b5f7b5',
    name: 'DevToys',
    url: 'https://devtoys.app/',
    intro: '一款离线Windows应用，帮助开发者完成日常任务',
    icon: 'devtoys',
    color: '#5E3685',
    classify: ['tools', 'software', 'develop'],
  },
  {
    id: 'afa10e1bfd004e5593010815ba63ca91',
    name: 'WakaTime',
    url: 'https://wakatime.com/',
    intro: '开发人员的仪表板开放源代码插件，用于统计编程时长',
    icon: 'wakatime',
    color: '#29333A',
    classify: ['tools', 'onlineTools', 'develop'],
  },
  {
    id: '5c3bd8bf9338418780736a30b7e0a563',
    name: 'Free Download Manager',
    url: 'https://www.freedownloadmanager.org/',
    intro:
      '一款在Windows, macOS, Android 及Linux 作業系統下，強大又現代的下載加速組織器。',
    icon: 'freedownloadmanager',
    color: '#4E6680',
    classify: ['tools', 'software'],
  },
  {
    id: 'fc90a25b52d1460491e793392ef60bf7',
    name: 'I Tell You',
    url: 'https://next.itellyou.cn/',
    intro: '提供可靠的原版软件',
    icon: 'itellyou',
    color: '#2273DB',
    classify: ['tools', 'onlineTools'],
  },
  {
    id: '8ec036f6c8614303ba68597e615778c9',
    name: '软碟通',
    url: 'https://cn.ultraiso.net/',
    intro: '最专业的ISO工具',
    icon: 'ultraiso',
    color: '#4273C6',
    classify: ['tools', 'software'],
  },
  {
    id: '303f7a88beab4dbb9127e012533d79d8',
    name: 'GitHub Copilot',
    url: 'https://copilot.github.com/',
    intro: 'AI智能代码工具',
    icon: 'copilot',
    color: '#2C3C49',
    classify: ['develop', 'tools'],
  },
  {
    id: '330e4e753a704c9e82430325270c6268',
    name: '中国天气网',
    url: 'http://www.weather.com.cn/',
    intro: '天气通讯社，百姓贴人心',
    icon: 'weather_cn',
    color: '#0A5BAC',
    classify: ['news', 'life'],
  },
  {
    id: '4c3cc03621c34f65b2b440fd35a362fe',
    name: '中国台风网',
    url: 'http://typhoon.nmc.cn/',
    intro: '中国气象局台风预警',
    icon: 'typhoon',
    color: '#0C4C8D',
    classify: ['news', 'life'],
  },
  {
    id: '87142406ddab48b0999d57b82a2888e7',
    name: '程序员做饭指南',
    url: 'https://cook.aiurs.co/',
    intro: '程序员在家做饭方法指南。',
    icon: 'cook',
    color: '#159957',
    classify: ['news', 'life'],
  },
  {
    id: '18426961ce4745d9ac9ebbb05392914e',
    name: 'Lodash',
    url: 'https://www.lodashjs.com/',
    intro: 'Lodash 是一个一致性、模块化、高性能的 JavaScript 实用工具库。',
    icon: 'lodash',
    color: '#3492FF',
    classify: ['develop', 'npm'],
  },
  {
    id: 'd33ede4e11da498e8353594e56bc4709',
    name: 'Matter JS',
    url: 'https://brm.io/matter-js/',
    intro: 'Matter.js 是一个开源的 2D 物理引擎，用于制作游戏、动画和模拟。',
    icon: 'matter',
    color: '#000000',
    classify: ['develop', 'npm'],
  },
  {
    id: 'dff5f0f533b947e3816aa9c62cee9851',
    name: 'Openbase',
    url: 'https://openbase.com/',
    intro: '选择合适的插件包',
    icon: 'openbase',
    color: '#E0F7F7',
    classify: ['develop', 'onlineTools'],
  },
  {
    id: '09bbfb8b651b449b99763b49de32ad4a',
    name: '图灵社区',
    url: 'https://www.ituring.com.cn/',
    intro: '',
    icon: 'ituring',
    color: '#00457A',
    classify: ['common', 'shopping', 'book', 'develop'],
  },
  {
    id: '2abb9ca6308440d28f004555b024f7cc',
    name: '当当网',
    url: 'http://book.dangdang.com/',
    intro: '全球最大中文网上书店',
    icon: 'bookdangdang',
    color: '#FE382F',
    classify: ['common', 'shopping', 'book'],
  },
  {
    id: '60d0bde78d7f44b0b2de118cbabb63f2',
    name: 'Formily JS',
    url: 'http://formilyjs.org/',
    intro: '阿里巴巴统一前端表单解决方案',
    icon: 'formily',
    color: '#4d1db5',
    classify: ['develop', 'npm', 'front-end'],
  },
  {
    id: 'f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8',
    name: 'Can I Use',
    url: 'https://caniuse.com/',
    intro: '查询浏览器支持的前端技术',
    icon: 'caniuse',
    color: '#c75000',
    classify: ['develop', 'onlineTools', 'front-end'],
  },
];

export default allWebsites;
