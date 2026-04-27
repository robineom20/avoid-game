const questions = [
  {
    id: "q1",
    category: "MOVIE SCENE",
    prompt: "영화 첫 장면이 시작될 때 가장 끌리는 분위기는?",
    options: [
      {
        label: "숨죽이게 되는 정적",
        caption: "느리지만 깊게 빨려 들어가는 시작",
        scores: { emotional: 2, cerebral: 1, dark: 1, dreamy: 2 },
      },
      {
        label: "바로 질주하는 긴장감",
        caption: "시작부터 에너지가 솟는 전개",
        scores: { kinetic: 3, bold: 1 },
      },
      {
        label: "현실인지 환상인지 모를 장면",
        caption: "해석의 여지를 남기는 오프닝",
        scores: { dreamy: 3, cerebral: 2 },
      },
      {
        label: "강한 색감과 스타일",
        caption: "시각적 감각에 먼저 반하는 편",
        scores: { bold: 3, kinetic: 1 },
      },
    ],
  },
  {
    id: "q2",
    category: "PLAYLIST VIBE",
    prompt: "밤에 이어폰을 꽂고 걷는다면 어떤 곡이 어울려야 할까?",
    options: [
      {
        label: "서서히 무너지는 감정선",
        caption: "잔잔한데 오래 남는 멜로디",
        scores: { emotional: 3, dreamy: 1 },
      },
      {
        label: "베이스가 심장을 치는 곡",
        caption: "걷는 속도까지 빨라지는 타입",
        scores: { kinetic: 3, bold: 2 },
      },
      {
        label: "묘하게 낯설고 실험적인 사운드",
        caption: "한 번 더 듣고 싶어지는 이상한 매력",
        scores: { cerebral: 2, dreamy: 2, dark: 1 },
      },
      {
        label: "빛 번지는 듯한 신스와 잔향",
        caption: "공간감 있는 몽환적인 사운드",
        scores: { dreamy: 3, emotional: 1 },
      },
    ],
  },
  {
    id: "q3",
    category: "CHARACTER",
    prompt: "주인공에게 가장 기대하는 매력은?",
    options: [
      {
        label: "감정을 숨기지 않는 진심",
        caption: "서툴러도 마음이 보이는 인물",
        scores: { emotional: 3 },
      },
      {
        label: "머릿속이 궁금한 복잡함",
        caption: "생각할 거리를 던지는 인물",
        scores: { cerebral: 3, dark: 1 },
      },
      {
        label: "무너질 듯 강한 카리스마",
        caption: "위태로운데 이상하게 눈이 가는 타입",
        scores: { dark: 2, bold: 2 },
      },
      {
        label: "장면 자체를 움직이는 에너지",
        caption: "등장만 해도 리듬이 생기는 인물",
        scores: { kinetic: 2, bold: 2 },
      },
    ],
  },
  {
    id: "q4",
    category: "ENDING",
    prompt: "가장 좋아하는 엔딩의 형태는?",
    options: [
      {
        label: "해답보다 여운이 남는 결말",
        caption: "집에 가서도 계속 생각나는 마무리",
        scores: { dreamy: 2, cerebral: 2, emotional: 1 },
      },
      {
        label: "시원하게 터지는 카타르시스",
        caption: "끝났다는 느낌이 확실히 드는 엔딩",
        scores: { kinetic: 2, bold: 2 },
      },
      {
        label: "아픈데 아름다운 마침표",
        caption: "마음에 오래 걸리는 슬픈 끝",
        scores: { emotional: 3, dark: 1 },
      },
      {
        label: "찝찝하지만 완벽한 불안",
        caption: "조금 무섭고 조금 황홀한 마무리",
        scores: { dark: 3, cerebral: 1 },
      },
    ],
  },
  {
    id: "q5",
    category: "SOCIAL ENERGY",
    prompt: "친구에게 작품을 추천할 때 보통 뭐라고 말하나?",
    options: [
      {
        label: "감정선이 미쳤어",
        caption: "마음을 건드리는 작품에 약하다",
        scores: { emotional: 3 },
      },
      {
        label: "연출이 진짜 세련됐어",
        caption: "스타일과 미감에 먼저 꽂힌다",
        scores: { bold: 3, dreamy: 1 },
      },
      {
        label: "해석할 맛이 있어",
        caption: "한 번 보고 끝나지 않는 작품을 좋아한다",
        scores: { cerebral: 3 },
      },
      {
        label: "몰입감 때문에 순삭이야",
        caption: "속도감과 추진력이 중요하다",
        scores: { kinetic: 3 },
      },
    ],
  },
  {
    id: "q6",
    category: "COLOR",
    prompt: "당신의 플레이리스트를 색 하나로 표현하면?",
    options: [
      {
        label: "새벽 네이비",
        caption: "차갑고 고요한 감정이 맴도는 색",
        scores: { emotional: 1, dark: 2, dreamy: 1 },
      },
      {
        label: "타오르는 오렌지",
        caption: "리듬과 확신이 먼저 느껴지는 색",
        scores: { kinetic: 2, bold: 2 },
      },
      {
        label: "안개 낀 실버",
        caption: "중간 톤의 모호함과 세련됨",
        scores: { cerebral: 2, dreamy: 2 },
      },
      {
        label: "바랜 로즈",
        caption: "부드럽고 사적인 감정이 묻어나는 색",
        scores: { emotional: 3, dreamy: 1 },
      },
    ],
  },
  {
    id: "q7",
    category: "GENRE LEAN",
    prompt: "더 끌리는 조합은 어느 쪽인가?",
    options: [
      {
        label: "멜로 + 성장",
        caption: "사람의 마음이 움직이는 서사",
        scores: { emotional: 3 },
      },
      {
        label: "스릴러 + 심리전",
        caption: "불안과 긴장이 교차하는 재미",
        scores: { dark: 3, cerebral: 1 },
      },
      {
        label: "SF + 몽환",
        caption: "현실을 벗어난 감각적 상상력",
        scores: { dreamy: 3, cerebral: 1 },
      },
      {
        label: "액션 + 스타일",
        caption: "에너지와 미감이 동시에 있어야 한다",
        scores: { kinetic: 2, bold: 3 },
      },
    ],
  },
  {
    id: "q8",
    category: "REWATCH",
    prompt: "다시 보게 되는 작품의 이유는 보통 무엇인가?",
    options: [
      {
        label: "그때의 감정이 다시 오기 때문",
        caption: "특정 장면과 감정에 오래 머문다",
        scores: { emotional: 3 },
      },
      {
        label: "디테일을 더 발견하고 싶어서",
        caption: "볼수록 구조가 보이는 작품이 좋다",
        scores: { cerebral: 3 },
      },
      {
        label: "분위기에 잠기고 싶어서",
        caption: "스토리보다 공기감이 더 중요할 때가 있다",
        scores: { dreamy: 3, dark: 1 },
      },
      {
        label: "그 리듬이 그냥 짜릿해서",
        caption: "몰입감 있는 작품은 반복해도 재밌다",
        scores: { kinetic: 3, bold: 1 },
      },
    ],
  },
  {
    id: "q9",
    category: "DISCOVERY",
    prompt: "새로운 작품을 찾을 때 가장 믿는 신호는?",
    options: [
      {
        label: "친구가 감정적으로 강력 추천한 말",
        caption: "누군가의 진심 어린 반응에 마음이 움직인다",
        scores: { emotional: 3, dreamy: 1 },
      },
      {
        label: "트레일러의 리듬과 편집감",
        caption: "몇 초 안에 에너지가 느껴지면 바로 끌린다",
        scores: { kinetic: 3, bold: 1 },
      },
      {
        label: "평론이나 해석글의 밀도",
        caption: "생각할 지점이 많은 작품이 더 궁금하다",
        scores: { cerebral: 3, dark: 1 },
      },
      {
        label: "포스터와 사운드의 첫인상",
        caption: "설명보다 이미지와 분위기에 먼저 반응한다",
        scores: { bold: 2, dreamy: 2 },
      },
    ],
  },
  {
    id: "q10",
    category: "AFTERTASTE",
    prompt: "좋은 작품을 본 뒤 남았으면 하는 감각은?",
    options: [
      {
        label: "조용히 마음이 흔들리는 느낌",
        caption: "큰 사건보다 오래 남는 감정이 중요하다",
        scores: { emotional: 3, dreamy: 1 },
      },
      {
        label: "몸이 먼저 반응하는 짜릿함",
        caption: "속도, 리듬, 쾌감이 확실해야 한다",
        scores: { kinetic: 3, bold: 2 },
      },
      {
        label: "머릿속에 질문이 남는 느낌",
        caption: "끝나고도 구조와 의미를 다시 떠올린다",
        scores: { cerebral: 3 },
      },
      {
        label: "조금 위험하고 낯선 분위기",
        caption: "완전히 편한 것보다 불온한 매력에 끌린다",
        scores: { dark: 3, dreamy: 1 },
      },
    ],
  },
  {
    id: "q11",
    category: "PACE CONTROL",
    prompt: "작품의 리듬은 어느 쪽일 때 더 잘 맞나요?",
    options: [
      {
        label: "천천히 스며드는 슬로우번",
        caption: "느린 장면도 감정이 있으면 끝까지 따라갑니다",
        scores: { emotional: 2, dreamy: 2, cerebral: 1 },
      },
      {
        label: "컷이 빠르고 몸이 반응하는 전개",
        caption: "생각보다 먼저 리듬과 박자가 중요합니다",
        scores: { kinetic: 3, bold: 1 },
      },
      {
        label: "퍼즐처럼 조각이 맞춰지는 구조",
        caption: "장면마다 단서가 있는 작품에 끌립니다",
        scores: { cerebral: 3, dark: 1 },
      },
      {
        label: "공기감으로 밀고 가는 분위기",
        caption: "사건보다 빛, 소리, 여백이 오래 남습니다",
        scores: { dreamy: 3, emotional: 1 },
      },
    ],
  },
  {
    id: "q12",
    category: "SOUND TEXTURE",
    prompt: "음악에서 가장 먼저 귀에 들어오는 질감은?",
    options: [
      {
        label: "목소리의 떨림과 가사",
        caption: "잘 부르는 것보다 진심이 느껴지는 곡",
        scores: { emotional: 3, cerebral: 1 },
      },
      {
        label: "묵직한 드럼과 베이스",
        caption: "걷는 속도를 바꾸는 리듬",
        scores: { kinetic: 3, bold: 1 },
      },
      {
        label: "낯선 편곡과 이상한 소리",
        caption: "처음엔 어색해도 계속 해석하게 되는 사운드",
        scores: { cerebral: 2, dark: 1, bold: 1 },
      },
      {
        label: "흐릿하게 번지는 앰비언스",
        caption: "공간 전체가 노래처럼 느껴지는 곡",
        scores: { dreamy: 3, dark: 1 },
      },
    ],
  },
  {
    id: "q13",
    category: "CONFLICT",
    prompt: "이야기 속 갈등은 어떤 결일 때 몰입되나요?",
    options: [
      {
        label: "사람과 사람 사이의 미묘한 어긋남",
        caption: "큰 사건보다 관계의 작은 균열이 더 아픕니다",
        scores: { emotional: 3, cerebral: 1 },
      },
      {
        label: "도망치고 쫓기는 생존의 압박",
        caption: "긴장감이 끊기지 않는 흐름이 좋습니다",
        scores: { kinetic: 3, dark: 1 },
      },
      {
        label: "선과 악이 흐려지는 도덕적 선택",
        caption: "보고 나서도 어느 쪽인지 쉽게 말하기 어렵습니다",
        scores: { cerebral: 3, dark: 2 },
      },
      {
        label: "현실이 살짝 틀어지는 불길함",
        caption: "익숙한 공간이 갑자기 낯설어질 때 끌립니다",
        scores: { dark: 2, dreamy: 2, bold: 1 },
      },
    ],
  },
  {
    id: "q14",
    category: "VISUAL STYLE",
    prompt: "화면의 스타일은 어떤 방향이면 더 좋나요?",
    options: [
      {
        label: "자연광과 가까운 얼굴",
        caption: "꾸미지 않은 표정과 순간을 믿는 편",
        scores: { emotional: 3, dreamy: 1 },
      },
      {
        label: "네온, 움직임, 선명한 대비",
        caption: "보는 순간 눈이 즐거운 스타일",
        scores: { bold: 3, kinetic: 2 },
      },
      {
        label: "차갑고 정돈된 미래감",
        caption: "깔끔한 구도와 지적인 긴장이 좋습니다",
        scores: { cerebral: 2, dreamy: 2, dark: 1 },
      },
      {
        label: "기괴하지만 아름다운 장식성",
        caption: "조금 과감하고 낯선 미감에 반응합니다",
        scores: { bold: 2, dark: 2, dreamy: 1 },
      },
    ],
  },
  {
    id: "q15",
    category: "FINAL MOOD",
    prompt: "지금 추천받고 싶은 최종 무드는 어느 쪽인가요?",
    options: [
      {
        label: "마음이 풀리는 사적인 위로",
        caption: "조용하지만 정확하게 건드리는 작품",
        scores: { emotional: 3, dreamy: 1 },
      },
      {
        label: "기분을 확 끌어올리는 추진력",
        caption: "바로 재생하고 바로 몰입되는 쾌감",
        scores: { kinetic: 3, bold: 2 },
      },
      {
        label: "끝나고도 생각나는 미로",
        caption: "단순한 재미보다 해석의 여지가 중요합니다",
        scores: { cerebral: 3, dark: 1 },
      },
      {
        label: "낯설고 아름다운 밤의 감각",
        caption: "몽환, 불안, 스타일이 섞인 취향",
        scores: { dreamy: 2, dark: 2, bold: 1 },
      },
    ],
  },
];

const profileLabels = {
  emotional: "감정",
  kinetic: "속도감",
  cerebral: "해석력",
  dreamy: "몽환",
  dark: "어둠",
  bold: "스타일",
};

const movies = [
  {
    title: "이터널 선샤인",
    subtitle: "Michel Gondry",
    tags: { emotional: 3, dreamy: 3, cerebral: 2 },
    note: "감정과 상상력이 섞인 사랑 이야기를 좋아할 때 특히 강하게 맞습니다.",
  },
  {
    title: "라라랜드",
    subtitle: "Damien Chazelle",
    tags: { emotional: 3, bold: 2, dreamy: 1 },
    note: "선명한 색감과 감정의 파동을 함께 원하는 취향에 잘 맞습니다.",
  },
  {
    title: "위플래쉬",
    subtitle: "Damien Chazelle",
    tags: { kinetic: 3, dark: 1, bold: 2 },
    note: "강한 추진력과 압박감 있는 리듬을 사랑하는 사람에게 추천합니다.",
  },
  {
    title: "블레이드 러너 2049",
    subtitle: "Denis Villeneuve",
    tags: { dreamy: 3, cerebral: 2, dark: 2, bold: 2 },
    note: "몽환적인 미래감과 묵직한 고독을 즐기는 취향에 어울립니다.",
  },
  {
    title: "문라이트",
    subtitle: "Barry Jenkins",
    tags: { emotional: 3, dreamy: 2, dark: 1 },
    note: "아주 사적인 감정선을 조용히 따라가는 작품을 좋아한다면 좋습니다.",
  },
  {
    title: "나이브스 아웃",
    subtitle: "Rian Johnson",
    tags: { cerebral: 2, kinetic: 2, bold: 1 },
    note: "복잡한 구조를 유쾌하게 즐기고 싶을 때 잘 맞는 선택입니다.",
  },
  {
    title: "올드보이",
    subtitle: "Park Chan-wook",
    tags: { dark: 3, bold: 3, cerebral: 1 },
    note: "강한 스타일과 어두운 에너지에 끌리는 취향에 강력합니다.",
  },
  {
    title: "인셉션",
    subtitle: "Christopher Nolan",
    tags: { cerebral: 3, kinetic: 2, dreamy: 2 },
    note: "구조를 해석하는 재미와 스케일감을 같이 원하는 사람에게 맞습니다.",
  },
  {
    title: "그랜드 부다페스트 호텔",
    subtitle: "Wes Anderson",
    tags: { bold: 3, cerebral: 1, kinetic: 1 },
    note: "미장센과 리듬감 있는 스타일을 먼저 사랑하는 취향에 잘 맞습니다.",
  },
  {
    title: "드라이브",
    subtitle: "Nicolas Winding Refn",
    tags: { dark: 2, dreamy: 2, bold: 3, kinetic: 1 },
    note: "차갑고 세련된 분위기, 적은 대사, 큰 여운을 좋아할 때 추천합니다.",
  },
  {
    title: "Her",
    subtitle: "Spike Jonze",
    tags: { emotional: 3, dreamy: 2, cerebral: 2 },
    note: "섬세한 감정과 미래적 상상력이 함께 있는 작품을 좋아할 때 잘 맞습니다.",
  },
  {
    title: "Arrival",
    subtitle: "Denis Villeneuve",
    tags: { cerebral: 3, emotional: 2, dreamy: 1 },
    note: "생각할 거리와 감정적 울림이 함께 오는 SF를 좋아하는 취향에 어울립니다.",
  },
  {
    title: "Perfect Blue",
    subtitle: "Satoshi Kon",
    tags: { dark: 3, cerebral: 2, dreamy: 2 },
    note: "현실과 환상이 섞이는 불안한 심리극을 선호한다면 강하게 맞습니다.",
  },
  {
    title: "Lost in Translation",
    subtitle: "Sofia Coppola",
    tags: { dreamy: 3, emotional: 2, dark: 1 },
    note: "조용한 고독과 미묘한 관계의 떨림에 끌리는 취향에 잘 맞습니다.",
  },
  {
    title: "Mad Max: Fury Road",
    subtitle: "George Miller",
    tags: { kinetic: 3, bold: 3 },
    note: "에너지와 스타일이 한 번에 폭발하는 작품을 좋아한다면 거의 정답입니다.",
  },
  {
    title: "Ex Machina",
    subtitle: "Alex Garland",
    tags: { cerebral: 3, dark: 2, dreamy: 1 },
    note: "차갑고 영리한 긴장감을 좋아하는 취향에 특히 잘 맞습니다.",
  },
  {
    title: "The Handmaiden",
    subtitle: "Park Chan-wook",
    tags: { bold: 3, dark: 2, emotional: 1, cerebral: 1 },
    note: "강렬한 미장센과 위험한 로맨스의 결을 함께 즐기는 사람에게 추천합니다.",
  },
  {
    title: "Aftersun",
    subtitle: "Charlotte Wells",
    tags: { emotional: 3, dreamy: 2, dark: 1 },
    note: "직설적인 설명보다 조용한 감정의 잔향을 오래 붙잡는 취향에 잘 맞습니다.",
  },
  {
    title: "Everything Everywhere All at Once",
    subtitle: "Daniel Kwan & Daniel Scheinert",
    tags: { kinetic: 2, bold: 2, emotional: 2, cerebral: 1 },
    note: "혼란스러울 만큼 과감한 에너지와 의외의 감정선을 함께 원할 때 좋습니다.",
  },
  {
    title: "The Lobster",
    subtitle: "Yorgos Lanthimos",
    tags: { cerebral: 3, dark: 2, bold: 1 },
    note: "이상하고 차가운 유머, 사회적 은유, 불편한 매력을 좋아하는 취향에 맞습니다.",
  },
  {
    title: "Before Sunrise",
    subtitle: "Richard Linklater",
    tags: { emotional: 3, cerebral: 1, dreamy: 1 },
    note: "대화와 감정의 흐름이 중요한 사람이라면 유난히 깊게 남을 작품입니다.",
  },
  {
    title: "Uncut Gems",
    subtitle: "Safdie Brothers",
    tags: { kinetic: 3, dark: 2, bold: 1 },
    note: "숨 막히는 속도감과 위태로운 에너지 자체에 끌리는 성향에 강하게 맞습니다.",
  },
  {
    title: "Decision to Leave",
    subtitle: "Park Chan-wook",
    tags: { emotional: 2, cerebral: 2, dreamy: 2, dark: 1 },
    note: "정교한 연출과 애매한 감정의 결을 함께 음미하는 취향에 어울립니다.",
  },
  {
    title: "The Matrix",
    subtitle: "The Wachowskis",
    tags: { kinetic: 2, cerebral: 3, bold: 2 },
    note: "철학적 질문과 아이코닉한 스타일을 동시에 좋아하는 사람에게 잘 맞습니다.",
  },
  {
    title: "Punch-Drunk Love",
    subtitle: "Paul Thomas Anderson",
    tags: { emotional: 2, bold: 2, dreamy: 1 },
    note: "조금 이상하지만 강하게 두근거리는 감정선을 좋아한다면 추천합니다.",
  },
  {
    title: "Black Swan",
    subtitle: "Darren Aronofsky",
    tags: { dark: 3, emotional: 2, bold: 2 },
    note: "불안과 집착이 아름답게 폭주하는 이야기에 끌리는 취향에 강력합니다.",
  },
  {
    title: "Past Lives",
    subtitle: "Celine Song",
    tags: { emotional: 3, cerebral: 1, dreamy: 1 },
    note: "말하지 못한 감정과 지나간 시간의 여운을 사랑하는 사람에게 어울립니다.",
  },
  {
    title: "Akira",
    subtitle: "Katsuhiro Otomo",
    tags: { bold: 3, kinetic: 2, dark: 2, cerebral: 1 },
    note: "거대한 에너지와 파괴적 미감을 즐기는 취향에 잘 맞는 클래식입니다.",
  },
  {
    title: "Prisoners",
    subtitle: "Denis Villeneuve",
    tags: { dark: 3, cerebral: 2, emotional: 1 },
    note: "묵직한 긴장감과 도덕적 불안을 좋아하는 성향에 특히 잘 맞습니다.",
  },
  {
    title: "Frances Ha",
    subtitle: "Noah Baumbach",
    tags: { emotional: 2, kinetic: 1, cerebral: 1, bold: 1 },
    note: "가볍게 흘러가지만 묘하게 현실적인 성장 서사를 좋아할 때 추천합니다.",
  },
  {
    title: "Portrait of a Lady on Fire",
    subtitle: "Celine Sciamma",
    tags: { emotional: 3, dreamy: 2, bold: 1 },
    note: "말보다 시선과 침묵으로 감정이 쌓이는 영화를 좋아한다면 잘 맞습니다.",
  },
  {
    title: "Parasite",
    subtitle: "Bong Joon-ho",
    tags: { cerebral: 3, dark: 2, kinetic: 1 },
    note: "사회적 긴장과 장르적 재미가 동시에 있는 작품을 원할 때 강력합니다.",
  },
  {
    title: "Spirited Away",
    subtitle: "Hayao Miyazaki",
    tags: { dreamy: 3, emotional: 2, bold: 1 },
    note: "낯선 세계에 들어가는 감각과 따뜻한 성장의 결을 좋아할 때 어울립니다.",
  },
  {
    title: "The Social Network",
    subtitle: "David Fincher",
    tags: { cerebral: 3, kinetic: 2, dark: 1 },
    note: "빠른 대사, 차가운 긴장, 날카로운 구조를 좋아하는 취향에 잘 맞습니다.",
  },
  {
    title: "Midsommar",
    subtitle: "Ari Aster",
    tags: { dark: 3, bold: 2, cerebral: 1 },
    note: "밝은 화면 속 불안과 기괴한 아름다움에 끌린다면 추천합니다.",
  },
  {
    title: "The Fall",
    subtitle: "Tarsem Singh",
    tags: { bold: 3, dreamy: 3, emotional: 1 },
    note: "동화처럼 화려한 이미지와 환상적인 모험 감각을 좋아할 때 좋습니다.",
  },
  {
    title: "Roma",
    subtitle: "Alfonso Cuaron",
    tags: { emotional: 3, cerebral: 1, dreamy: 1 },
    note: "거대한 사건보다 삶의 결을 오래 바라보는 작품에 끌리는 취향에 맞습니다.",
  },
  {
    title: "Baby Driver",
    subtitle: "Edgar Wright",
    tags: { kinetic: 3, bold: 2 },
    note: "음악과 편집이 딱 맞물리는 쾌감을 좋아한다면 거의 바로 맞습니다.",
  },
  {
    title: "Donnie Darko",
    subtitle: "Richard Kelly",
    tags: { cerebral: 2, dark: 2, dreamy: 2 },
    note: "불안한 성장담과 미스터리한 세계관을 함께 즐기는 사람에게 어울립니다.",
  },
  {
    title: "Chungking Express",
    subtitle: "Wong Kar-wai",
    tags: { dreamy: 3, emotional: 2, kinetic: 1 },
    note: "도시의 밤, 엇갈린 감정, 음악 같은 리듬을 좋아할 때 추천합니다.",
  },
  {
    title: "The Lighthouse",
    subtitle: "Robert Eggers",
    tags: { dark: 3, cerebral: 2, bold: 2 },
    note: "거칠고 기괴한 긴장감, 미쳐가는 분위기에 끌리는 취향에 강합니다.",
  },
  {
    title: "Amelie",
    subtitle: "Jean-Pierre Jeunet",
    tags: { dreamy: 2, emotional: 2, bold: 2 },
    note: "사소한 순간을 사랑스럽고 스타일리시하게 보는 영화를 좋아할 때 맞습니다.",
  },
  {
    title: "Heat",
    subtitle: "Michael Mann",
    tags: { kinetic: 2, dark: 1, cerebral: 2, bold: 1 },
    note: "도회적인 긴장과 묵직한 범죄 드라마의 균형을 원할 때 좋습니다.",
  },
  {
    title: "The Worst Person in the World",
    subtitle: "Joachim Trier",
    tags: { emotional: 3, cerebral: 1, kinetic: 1 },
    note: "현실적인 방황과 관계의 결을 세련되게 따라가는 작품에 어울립니다.",
  },
  {
    title: "The Truman Show",
    subtitle: "Peter Weir",
    tags: { cerebral: 2, emotional: 2, dreamy: 1 },
    note: "가볍게 시작해 오래 남는 질문을 던지는 이야기를 좋아할 때 맞습니다.",
  },
  {
    title: "Pan's Labyrinth",
    subtitle: "Guillermo del Toro",
    tags: { dark: 2, dreamy: 3, emotional: 2 },
    note: "잔혹한 현실과 아름다운 환상이 함께 있는 작품을 좋아한다면 추천합니다.",
  },
  {
    title: "Drive My Car",
    subtitle: "Ryusuke Hamaguchi",
    tags: { emotional: 3, cerebral: 2 },
    note: "긴 대화와 침묵 속에서 감정이 천천히 열리는 작품에 잘 맞습니다.",
  },
  {
    title: "Good Time",
    subtitle: "Safdie Brothers",
    tags: { kinetic: 3, dark: 2 },
    note: "밤새 달리는 듯한 불안과 속도감을 즐기는 취향에 강하게 맞습니다.",
  },
  {
    title: "Annihilation",
    subtitle: "Alex Garland",
    tags: { dreamy: 3, cerebral: 2, dark: 2 },
    note: "아름답지만 불길한 SF 이미지와 해석의 여지를 좋아할 때 좋습니다.",
  },
  {
    title: "The Royal Tenenbaums",
    subtitle: "Wes Anderson",
    tags: { bold: 2, emotional: 2, cerebral: 1 },
    note: "스타일은 귀엽지만 마음은 쓸쓸한 가족 이야기에 끌린다면 어울립니다.",
  },
  {
    title: "2001: A Space Odyssey",
    subtitle: "Stanley Kubrick",
    tags: { cerebral: 3, dreamy: 3, bold: 1 },
    note: "영화사에 남은 고전 SF처럼 거대한 질문과 압도적인 이미지가 좋다면 맞습니다.",
  },
  {
    title: "In the Mood for Love",
    subtitle: "Wong Kar-wai",
    tags: { emotional: 3, dreamy: 3, bold: 1 },
    note: "유명하면서도 섬세한 걸작을 원한다면, 말하지 못한 감정의 밀도가 깊게 맞습니다.",
  },
  {
    title: "Mulholland Drive",
    subtitle: "David Lynch",
    tags: { cerebral: 3, dreamy: 3, dark: 2 },
    note: "평단에서 오래 사랑받는 미스터리처럼 해석할수록 이상해지는 작품에 어울립니다.",
  },
  {
    title: "The Godfather",
    subtitle: "Francis Ford Coppola",
    tags: { dark: 2, cerebral: 2, emotional: 2 },
    note: "유명한 고전 중에서도 인물의 무게와 비극적인 품격을 원할 때 좋은 선택입니다.",
  },
  {
    title: "City of God",
    subtitle: "Fernando Meirelles",
    tags: { kinetic: 3, dark: 2, bold: 2 },
    note: "빠른 에너지와 강렬한 현실감으로 높은 평가를 받은 범죄 드라마가 잘 맞습니다.",
  },
  {
    title: "A Separation",
    subtitle: "Asghar Farhadi",
    tags: { cerebral: 3, emotional: 3, dark: 1 },
    note: "큰 장치 없이도 도덕적 질문과 감정의 압박이 강한 작품을 좋아할 때 추천합니다.",
  },
  {
    title: "Memories of Murder",
    subtitle: "Bong Joon-ho",
    tags: { dark: 3, cerebral: 2, emotional: 1 },
    note: "잘 알려진 한국 걸작처럼 장르 재미와 씁쓸한 여운을 함께 원할 때 맞습니다.",
  },
  {
    title: "Burning",
    subtitle: "Lee Chang-dong",
    tags: { cerebral: 3, dark: 2, dreamy: 2 },
    note: "조용하지만 불길한 분위기와 해석의 여지가 큰 평단 호평작을 원할 때 어울립니다.",
  },
  {
    title: "Yi Yi",
    subtitle: "Edward Yang",
    tags: { emotional: 3, cerebral: 2, dreamy: 1 },
    note: "덜 대중적이지만 평가가 아주 좋은 삶의 관찰극을 좋아한다면 깊게 남습니다.",
  },
  {
    title: "Tokyo Story",
    subtitle: "Yasujiro Ozu",
    tags: { emotional: 3, cerebral: 2 },
    note: "조용한 고전 명작처럼 사소한 가족의 균열에서 큰 감정을 느끼는 취향에 맞습니다.",
  },
  {
    title: "Children of Men",
    subtitle: "Alfonso Cuaron",
    tags: { kinetic: 2, dark: 2, cerebral: 2, emotional: 1 },
    note: "묵직한 세계관과 긴장감 있는 연출로 인정받는 SF 드라마를 원할 때 좋습니다.",
  },
  {
    title: "The Lives of Others",
    subtitle: "Florian Henckel von Donnersmarck",
    tags: { cerebral: 2, emotional: 3, dark: 2 },
    note: "숨은 명작 느낌의 진지한 드라마와 조용한 감정 변화를 좋아할 때 추천합니다.",
  },
  {
    title: "Stalker",
    subtitle: "Andrei Tarkovsky",
    tags: { dreamy: 3, cerebral: 3, dark: 1 },
    note: "난해하지만 오래 회자되는 예술영화의 공기감과 철학성을 즐긴다면 잘 맞습니다.",
  },
  {
    title: "Shoplifters",
    subtitle: "Hirokazu Kore-eda",
    tags: { emotional: 3, cerebral: 1, dark: 1 },
    note: "따뜻하지만 마냥 편하지 않은 가족 드라마, 평가 좋은 현대작을 원할 때 좋습니다.",
  },
  {
    title: "The Florida Project",
    subtitle: "Sean Baker",
    tags: { emotional: 3, dreamy: 1, bold: 1 },
    note: "밝은 색감 아래 현실의 쓸쓸함이 있는 숨은 호평작에 끌린다면 어울립니다.",
  },
  {
    title: "Only Lovers Left Alive",
    subtitle: "Jim Jarmusch",
    tags: { dreamy: 3, dark: 2, emotional: 1 },
    note: "대중적이지는 않아도 감각적인 분위기로 사랑받는 밤의 영화를 원할 때 맞습니다.",
  },
];

const musicTracks = [
  {
    title: "Space Song",
    subtitle: "Beach House",
    tags: { dreamy: 3, emotional: 2 },
    note: "빛이 번지는 듯한 신스와 잔향이 취향이라면 거의 정답에 가깝습니다.",
  },
  {
    title: "Nights",
    subtitle: "Frank Ocean",
    tags: { emotional: 3, dreamy: 1, dark: 1 },
    note: "감정의 결이 여러 층으로 쌓이는 곡을 좋아할수록 잘 맞습니다.",
  },
  {
    title: "Midnight City",
    subtitle: "M83",
    tags: { dreamy: 2, kinetic: 2, bold: 2 },
    note: "밤의 질주감과 반짝이는 분위기를 함께 원한다면 추천합니다.",
  },
  {
    title: "Happier Than Ever",
    subtitle: "Billie Eilish",
    tags: { emotional: 3, dark: 1, bold: 2 },
    note: "유명하지만 감정의 폭발과 구성 전환이 확실한 곡을 원할 때 잘 맞습니다.",
  },
  {
    title: "Runaway",
    subtitle: "Kanye West",
    tags: { emotional: 2, bold: 2, dark: 1 },
    note: "크고 드라마틱한 감정을 좋아하는 취향에 잘 들어맞습니다.",
  },
  {
    title: "Untitled #8",
    subtitle: "Sigur Ros",
    tags: { dreamy: 3, emotional: 2, cerebral: 1 },
    note: "언어보다 분위기와 고조감에 반응하는 편이라면 강하게 맞습니다.",
  },
  {
    title: "Genesis",
    subtitle: "Grimes",
    tags: { dreamy: 2, bold: 2, cerebral: 1 },
    note: "기묘하고 예쁜 사운드를 선호하는 사람에게 추천합니다.",
  },
  {
    title: "Redbone",
    subtitle: "Childish Gambino",
    tags: { dark: 2, dreamy: 1, emotional: 1 },
    note: "나른하고 끈적한 밤의 무드를 즐길 때 잘 맞습니다.",
  },
  {
    title: "Take Me Out",
    subtitle: "Franz Ferdinand",
    tags: { kinetic: 3, bold: 2 },
    note: "즉각적인 추진력과 선명한 기타 리프를 좋아한다면 추천합니다.",
  },
  {
    title: "Everything in Its Right Place",
    subtitle: "Radiohead",
    tags: { cerebral: 3, dark: 1, dreamy: 1 },
    note: "조금 낯설고 해석할 맛 있는 사운드를 좋아할 때 잘 맞습니다.",
  },
  {
    title: "Breathe Deeper",
    subtitle: "Tame Impala",
    tags: { dreamy: 2, kinetic: 2, bold: 1 },
    note: "부드럽게 출렁이는 그루브와 몽환적인 질감을 좋아하는 취향에 맞습니다.",
  },
  {
    title: "Motion Picture Soundtrack",
    subtitle: "Radiohead",
    tags: { emotional: 3, dreamy: 2, dark: 1 },
    note: "아름답고 슬픈 잔향이 오래 남는 곡을 원할 때 강하게 맞습니다.",
  },
  {
    title: "Oblivion",
    subtitle: "Grimes",
    tags: { dreamy: 2, kinetic: 2, bold: 2 },
    note: "가볍게 떠오르는데 중독성 있는 신스팝을 좋아하는 취향에 어울립니다.",
  },
  {
    title: "SLOW DANCING IN THE DARK",
    subtitle: "Joji",
    tags: { emotional: 3, dark: 1, dreamy: 1 },
    note: "무너지는 감정을 세련되게 끌고 가는 곡을 좋아한다면 추천합니다.",
  },
  {
    title: "Blinding Lights",
    subtitle: "The Weeknd",
    tags: { kinetic: 3, bold: 2, dreamy: 1 },
    note: "밤도시 질주감과 선명한 후렴의 쾌감을 중요하게 보는 취향에 맞습니다.",
  },
  {
    title: "Cellophane",
    subtitle: "FKA twigs",
    tags: { emotional: 3, dreamy: 2, cerebral: 1 },
    note: "연약하고 실험적인 감정 표현에 반응하는 편이라면 깊게 꽂힐 곡입니다.",
  },
  {
    title: "On Melancholy Hill",
    subtitle: "Gorillaz",
    tags: { dreamy: 2, emotional: 2, kinetic: 1 },
    note: "약간 쓸쓸하면서도 부드러운 멜로디에 끌리는 취향에 잘 맞습니다.",
  },
  {
    title: "Hyperballad",
    subtitle: "Bjork",
    tags: { cerebral: 2, dreamy: 2, emotional: 2 },
    note: "이상하고 아름다운 감정 곡선을 좋아하는 사람에게 추천합니다.",
  },
  {
    title: "Blue Monday",
    subtitle: "New Order",
    tags: { kinetic: 3, dark: 1, bold: 2 },
    note: "차갑고 도회적인 리듬 위에서 걷고 싶은 취향에 잘 맞습니다.",
  },
  {
    title: "Roads",
    subtitle: "Portishead",
    tags: { dark: 3, dreamy: 2, emotional: 2 },
    note: "트립합 명곡처럼 어둡고 아름다운 슬픔을 좋아한다면 강하게 맞습니다.",
  },
  {
    title: "Intro",
    subtitle: "The xx",
    tags: { dark: 2, dreamy: 2, cerebral: 1 },
    note: "비어 있는 공간감과 절제된 긴장을 좋아하는 취향에 강하게 맞습니다.",
  },
  {
    title: "Dog Days Are Over",
    subtitle: "Florence + The Machine",
    tags: { emotional: 2, kinetic: 2, bold: 1 },
    note: "감정이 터지듯 솟구치는 곡에 에너지를 느끼는 사람에게 추천합니다.",
  },
  {
    title: "505",
    subtitle: "Arctic Monkeys",
    tags: { emotional: 2, dark: 1, kinetic: 1 },
    note: "서서히 끌어올라 마지막에 터지는 감정선을 좋아할 때 잘 맞습니다.",
  },
  {
    title: "Teardrop",
    subtitle: "Massive Attack",
    tags: { dreamy: 2, dark: 2, emotional: 1 },
    note: "신비롭고 약간 어두운 질감을 좋아하는 플레이리스트 취향에 어울립니다.",
  },
  {
    title: "My Girls",
    subtitle: "Animal Collective",
    tags: { dreamy: 2, cerebral: 2, kinetic: 1 },
    note: "실험적이지만 이상하게 따뜻한 사운드에 반응하는 사람에게 추천합니다.",
  },
  {
    title: "Pyramids",
    subtitle: "Frank Ocean",
    tags: { cerebral: 2, emotional: 2, dark: 1, dreamy: 1 },
    note: "긴 러닝타임 안에서 분위기가 진화하는 곡을 좋아하는 취향에 잘 맞습니다.",
  },
  {
    title: "Young and Beautiful",
    subtitle: "Lana Del Rey",
    tags: { emotional: 3, dreamy: 2, dark: 1 },
    note: "퇴폐적이면서도 낭만적인 감정을 사랑하는 사람에게 잘 어울립니다.",
  },
  {
    title: "Electric Feel",
    subtitle: "MGMT",
    tags: { kinetic: 2, dreamy: 2, bold: 1 },
    note: "반짝이고 몽환적인 그루브를 즐기는 취향에 좋은 선택입니다.",
  },
  {
    title: "No Surprises",
    subtitle: "Radiohead",
    tags: { emotional: 2, cerebral: 2, dark: 1 },
    note: "차분한 표면 아래 쓸쓸한 감정이 흐르는 곡을 좋아한다면 추천합니다.",
  },
  {
    title: "Running Up That Hill",
    subtitle: "Kate Bush",
    tags: { emotional: 2, bold: 2, cerebral: 1 },
    note: "드라마틱하고 독특한 에너지를 동시에 원하는 사람에게 잘 맞습니다.",
  },
  {
    title: "Dreams Tonite",
    subtitle: "Alvvays",
    tags: { dreamy: 2, emotional: 2 },
    note: "가볍게 반짝이는데 묘하게 아련한 곡을 좋아할 때 추천합니다.",
  },
  {
    title: "Sweet Disposition",
    subtitle: "The Temper Trap",
    tags: { emotional: 2, kinetic: 2, dreamy: 1 },
    note: "벅차오르는 기타와 청량한 감정선을 함께 원할 때 잘 맞습니다.",
  },
  {
    title: "Svefn-g-englar",
    subtitle: "Sigur Ros",
    tags: { dreamy: 3, emotional: 2 },
    note: "언어보다 공간감과 서서히 커지는 감정에 반응한다면 추천합니다.",
  },
  {
    title: "A Real Hero",
    subtitle: "College & Electric Youth",
    tags: { dreamy: 2, emotional: 2, kinetic: 1 },
    note: "밤길을 천천히 달리는 듯한 신스와 낭만을 좋아할 때 어울립니다.",
  },
  {
    title: "Time to Pretend",
    subtitle: "MGMT",
    tags: { bold: 2, kinetic: 2, dreamy: 1 },
    note: "기분 좋은 반항심과 선명한 인디 팝 에너지가 필요할 때 좋습니다.",
  },
  {
    title: "Lover, You Should've Come Over",
    subtitle: "Jeff Buckley",
    tags: { emotional: 3, cerebral: 1 },
    note: "목소리 하나로 감정이 크게 흔들리는 곡을 좋아한다면 강하게 맞습니다.",
  },
  {
    title: "Angel",
    subtitle: "Massive Attack",
    tags: { dark: 3, kinetic: 1, bold: 1 },
    note: "천천히 다가오는 어두운 압박감과 묵직한 베이스를 좋아할 때 추천합니다.",
  },
  {
    title: "Midnight",
    subtitle: "The Blaze",
    tags: { dreamy: 2, kinetic: 2, emotional: 1 },
    note: "몽환적인 전자음과 감정적인 질주감이 같이 필요할 때 어울립니다.",
  },
  {
    title: "Paper Planes",
    subtitle: "M.I.A.",
    tags: { bold: 3, kinetic: 2 },
    note: "장난스럽고 대담한 리듬, 즉시 기억나는 후렴을 좋아한다면 맞습니다.",
  },
  {
    title: "Hide and Seek",
    subtitle: "Imogen Heap",
    tags: { emotional: 2, dreamy: 2, cerebral: 1 },
    note: "목소리를 악기처럼 쓰는 낯선 감정 표현에 끌릴 때 좋습니다.",
  },
  {
    title: "The Less I Know The Better",
    subtitle: "Tame Impala",
    tags: { kinetic: 2, dreamy: 2, bold: 1 },
    note: "몽롱하지만 몸이 먼저 반응하는 그루브를 원할 때 잘 맞습니다.",
  },
  {
    title: "Cherry-coloured Funk",
    subtitle: "Cocteau Twins",
    tags: { dreamy: 3, emotional: 1 },
    note: "가사가 또렷하지 않아도 빛나는 질감에 취하는 편이라면 추천합니다.",
  },
  {
    title: "Karma Police",
    subtitle: "Radiohead",
    tags: { cerebral: 2, emotional: 2, dark: 1 },
    note: "익숙한 멜로디 아래 이상한 불안이 흐르는 곡을 좋아할 때 맞습니다.",
  },
  {
    title: "In the Aeroplane Over the Sea",
    subtitle: "Neutral Milk Hotel",
    tags: { emotional: 3, bold: 1 },
    note: "투박하지만 이상하게 순수한 감정의 폭발을 좋아한다면 어울립니다.",
  },
  {
    title: "Nightcall",
    subtitle: "Kavinsky",
    tags: { dark: 2, dreamy: 2, kinetic: 2 },
    note: "네온빛 밤도시와 차가운 신스의 조합을 좋아할 때 추천합니다.",
  },
  {
    title: "Garden Song",
    subtitle: "Phoebe Bridgers",
    tags: { emotional: 3, dreamy: 1, dark: 1 },
    note: "작고 사적인 감정이 오래 남는 싱어송라이터 곡에 잘 맞습니다.",
  },
  {
    title: "Archangel",
    subtitle: "Burial",
    tags: { dark: 2, dreamy: 3, cerebral: 1 },
    note: "흐릿한 밤공기와 깨진 듯한 전자음의 감성을 좋아할 때 좋습니다.",
  },
  {
    title: "New Person, Same Old Mistakes",
    subtitle: "Tame Impala",
    tags: { dreamy: 2, kinetic: 2, cerebral: 1 },
    note: "느슨하게 흔들리지만 생각할 여지를 남기는 사이키델릭 팝에 어울립니다.",
  },
  {
    title: "All I Need",
    subtitle: "Radiohead",
    tags: { emotional: 2, dark: 2, dreamy: 1 },
    note: "차분하게 시작해 안쪽에서 크게 번지는 감정선을 좋아한다면 추천합니다.",
  },
  {
    title: "Digital Love",
    subtitle: "Daft Punk",
    tags: { kinetic: 2, dreamy: 1, bold: 2, emotional: 1 },
    note: "반짝이는 전자음과 기분 좋은 낭만을 동시에 원할 때 맞습니다.",
  },
  {
    title: "Sweet Dreams, TN",
    subtitle: "The Last Shadow Puppets",
    tags: { emotional: 2, dark: 1, bold: 2 },
    note: "과장된 로맨스와 드라마틱한 보컬을 즐기는 취향에 잘 어울립니다.",
  },
  {
    title: "A Day in the Life",
    subtitle: "The Beatles",
    tags: { cerebral: 3, dreamy: 2, bold: 1 },
    note: "너무 유명하지만 여전히 실험적인 클래식 명곡을 원할 때 잘 맞습니다.",
  },
  {
    title: "Heroes",
    subtitle: "David Bowie",
    tags: { emotional: 2, bold: 3, kinetic: 1 },
    note: "크고 낭만적인 에너지, 오래 살아남은 대표곡의 힘을 원한다면 추천합니다.",
  },
  {
    title: "This Must Be the Place",
    subtitle: "Talking Heads",
    tags: { emotional: 2, kinetic: 2, dreamy: 1 },
    note: "유명하면서도 세련된 뉴웨이브 감성과 따뜻한 반복감을 좋아할 때 맞습니다.",
  },
  {
    title: "Common People",
    subtitle: "Pulp",
    tags: { kinetic: 3, bold: 2, cerebral: 1 },
    note: "영국 인디록 대표곡처럼 재치와 에너지, 사회적 시선을 함께 원할 때 좋습니다.",
  },
  {
    title: "Since I Left You",
    subtitle: "The Avalanches",
    tags: { dreamy: 3, kinetic: 2, bold: 1 },
    note: "샘플링 명반의 대표곡처럼 반짝이고 낯선 감각을 좋아한다면 어울립니다.",
  },
  {
    title: "Unfinished Sympathy",
    subtitle: "Massive Attack",
    tags: { emotional: 3, dark: 1, bold: 1 },
    note: "평가 좋은 트립합 클래식 중에서도 감정선이 크게 움직이는 곡입니다.",
  },
  {
    title: "Idioteque",
    subtitle: "Radiohead",
    tags: { cerebral: 3, kinetic: 2, dark: 2 },
    note: "불안한 전자음과 지적인 긴장감이 있는 명곡을 원할 때 잘 맞습니다.",
  },
  {
    title: "Weird Fishes/Arpeggi",
    subtitle: "Radiohead",
    tags: { dreamy: 3, emotional: 2, cerebral: 1 },
    note: "몽환적인 기타와 점점 깊어지는 감정으로 오래 사랑받는 곡입니다.",
  },
  {
    title: "Paper Bag",
    subtitle: "Fiona Apple",
    tags: { emotional: 3, cerebral: 2, bold: 1 },
    note: "섬세한 가사와 독특한 리듬감으로 평가 좋은 싱어송라이터 곡에 어울립니다.",
  },
  {
    title: "Fast Car",
    subtitle: "Tracy Chapman",
    tags: { emotional: 3, cerebral: 1 },
    note: "유명하지만 과장 없이 깊은 서사를 가진 곡을 좋아한다면 잘 맞습니다.",
  },
  {
    title: "Strange Mercy",
    subtitle: "St. Vincent",
    tags: { cerebral: 2, dreamy: 2, bold: 2 },
    note: "덜 대중적이지만 평단에서 사랑받는 아트팝의 날카로운 결을 원할 때 좋습니다.",
  },
  {
    title: "Holocene",
    subtitle: "Bon Iver",
    tags: { emotional: 3, dreamy: 2 },
    note: "잔잔하지만 깊은 울림으로 평가 좋은 인디 포크를 원한다면 추천합니다.",
  },
  {
    title: "Motion Sickness",
    subtitle: "Phoebe Bridgers",
    tags: { emotional: 3, kinetic: 1, cerebral: 1 },
    note: "현대 인디 싱어송라이터 곡 중 감정과 멜로디가 모두 선명한 선택입니다.",
  },
  {
    title: "Untitled (How Does It Feel)",
    subtitle: "D'Angelo",
    tags: { emotional: 3, dreamy: 1, bold: 1 },
    note: "소울 명반의 대표곡처럼 목소리와 그루브의 깊이를 원할 때 잘 맞습니다.",
  },
  {
    title: "Once in a Lifetime",
    subtitle: "Talking Heads",
    tags: { cerebral: 3, kinetic: 2, bold: 2 },
    note: "유명하면서도 이상한 리듬과 질문이 살아 있는 곡을 좋아할 때 어울립니다.",
  },
  {
    title: "Rebellion (Lies)",
    subtitle: "Arcade Fire",
    tags: { kinetic: 2, emotional: 2, bold: 1 },
    note: "인디록 대표곡처럼 벅차오르는 합창감과 추진력을 원할 때 좋습니다.",
  },
  {
    title: "Maps",
    subtitle: "Yeah Yeah Yeahs",
    tags: { emotional: 3, kinetic: 1, bold: 1 },
    note: "단순하지만 강한 감정선으로 오래 사랑받는 록 발라드를 좋아한다면 맞습니다.",
  },
  {
    title: "Blue in Green",
    subtitle: "Miles Davis",
    tags: { dreamy: 3, emotional: 2, cerebral: 1 },
    note: "차분하고 세련된 재즈 명곡처럼 여백의 분위기를 원할 때 추천합니다.",
  },
  {
    title: "Sinnerman",
    subtitle: "Nina Simone",
    tags: { kinetic: 3, emotional: 2, dark: 1 },
    note: "압도적인 보컬과 리듬으로 유명한 클래식 명곡의 에너지가 잘 맞습니다.",
  },
  {
    title: "Video Games",
    subtitle: "Lana Del Rey",
    tags: { dreamy: 3, emotional: 2, dark: 1 },
    note: "유명하지만 독특한 우울과 낭만으로 한 시대의 무드를 만든 곡입니다.",
  },
];

const acclaimedMovieTitles = new Set([
  "2001: A Space Odyssey",
  "A Separation",
  "Aftersun",
  "Arrival",
  "Before Sunrise",
  "Burning",
  "Children of Men",
  "City of God",
  "Decision to Leave",
  "Drive My Car",
  "Everything Everywhere All at Once",
  "Her",
  "In the Mood for Love",
  "Memories of Murder",
  "Moonlight",
  "Mulholland Drive",
  "Oldboy",
  "Parasite",
  "Portrait of a Lady on Fire",
  "Shoplifters",
  "Stalker",
  "The Godfather",
  "The Handmaiden",
  "The Lives of Others",
  "Tokyo Story",
  "Yi Yi",
  "문라이트",
  "올드보이",
]);

const acclaimedMusicTitles = new Set([
  "A Day in the Life",
  "Blue in Green",
  "Cellophane",
  "Common People",
  "Everything in Its Right Place",
  "Fast Car",
  "Heroes",
  "Holocene",
  "Hyperballad",
  "Idioteque",
  "Karma Police",
  "Maps",
  "Motion Sickness",
  "Nights",
  "Once in a Lifetime",
  "Paper Bag",
  "Pyramids",
  "Roads",
  "Runaway",
  "Sinnerman",
  "Since I Left You",
  "Space Song",
  "Strange Mercy",
  "This Must Be the Place",
  "Unfinished Sympathy",
  "Untitled (How Does It Feel)",
  "Weird Fishes/Arpeggi",
]);

const personaProfiles = [
  {
    name: "새벽의 몽상가",
    when: (scores) => scores.dreamy >= 10 && scores.emotional >= 8,
    description:
      "감정과 분위기를 함께 오래 품는 타입입니다. 선명한 메시지보다 공기감, 잔향, 여운이 남는 작품에 크게 반응합니다.",
    chips: ["잔향 중독", "몽환 취향", "감정 몰입형"],
  },
  {
    name: "네온 질주가",
    when: (scores) => scores.kinetic >= 10 && scores.bold >= 8,
    description:
      "속도감과 스타일이 살아 있는 작품에서 에너지를 얻는 편입니다. 리듬이 느슨하면 금방 흥미가 꺼지고, 강한 추진력이 중요합니다.",
    chips: ["리듬 최우선", "스타일 감식가", "몰입 속도형"],
  },
  {
    name: "어두운 해석가",
    when: (scores) => scores.dark >= 9 && scores.cerebral >= 8,
    description:
      "조금 불편하고 복잡한 작품에서 오히려 재미를 느끼는 편입니다. 해석할 여지가 있고 심리적으로 깊은 작품이 잘 맞습니다.",
    chips: ["심리 탐험가", "불안 미학", "해석 집착형"],
  },
  {
    name: "심장형 큐레이터",
    when: (scores) => scores.emotional >= 10,
    description:
      "사람의 마음과 관계의 떨림을 가장 중요하게 보는 타입입니다. 장면이 아니라 감정이 기억에 남는 작품에 자주 끌립니다.",
    chips: ["감정 중심", "관계 서사 애호가", "여운 수집가"],
  },
  {
    name: "구조 애호가",
    when: (scores) => scores.cerebral >= 10,
    description:
      "이야기의 구조와 장치, 디테일을 발견하는 재미를 크게 느끼는 타입입니다. 한 번 보고 끝나는 작품보다는 다시 해석할 만한 작품을 선호합니다.",
    chips: ["디테일 헌터", "재관람형", "생각형 취향"],
  },
];

const defaultPersona = {
  name: "무드 콜렉터",
  description:
    "하나의 장르보다 전체 분위기와 결을 보고 취향을 고르는 타입입니다. 감정, 스타일, 몰입감의 균형이 좋은 작품에서 만족도가 높습니다.",
  chips: ["균형형 취향", "분위기 중심", "장르 유연형"],
};

const STORAGE_KEY = "taste-mosaic-result";
const COMMUNITY_STORAGE_KEY = "taste-mosaic-community-posts";

const state = {
  currentQuestionIndex: 0,
  answers: [],
  previewCache: new Map(),
  audioCache: new Map(),
  activePreviewKey: null,
  hasResult: false,
};

const el = {
  heroMode: document.getElementById("hero-mode"),
  progressFill: document.getElementById("progress-fill"),
  progressText: document.getElementById("progress-text"),
  questionCategory: document.getElementById("question-category"),
  questionTitle: document.getElementById("question-title"),
  questionOptions: document.getElementById("question-options"),
  restartTest: document.getElementById("restart-test"),
  emptyState: document.getElementById("empty-state"),
  resultView: document.getElementById("result-view"),
  personaName: document.getElementById("persona-name"),
  personaDescription: document.getElementById("persona-description"),
  traitChips: document.getElementById("trait-chips"),
  scoreBars: document.getElementById("score-bars"),
  movieList: document.getElementById("movie-list"),
  musicList: document.getElementById("music-list"),
  copySummary: document.getElementById("copy-summary"),
  detailOverlay: document.getElementById("detail-overlay"),
  detailClose: document.getElementById("detail-close"),
  detailArtwork: document.getElementById("detail-artwork"),
  detailType: document.getElementById("detail-type"),
  detailTitle: document.getElementById("detail-title"),
  detailSubtitle: document.getElementById("detail-subtitle"),
  detailReason: document.getElementById("detail-reason"),
  detailNote: document.getElementById("detail-note"),
  detailTraits: document.getElementById("detail-traits"),
  detailOpenLink: document.getElementById("detail-open-link"),
  communityForm: document.getElementById("community-form"),
  communityList: document.getElementById("community-list"),
  communityEmpty: document.getElementById("community-empty"),
};

function createEmptyScores() {
  return {
    emotional: 0,
    kinetic: 0,
    cerebral: 0,
    dreamy: 0,
    dark: 0,
    bold: 0,
  };
}

function mergeScores(target, addition) {
  Object.entries(addition).forEach(([key, value]) => {
    target[key] += value;
  });
  return target;
}

function getScoresFromAnswers() {
  return state.answers.reduce((accumulator, answerIndex, questionIndex) => {
    const option = questions[questionIndex].options[answerIndex];
    return mergeScores(accumulator, option.scores);
  }, createEmptyScores());
}

function getTopTraits(scores) {
  return Object.entries(scores)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([key]) => profileLabels[key]);
}

function getHeroModeText(scores) {
  return getTopTraits(scores).join(" + ");
}

function getPersona(scores) {
  return personaProfiles.find((profile) => profile.when(scores)) || defaultPersona;
}

function getMaxPossibleScore(axis) {
  return questions.reduce((sum, question) => {
    const maxInQuestion = Math.max(...question.options.map((option) => option.scores[axis] || 0));
    return sum + maxInQuestion;
  }, 0);
}

function getMatchScore(item, scores) {
  return Object.entries(item.tags).reduce((sum, [axis, weight]) => {
    return sum + weight * scores[axis];
  }, 0);
}

function getCurationBoost(item) {
  if (acclaimedMovieTitles.has(item.title) || acclaimedMusicTitles.has(item.title)) {
    return 2.4;
  }

  return 0;
}

function getRecommendations(items, scores) {
  const topAxes = Object.entries(scores)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([axis]) => axis);
  const answerSeed = state.answers.reduce((sum, answer, index) => {
    return sum + (answer + 1) * (index + 3);
  }, 0);

  const scoredItems = items
    .map((item, itemIndex) => {
      const rotation = ((answerSeed + item.title.length * 7 + itemIndex * 3) % 19) / 20;

      return {
        ...item,
        matchScore:
          getMatchScore(item, scores) +
          getCurationBoost(item) +
          topAxes.reduce((bonus, axis, index) => {
            const weight = item.tags[axis] || 0;
            return bonus + weight * (topAxes.length - index) * 1.75;
          }, 0) +
          rotation,
      };
    })
    .sort((a, b) => b.matchScore - a.matchScore);

  const selected = [];
  const usedLeadAxes = new Map();
  const usedCreators = new Set();

  for (const item of scoredItems) {
    if (selected.length >= 4) {
      break;
    }

    const leadAxis = Object.entries(item.tags).sort((a, b) => b[1] - a[1])[0]?.[0] || "mixed";
    const leadAxisCount = usedLeadAxes.get(leadAxis) || 0;
    const creator = item.subtitle;

    if (leadAxisCount >= 1 && selected.length < 3) {
      continue;
    }

    if (usedCreators.has(creator) && selected.length < 3) {
      continue;
    }

    selected.push(item);
    usedLeadAxes.set(leadAxis, leadAxisCount + 1);
    usedCreators.add(creator);
  }

  if (selected.length < 4) {
    for (const item of scoredItems) {
      if (selected.length >= 4) {
        break;
      }

      if (!selected.some((selectedItem) => selectedItem.title === item.title)) {
        selected.push(item);
      }
    }
  }

  return selected;
}

function renderQuestion() {
  if (!el.progressFill || !el.progressText || !el.questionTitle || !el.questionOptions) {
    return;
  }

  const question = questions[state.currentQuestionIndex];
  const progressRatio = ((state.currentQuestionIndex + 1) / questions.length) * 100;

  el.progressFill.style.width = `${progressRatio}%`;
  el.progressText.textContent = `${state.currentQuestionIndex + 1} / ${questions.length} 질문`;
  el.questionCategory.textContent = question.category;
  el.questionTitle.textContent = question.prompt;

  el.questionOptions.innerHTML = "";
  question.options.forEach((option, optionIndex) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option-button fade-in";
    button.innerHTML = `
      <span class="option-title">${option.label}</span>
      <span class="option-caption">${option.caption}</span>
    `;
    button.addEventListener("click", () => selectOption(optionIndex));
    el.questionOptions.appendChild(button);
  });
}

function renderScoreBars(scores) {
  const markup = Object.entries(profileLabels)
    .map(([key, label]) => {
      const max = getMaxPossibleScore(key);
      const value = scores[key];
      const ratio = max ? Math.round((value / max) * 100) : 0;

      return `
        <div class="score-row">
          <span class="score-name">${label}</span>
          <div class="score-track">
            <div class="score-fill" style="width: ${ratio}%"></div>
          </div>
          <span class="score-value">${ratio}%</span>
        </div>
      `;
    })
    .join("");

  el.scoreBars.innerHTML = markup;
}

function renderTraitChips(chips) {
  el.traitChips.innerHTML = chips
    .map((chip) => `<span class="trait-chip">${chip}</span>`)
    .join("");
}

function getPreviewKey(item) {
  return `${item.title}::${item.subtitle}`;
}

function normalizeText(text) {
  return String(text || "")
    .toLowerCase()
    .replace(/[^a-z0-9가-힣]/g, "");
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function buildSearchUrl(item, kind) {
  const service = kind === "movie" ? "watch" : "listen";
  const query = encodeURIComponent(`${item.title} ${item.subtitle} ${service}`);
  return `https://www.google.com/search?q=${query}`;
}

function getItemTraits(item) {
  return Object.keys(item.tags)
    .sort((a, b) => item.tags[b] - item.tags[a])
    .slice(0, 3)
    .map((axis) => profileLabels[axis]);
}

function closeDetailPanel() {
  document.getElementById("detail-overlay")?.classList.add("hidden");
  document.body.classList.remove("modal-open");
}

function openDetailPanel(item, scores, kind, artworkData = null) {
  const detailOverlay = document.getElementById("detail-overlay");
  const detailArtwork = document.getElementById("detail-artwork");
  const detailType = document.getElementById("detail-type");
  const detailTitle = document.getElementById("detail-title");
  const detailSubtitle = document.getElementById("detail-subtitle");
  const detailReason = document.getElementById("detail-reason");
  const detailNote = document.getElementById("detail-note");
  const detailTraits = document.getElementById("detail-traits");
  const detailOpenLink = document.getElementById("detail-open-link");

  if (
    !detailOverlay ||
    !detailArtwork ||
    !detailType ||
    !detailTitle ||
    !detailSubtitle ||
    !detailReason ||
    !detailNote ||
    !detailTraits ||
    !detailOpenLink
  ) {
    return;
  }

  const typeLabel = kind === "movie" ? "Movie detail" : "Music detail";
  const actionLabel = kind === "movie" ? "볼 수 있는 곳 찾기" : "들을 수 있는 곳 찾기";
  const fallbackIcon = kind === "movie" ? "Film" : "♪";
  const artworkUrl = artworkData?.artworkUrl || null;
  const openUrl = artworkData?.openUrl || buildSearchUrl(item, kind);
  const traits = getItemTraits(item);

  detailType.textContent = typeLabel;
  detailTitle.textContent = item.title;
  detailSubtitle.textContent = item.subtitle;
  detailReason.textContent = buildReason(item, scores);
  detailNote.textContent =
    kind === "movie"
      ? "카드를 누르면 바로 이동하지 않고, 먼저 이 작품이 왜 추천됐는지 확인할 수 있게 바꿨어요."
      : "카드를 누르면 곡 설명을 먼저 보고, 필요하면 결과 카드의 미리듣기나 아래 버튼으로 이동할 수 있어요.";
  detailTraits.innerHTML = traits.map((trait) => `<span class="trait-chip">${escapeHtml(trait)}</span>`).join("");
  detailOpenLink.href = openUrl;
  detailOpenLink.textContent = actionLabel;
  detailArtwork.className = `detail-artwork ${artworkUrl ? "has-image" : ""}`;
  detailArtwork.innerHTML = artworkUrl
    ? `<img src="${artworkUrl}" alt="${escapeHtml(item.title)} ${kind === "movie" ? "포스터" : "앨범 커버"}" />`
    : `<div class="album-cover-fallback">
        <span class="album-cover-icon">${fallbackIcon}</span>
        <span class="album-cover-text">${escapeHtml(item.subtitle)}</span>
      </div>`;

  detailOverlay.classList.remove("hidden");
  document.body.classList.add("modal-open");
}

function getWikipediaMovieTitle(item) {
  const titleMap = {
    "이터널 선샤인": "Eternal Sunshine of the Spotless Mind",
    라라랜드: "La La Land",
    위플래쉬: "Whiplash (2014 film)",
    "블레이드 러너 2049": "Blade Runner 2049",
    문라이트: "Moonlight (2016 film)",
    "나이브스 아웃": "Knives Out",
    올드보이: "Oldboy (2003 film)",
    인셉션: "Inception",
    "그랜드 부다페스트 호텔": "The Grand Budapest Hotel",
    드라이브: "Drive (2011 film)",
    Her: "Her (film)",
    Arrival: "Arrival (film)",
    "Perfect Blue": "Perfect Blue",
    "Lost in Translation": "Lost in Translation (film)",
    "Mad Max: Fury Road": "Mad Max: Fury Road",
    "Ex Machina": "Ex Machina (film)",
    "The Handmaiden": "The Handmaiden",
    Aftersun: "Aftersun",
    "Everything Everywhere All at Once": "Everything Everywhere All at Once",
    "The Lobster": "The Lobster",
    "Before Sunrise": "Before Sunrise",
    "Uncut Gems": "Uncut Gems",
    "Decision to Leave": "Decision to Leave",
    "The Matrix": "The Matrix",
    "Punch-Drunk Love": "Punch-Drunk Love",
    "Black Swan": "Black Swan (film)",
    "Past Lives": "Past Lives (film)",
    Akira: "Akira (1988 film)",
    Prisoners: "Prisoners (2013 film)",
    "Frances Ha": "Frances Ha",
  };

  return titleMap[item.title] || item.title;
}

async function fetchWikipediaArtwork(item) {
  const pageTitle = encodeURIComponent(getWikipediaMovieTitle(item));
  const response = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${pageTitle}`);

  if (!response.ok) {
    return null;
  }

  const payload = await response.json();
  return payload.originalimage?.source || payload.thumbnail?.source || null;
}

async function fetchMovieArtwork(item) {
  const key = `movie::${getPreviewKey(item)}`;
  if (state.previewCache.has(key)) {
    return state.previewCache.get(key);
  }

  const artworkData = {
    artworkUrl: null,
    openUrl: buildSearchUrl(item, "movie"),
  };

  try {
    const term = encodeURIComponent(`${item.title}`);
    const response = await fetch(
      `https://itunes.apple.com/search?term=${term}&country=US&media=movie&entity=movie&attribute=movieTerm&limit=10`
    );

    if (response.ok) {
      const payload = await response.json();
      const titleToken = normalizeText(item.title);
      const directorToken = normalizeText(item.subtitle);

      const bestMatch =
        payload.results?.find((result) => {
          const trackName = normalizeText(result.trackName);
          const artistName = normalizeText(result.artistName);
          return trackName.includes(titleToken) && artistName.includes(directorToken);
        }) ||
        payload.results?.find((result) => normalizeText(result.trackName).includes(titleToken)) ||
        payload.results?.[0] ||
        null;

      artworkData.artworkUrl =
        bestMatch?.artworkUrl100?.replace("100x100bb", "1000x1000bb") ||
        bestMatch?.artworkUrl100 ||
        null;
      artworkData.openUrl = bestMatch?.trackViewUrl || artworkData.openUrl;
    }
  } catch {
    // Continue to the Wikipedia fallback below.
  }

  if (!artworkData.artworkUrl) {
    artworkData.artworkUrl = await fetchWikipediaArtwork(item);
  }

  state.previewCache.set(key, artworkData);
  return artworkData;
}

async function fetchTrackPreview(item) {
  const key = `music::${getPreviewKey(item)}`;
  if (state.previewCache.has(key)) {
    return state.previewCache.get(key);
  }

  const term = encodeURIComponent(`${item.title} ${item.subtitle}`);
  const response = await fetch(`https://itunes.apple.com/search?term=${term}&entity=song&limit=5`);
  if (!response.ok) {
    throw new Error("preview-fetch-failed");
  }

  const payload = await response.json();
  const titleToken = normalizeText(item.title);
  const artistToken = normalizeText(item.subtitle);

  const bestMatch =
    payload.results?.find((result) => {
      const trackName = normalizeText(result.trackName);
      const artistName = normalizeText(result.artistName);
      return trackName.includes(titleToken) && artistName.includes(artistToken);
    }) || payload.results?.[0] || null;

  const previewData = {
    previewUrl: bestMatch?.previewUrl || null,
    sourceLabel: bestMatch?.trackName || item.title,
    openUrl: bestMatch?.trackViewUrl || buildSearchUrl(item, "music"),
    artworkUrl:
      bestMatch?.artworkUrl100?.replace("100x100bb", "400x400bb") ||
      bestMatch?.artworkUrl100 ||
      null,
  };

  state.previewCache.set(key, previewData);
  return previewData;
}

function resetPreviewButtons() {
  document.querySelectorAll("[data-preview-button]").forEach((button) => {
    button.textContent = "미리듣기";
  });

  document.querySelectorAll("[data-preview-status]").forEach((status) => {
    if (status.dataset.baseText) {
      status.textContent = status.dataset.baseText;
    }
  });
}

function pauseActivePreview() {
  if (!state.activePreviewKey) {
    return;
  }

  const activeAudio = state.audioCache.get(state.activePreviewKey);
  if (activeAudio) {
    activeAudio.pause();
  }

  state.activePreviewKey = null;
  resetPreviewButtons();
}

function attachAudioLifecycle(audio, key) {
  audio.addEventListener("ended", () => {
    if (state.activePreviewKey === key) {
      state.activePreviewKey = null;
    }
    resetPreviewButtons();
  });
}

async function handlePreviewToggle(item, button, status) {
  const key = getPreviewKey(item);

  if (state.activePreviewKey === key) {
    pauseActivePreview();
    return;
  }

  button.disabled = true;
  status.textContent = "프리뷰를 찾는 중...";

  try {
    const previewData = await fetchTrackPreview(item);
    if (!previewData.previewUrl) {
      status.textContent = "이 곡은 미리듣기 소스를 찾지 못했어요.";
      button.textContent = "미리듣기 없음";
      button.disabled = true;
      return;
    }

    pauseActivePreview();

    let audio = state.audioCache.get(key);
    if (!audio) {
      audio = new Audio(previewData.previewUrl);
      audio.preload = "none";
      state.audioCache.set(key, audio);
      attachAudioLifecycle(audio, key);
    }

    await audio.play();
    state.activePreviewKey = key;
    resetPreviewButtons();
    button.textContent = "일시정지";
    status.textContent = `${item.title} 프리뷰 재생 중`;
  } catch {
    status.textContent = "미리듣기를 불러오지 못했어요.";
  } finally {
    if (button.textContent !== "미리듣기 없음") {
      button.disabled = false;
    }
  }
}

function renderRecommendationCards(container, items, scores, kind = "default") {
  container.innerHTML = "";
  items.forEach((item) => {
    const topAxes = getItemTraits(item).slice(0, 2);

    const card = document.createElement("article");
    card.className = `recommend-card ${kind}-card fade-in`;
    const artworkKey = `${kind}::${getPreviewKey(item)}`;
    const cachedPreview = state.previewCache.get(artworkKey) || null;
    const shouldShowArtwork = kind === "music" || kind === "movie";
    const artworkMarkup =
      shouldShowArtwork
        ? `
      <div class="album-cover ${cachedPreview?.artworkUrl ? "has-image" : ""}" data-album-cover>
        ${
          cachedPreview?.artworkUrl
            ? `<img src="${cachedPreview.artworkUrl}" alt="${item.title} ${kind === "movie" ? "포스터" : "앨범 커버"}" loading="lazy" />`
            : `<div class="album-cover-fallback">
                <span class="album-cover-icon">${kind === "movie" ? "Film" : "♪"}</span>
                <span class="album-cover-text">${item.subtitle}</span>
              </div>`
        }
      </div>
    `
        : "";
    const previewMarkup =
      kind === "music"
        ? `
      <div class="preview-row">
        <button class="preview-button" type="button" data-preview-button>미리듣기</button>
        <span class="preview-status" data-preview-status data-base-text="카드를 누르면 프리뷰를 불러옵니다.">카드를 누르면 프리뷰를 불러옵니다.</span>
      </div>
    `
        : "";
    const actionLabel = "상세 보기";
    const initialOpenUrl = cachedPreview?.openUrl || buildSearchUrl(item, kind);

    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `${item.title} 상세 설명 보기`);
    card.innerHTML = `
      ${artworkMarkup}
      <div class="recommend-meta">
        <span class="pill">${item.subtitle}</span>
        <span class="pill">매칭 ${Math.min(99, Math.round(item.matchScore * 3.4))}%</span>
      </div>
      <div class="recommend-body">
        <h4>${item.title}</h4>
        <p>${topAxes.join(" · ")} 취향과 특히 잘 맞아요.</p>
        <p class="recommend-copy">${buildReason(item, scores)}</p>
      </div>
      <div class="recommend-actions">
        ${previewMarkup}
      </div>
      <button class="open-link" type="button" data-open-link data-open-url="${initialOpenUrl}">${actionLabel}</button>
    `;

    const albumCover = card.querySelector("[data-album-cover]");
    const openLink = card.querySelector("[data-open-link]");

    card.addEventListener("click", (event) => {
      if (event.target.closest("button, a")) {
        return;
      }

      openDetailPanel(item, scores, kind, state.previewCache.get(artworkKey) || null);
    });

    card.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") {
        return;
      }

      event.preventDefault();
      openDetailPanel(item, scores, kind, state.previewCache.get(artworkKey) || null);
    });

    openLink?.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      openDetailPanel(item, scores, kind, state.previewCache.get(artworkKey) || null);
    });

    if (kind === "music") {
      const previewButton = card.querySelector("[data-preview-button]");
      const previewStatus = card.querySelector("[data-preview-status]");
      previewButton.addEventListener("click", () => {
        handlePreviewToggle(item, previewButton, previewStatus);
      });
    }

    if (shouldShowArtwork && !cachedPreview?.artworkUrl) {
      const artworkFetcher = kind === "movie" ? fetchMovieArtwork : fetchTrackPreview;
      artworkFetcher(item)
        .then((previewData) => {
          if (!previewData.artworkUrl || !albumCover || !card.isConnected) {
            return;
          }

          albumCover.classList.add("has-image");
          albumCover.innerHTML = `<img src="${previewData.artworkUrl}" alt="${item.title} ${kind === "movie" ? "포스터" : "앨범 커버"}" loading="lazy" />`;

          if (previewData.openUrl && openLink) {
            openLink.dataset.openUrl = previewData.openUrl;
          }
        })
        .catch(() => {
          // Artwork is optional; keep the fallback if fetch fails.
        });
    }

    container.appendChild(card);
  });
}

function buildReason(item, scores) {
  const dominantAxis = Object.entries(item.tags).sort((a, b) => b[1] - a[1])[0]?.[0];
  const dominantLabel = dominantAxis ? profileLabels[dominantAxis] : "분위기";
  const dominantValue = dominantAxis ? scores[dominantAxis] : 0;

  if (dominantValue >= 8) {
    return `${dominantLabel} 성향이 강하게 나와서, ${item.note}`;
  }

  return item.note;
}

function buildShareText(scores, persona, moviesResult, musicResult) {
  const topTraits = getTopTraits(scores).join(", ");
  const movieTitles = moviesResult.map((item) => item.title).join(", ");
  const musicTitles = musicResult.map((item) => item.title).join(", ");

  return [
    `[Taste Mosaic 결과]`,
    `취향 별명: ${persona.name}`,
    `핵심 성향: ${topTraits}`,
    `영화 추천: ${movieTitles}`,
    `음악 추천: ${musicTitles}`,
  ].join("\n");
}

function buildResultData() {
  const scores = getScoresFromAnswers();
  const persona = getPersona(scores);
  const movieResults = getRecommendations(movies, scores);
  const musicResults = getRecommendations(musicTracks, scores);

  return { scores, persona, movieResults, musicResults };
}

function saveResultData(resultData) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      savedAt: Date.now(),
      scores: resultData.scores,
      persona: resultData.persona,
      movieResults: resultData.movieResults,
      musicResults: resultData.musicResults,
    })
  );
}

function loadResultData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function loadCommunityPosts() {
  try {
    const raw = localStorage.getItem(COMMUNITY_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveCommunityPosts(posts) {
  localStorage.setItem(COMMUNITY_STORAGE_KEY, JSON.stringify(posts));
}

function renderCommunityPosts() {
  if (!el.communityList) {
    return;
  }

  const posts = loadCommunityPosts();
  el.communityEmpty?.classList.toggle("hidden", posts.length > 0);
  el.communityList.innerHTML = posts
    .map((post) => {
      const typeLabel = post.type === "movie" ? "영화" : "음악";
      const stars = "★".repeat(Number(post.rating || 0)) + "☆".repeat(5 - Number(post.rating || 0));

      return `
        <article class="community-card fade-in">
          <div class="recommend-meta">
            <span class="pill">${typeLabel}</span>
            <span class="pill">${stars}</span>
          </div>
          <h2>${escapeHtml(post.title)}</h2>
          <p class="community-creator">${escapeHtml(post.creator)}</p>
          <p>${escapeHtml(post.comment)}</p>
        </article>
      `;
    })
    .join("");
}

function initCommunityPage() {
  renderCommunityPosts();

  el.communityForm?.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(el.communityForm);
    const nextPost = {
      id: Date.now(),
      type: formData.get("type"),
      title: String(formData.get("title") || "").trim(),
      creator: String(formData.get("creator") || "").trim(),
      rating: Number(formData.get("rating") || 5),
      comment: String(formData.get("comment") || "").trim(),
    };

    if (!nextPost.title || !nextPost.creator || !nextPost.comment) {
      return;
    }

    const posts = [nextPost, ...loadCommunityPosts()].slice(0, 30);
    saveCommunityPosts(posts);
    el.communityForm.reset();
    renderCommunityPosts();
  });
}

function renderResultData(resultData) {
  const { scores, persona, movieResults, musicResults } = resultData;

  if (el.heroMode) {
    el.heroMode.textContent = getHeroModeText(scores);
  }
  state.hasResult = true;
  el.emptyState?.classList.add("hidden");
  el.resultView?.classList.remove("hidden");
  el.resultView?.classList.add("fade-in");

  if (el.personaName) {
    el.personaName.textContent = persona.name;
  }
  if (el.personaDescription) {
    el.personaDescription.textContent = persona.description;
  }
  renderTraitChips(persona.chips);
  renderScoreBars(scores);
  if (el.movieList) {
    renderRecommendationCards(el.movieList, movieResults, scores, "movie");
  }
  if (el.musicList) {
    renderRecommendationCards(el.musicList, musicResults, scores, "music");
  }

  if (!el.copySummary) {
    return;
  }

  el.copySummary.onclick = async () => {
    const shareText = buildShareText(scores, persona, movieResults, musicResults);
    try {
      await navigator.clipboard.writeText(shareText);
      el.copySummary.textContent = "복사 완료";
      setTimeout(() => {
        el.copySummary.textContent = "결과 복사";
      }, 1600);
    } catch {
      el.copySummary.textContent = "복사 실패";
      setTimeout(() => {
        el.copySummary.textContent = "결과 복사";
      }, 1600);
    }
  };
}

function renderResults() {
  const resultData = buildResultData();
  saveResultData(resultData);
  renderResultData(resultData);
}

function selectOption(optionIndex) {
  state.answers[state.currentQuestionIndex] = optionIndex;

  if (state.currentQuestionIndex === questions.length - 1) {
    saveResultData(buildResultData());
    window.location.href = "./result.html?v=18";
    return;
  }

  state.currentQuestionIndex += 1;
  renderQuestion();
}

function resetApp() {
  pauseActivePreview();
  state.currentQuestionIndex = 0;
  state.answers = [];
  if (el.heroMode) {
    el.heroMode.textContent = "감정형 + 몽환형";
  }
  renderQuestion();
}

function initQuizPage() {
  resetApp();
  el.restartTest?.addEventListener("click", resetApp);
}

function initResultPage() {
  el.detailClose?.addEventListener("click", closeDetailPanel);
  el.detailOverlay?.addEventListener("click", (event) => {
    if (event.target === el.detailOverlay) {
      closeDetailPanel();
    }
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeDetailPanel();
    }
  });

  const resultData = loadResultData();
  if (!resultData) {
    el.emptyState?.classList.remove("hidden");
    el.resultView?.classList.add("hidden");
    return;
  }

  renderResultData(resultData);
}

function initSite() {
  const page = document.body.dataset.page;

  if (page === "quiz") {
    initQuizPage();
    return;
  }

  if (page === "result") {
    initResultPage();
    return;
  }

  if (page === "community") {
    initCommunityPage();
  }
}

initSite();
