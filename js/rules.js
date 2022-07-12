
const toggleMobileNav = () => {

	const togler = document.querySelector('.navbar-toggler');
	const navbarCollapse = document.querySelector('.navbar-collapse');

	togler.addEventListener('click', () => {
		navbarCollapse.classList.toggle('collapse');
	});
};
toggleMobileNav();