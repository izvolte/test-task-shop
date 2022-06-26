const products = [{
	id: 1,
	name: "Кровать TATRAN",
	thumb: require("@/assets/images/tatran.png"),
	description: "Основание из полированной нержавеющей стали, придает оригинальный парящий эффект.",
	price: 120000,
	max: 5,
	date: '2020/06/06'
},{
	id: 2,
	name: "Кресло VILORA",
	thumb: require("@/assets/images/vilora.png"),
	description: "Мягкое и уютное, аккуратное и стильное. Упругие подушки сиденья и приятная на ощупь ткань. ",
	price: 21000,
	max: 5,
	date: '2020/06/05'
},{
	id: 3,
	name: "Стол MENU",
	thumb: require("@/assets/images/menu.png"),
	description: "Европейский дуб - отличается особой прочностью и стабильностью.",
	price: 34000,
	max: 5,
	date: '2020/06/04'
},{
	id: 4,
	name: "Диван ASKESTA",
	thumb: require("@/assets/images/askesta.png"),
	description: "Благодаря защелкивающемуся механизму диван легко раскладывается в комфортную кровать",
	price: 68000,
	max: 5,
	date: '2020/06/03'
},{
	id: 5,
	name: "Кресло LUNAR",
	thumb: require("@/assets/images/lunar.png"),
	description: "Прекрасно переносит солнечные лучи, перепады влажности и любые осадки",
	price: 40000,
	max: 5,
	date: '2020/06/02'
},{
	id: 6,
	name: "Шкаф Nastan",
	thumb: require("@/assets/images/nastan.png"),
	description: "Мебель может быть оснащена разнообразными системами подсветки.",
	price: 80000,
	max: 5,
	date: '2020/06/01'
}]

export const getProducts = () => new Promise((resolve) => setTimeout(() => resolve(products), 500))