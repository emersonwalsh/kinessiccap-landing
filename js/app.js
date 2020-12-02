AOS.init();

document.addEventListener('aos:in', ({ detail }) => {
	console.log('animated in', detail);
});
  
document.addEventListener('aos:out', ({ detail }) => {
	console.log('animated out', detail);
})

particlesJS('particles',
	{
		"particles": {
			"number": {
				"value": 65,
				"density": {
					"enable": true,
					"value_area": 800
				}
			},
			"color": {
				"value": "#ffffff"
			},
			"shape": {
				"type": "circle",
			},
			"opacity": {
				"value": 0.4,
				"random": false,
				// "anim": {
				// 	"enable": false,
				// 	"speed": 1,
				// 	"opacity_min": 0.1,
				// 	"sync": false
				// }
			},
			"size": {
				"value": 1,
				"random": false,
			},
			"line_linked": {
				"enable": true,
				"distance": 150,
				"color": "#ffffff",
				"opacity": 0.3,
				"width": 1
			},
			"move": {
				"enable": true,
				"speed": 2,
				"direction": "none",
				"random": false,
				"straight": false,
				"out_mode": "out",
			}
		},
		"interactivity": {
			"detect_on": "canvas",
			"events": {
				"onclick": {
					"enable": true,
					"mode": "push"
				},
				"resize": true
			},
			"modes": {
				"push": {
					"particles_nb": 4
				}
			}
		},
		"retina_detect": true,
	}
);