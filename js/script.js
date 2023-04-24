
document.addEventListener('DOMContentLoaded', function () {
    var toastElList = [].slice.call(document.querySelectorAll('.toast'))
    var toastList = toastElList.map(function (toastEl) {
        return new bootstrap.Toast(toastEl, { delay: 5000 }) // Set the delay to null to prevent auto-hide
    })
    toastList.forEach(toast => toast.show()); // Show all toasts on page load
});

document.addEventListener('DOMContentLoaded', function () {
	var scrollSpy = new bootstrap.ScrollSpy(document.body, {
		target: '#navbar-example2',
		rootMargin: '0 0 -40%'
	});
});
