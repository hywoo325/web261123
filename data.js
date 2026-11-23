// data.js : 내 영화 5편 데이터 / 김현우(26) / 10주차
// 영화 한 편 = 객체 하나. 키 5개 : title, year, date, rating, poster
const movies = [
	{
		id: 283366,
		title: "미스 페레그린과 이상한 아이들의 집",
		overview: "할아버지의 죽음의 단서를 쫒던 제이크는 시간의 문을 통과해 놀라운 비밀과 마주한다.",
		year: 2016,
		date: "2016-09-28",
		rating: 6.8,
		poster: "/j3VfU751qbvzxyYMfHL2vigqdYf.jpg"
	},
	{
		id: 109445,
		title: "겨울왕국",
		overview: "서로가 최고의 친구였던 자매 엘사와 안나. 하지만 언니 엘사에게는 하나뿐인 동생에게조차 말 못할 비밀이 있다.",
		year: 2013,
		date: "2013-11-20",
		rating: 7.2,
		poster: "/lYceQKe3EsYn7VdDXGTy7dSwBLp.jpg"
	},
	{
		id: 1368337,
		title: "오디세이",
		overview: "10년간 이어진 트로이 전쟁을 승리로 이끈 영웅 '오디세우스'는 왕의 부재를 틈타 침탈과 권력 다툼이 벌어진 왕국에서 그를 기다리고 있는 아내 '페넬로페'와 아들 '텔레마코스'에게 돌아가기 위한 여정에 나선다.",
		year: 2026,
		date: "2026-07-15",
		rating: 8.0,
		poster: "/8ze9OcVuFiy94s6FFPvsn4oC2e1.jpg"
	},
	{
		id: 269149,
		title: "주토피아",
		overview: "어릴 적부터 경찰이 꿈이었던 토끼 주디 홉스는 주변의 만류에도 불구하고 경찰학교에 들어가 당당히 수석으로 졸업한다.",
		year: 2016,
		date: "2016-02-11",
		rating: 7.8,
		poster: "/uitqZVbhvlQV5iLOdbk3itGoNNd.jpg"
	},
	{
		id: 259693,
		title: "컨저링 2",
		overview: "1977년 영국 엔필드. 엄마 페기와 네 남매가 살고 있는 가족의 집에 정체를 알 수 없는 존재가 나타난다.",
		year: 2016,
		date: "2016-06-08",
		rating: 7.3,
		poster: "/RTmoz2DYYOPDnTKGqkJDWKdcd6.jpg"
	},
	{
		id: 1418428,
		title: "암살자(들)",
		overview: "1974년 8월 15일, 제29회 광복절 경축식. 전 국민이 지켜보는 생중계 현장에서 영부인이 저격당하는 초유의 사태가 발생한다.",
		year: 2026,
		date: "2026-09-23",
		rating: 7.2,
		poster: "/c55ijsOdntj6P25vDwHLdgsBpmV.jpg"
	},
];

const boxTop = {
	title: "극장판 치이카와: 인어 섬의 비밀",
	year: 2026,
	date: "2026-09-30",
	rating: 7.4,
	audience: 1281445,
	poster: "/5TMyytCI5Pfc9c1eNsljiCdiB05.jpg",
	type: "boxoffice",
	rank: 1
}