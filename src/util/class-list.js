/**
 * Примитивная реализация ClassList похожего на нативный
 * @param {string} str - начальная строка классов, якобы className
 * @constructor
 */
function ClassList ( str ) {
	this.obj = {};

	str.split( ' ' ).forEach( ( str ) => {
		this.obj[ str ] = true;
	});
}

/**
 * Добавление классов в экземпляр
 * @param {...string} str - добавляемые классы
 */
ClassList.prototype.add = function ( ...str ) {
	str.forEach( ( str ) => { this.obj[ str ] = true; } );
};

/**
 * Удаление классов из экземпляра
 * @param {...string} str - удаляемые классы
 */
ClassList.prototype.remove = function ( ...str ) {
	str.forEach( ( str ) => { delete this.obj[ str ]; } );
};

/**
 * Переключение класса в экземпляре
 * @param {string} str - переключаемый класс
 * @todo второй boolean параметр https://developer.mozilla.org/ru/docs/Web/API/Element/classList
 */
ClassList.prototype.toggle = function ( str ) {
	if ( this.obj[ str ] ) delete this.obj[ str ];
	else this.obj[ str ] = true;
};

/**
 * Проверка наличия класса в экземпляре
 * @param {string} str - проверяемый класс
 */
ClassList.prototype.contains = function ( str ) {
	return this.obj[ str ] || false;
};

/**
 * Возвращение количества классов в экземпляре
 * @return {number}
 */
ClassList.prototype.length = function () {
	return Object.keys( this.obj ).length;
};

/**
 * Возвращение строки со всеми классами
 * @return {string}
 */
ClassList.prototype.str = function () {
	return Object.keys( this.obj ).join( ' ' );
};


export default ClassList;
