const addAttributes = (element, attrObj) => {
	for (let attr in attrObj) {
		if (attrObj.hasOwnProperty(attr)) element.setAttribute(attr, attrObj[attr])
	}
};
const removeAttr = (el, attr) => {
	if (el.hasAttribute(attr)) el.removeAttribute(attr)
};

// Crear elementos con atributos e hijo
const createCustomElement = (element, attributes, children) => {
	let customElement = document.createElement(element);
	if (children !== undefined) children.forEach(el => {
		if (el.nodeType) {
			if (el.nodeType === 1 || el.nodeType === 11) customElement.appendChild(el);
		} else {
			customElement.innerHTML += el;
		}
	});
	addAttributes(customElement, attributes);
	return customElement;
};

// Imprimir modal
const printModal = content => {
	// crear contenedor interno
	const modalContentEl = createCustomElement('div', {
		id: 'ed-modal-content',
		class: 'ed-modal-content'
	}, [content]),

		// crear contenedor principal
		modalContainerEl = createCustomElement('div', {
			id: 'ed-modal-container',
			class: 'ed-modal-container'
		}, [modalContentEl]);

	let modalId = modalContainerEl.attributes.id.value;
	let FatherDOM = document.getElementById('heroMain');

	// Imprimir el modal
	FatherDOM.appendChild(modalContainerEl);
	// Agregar clase para animar elemento
	setTimeout(function () {
		document.getElementById(modalId).classList.add('is-active');
	}, 10);

	// Remover el modal
	const removeModal = () => {
		// Remover Clase de animación el modal
		document.getElementById(modalId).classList.remove('is-active');
		document.getElementById(modalId).classList.add('is-remove');

		setTimeout(function () {
			FatherDOM.removeChild(modalContainerEl)
		}, 330);
	};

	modalContainerEl.addEventListener('click', e => {
		if (e.target === modalContainerEl) removeModal();
		else {
			//console.log(e.target)
		}
	})
}
