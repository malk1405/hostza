const generateId = arr => arr.map((el, id) => ({ id: `${id}`, ...el }));

export default generateId;
