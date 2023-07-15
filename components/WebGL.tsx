export default function GL() {
  return (
    <>
      <div>
        <div id="particles-js" className="w-full h-[160px] absolute top-[-90px]" style={{ zIndex: "1"}}></div>
        <script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
        <script dangerouslySetInnerHTML={{ __html: `
  particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 80, 
        "density": {
          "enable": true,
          "value_area": 300 
        }
      },
      "color": {
        "value": "#000" 
      },
      "shape": {
        "type": "circle",  
        "stroke": {
          "width": 1.2,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        }
      },
      "opacity": {
        "value": 0.7,  
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 2.5,  
        "random": true,
        "anim": {
          "enable": false,
          "speed": 50,
          "size_min": 0.2,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 125, 
        "color": "#0f0f0f",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,  
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 200,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });` }}>
          
        </script>
      </div>
    </>
  );
}
