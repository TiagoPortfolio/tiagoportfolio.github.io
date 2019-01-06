const CACHE_NAME = 'tiagoportfolio-v20';

// Register service worker
self.addEventListener('install', function (e) {
	self.skipWaiting();
	e.waitUntil(
		caches.open('CACHE_NAME').then(function (cache) {
			cache.addAll([
				'/',
				'/index.html',
				'/stylesheets/flickity.min.css',
				'/stylesheets/stylesheet.min.css',
				'/javascripts/jquery-3.3.1.min.js',
				'/javascripts/main.min.js',
				'/javascripts/flickity.pkgd.min.js',
				'/javascripts/lazysizes.min.js',
				'/images/grey_background.jpg',
				'/images/loading.gif',
				'/images/tiagosousa_mini.jpg',
				'/images/tiagosousa.jpg',
				'/images/skills/skills.png',
				'/images/skills/html.png',
				'/images/skills/css3.svg',
				'/images/skills/js.jpg',
				'/images/skills/php.png',
				'/images/skills/psql.png',
				'/images/skills/git.jpg',
				'/images/skills/fb.png',
				'/images/skills/googleplus.png',
				'/images/skills/paypal.jpg',
				'/images/skills/braintree.jpg',
				'/images/skills/shopify.png',
				'/images/skills/reactjs.svg',
				'/images/skills/nodejs.jpg',
				'/images/skills/sass.svg',
				'/images/projects/landing_page.jpg',
				'/images/projects/drumpad.png',
				'/images/projects/discord.svg',
			]);

			// CORS
			// let urlsToPrefetch = [
			// 	'https://platform.twitter.com/widgets.js',
			// 	'https://www.google-analytics.com/analytics.js'
			// ];
			// cache.addAll(urlsToPrefetch.map(function(urlToPrefetch) {
			//   return new Request(urlToPrefetch, { mode: 'no-cors' });
			// }));

			return;
		})
	);
});

// Update service worker
self.addEventListener('activate', event => {
	// delete any caches that aren't in expectedCaches
	event.waitUntil(
		caches.keys().then(keys => Promise.all(
			keys.map(key => {
				if (![CACHE_NAME].includes(key)) {
					return caches.delete(key);
				}
			})
		)).then(() => {
			console.log('New Service Worker version is now ready to handle fetches!');
		})
	);
});

// Get assets from cache
self.addEventListener('fetch', event => {
	console.log(event.request.url);
	event.respondWith(
		caches.match(event.request).then(response => {
			return response ||
				(event.request.cache === 'only-if-cached' && event.request.mode !== 'same-origin') ||
				fetch(event.request)
		})
	);
});

