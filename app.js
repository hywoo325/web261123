// app.js : 영화 배열을 다루는 함수 6개 / 김현우(26) / 10주차
// average : 영화 배열 ⇒ 평균 평점(숫자)
const average = (list) => {
	let sum = 0;
	for (const m of list) {
		sum += m.rating;
	}
	return sum / list.length;
}


// 영화 배열 ⇒ 평점이 가장 높은 영화 객체
const best = (list) => {
	const max = Math.max(...list.map(m => m.rating))

	return list.find(m => m.rating === max);
}


// 영화 배열, 최소 평점 ⇒ 그 이상인 영화만 담은 새 배열
const filterByRating = (list, min) => {
	return list.filter(item => min <= item.rating);
}


// sortBy : 영화 배열, 키 이름, 내림차순 여부 ⇒ 정렬한 새 배열(원본은 그대로)
function sortBy(list, key, desc) {
	const copy = [...list];
	copy.sort((a, b) => {
		if (typeof a[key] === "string") return a[key].localeCompare(b[key]);
		return a[key] - b[key];
	});
	if (desc) copy.reverse();
	return copy;
}


// 선택 상자 값으로 정렬해서 다시 그리기(반환값 없음)
function applySort() {
	renderCards(getView());
}


// 날짜 문자열 ⇒ 올해까지 몇 년(숫자)
const yearsSince = (dateStr) => {
	return new Date().getFullYear() - Number(dateStr.split("-")[0]);
}


// 포스터 경로, 크기 ⇒ TMDB 이미지 주소(문자열)
const posterUrl = (path, size) => {
	return `https://image.tmdb.org/t/p/${size}${path}`
}


console.log("평균:", average(movies));
console.log(`가장 높은 평점의 영화:`, best(movies).title);
console.log(`8점 이상 영화: ${filterByRating(movies, 8).length}편`);
console.log(`${yearsSince(movies[0].date)}년 전 개봉`);
console.log(`완성된 포스터 주소: ${posterUrl(movies[0].poster, "w342")}`);


// 영화 배열 ⇒ 보드에 카드 생성(반환값 없음)
function renderCards(list) {
	const board = document.querySelector(".board");
	board.innerHTML = "";
	for (const m of list) {
		const card = document.createElement("article");
		card.className = "card";
		card.dataset.id = m.id;
		// 찜 버튼으로 인해 제거
		// card.onclick = () => { alert(m.overview); }
		if (8 <= m.rating) {
			card.classList.add("hot");
		}
		card.innerHTML = `
<img class="poster" src="${posterUrl(m.poster, "w342")}" alt="${m.title} 포스터">
<span class="badge">${m.rating}</span>
<div class="info">
<h2>${m.title}</h2>
<p class="year">${m.year}</p>
<button class="like" type="button">❤︎</button>
</div>`;
		board.appendChild(card);
	}

	document.getElementById("count").textContent = list.length + "편";
	updateLikeCount();
	if (list.length === 0) {
		board.classList.add("is-empty");
	} else {
		board.classList.remove("is-empty");
	}
}


applySort();

// Toolbar 요소 이벤트 리스너 등록
document.getElementById("q").addEventListener("input", (e) => {
	renderCards(getView());
})
document.getElementById("sort").addEventListener("change", applySort)
document.getElementById("sort-desc").addEventListener("change", applySort)


function getView() {
	const keyword = document.getElementById("q").value.trim().toLowerCase();
	const found = movies.filter(m => m.title.toLowerCase().includes(keyword));
	const key = document.getElementById("sort").value;
	const isDesc = document.getElementById("sort-desc").value === "desc";

	return sortBy(found, key, isDesc)
}


function updateLikeCount() {
	document.getElementById("likeCount").textContent = document.querySelectorAll(".liked").length;
}


/*
이름 없는 함수로 선언하면 this는 보드가 되는데, 화살표 함수를 쓰면 window를 가리키는 건 아마 실행 주체를 누구로 보냐가 다른 것일까?
기존 프로그래밍 언어에서 this는 객체 자신을 가리켰지만, 여기서는 아직 규칙을 정확히 모르겠다.
*/
document.querySelector(".board").addEventListener("click", (e) => {
	if (e.target.classList.contains("like")) {
		e.target.classList.toggle("liked");
		updateLikeCount();
	}
})

document.getElementById("q").addEventListener("keydown", (e) => {
	if (e.key === "Escape") {
		e.target.value = "";
		renderCards(getView());
	}
})