import { IngredientEntity } from "@client-query/core/src/domain/entity/ingredient.entity";
import type { IngredientRepository } from "@client-query/core/src/infrastructure/repository/ingredient.repository";

export async function seedIngredients(
	ingredientRepository: IngredientRepository,
) {
	await ingredientRepository.createMany(Object.values(INGREDIENTS));
}

export const INGREDIENTS = {
	whiteRice: IngredientEntity.new({
		name: "白米",
		unit: "合",
		price: 50,
	}),
	water: IngredientEntity.new({
		name: "水",
		unit: "ml",
		price: 1,
	}),

	tomato: IngredientEntity.new({
		name: "トマト",
		unit: "個",
		price: 100,
	}),

	onion: IngredientEntity.new({
		name: "玉ねぎ",
		unit: "個",
		price: 30,
	}),

	garlic: IngredientEntity.new({
		name: "にんにく",
		unit: "片",
		price: 10,
	}),

	beef: IngredientEntity.new({
		name: "牛肉",
		unit: "g",
		price: 5,
	}),

	chicken: IngredientEntity.new({
		name: "鶏肉",
		unit: "g",
		price: 3,
	}),

	soySauce: IngredientEntity.new({
		name: "醤油",
		unit: "ml",
		price: 2,
	}),

	miso: IngredientEntity.new({
		name: "味噌",
		unit: "g",
		price: 3,
	}),

	tofu: IngredientEntity.new({
		name: "豆腐",
		unit: "丁",
		price: 50,
	}),

	eggplant: IngredientEntity.new({
		name: "なす",
		unit: "本",
		price: 40,
	}),

	carrot: IngredientEntity.new({
		name: "にんじん",
		unit: "本",
		price: 20,
	}),

	potato: IngredientEntity.new({
		name: "じゃがいも",
		unit: "個",
		price: 30,
	}),

	seaweed: IngredientEntity.new({
		name: "海苔",
		unit: "枚",
		price: 15,
	}),

	salmon: IngredientEntity.new({
		name: "鮭",
		unit: "切れ",
		price: 200,
	}),

	pork: IngredientEntity.new({
		name: "豚肉",
		unit: "g",
		price: 4,
	}),

	egg: IngredientEntity.new({
		name: "卵",
		unit: "個",
		price: 20,
	}),

	greenOnion: IngredientEntity.new({
		name: "ねぎ",
		unit: "本",
		price: 15,
	}),

	mushroom: IngredientEntity.new({
		name: "しいたけ",
		unit: "個",
		price: 50,
	}),

	soyMilk: IngredientEntity.new({
		name: "豆乳",
		unit: "ml",
		price: 2,
	}),

	mirin: IngredientEntity.new({
		name: "みりん",
		unit: "ml",
		price: 3,
	}),

	sake: IngredientEntity.new({
		name: "酒",
		unit: "ml",
		price: 4,
	}),

	sugar: IngredientEntity.new({
		name: "砂糖",
		unit: "g",
		price: 1,
	}),

	salt: IngredientEntity.new({
		name: "塩",
		unit: "g",
		price: 1,
	}),

	sesameOil: IngredientEntity.new({
		name: "ごま油",
		unit: "ml",
		price: 5,
	}),

	sesameSeed: IngredientEntity.new({
		name: "ごま",
		unit: "g",
		price: 3,
	}),

	nori: IngredientEntity.new({
		name: "のり",
		unit: "枚",
		price: 10,
	}),

	wasabi: IngredientEntity.new({
		name: "わさび",
		unit: "g",
		price: 15,
	}),

	ginger: IngredientEntity.new({
		name: "生姜",
		unit: "かけ",
		price: 10,
	}),

	daikon: IngredientEntity.new({
		name: "大根",
		unit: "本",
		price: 50,
	}),

	cucumber: IngredientEntity.new({
		name: "きゅうり",
		unit: "本",
		price: 20,
	}),

	cabbage: IngredientEntity.new({
		name: "キャベツ",
		unit: "個",
		price: 60,
	}),

	spinach: IngredientEntity.new({
		name: "ほうれん草",
		unit: "束",
		price: 30,
	}),

	beanSprouts: IngredientEntity.new({
		name: "もやし",
		unit: "袋",
		price: 15,
	}),

	sweetPotato: IngredientEntity.new({
		name: "さつまいも",
		unit: "本",
		price: 40,
	}),
	pumpkin: IngredientEntity.new({
		name: "かぼちゃ",
		unit: "個",
		price: 80,
	}),
	bellPepper: IngredientEntity.new({
		name: "ピーマン",
		unit: "個",
		price: 20,
	}),
	corn: IngredientEntity.new({
		name: "とうもろこし",
		unit: "本",
		price: 50,
	}),
	lettuce: IngredientEntity.new({
		name: "レタス",
		unit: "個",
		price: 100,
	}),
	broccoli: IngredientEntity.new({
		name: "ブロッコリー",
		unit: "個",
		price: 90,
	}),
	cauliflower: IngredientEntity.new({
		name: "カリフラワー",
		unit: "個",
		price: 90,
	}),
	asparagus: IngredientEntity.new({
		name: "アスパラガス",
		unit: "束",
		price: 60,
	}),
	radish: IngredientEntity.new({
		name: "ラディッシュ",
		unit: "個",
		price: 30,
	}),
	celery: IngredientEntity.new({
		name: "セロリ",
		unit: "本",
		price: 30,
	}),
	zucchini: IngredientEntity.new({
		name: "ズッキーニ",
		unit: "本",
		price: 40,
	}),
	okra: IngredientEntity.new({ name: "オクラ", unit: "本", price: 10 }),
	edamame: IngredientEntity.new({ name: "枝豆", unit: "袋", price: 30 }),
	bambooShoot: IngredientEntity.new({
		name: "たけのこ",
		unit: "本",
		price: 100,
	}),
	lotus: IngredientEntity.new({
		name: "れんこん",
		unit: "節",
		price: 50,
	}),
	burdockRoot: IngredientEntity.new({
		name: "ごぼう",
		unit: "本",
		price: 30,
	}),
	shiso: IngredientEntity.new({ name: "しそ", unit: "枚", price: 5 }),
	myoga: IngredientEntity.new({
		name: "みょうが",
		unit: "個",
		price: 20,
	}),
	watercress: IngredientEntity.new({
		name: "クレソン",
		unit: "束",
		price: 20,
	}),
	chineseCabbage: IngredientEntity.new({
		name: "白菜",
		unit: "個",
		price: 70,
	}),
	enoki: IngredientEntity.new({ name: "えのき", unit: "袋", price: 30 }),
	shimeji: IngredientEntity.new({
		name: "しめじ",
		unit: "パック",
		price: 40,
	}),
	maitake: IngredientEntity.new({
		name: "まいたけ",
		unit: "パック",
		price: 50,
	}),
	nameko: IngredientEntity.new({
		name: "なめこ",
		unit: "パック",
		price: 40,
	}),
	oysterMushroom: IngredientEntity.new({
		name: "ひらたけ",
		unit: "パック",
		price: 50,
	}),
	hijiki: IngredientEntity.new({ name: "ひじき", unit: "g", price: 2 }),
	konbu: IngredientEntity.new({ name: "昆布", unit: "枚", price: 20 }),
	katsuobushi: IngredientEntity.new({
		name: "鰹節",
		unit: "g",
		price: 5,
	}),
	tuna: IngredientEntity.new({
		name: "マグロ",
		unit: "切れ",
		price: 300,
	}),
	yellowtail: IngredientEntity.new({
		name: "ぶり",
		unit: "切れ",
		price: 250,
	}),
	mackerel: IngredientEntity.new({
		name: "さば",
		unit: "切れ",
		price: 150,
	}),
	sardine: IngredientEntity.new({
		name: "いわし",
		unit: "尾",
		price: 100,
	}),
	squid: IngredientEntity.new({ name: "イカ", unit: "杯", price: 200 }),
	octopus: IngredientEntity.new({
		name: "タコ",
		unit: "杯",
		price: 250,
	}),
	shrimp: IngredientEntity.new({ name: "エビ", unit: "尾", price: 150 }),
	crab: IngredientEntity.new({ name: "カニ", unit: "杯", price: 500 }),
	clam: IngredientEntity.new({ name: "アサリ", unit: "個", price: 50 }),
	scallop: IngredientEntity.new({
		name: "ホタテ",
		unit: "個",
		price: 200,
	}),
	oyster: IngredientEntity.new({ name: "カキ", unit: "個", price: 100 }),
	eel: IngredientEntity.new({ name: "うなぎ", unit: "尾", price: 500 }),
	lamb: IngredientEntity.new({ name: "ラム肉", unit: "g", price: 8 }),
	duck: IngredientEntity.new({ name: "鴨肉", unit: "g", price: 7 }),
	quail: IngredientEntity.new({
		name: "うずら卵",
		unit: "個",
		price: 30,
	}),
	atsuage: IngredientEntity.new({
		name: "厚揚げ",
		unit: "枚",
		price: 50,
	}),
	aburaage: IngredientEntity.new({
		name: "油揚げ",
		unit: "枚",
		price: 30,
	}),
	konjac: IngredientEntity.new({
		name: "こんにゃく",
		unit: "枚",
		price: 40,
	}),
	shirataki: IngredientEntity.new({
		name: "しらたき",
		unit: "袋",
		price: 25,
	}),
	natto: IngredientEntity.new({
		name: "納豆",
		unit: "パック",
		price: 50,
	}),
	mochi: IngredientEntity.new({ name: "餅", unit: "個", price: 30 }),
	udon: IngredientEntity.new({ name: "うどん", unit: "玉", price: 40 }),
	soba: IngredientEntity.new({ name: "そば", unit: "束", price: 50 }),
	ramen: IngredientEntity.new({
		name: "ラーメン",
		unit: "玉",
		price: 40,
	}),
	pasta: IngredientEntity.new({ name: "パスタ", unit: "g", price: 2 }),
	bread: IngredientEntity.new({ name: "パン", unit: "斤", price: 150 }),
	flour: IngredientEntity.new({ name: "小麦粉", unit: "g", price: 1 }),
	starch: IngredientEntity.new({ name: "片栗粉", unit: "g", price: 2 }),
	panko: IngredientEntity.new({ name: "パン粉", unit: "g", price: 3 }),
	yeast: IngredientEntity.new({ name: "イースト", unit: "g", price: 5 }),
	bakingPowder: IngredientEntity.new({
		name: "ベーキングパウダー",
		unit: "g",
		price: 4,
	}),
	vinegar: IngredientEntity.new({ name: "酢", unit: "ml", price: 3 }),
	mayonnaise: IngredientEntity.new({
		name: "マヨネーズ",
		unit: "g",
		price: 5,
	}),
	ketchup: IngredientEntity.new({
		name: "ケチャップ",
		unit: "g",
		price: 4,
	}),
	mustard: IngredientEntity.new({ name: "からし", unit: "g", price: 3 }),
	worcestershire: IngredientEntity.new({
		name: "ウスターソース",
		unit: "ml",
		price: 5,
	}),
	oysterSauce: IngredientEntity.new({
		name: "オイスターソース",
		unit: "ml",
		price: 6,
	}),
	chiliOil: IngredientEntity.new({
		name: "ラー油",
		unit: "ml",
		price: 7,
	}),
	curry: IngredientEntity.new({
		name: "カレー粉",
		unit: "g",
		price: 10,
	}),
	blackPepper: IngredientEntity.new({
		name: "黒コショウ",
		unit: "g",
		price: 15,
	}),
	redPepper: IngredientEntity.new({
		name: "一味唐辛子",
		unit: "g",
		price: 20,
	}),
	sevenSpice: IngredientEntity.new({
		name: "七味唐辛子",
		unit: "g",
		price: 25,
	}),
	yuzu: IngredientEntity.new({ name: "柚子", unit: "個", price: 150 }),
	sudachi: IngredientEntity.new({
		name: "すだち",
		unit: "個",
		price: 100,
	}),
	lemon: IngredientEntity.new({ name: "レモン", unit: "個", price: 50 }),
	lime: IngredientEntity.new({ name: "ライム", unit: "個", price: 60 }),
	orange: IngredientEntity.new({
		name: "オレンジ",
		unit: "個",
		price: 70,
	}),
	apple: IngredientEntity.new({ name: "りんご", unit: "個", price: 80 }),
	pear: IngredientEntity.new({ name: "梨", unit: "個", price: 90 }),
	peach: IngredientEntity.new({ name: "桃", unit: "個", price: 100 }),
	grape: IngredientEntity.new({
		name: "ぶどう",
		unit: "房",
		price: 120,
	}),
	persimmon: IngredientEntity.new({
		name: "柿",
		unit: "個",
		price: 130,
	}),
	fig: IngredientEntity.new({
		name: "いちじく",
		unit: "個",
		price: 140,
	}),
	chestnut: IngredientEntity.new({ name: "栗", unit: "個", price: 150 }),
	greenTea: IngredientEntity.new({
		name: "緑茶",
		unit: "g",
		price: 160,
	}),
	blackTea: IngredientEntity.new({
		name: "紅茶",
		unit: "g",
		price: 170,
	}),
	oolongTea: IngredientEntity.new({
		name: "烏龍茶",
		unit: "g",
		price: 180,
	}),
	coffee: IngredientEntity.new({
		name: "コーヒー",
		unit: "g",
		price: 190,
	}),
	milk: IngredientEntity.new({ name: "牛乳", unit: "ml", price: 200 }),
	cream: IngredientEntity.new({
		name: "生クリーム",
		unit: "ml",
		price: 210,
	}),
	butter: IngredientEntity.new({
		name: "バター",
		unit: "g",
		price: 220,
	}),
	cheese: IngredientEntity.new({
		name: "チーズ",
		unit: "g",
		price: 230,
	}),
	yogurt: IngredientEntity.new({
		name: "ヨーグルト",
		unit: "g",
		price: 240,
	}),
	ginkgo: IngredientEntity.new({ name: "銀杏", unit: "個", price: 5 }),
	tempura: IngredientEntity.new({ name: "天かす", unit: "g", price: 2 }),
	shiitake: IngredientEntity.new({
		name: "椎茸",
		unit: "個",
		price: 30,
	}),
	ponzu: IngredientEntity.new({ name: "ポン酢", unit: "ml", price: 3 }),
	ham: IngredientEntity.new({ name: "ハム", unit: "g", price: 5 }),
	dashi: IngredientEntity.new({ name: "だし", unit: "ml", price: 1 }),
	groundMeat: IngredientEntity.new({
		name: "ひき肉",
		unit: "g",
		price: 4,
	}),
	bitterMelon: IngredientEntity.new({
		name: "ゴーヤ",
		unit: "本",
		price: 100,
	}),
	fishCake: IngredientEntity.new({
		name: "かまぼこ",
		unit: "切れ",
		price: 20,
	}),
	mentaiko: IngredientEntity.new({
		name: "明太子",
		unit: "g",
		price: 10,
	}),
	yamaimo: IngredientEntity.new({ name: "山芋", unit: "g", price: 3 }),
	sesame: IngredientEntity.new({ name: "ごま", unit: "g", price: 2 }),
	seaBream: IngredientEntity.new({
		name: "鯛",
		unit: "切れ",
		price: 250,
	}),
	smelt: IngredientEntity.new({
		name: "わかさぎ",
		unit: "尾",
		price: 15,
	}),
	chickenLiver: IngredientEntity.new({
		name: "鶏レバー",
		unit: "g",
		price: 3,
	}),
	fiddlehead: IngredientEntity.new({
		name: "こごみ",
		unit: "g",
		price: 8,
	}),
	butterbur: IngredientEntity.new({
		name: "ふきのとう",
		unit: "本",
		price: 30,
	}),
	tempuraSauce: IngredientEntity.new({
		name: "天つゆ",
		unit: "ml",
		price: 2,
	}),
	kudzu: IngredientEntity.new({ name: "葛粉", unit: "g", price: 5 }),
	plum: IngredientEntity.new({ name: "梅", unit: "個", price: 20 }),
	brackenStarch: IngredientEntity.new({
		name: "わらび粉",
		unit: "g",
		price: 6,
	}),
	soybean: IngredientEntity.new({ name: "大豆", unit: "g", price: 1 }),
	azukiBeans: IngredientEntity.new({
		name: "小豆",
		unit: "g",
		price: 2,
	}),
	horseMackerel: IngredientEntity.new({
		name: "鯵",
		unit: "尾",
		price: 80,
	}),
};
