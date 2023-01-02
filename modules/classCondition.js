function classCondition(...args) {
	const toReturn = [];

	args.forEach((element) => {
		if (!Array.isArray(element)) toReturn.push(element);
		else if (element[1] === true) toReturn.push(element[0]);
	});

	return toReturn.join(" ");
}

module.exports = classCondition;
