const DESC_TOP = [
  {
    id: 1,
    p: '안녕하세요. 저는 백엔드 개발자 곽양신 입니다.',
    strong: '“저는 시작한 일은 포기하지 않고 반드시 끝내는 성격을 가지고 있습니다.”',
  },
  {
    id: 2,
    p: '정보시스템공학과를 전공으로 졸업하고 3년간 보안 시스템 엔지니어로 활동하다가',
    strong: '뒤늦게 개발에 흥미가 더욱 생겨 꾸준히 공부하기 위해 노력하고 있습니다.🙂',
  },
];

const DESC_BOTTOM = [
  {
    id: 3,
    p: '※ 보안 시스템 엔지니어로 일하면서 다양한 문제를 접하게 되었고,<br/> 　이러한 문제를 더 효과적으로 해결하기 위해 개발자로 전향하게 되었습니다.',
  },
  {
    id: 4,
    p: '※ 개발자가 된 계기는 기술을 통해 문제를 해결하고 사람들에게 도움이 되는 <br/> 　서비스를 만들고 싶다는 열망에서 시작되었습니다.',
  },
];

const KEYWORD = [
  {
    id: 1,
    title: '배려하는 성격',
    text: '상대방의 이야기를 들어주는 것을 좋아하고 진심을 다해 조언해주며 매순간 신중하고 열심히 사려고 노력하고 있습니다.',
  },
  {
    id: 2,
    title: '계획적',
    text: '하나를 시작하면 어떤 어려움이 있어도 최선을 다해 끝내는 성격을 가졌으며 계획을 세워 하루를 보내는 것이 마음이 편한 ISTJ입니다.',
  },
  {
    id: 3,
    title: '열정적',
    text: '내성적인 것 같지만 알고보면 정말 활동적인 것을 좋아하는 열정적인 성격을 가졌습니다. 대학교다닐 때는 학생회 기획부를 맡았으며 클래식 기타 동아리 활동을 했었습니다. 사람들과 어울리는 것을 좋아했습니다.',
  },
];

const projectData = {
  project1: {
    title: '셜록홈즈',
    images: [
      '/project/project1/main.png',
      '/project/project1/room2.png',
      '/project/project1/room.png',
      '/project/project1/mypage.png'
    ],
    description: '이 프로젝트는 전세 사기 없는 부동산 사이트의 관리자 페이지를 만들고자 한 프로젝트입니다. 부동산 거래의 안전성을 보장하기 위해 사용자 리뷰와 거래 이력을 기반으로 한 신뢰도 평가 시스템을 통해 안전하고 투명한 거래 환경을 제공합니다.',
    githubFrontend: 'https://github.com/yourusername/project1-frontend',
    githubBackend: 'https://github.com/yourusername/project1-backend',
    notion: 'https://www.notion.so/yourusername/project1',
    youtube: 'https://www.youtube.com/yourusername/project1',
    techStack: ['HTML', 'CSS', 'JavaScript', 'JSP', 'JAVA', 'Servlet', 'mysql', 'GitHub']
  },
  project2: {
    title: '야생의숨결',
    images: [
      '/project/project2/festival.png',
      '/project/project2/main.png',
      '/project/project2/search.png',
      '/project/project2/weather.png'
    ],
    description: '이 프로젝트는 캠핑 추천 사이트로, 사용자에게 맞춤형 캠핑 장소를 추천합니다. 사용자 선호도와 날씨 기반 추천 시스템을 활용하여 최적의 캠핑 장소를 제공하고, 리뷰를 통해 사용자 경험을 제공합니다.',
    githubFrontend: 'https://github.com/yourusername/project2-frontend',
    githubBackend: 'https://github.com/yourusername/project2-backend',
    notion: 'https://www.notion.so/yourusername/project2',
    youtube: 'https://www.youtube.com/yourusername/project2',
    techStack: ['React', 'Tailwind', 'JavaScript', 'Vite', 'Java', 'Spring Boot', 'MySQL', 'Git Action', 'DockerHub', 'AWS', 'Notion']
  },
  project3: {
    title: '우리집 비어',
    images: [
      '/project/project3/game.png',
      '/project/project3/main.png',
      '/project/project3/room.png',
      '/project/project3/mypage.png'
    ],
    description: '이 프로젝트는 친구들과 온라인에서 만나 화상 채팅을 통해 다양한 게임을 즐길 수 있는 플랫폼입니다. 실시간 채팅과 게임 룸 기능을 통해 재미있는 온라인 술자리를 제공하며, 친구 추가 및 관리 기능을 통해 사용자 경험을 극대화합니다.',
    githubFrontend: 'https://github.com/conchohi/beer_front',
    githubBackend: 'https://github.com/conchohi/beer_backend',
    notion: 'https://www.notion.so/REST-API-0039edd504344061b598bbe5fb16dfab',
    youtube: 'https://www.youtube.com/watch?v=RDssr8zE3Nw',
    techStack: ['React', 'Tailwind', 'JavaScript', 'HTML', 'CSS', 'Java', 'Spring Boot', 'MySQL', 'Git Action', 'DockerHub', 'AWS', 'Notion']
  }
};

const projects = [
  {
    id: 'project1',
    period: '2024.03 - 2024.04',
    title: '셜록홈즈',
    role: 'Backend Developer',
    description: '부동산 거래의 안전성을 보장하기 위해 전세 사기 예방 기능을 탑재한 부동산 사이트입니다. 사용자 리뷰와 거래 이력을 기반으로 한 신뢰도 평가 시스템과 법적 검토 기능을 통해 안전하고 투명한 거래 환경을 제공합니다.',
    detail: '이 프로젝트는 안전하고 신뢰할 수 있는 부동산 거래를 위해 전세 사기 예방 기능을 탑재한 사이트입니다. 사용자 리뷰, 거래 이력, 법적 검토 등을 통해 안전한 거래를 보장합니다.'
  },
  {
    id: 'project2',
    period: '2024.04 - 2024.05',
    title: '야생의숨결',
    role: 'Full Stack Developer',
    description: '사용자의 선호도와 위치 기반 추천 시스템을 활용하여 최적의 캠핑 장소를 제공하는 캠핑 추천 사이트입니다. 리뷰와 평점을 통해 사용자 경험을 향상시키고, 캠핑 용품 대여 및 예약 시스템 등의 부가 기능을 통해 캠핑 준비를 더욱 간편하게 도와줍니다.',
    detail: '사용자 선호도, 위치 기반 추천, 리뷰 및 평점을 통해 최적의 캠핑 장소를 제공합니다. 캠핑 용품 대여, 예약 시스템 등의 부가 기능도 포함되어 있습니다.'
  },
  {
    id: 'project3',
    period: '2024.05 - 2024.06',
    title: '우리집 비어',
    role: 'Full Stack Developer',
    description: '친구들과 온라인에서 만나 화상 채팅을 통해 다양한 게임을 즐길 수 있는 플랫폼입니다. 실시간 채팅과 게임 룸 기능을 통해 재미있는 온라인 술자리를 제공하며, 친구 추가 및 관리 기능을 통해 사용자 경험을 극대화합니다.',
    detail: '이 프로젝트는 친구들과 온라인에서 만나 화상채팅을 하며 다양한 게임을 즐길 수 있는 플랫폼입니다. 실시간 채팅, 게임 룸, 친구 추가 및 관리 기능을 제공합니다.'
  }
];

const careers = [
  {
    period: '2017.07 - 2017.12',
    title: 'SK오앤에스',
    role: '인턴',
    description: '기지국 및 통신사옥의 품질 관리와 유지 보수 업무를 담당하였습니다. 광랜 통신장비의 상태를 모니터링하고 문제 발생 시 신속히 대응하여 통신 품질을 유지했습니다. 장비의 정기 점검과 소프트웨어 업그레이드도 수행하여 안정적인 통신 환경을 제공했습니다. 이러한 경험을 통해 통신 기술과 유지 보수 프로세스에 대한 실무 역량을 쌓았습니다.'
  },
  {
    period: '2019.09 - 2020.02',
    title: 'KH교육원',
    role: '정보보안 기반 해킹기법 분석 양성 과정',
    description: '보안 프로토콜과 암호화 기법, 방화벽, IDS/IPS, VPN 등 다양한 보안 기술을 학습하였습니다. 네트워크의 취약점을 분석하고 모의 해킹을 통해 보안 대책을 마련하는 방법을 익혔습니다. 실습을 통해 실제 환경에서의 해킹 기법과 대응 방안을 체험했습니다. 이 과정에서 보안 위협에 대한 분석 능력을 향상시키고, 실무에 적용할 수 있는 기술을 습득했습니다.'
  },
  {
    period: '2021.01 - 2024.02',
    title: '코어코드시스템',
    role: '시스템 엔지니어',
    description: '보안 솔루션 장비의 납품 및 유지 보수를 담당하였습니다. 고객사의 보안 요구 사항을 분석하여 최적의 솔루션을 제공하고, 시스템의 안정적 운영을 위해 지속적인 모니터링과 기술 지원을 수행했습니다. 또한, 보안 정책 설정과 정기적인 보안 점검을 통해 보안 수준을 유지했습니다. 다양한 프로젝트를 수행하며 문제 해결 능력을 키웠고, 팀 협업의 중요성을 경험했습니다.'
  },
  {
    period: '2023.12 - 2024.06',
    title: '중앙정보기술인재개발원',
    role: '클라우드 데브옵스 프론트엔드&백엔드 자바 풀스택 개발자 취업캠프',
    description: 'CI/CD 파이프라인 구축 및 자동화 도구 사용에 대한 심화 학습을 진행하였습니다. 컨테이너 기술(Docker, Kubernetes)을 활용한 애플리케이션 배포 및 관리, HTML, CSS, JavaScript, React를 사용한 프론트엔드 개발, JAVA, Spring Boot, SQL, RESTful API 설계 등 풀스택 개발자로서의 역량을 강화했습니다. 프로젝트를 통해 프로젝트 경험을 쌓고 팀 협업 역량을 높였습니다. 이를 통해 다양한 기술들을 익히고, 개발 능력을 키웠습니다.'
  }
];

export { DESC_TOP, DESC_BOTTOM, KEYWORD, projectData, careers, projects };
