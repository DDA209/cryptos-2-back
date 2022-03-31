const createPopulationTree = (Model) => {
	// console.log('controllers/core #createPopulationTree');
	const schema = Model.schema.obj;
	let tree = [];
	if (!!Model.schema.obj) {
		for (property in schema) {
			let elements = { path: property };
			if (Array.isArray(schema[property])) {
				if (schema[property][0].ref) {
					const subModel = Model.db.models[schema[property][0].ref];
					subResult = createPopulationTree(subModel);
					if (subResult.length === 1) {
						elements = { ...elements, populate: subResult[0] };
					} else if (subResult.length > 1) {
						elements = { ...elements, populate: subResult };
					} else {
					}
					tree.push(elements);
				}
			} else if (schema[property].ref) {
				const subModel = Model.db.models[schema[property].ref];
				subResult = createPopulationTree(subModel);
				if (subResult.length === 1) {
					elements = { ...elements, populate: subResult[0] };
				} else if (subResult.length > 1) {
					elements = { ...elements, populate: subResult };
				} else {
				}
				tree.push(elements);
			}
		}
	}
	return tree;
};

module.exports = createPopulationTree;
