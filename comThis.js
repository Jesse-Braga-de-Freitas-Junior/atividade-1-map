/* const orange = {
	price: 2,
};

const apple = {
	price: 1.5,
};

function mapArray() {
	const array = [1, 2, 3, 4, 5];

	return array.map(function (item) {
		return item * this.price;
	}, apple);
}

console.log(mapArray());
*/

const maca = {
	value: 5, 
};

const manga = {
	value: 3,
};

function mapComThis(arr, thisArg) {
	return arr.map(function  (item) {
		return item * this.value;
	}, thisArg);
}

const nums = [1, 2];

console.log('this -> maçã', mapComThis(nums, maca));

console.log('this manga', mapComThis(nums, manga));