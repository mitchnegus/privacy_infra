/*
 * Lock the presentation so that it may not be viewed online until the presentation goes live.
 */

(function () {

	const end = new Date(Date.UTC(2021, 1, 1, 19, 30, 0));
	const now = new Date();

	// If the end of the lock time period is still in the future, hide the content
	if (end - now > 0) {
		// Prepare the lockscreen text
		const lockScreen = document.getElementById('lock-screen');
		const releaseDate = document.getElementById('release-date');
		// Show the lock screen
		lockScreen.style.display = 'block';
		releaseDate.innerHTML = end.toLocaleString();
		// Replace the locked region by the lockscreen text
		const lockedRegion = document.getElementById('locked');
		lockedRegion.remove();
	}
})();
